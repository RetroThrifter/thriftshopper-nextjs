"use client"

import Link from "next/link"

export default function ForSellersPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 mb-0">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h1
              className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold mb-8 text-balance"
              style={{ color: "#000080" }}
            >
              Your treasures deserve someone who'll love them.
            </h1>
            <Link
              href="/join"
              className="inline-block text-lg px-8 py-6 rounded-lg font-semibold text-white"
              style={{ backgroundColor: "#4cbb17" }}
            >
              Join the Network of Beta Sellers!
            </Link>
          </div>
        </div>
      </section>

      {/* Body Copy Sections */}
      <section className="py-3 px-8 md:px-12">
        <div className="container mx-auto max-w-6xl">
          {/* List in seconds. Zero hassle. */}
          <div className="mb-0">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6" style={{ color: "#000080" }}>
              List in seconds. Zero hassle.
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Upload a photo and, if you want, our AI does the rest: cleans up the image, writes the description, and suggests a fair price based on real market data. You can be live in under 10 seconds.
            </p>
          </div>
        </div>
      </section>

      {/* Concierge callout (contained, not full-width) */}
      <section className="py-3 px-8 md:px-12">
        <div className="container mx-auto max-w-6xl">
          <div className="rounded-2xl border border-[#0B1B4D]/15 bg-white shadow-sm px-5 sm:px-6 py-4 text-center max-w-[480px] mx-auto">
            <p className="text-xs uppercase tracking-widest text-gray-500">
              Prefer a simpler option?
            </p>

            <h3 className="mt-2 font-serif text-xl sm:text-2xl text-[#0B1B4D]">
              Concierge Selling
            </h3>

            <p className="mt-2 text-sm text-[#1F1F1F]/70">
              We handle the listing, pricing, and details — you stay in control.
            </p>

            <div className="mt-4">
              <Link
                href="/concierge"
                className="inline-flex items-center justify-center rounded-lg border border-[#0B1B4D] px-4 py-2 text-xs font-medium text-[#0B1B4D] hover:bg-[#0B1B4D] hover:text-white transition"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Body Copy Sections Continued */}
      <section className="py-3 px-8 md:px-12">
        <div className="container mx-auto max-w-6xl">
          {/* Keep more of what you earn. */}
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6" style={{ color: "#000080" }}>
              Keep more of what you earn.
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Low selling fees because we're a co-op, not a corporation. When you sell, you can choose to become a
              member-owner. The platform succeeds when you succeed. Founding partners pay no fees for six months. Reach out to learn more.
            </p>
          </div>

          {/* People who care. */}
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6" style={{ color: "#000080" }}>
              People who care.
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Your buyers aren't just shoppers—they're collectors, curators, and people who appreciate the story behind
              each piece. When someone messages you, it's because they want to know more, not haggle less.
            </p>
          </div>

          {/* You set the price. We back you up. */}
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6" style={{ color: "#000080" }}>
              You set the price. We back you up.
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Our pricing tools give you confidence, but you're always in control. If a buyer reaches out, it's to
              connect and appreciate, not to negotiate you down. This is a marketplace built on trust and fair value
              from the start.
            </p>
          </div>

          {/* Become part of something different. */}
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6" style={{ color: "#000080" }}>
              Become part of something different.
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              This isn't another faceless platform. It's a community of people who believe beautiful objects deserve
              beautiful journeys. And as a co-op member, you own a piece of that future.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#000080] text-white py-12">
        <div className="max-w-7xl mx-auto px-[10px] md:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-serif font-bold mb-2">ThriftShopper</h3>
              <p className="text-sm opacity-90">the magic of discovery™</p>
            </div>
            <div className="flex flex-wrap gap-6 text-sm">
              <a href="/blog" className="hover:opacity-80 transition-opacity">
                Blog
              </a>
              <a href="/our-story" className="hover:opacity-80 transition-opacity">
                Our Story
              </a>
              <a href="/about" className="hover:opacity-80 transition-opacity">
                About Us
              </a>
              <a href="/ai-environment" className="hover:opacity-80 transition-opacity">
                AI and Environment
              </a>
              <button
                onClick={() => {
                  const contactFormUrl = process.env.NEXT_PUBLIC_CONTACT_FORM_URL || "#"
                  window.open(contactFormUrl, "_blank")
                }}
                className="hover:opacity-80 transition-opacity cursor-pointer"
              >
                Contact
              </button>
              <a href="/marketplace-focus" className="hover:opacity-80 transition-opacity">
                Our Marketplace Focus
              </a>
              <a href="/privacy" className="hover:opacity-80 transition-opacity">
                Privacy
              </a>
              <a href="/terms" className="hover:opacity-80 transition-opacity">
                Terms
              </a>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center">
            <p className="text-sm opacity-90">&copy; 2025 ThriftShopper. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
