"use client"

import { useEffect, useState, FormEvent } from "react"

const SOURCE_TYPE_OPTIONS = [
  { value: "thrift_shop", label: "Thrift shop" },
  { value: "nonprofit", label: "Nonprofit" },
  { value: "antique_store", label: "Antique store" },
  { value: "vintage_seller", label: "Vintage seller" },
  { value: "estate_sale_company", label: "Estate sale company" },
  { value: "collector", label: "Collector" },
  { value: "local_business", label: "Local business" },
  { value: "other", label: "Other" },
] as const

const INITIAL_FORM = {
  source_name: "",
  source_type: "",
  website_or_social: "",
  location: "",
  contact_name: "",
  contact_email: "",
  reason: "",
  referrer_name: "",
  referrer_email: "",
  company: "",
}

const inputClassName =
  "w-full px-3 py-2.5 border border-black/10 rounded-lg bg-white text-[#2A2A2A] text-sm focus:outline-none focus:ring-2 focus:ring-[#191970]/20 focus:border-[#191970]/30"
const labelClassName = "block text-sm font-medium text-[#2A2A2A] mb-1.5"

interface TreasureSourceRecommendModalProps {
  open: boolean
  onClose: () => void
}

export function TreasureSourceRecommendModal({ open, onClose }: TreasureSourceRecommendModalProps) {
  const [formData, setFormData] = useState(INITIAL_FORM)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!open) return

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose()
    }

    document.addEventListener("keydown", handleEscape)
    document.body.style.overflow = "hidden"

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = ""
    }
  }, [open, onClose])

  useEffect(() => {
    if (!open) {
      setFormData(INITIAL_FORM)
      setSuccess(false)
      setError(null)
      setIsSubmitting(false)
    }
  }, [open])

  if (!open) return null

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      const response = await fetch("/api/treasure-source-recommendations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error("submit_failed")
      }

      setSuccess(true)
    } catch {
      setError("Something went wrong. Please try again or email hello@thriftshopper.com.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="treasure-source-modal-title"
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/40"
        aria-label="Close form"
        onClick={onClose}
      />
      <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl border border-black/5 bg-[#fbf8f1] shadow-[0_20px_50px_rgba(22,25,58,0.18)]">
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-black/5 bg-[#fbf8f1] px-5 py-4">
          <h2
            id="treasure-source-modal-title"
            className="text-[clamp(18px,2.5vw,22px)] font-semibold text-[#191970]"
            style={{ lineHeight: "1.2" }}
          >
            Recommend a Seller
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full p-1.5 text-[#5A5A5A] transition-colors hover:bg-black/5 hover:text-[#191970]"
            aria-label="Close"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="px-5 py-5">
          {success ? (
            <div
              className="space-y-3 text-center text-[15px] leading-relaxed text-[#2A2A2A]"
              style={{ fontFamily: "'Source Sans 3', 'Source Sans Pro', sans-serif" }}
            >
              <p>Thank you — this is exactly how ThriftShopper grows.</p>
              <p>We&apos;ll take a look and, if it feels like a fit, reach out.</p>
              <button
                type="button"
                onClick={onClose}
                className="mt-4 inline-block rounded-full px-6 py-2.5 text-sm font-semibold text-white"
                style={{
                  backgroundColor: "#191970",
                  fontFamily: "'Source Sans 3', 'Source Sans Pro', sans-serif",
                }}
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p
                className="text-sm leading-relaxed text-[#5A5A5A]"
                style={{ fontFamily: "'Source Sans 3', 'Source Sans Pro', sans-serif" }}
              >
                Know a place with great inventory? Share a few details and we&apos;ll take it from
                there.
              </p>

              <div>
                <label htmlFor="source_name" className={labelClassName}>
                  Treasure source name <span className="text-[#191970]">*</span>
                </label>
                <input
                  id="source_name"
                  name="source_name"
                  type="text"
                  required
                  value={formData.source_name}
                  onChange={handleChange}
                  className={inputClassName}
                  style={{ fontFamily: "'Source Sans 3', 'Source Sans Pro', sans-serif" }}
                />
              </div>

              <div>
                <label htmlFor="source_type" className={labelClassName}>
                  Type of source
                </label>
                <select
                  id="source_type"
                  name="source_type"
                  required
                  value={formData.source_type}
                  onChange={handleChange}
                  className={inputClassName}
                  style={{ fontFamily: "'Source Sans 3', 'Source Sans Pro', sans-serif" }}
                >
                  <option value="" disabled>
                    Select one
                  </option>
                  {SOURCE_TYPE_OPTIONS.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="website_or_social" className={labelClassName}>
                  Website / Instagram / Facebook
                </label>
                <input
                  id="website_or_social"
                  name="website_or_social"
                  type="text"
                  value={formData.website_or_social}
                  onChange={handleChange}
                  className={inputClassName}
                  style={{ fontFamily: "'Source Sans 3', 'Source Sans Pro', sans-serif" }}
                />
              </div>

              <div>
                <label htmlFor="location" className={labelClassName}>
                  Location
                </label>
                <input
                  id="location"
                  name="location"
                  type="text"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="City, state, or neighborhood"
                  className={inputClassName}
                  style={{ fontFamily: "'Source Sans 3', 'Source Sans Pro', sans-serif" }}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact_name" className={labelClassName}>
                    Contact name
                  </label>
                  <input
                    id="contact_name"
                    name="contact_name"
                    type="text"
                    value={formData.contact_name}
                    onChange={handleChange}
                    className={inputClassName}
                    style={{ fontFamily: "'Source Sans 3', 'Source Sans Pro', sans-serif" }}
                  />
                </div>
                <div>
                  <label htmlFor="contact_email" className={labelClassName}>
                    Contact email
                  </label>
                  <input
                    id="contact_email"
                    name="contact_email"
                    type="email"
                    value={formData.contact_email}
                    onChange={handleChange}
                    className={inputClassName}
                    style={{ fontFamily: "'Source Sans 3', 'Source Sans Pro', sans-serif" }}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="reason" className={labelClassName}>
                  Why would they be a good fit?
                </label>
                <textarea
                  id="reason"
                  name="reason"
                  rows={3}
                  value={formData.reason}
                  onChange={handleChange}
                  className={`${inputClassName} resize-y min-h-[88px]`}
                  style={{ fontFamily: "'Source Sans 3', 'Source Sans Pro', sans-serif" }}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="referrer_name" className={labelClassName}>
                    Your name
                  </label>
                  <input
                    id="referrer_name"
                    name="referrer_name"
                    type="text"
                    value={formData.referrer_name}
                    onChange={handleChange}
                    className={inputClassName}
                    style={{ fontFamily: "'Source Sans 3', 'Source Sans Pro', sans-serif" }}
                  />
                </div>
                <div>
                  <label htmlFor="referrer_email" className={labelClassName}>
                    Your email
                  </label>
                  <input
                    id="referrer_email"
                    name="referrer_email"
                    type="email"
                    value={formData.referrer_email}
                    onChange={handleChange}
                    className={inputClassName}
                    style={{ fontFamily: "'Source Sans 3', 'Source Sans Pro', sans-serif" }}
                  />
                </div>
              </div>

              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                style={{ display: "none" }}
                tabIndex={-1}
                autoComplete="off"
              />

              {error && (
                <p
                  className="rounded-lg border border-red-200 bg-red-50 px-3 py-2.5 text-sm text-red-800"
                  style={{ fontFamily: "'Source Sans 3', 'Source Sans Pro', sans-serif" }}
                >
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-full px-6 py-3 text-sm font-semibold text-white transition-opacity disabled:opacity-60"
                style={{
                  backgroundColor: "#191970",
                  fontFamily: "'Source Sans 3', 'Source Sans Pro', sans-serif",
                }}
              >
                {isSubmitting ? "Sending..." : "Send Recommendation"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
