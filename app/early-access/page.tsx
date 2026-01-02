"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"


export default function EarlyAccessPage() {
  const [showFloatingButton, setShowFloatingButton] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling past ~400px (past the hero section)
      setShowFloatingButton(window.scrollY > 400)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Hero Section */}
      <section className="pt-12 pb-10 md:pt-16 md:pb-12">
        <div className="w-full max-w-[420px] md:max-w-[560px] mx-auto px-6">
          <div className="flex flex-col items-center gap-5 md:gap-6 text-center">
            {/* Brand Lockup */}
            <div className="flex flex-col items-center">
              <h1
                className="ts-masthead leading-none"
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
            
            {/* Headline */}
            <h2 
              className="text-[clamp(17px,2.6vw,25.5px)] leading-[1.1] text-[#191970] max-w-[30ch]"
              style={{ 
                letterSpacing: "-0.01em"
              }}
            >
              Discover One-of-a-Kind Treasures.
              <br />
              Not Endless Listings.
            </h2>
            
            {/* CTA Group */}
            <div className="flex flex-col items-center">
              <Link
                href="/join"
                className="inline-block mb-3"
                style={{
                  backgroundColor: "#191970",
                  color: "#fff",
                  padding: "14px 32px",
                  borderRadius: "8px",
                  fontFamily: "'Source Sans 3', 'Source Sans Pro', sans-serif",
                  fontWeight: 600,
                  fontSize: "16px",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                Join Early Access
              </Link>
              <p
                style={{
                  fontSize: "14px",
                  color: "#6B6B6B",
                  fontFamily: "'Source Sans 3', 'Source Sans Pro', sans-serif",
                  fontWeight: 400,
                }}
              >
                Beta launching soon! Free to join.
              </p>
            </div>
            
            {/* Discovery-First Tagline */}
            <p
              className="mt-4 text-center"
              style={{
                fontSize: "clamp(17px, 2.6vw, 25.5px)",
                color: "#191970",
                fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif",
                fontWeight: 500,
                letterSpacing: "-0.01em",
              }}
            >
              A Discovery-First Secondhand Marketplace
            </p>
            
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="pt-2 pb-9 md:pt-6 md:pb-14">
        <div className="w-full max-w-[48rem] mx-auto px-6">
          {/* Section Title */}
          <h2
            className="text-center mb-10 md:mb-12"
            style={{
              fontSize: "clamp(24px, 3vw, 32px)",
              fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif",
              fontWeight: 600,
              color: "#191970",
            }}
          >
            How It Works
          </h2>

          {/* Cards Grid */}
          <div className="mb-6 sm:mb-8">
            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              {/* Card 1 */}
              <div className="bg-muted/30 border border-border rounded-xl p-6 md:p-8 shadow-[0_10px_30px_rgba(24,25,112,0.06)]">
                <div className="relative w-full h-36 md:h-44 lg:h-52 mb-3 rounded-lg overflow-hidden bg-[#fbf8f1] ring-1 ring-[#EFBF04]/25">
                  <Image
                    src="/images/how-it-works/smart-matching.png"
                    alt="Discovery, Not Search"
                    fill
                    className="object-cover opacity-75"
                  />
                </div>
                <h3 className="mb-3" style={{ fontSize: "clamp(20px, 2.5vw, 24px)", fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontWeight: 600, color: "#191970" }}>
                  Discovery, Not Search
                </h3>
                <p className="text-base leading-relaxed" style={{ color: "#4A4A4A", fontFamily: "'Source Sans 3', 'Source Sans Pro', sans-serif" }}>
                  Secondhand shopping is about stumbling upon something that feels right, not searching for a particular thing. ThriftShopper is built for discovery, letting your curiosity and vibe guide you.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-muted/30 border border-border rounded-xl p-6 md:p-8 lg:-translate-y-2 lg:scale-[1.04] lg:shadow-lg lg:z-10 transition-transform shadow-[0_10px_30px_rgba(24,25,112,0.06)] ring-1 ring-[#EFBF04]/35">
                <div className="relative w-full h-36 md:h-44 lg:h-52 mb-3 rounded-lg overflow-hidden bg-[#fbf8f1] ring-1 ring-[#EFBF04]/25">
                  <Image
                    src="/images/how-it-works/perfect-discoveries.png"
                    alt="Smart Matching"
                    fill
                    className="object-cover opacity-75"
                  />
                </div>
                <h3 className="mb-3" style={{ fontSize: "clamp(20px, 2.5vw, 24px)", fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontWeight: 600, color: "#191970" }}>
                  Smart Matching
                </h3>
                <p className="text-base leading-relaxed" style={{ color: "#4A4A4A", fontFamily: "'Source Sans 3', 'Source Sans Pro', sans-serif" }}>
                  ThriftShopper listens. Your mood and vibe guides what you see. Swipe up through treasures, stop when something catches your eye or fine tune your request with voice or mood wheel inputs.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-muted/30 border border-border rounded-xl p-6 md:p-8 shadow-[0_10px_30px_rgba(24,25,112,0.06)]">
                <div className="relative w-full h-36 md:h-44 lg:h-52 mb-3 rounded-lg overflow-hidden bg-[#fbf8f1] ring-1 ring-[#EFBF04]/25">
                  <Image
                    src="/images/how-it-works/ai-learning.png"
                    alt="Stories You Can Trust"
                    fill
                    className="object-cover opacity-75"
                  />
                </div>
                <h3 className="mb-3" style={{ fontSize: "clamp(20px, 2.5vw, 24px)", fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontWeight: 600, color: "#191970" }}>
                  Stories You Can Trust
                </h3>
                <p className="text-base leading-relaxed" style={{ color: "#4A4A4A", fontFamily: "'Source Sans 3', 'Source Sans Pro', sans-serif" }}>
                  Every item has a story and a new chapter waiting to be written. We help buyers feel confident saying yes, and sellers feel confident listing, by making it easier to share context, care, and story.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Quote & Early Beta CTA Section */}
      <section className="pb-12 md:pb-16 px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="mx-auto mt-10 sm:mt-12 max-w-[420px] rounded-xl bg-[#F7F4EF]/60 px-6 py-8 shadow-sm">
          <p
            className="text-center"
            style={{
              fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif",
              fontSize: "16px",
              fontStyle: "italic",
              lineHeight: "1.6",
              color: "#191970",
            }}
          >
            &quot;Exactly the kind of place to find vintage treasures I love. It feels like a Pinterest board you can shop — but with real stories behind it&quot;
          </p>
          <p className="mt-4 text-center text-xs text-muted-foreground" style={{ fontFamily: "'Source Sans 3', 'Source Sans Pro', sans-serif" }}>
            — Alie M.
          </p>
        </div>

        {/* Early Beta Editorial CTA */}
        <div className="mt-8 text-center">
          <a
            href="/join"
            className="text-base sm:text-lg font-medium text-[#1B2A6B] hover:underline"
            style={{
              fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif",
            }}
          >
            Be part of the early beta. Help shape what discovery is becoming.
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#000080] text-white py-12 mt-12">
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
              <a href="/ai-environment" className="hover:opacity-80 transition-opacity">
                AI and Environment
              </a>
              <a href="/faq" className="hover:opacity-80 transition-opacity">
                FAQ
              </a>
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
            <p className="text-sm opacity-90 mt-2">
              <a href="mailto:hello@thriftshopper.com" className="hover:opacity-80 transition-opacity">
                hello@thriftshopper.com
              </a>
            </p>
          </div>
        </div>
      </footer>

      {/* Floating Join Button - Mobile/Tablet Only */}
      {showFloatingButton && (
        <Link
          href="/join"
          className="fixed bottom-6 right-4 md:bottom-8 md:right-6 lg:hidden z-50 px-4 py-2.5 rounded-full bg-white border border-[#191970]/20 shadow-lg transition-all hover:shadow-xl hover:border-[#191970]/40"
          style={{
            fontFamily: "'Source Sans 3', 'Source Sans Pro', sans-serif",
            fontSize: "13px",
            fontWeight: 500,
            color: "#191970",
            textDecoration: "none",
          }}
        >
          Join
        </Link>
      )}
    </div>
  )
}
