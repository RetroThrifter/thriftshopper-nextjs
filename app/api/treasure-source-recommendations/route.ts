import { NextRequest, NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseServiceKey =
  process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY

const supabase =
  supabaseUrl && supabaseServiceKey ? createClient(supabaseUrl, supabaseServiceKey) : null

const SOURCE_TYPES = [
  "thrift_shop",
  "nonprofit",
  "antique_store",
  "vintage_seller",
  "estate_sale_company",
  "collector",
  "local_business",
  "other",
] as const

function trimOrNull(value: unknown): string | null {
  if (value == null) return null
  const trimmed = String(value).trim()
  return trimmed.length > 0 ? trimmed : null
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function POST(request: NextRequest) {
  try {
    if (!supabase) {
      console.error("Missing Supabase environment variables")
      return NextResponse.json({ error: "Server configuration error" }, { status: 500 })
    }

    const body = await request.json()
    const { company } = body

    if (company) {
      return NextResponse.json({ success: true }, { status: 200 })
    }

    const source_name = trimOrNull(body.source_name)
    const source_type = trimOrNull(body.source_type)

    if (!source_name) {
      return NextResponse.json({ error: "Treasure source name is required" }, { status: 400 })
    }

    if (!source_type || !SOURCE_TYPES.includes(source_type as (typeof SOURCE_TYPES)[number])) {
      return NextResponse.json({ error: "Please select a valid source type" }, { status: 400 })
    }

    const contact_email = trimOrNull(body.contact_email)
    const referrer_email = trimOrNull(body.referrer_email)

    if (contact_email && !isValidEmail(contact_email)) {
      return NextResponse.json({ error: "Invalid contact email format" }, { status: 400 })
    }

    if (referrer_email && !isValidEmail(referrer_email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    const { error: supabaseError } = await supabase
      .from("treasure_source_recommendations")
      .insert({
        source_name,
        source_type,
        website_or_social: trimOrNull(body.website_or_social),
        location: trimOrNull(body.location),
        contact_name: trimOrNull(body.contact_name),
        contact_email,
        reason: trimOrNull(body.reason),
        referrer_name: trimOrNull(body.referrer_name),
        referrer_email,
        status: "new",
      })

    if (supabaseError) {
      console.error("Supabase error:", supabaseError)
      return NextResponse.json({ error: "Failed to save recommendation" }, { status: 500 })
    }

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error("Treasure source recommendation API error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
