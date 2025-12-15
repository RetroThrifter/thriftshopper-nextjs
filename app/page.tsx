"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function HomePage() {
  const airtableFormUrl = process.env.NEXT_PUBLIC_AIRTABLE_FORM_URL || "#"
  const contactFormUrl = process.env.NEXT_PUBLIC_CONTACT_FORM_URL || "#"

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-[10px] md:px-6 lg:px-8">
          <div className="flex flex-col ml-2 md:ml-8 min-w-0 flex-1">
            <h1 className="text-lg md:text-2xl font-serif font-bold truncate" style={{ color: "#000080" }}>
              ThriftShopper
            </h1>
            <p className="text-xs font-sans hidden sm:block" style={{ color: "#DAA520" }}>
              the magic of discovery™
            </p>
          </div>
          <div className="flex items-center gap-2 md:gap-4 flex-shrink-0">
            <Button
              variant="outline"
              size="sm"
              className="text-sm md:text-base px-3 md:px-4 bg-transparent"
              onClick={() => (window.location.href = "/for-sellers")}
            >
              For Sellers
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="text-sm md:text-base px-3 md:px-4 bg-transparent"
              onClick={() => (window.location.href = "/for-buyers")}
            >
              For Buyers
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="text-sm md:text-base px-3 md:px-4 bg-transparent"
              onClick={() => (window.location.href = "/our-story")}
            >
              Our Story
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="text-sm md:text-base px-3 md:px-4 bg-transparent"
              onClick={() => (window.location.href = "/blog")}
            >
              Blog
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-8 md:py-11 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-2" style={{ color: "#000080" }}>
              ThriftShopper
            </h1>
            <p className="text-lg md:text-2xl font-serif italic mb-8 tracking-tight" style={{ color: "#DAA520" }}>
              the magic of discovery<span className="text-xs md:text-sm align-super">™</span>
            </p>
            <p className="text-xl text-muted-foreground mb-2 max-w-2xl mx-auto font-semibold">
              Every treasure has a story. Find yours.
            </p>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Discover one-of-a-kind pieces where the magic isn't just what you find, it's the human connection behind
              it. Welcome to recommerce that feels like coming home.
            </p>
            <div className="flex flex-col items-center gap-4">
              <a
                href={airtableFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: "#000080",
                  color: "#fff",
                  padding: "0.75rem 1.5rem",
                  borderRadius: "6px",
                  fontFamily: "'Source Sans Pro', sans-serif",
                  fontWeight: 600,
                  textDecoration: "none",
                  display: "inline-block",
                }}
              >
                Join the Network
              </a>
              <p
                style={{
                  marginTop: "0.5rem",
                  fontSize: "1rem",
                  color: "#000080",
                  fontFamily: "'Source Sans Pro', sans-serif",
                  fontWeight: "bold",
                }}
              >
                It's free to join. Beta launch coming in January.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-11 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-serif font-bold text-center mb-8" style={{ color: "#000080" }}>
            How ThriftShopper Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card>
              <CardContent className="p-8 text-center">
                <svg
                  className="w-12 h-12 mx-auto mb-4 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="6" />
                  <circle cx="12" cy="12" r="2" />
                </svg>
                <h3 className="text-xl font-serif font-semibold mb-4">Smart Matching</h3>
                <p className="text-muted-foreground">
                  Our AI connects buyers with sellers based on preferences, location, and behavioral patterns for
                  perfect matches.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-8 text-center">
                <svg
                  className="w-12 h-12 mx-auto mb-4 text-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2" />
                </svg>
                <h3 className="text-xl font-serif font-semibold mb-4">Perfect Discoveries</h3>
                <p className="text-muted-foreground">
                  Get personalized notifications how and when you want about items that match your style and surprise
                  you on occasion.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-8 text-center">
                <svg
                  className="w-12 h-12 mx-auto mb-4 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" />
                  <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" />
                </svg>
                <h3 className="text-xl font-serif font-semibold mb-4">AI Learning</h3>
                <p className="text-muted-foreground">
                  Our multi-agent system utilizes information about browsing patterns, predicts when and how items are
                  bought or sold and uncovers both the most unusual finds.
                </p>
              </CardContent>
            </Card>
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
              <a href="/about" className="hover:opacity-80 transition-opacity">
                About Us
              </a>
              <a href="/blog" className="hover:opacity-80 transition-opacity">
                Blog
              </a>
              <button
                onClick={() => window.open(contactFormUrl, "_blank")}
                className="hover:opacity-80 transition-opacity cursor-pointer"
              >
                Contact
              </button>
              <a href="/ai-environment" className="hover:opacity-80 transition-opacity">
                AI and Environment
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
