"use client"

import { Button } from "@/components/ui/button"

export default function ForBuyersPage() {
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
          <div className="max-w-4xl mx-auto">
            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-8 text-balance"
              style={{ color: "#000080" }}
            >
              Discover Joy,
              <br />
              Not Just Stuff.
            </h1>
            <Button
              size="lg"
              className="text-lg px-8 py-6"
              style={{ backgroundColor: "#4cbb17" }}
              onClick={() => window.open(airtableFormUrl, "_blank")}
            >
              Join the Network -- It's Free
            </Button>
          </div>
        </div>
      </section>

      <section className="py-3 px-8 md:px-12">
        <div className="container mx-auto max-w-6xl">
          {/* Discovery that feels like magic */}
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6" style={{ color: "#000080" }}>
              Discovery that feels like magic.
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Swipe through curated finds. Use your voice to search by mood or style. Every piece is one-of-a-kind, and
              every piece is priced fairly by AI—so when you find something you love, you can trust it and act on it.
            </p>
          </div>

          {/* Connect with the story */}
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6" style={{ color: "#000080" }}>
              Connect with the story.
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Want to know where that mid-century lamp came from? Curious about the history of that vintage poster?
              Message the seller. These aren't just transactions—they're connections between people who appreciate
              beautiful, meaningful things.
            </p>
          </div>

          {/* Save what speaks to you */}
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6" style={{ color: "#000080" }}>
              Save what speaks to you.
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Create boards of your favorites. Not to wait and watch (these pieces won't be here tomorrow), but to teach
              our AI what you love. The more you save, the better we get at surfacing discoveries that feel made for
              you.
            </p>
          </div>

          {/* Own the platform you love */}
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6" style={{ color: "#000080" }}>
              Own the platform you love.
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              As a member of our co-op community, you're not just a customer—you're part of something bigger. Low fees
              (just 4%), fair prices, and a marketplace built on trust and appreciation.
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
