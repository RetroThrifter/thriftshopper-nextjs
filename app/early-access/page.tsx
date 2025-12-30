"use client"

import Link from "next/link"

export default function EarlyAccessLandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section - Conversion Focused */}
      <section className="pt-16 pb-12 md:pt-24 md:pb-16">
        <div className="w-full max-w-[560px] mx-auto px-6 text-center">
          {/* Brand Lockup */}
          <div className="flex flex-col items-center mb-8">
            <h1
              className="ts-masthead leading-none mb-3"
              style={{
                fontSize: "clamp(48px, 6vw, 72px)",
              }}
            >
              ThriftShopper
            </h1>
            <p
              className="mt-2"
              style={{
                fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif",
                fontSize: "clamp(16px, 2vw, 20px)",
                fontStyle: "italic",
                color: "#EFBF04",
              }}
            >
              the magic of discovery<span className="text-xs align-super">™</span>
            </p>
          </div>

          {/* Headline - Large type, three lines - 50% larger than homepage */}
          <h2
            className="text-[clamp(42px, 6.45vw, 63px)] leading-[1.1] text-[#191970] mb-6 max-w-[24ch] mx-auto"
            style={{
              letterSpacing: "-0.01em",
              fontSize: "clamp(42px, 6.45vw, 63px)",
            }}
          >
            Join Early Access.
            <br />
            Discover One-of-a-Kind Treasures.
            <br />
            Not Endless Listings.
          </h2>

          {/* Primary CTA - Prominent */}
          <div className="flex flex-col items-center gap-4 mb-6">
            <Link
              href="/join"
              className="inline-block px-8 py-4 rounded-lg text-lg font-semibold text-white shadow-lg hover:opacity-90 transition-opacity"
              style={{
                backgroundColor: "#191970",
                fontFamily: "'Source Sans 3', 'Source Sans Pro', sans-serif",
              }}
            >
              Join the Waitlist
            </Link>
            <p
              className="text-sm text-[#6B6B6B]"
              style={{
                fontFamily: "'Source Sans 3', 'Source Sans Pro', sans-serif",
              }}
            >
              Beta launching soon! Free to join.
            </p>
          </div>
        </div>
      </section>

      {/* Minimal "How it Works" - Just 3 bullets */}
      <section className="py-12 md:py-16 bg-muted/20">
        <div className="max-w-3xl mx-auto px-6">
          <h3
            className="text-2xl md:text-3xl font-serif font-bold mb-8 text-center"
            style={{ color: "#191970" }}
          >
            How It Works
          </h3>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="text-center">
              <h4
                className="text-lg font-semibold mb-2"
                style={{ color: "#191970" }}
              >
                Discovery, Not Search
              </h4>
              <p className="text-sm text-muted-foreground">
                Let your curiosity guide you through one-of-a-kind finds.
              </p>
            </div>
            <div className="text-center">
              <h4
                className="text-lg font-semibold mb-2"
                style={{ color: "#191970" }}
              >
                Smart Matching
              </h4>
              <p className="text-sm text-muted-foreground">
                Your mood and vibe guides what you see.
              </p>
            </div>
            <div className="text-center">
              <h4
                className="text-lg font-semibold mb-2"
                style={{ color: "#191970" }}
              >
                Stories You Can Trust
              </h4>
              <p className="text-sm text-muted-foreground">
                Every item has a story and a new chapter waiting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 md:py-16">
        <div className="max-w-xl mx-auto px-6 text-center">
          <h3
            className="text-2xl md:text-3xl font-serif font-bold mb-4"
            style={{ color: "#191970" }}
          >
            Ready to discover?
          </h3>
          <Link
            href="/join"
            className="inline-block px-8 py-4 rounded-lg text-lg font-semibold text-white shadow-lg hover:opacity-90 transition-opacity mt-6"
            style={{
              backgroundColor: "#191970",
              fontFamily: "'Source Sans 3', 'Source Sans Pro', sans-serif",
            }}
          >
            Join the Waitlist
          </Link>
        </div>
      </section>
    </div>
  )
}

