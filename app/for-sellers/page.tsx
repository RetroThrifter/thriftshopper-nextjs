"use client"

import { Button } from "@/components/ui/button"

export default function ForSellersPage() {
  const airtableFormUrl = process.env.NEXT_PUBLIC_AIRTABLE_FORM_URL || "#"

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-[10px] md:px-6 lg:px-8">
          <div className="flex flex-col ml-2 md:ml-8 min-w-0 flex-1">
            <a
              href="/"
              className="text-lg md:text-2xl font-serif font-bold truncate hover:opacity-80"
              style={{ color: "#000080" }}
            >
              ThriftShopper
            </a>
            <p className="text-xs font-sans hidden sm:block" style={{ color: "#DAA520" }}>
              the magic of discovery™
            </p>
          </div>
          <div className="flex items-center gap-2 md:gap-4 flex-shrink-0">
            <Button
              variant="outline"
              size="sm"
              className="text-sm md:text-base px-3 md:px-4 bg-transparent"
              onClick={() => (window.location.href = "/")}
            >
              Home
            </Button>
            <Button
              variant="default"
              size="sm"
              className="text-sm md:text-base px-3 md:px-4"
              onClick={() => window.open(airtableFormUrl, "_blank")}
            >
              <span className="hidden sm:inline">Join the Network</span>
              <span className="sm:hidden">Join</span>
            </Button>
          </div>
        </div>
      </header>

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
            <Button
              size="lg"
              className="text-lg px-8 py-6"
              style={{ backgroundColor: "#4cbb17" }}
              onClick={() => window.open(airtableFormUrl, "_blank")}
            >
              Join the Network of Beta Sellers!
            </Button>
          </div>
        </div>
      </section>

      {/* Body Copy Sections */}
      <section className="py-3 px-8 md:px-12">
        <div className="container mx-auto max-w-6xl">
          {/* List in seconds. Zero hassle. */}
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6" style={{ color: "#000080" }}>
              List in seconds. Zero hassle.
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Upload a photo, and our AI does the rest if you'd like: removes or enhances the background, writes the
              description, suggests the right price based on real market data. You're live in under 5 seconds.
            </p>
          </div>

          {/* Keep more of what you earn. */}
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6" style={{ color: "#000080" }}>
              Keep more of what you earn.
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Just 4% fees because we're a co-op, not a corporation. When you sell, you can choose to become a
              member-owner. The platform succeeds when you succeed.{" "}
              <strong>*Founding partners pay no fees for six months.</strong> Email me to find out more.
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
