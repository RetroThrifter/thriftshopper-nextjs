"use client"

import { useState, FormEvent, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface WaitlistFormProps {
  onSuccess?: () => void
  className?: string
}

export function WaitlistForm({ onSuccess, className }: WaitlistFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    role_interest: "buyer",
    zipcode: "",
    early_beta_opt_in: false,
  })
  const [utmParams, setUtmParams] = useState({
    utm_source: null as string | null,
    utm_medium: null as string | null,
    utm_campaign: null as string | null,
    utm_content: null as string | null,
    utm_term: null as string | null,
  })

  // Capture UTM parameters from URL on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search)
      setUtmParams({
        utm_source: params.get("utm_source"),
        utm_medium: params.get("utm_medium"),
        utm_campaign: params.get("utm_campaign"),
        utm_content: params.get("utm_content"),
        utm_term: params.get("utm_term"),
      })
    }
  }, [])

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          ...utmParams,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit form")
      }

      setSuccess(true)
      
      // Clear form
      setFormData({
        first_name: "",
        last_name: "",
        email: "",
        role_interest: "buyer",
        zipcode: "",
        early_beta_opt_in: false,
      })

      // Call onSuccess callback if provided
      if (onSuccess) {
        onSuccess()
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  if (success) {
    return (
      <div className={`text-center p-6 ${className}`}>
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
          <svg
            className="w-8 h-8 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-xl font-semibold mb-2">You're in!</h3>
        <p className="text-muted-foreground">
          Thanks for joining the ThriftShopper network. We'll keep you updated!
        </p>
        <div className="mt-6 flex justify-center">
          <Link
            href="/"
            className="
              inline-flex items-center justify-center
              rounded-md
              border border-[#1F2A7A]
              px-5 py-2
              text-sm font-medium
              text-[#1F2A7A]
              hover:bg-[#1F2A7A]/5
              transition
            "
          >
            Back to ThriftShopper
          </Link>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="first_name"
            className="block text-sm font-medium mb-1.5"
          >
            First Name
          </label>
          <input
            id="first_name"
            name="first_name"
            type="text"
            value={formData.first_name}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          />
        </div>
        <div>
          <label
            htmlFor="last_name"
            className="block text-sm font-medium mb-1.5"
          >
            Last Name
          </label>
          <input
            id="last_name"
            name="last_name"
            type="text"
            value={formData.last_name}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1.5">
          Email <span className="text-destructive">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        />
      </div>

      <div>
        <label
          htmlFor="role_interest"
          className="block text-sm font-medium mb-1.5"
        >
          Are you joining as a buyer, a seller, or both? <span className="text-destructive">*</span>
        </label>
        <select
          id="role_interest"
          name="role_interest"
          required
          value={formData.role_interest}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        >
          <option value="buyer">Buyer</option>
          <option value="seller">Seller</option>
          <option value="both">Both</option>
        </select>
      </div>

      <div>
        <label htmlFor="zipcode" className="block text-sm font-medium mb-1.5">
          Zipcode
        </label>
        <input
          id="zipcode"
          name="zipcode"
          type="text"
          value={formData.zipcode}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        />
      </div>

      <div className="mt-4 flex items-start gap-2">
        <input
          type="checkbox"
          id="early_beta_opt_in"
          name="early_beta_opt_in"
          checked={formData.early_beta_opt_in}
          onChange={handleChange}
          className="mt-1 h-4 w-4 rounded border-gray-300 text-[#000080] focus:ring-[#000080]"
        />
        <label
          htmlFor="early_beta_opt_in"
          className="text-sm text-[#4A4A4A]"
        >
          I&apos;d love to be an early beta tester.
        </label>
      </div>

      {error && (
        <div className="p-3 text-sm text-destructive bg-destructive/10 border border-destructive/20 rounded-md">
          {error}
        </div>
      )}

      <Button
        type="submit"
        className="w-full"
        disabled={isSubmitting}
        style={{ backgroundColor: "#000080" }}
      >
        {isSubmitting ? "Submitting..." : "Join the Network"}
      </Button>

      <div className="text-center mt-4">
        <Link
          href="/"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          Return to the homepage
        </Link>
      </div>
    </form>
  )
}

