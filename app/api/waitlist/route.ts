import { NextRequest, NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"

// Use server-side only env vars (more secure) with fallback to public for backwards compatibility
const supabaseUrl = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY

const supabase =
  supabaseUrl && supabaseServiceKey ? createClient(supabaseUrl, supabaseServiceKey) : null

export async function POST(request: NextRequest) {
  try {
    if (!supabase) {
      console.error("Missing Supabase environment variables")
      return NextResponse.json(
        { error: "Server configuration error (Supabase env vars missing)" },
        { status: 500 }
      )
    }

    const body = await request.json()
    const { first_name, last_name, email, role_interest, zipcode, early_beta_opt_in, company } = body

    // Honeypot check - if company field has any value, silently return success
    if (company) {
      return NextResponse.json(
        { success: true, message: "Successfully signed up for the waitlist" },
        { status: 200 }
      )
    }

    if (!email || !role_interest) {
      return NextResponse.json({ error: "Email and role_interest are required" }, { status: 400 })
    }

    if (!["buyer", "seller", "both"].includes(role_interest)) {
      return NextResponse.json(
        { error: "role_interest must be one of: buyer, seller, both" },
        { status: 400 }
      )
    }

    const trimmedEmail = String(email).trim().toLowerCase()
    const trimmedFirstName = first_name ? String(first_name).trim() : null
    const trimmedLastName = last_name ? String(last_name).trim() : null
    const trimmedZipcode = zipcode ? String(zipcode).trim() : null

    console.log("WAITLIST API HIT", trimmedEmail)

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(trimmedEmail)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    // Postal validation function
    function isValidPostal(input: string) {
      const s = (input ?? "").trim();
      const zip = /^\d{5}(-\d{4})?$/.test(s);
      const state = /^[A-Za-z]{2}$/.test(s);
      const intl = /^[A-Za-z0-9][A-Za-z0-9 -]{1,10}[A-Za-z0-9]$/.test(s);
      return zip || state || intl;
    }

    // Validate zipcode before insert
    if (trimmedZipcode && !isValidPostal(trimmedZipcode)) {
      return NextResponse.json(
        { error: "Please enter a valid zipcode or postal code" },
        { status: 400 }
      )
    }

    // PRIMARY: Supabase
    const { error: supabaseError } = await supabase
      .from("waitlist_signups")
      .upsert(
        {
          email: trimmedEmail,
          first_name: trimmedFirstName,
          last_name: trimmedLastName,
          role_interest,
          zipcode: trimmedZipcode,
          early_beta_opt_in: early_beta_opt_in || false,
          source: "website",
          country: null,
          notes: null,
        },
        { onConflict: "email" }
      )

    if (supabaseError) {
      console.error("Supabase error:", supabaseError)
      return NextResponse.json(
        { error: "Failed to save signup. Please try again." },
        { status: 500 }
      )
    }

    // SECONDARY: Airtable webhook (optional)
    const airtableWebhookUrl = process.env.AIRTABLE_WEBHOOK_URL
    if (airtableWebhookUrl) {
      fetch(airtableWebhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          first_name: trimmedFirstName,
          last_name: trimmedLastName,
          email: trimmedEmail,
          role_interest,
          zipcode: trimmedZipcode,
          early_beta_opt_in: early_beta_opt_in || false,
        }),
      }).catch((err) => console.error("Airtable webhook error:", err))
    }
    // SECONDARY: Google Sheets webhook (optional)
    const googleSheetWebhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL
    console.log("Sheets URL present?", Boolean(process.env.GOOGLE_SHEET_WEBHOOK_URL))
    console.log("Sheets URL value:", googleSheetWebhookUrl ? `${googleSheetWebhookUrl.substring(0, 50)}...` : "NOT SET")
    
    if (googleSheetWebhookUrl) {
      try {
        console.log("Attempting to call Google Sheets webhook...")
        // Google Apps Script webhooks typically expect form data
        const formData = new URLSearchParams({
          timestamp: new Date().toISOString(),
          email: trimmedEmail,
          first_name: trimmedFirstName || "",
          last_name: trimmedLastName || "",
          role_interest: role_interest,
          zipcode: trimmedZipcode || "",
          early_beta_opt_in: early_beta_opt_in ? "yes" : "no",
          source: "website",
          page: body.page || "/",
        })

        console.log("Form data prepared, making fetch request...")
        const response = await fetch(googleSheetWebhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: formData.toString(),
        })

        const responseText = await response.text()
        console.log("Google Sheets webhook - Response status:", response.status)
        console.log("Google Sheets webhook - Response text:", responseText)
      } catch (err) {
        console.error("Google Sheets webhook error:", err)
        // Do NOT fail the waitlist request if Sheets fails
      }
    } else {
      console.log("GOOGLE_SHEET_WEBHOOK_URL is not set - skipping Sheets webhook")
    }

    return NextResponse.json(
      { success: true, message: "Successfully signed up for the waitlist" },
      { status: 200 }
    )
  } catch (error) {
    console.error("Waitlist API error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
