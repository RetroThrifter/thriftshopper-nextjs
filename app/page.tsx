"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"


export default function HomePage() {
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
              className="text-[clamp(28px,4.3vw,42px)] leading-[1.1] text-[#191970] max-w-[20ch]"
              style={{ 
                letterSpacing: "-0.01em"
              }}
            >
              Every treasure has a story.
              <br />
              Find yours.
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
                Join the Waitlist
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
            
            {/* Value Proposition */}
            <p
              className="mt-4 max-w-xl"
              style={{
                fontSize: "clamp(16px, 2.5vw, 20px)",
                color: "#333333",
                fontFamily: "'Source Sans 3', 'Source Sans Pro', sans-serif",
                fontWeight: 400,
                lineHeight: "1.6",
                textAlign: "center",
              }}
            >
              Discover one-of-a-kind secondhand treasures where the magic isn&apos;t just what you find, it&apos;s the human connection behind it.
            </p>
            
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="pt-8 pb-9 md:pt-12 md:pb-14">
        <div className="w-full max-w-[48rem] mx-auto px-6">
          {/* Section Title */}
          <h2
            className="text-center mb-10 md:mb-12"
            style={{
              fontSize: "clamp(28px, 4vw, 40px)",
              fontWeight: 600,
              color: "#191970",
              lineHeight: "1.2",
            }}
          >
            How it Works
          </h2>
          
         {/* Three Card Grid */}
<div className="mb-6 sm:mb-8">
<div className="grid md:grid-cols-3 gap-6 md:gap-8">
  {/* Card 1 */}
  <div className="bg-muted/30 border border-border rounded-xl p-6 md:p-8 shadow-[0_10px_30px_rgba(24,25,112,0.06)]">
    <div className="relative w-full h-36 md:h-44 lg:h-52 mb-3 rounded-lg overflow-hidden bg-[#fbf8f1] ring-1 ring-[#EFBF04]/25">
      <Image
        src="/images/how-it-works/smart-matching.png"
        alt="Discovery, Not Search"
        fill
        className="object-contain opacity-90"
        priority
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0)_0%,rgba(255,255,255,0.35)_55%,rgba(251,248,241,0.85)_100%)]" />
    </div>

    <h3
      className="mb-3"
      style={{
        fontSize: "clamp(20px, 2.5vw, 24px)",
        fontWeight: 600,
        color: "#191970",
        lineHeight: "1.3",
      }}
    >
      Discovery, Not Search
    </h3>

    <p
      className="text-base leading-relaxed"
      style={{
        color: "#2A2A2A",
        fontFamily: "'Source Sans 3', 'Source Sans Pro', sans-serif",
        fontWeight: 400,
      }}
    >
      Secondhand shopping is about stumbling upon something that feels right, not searching for a particular thing.
      ThriftShopper is built for discovery, letting your curiosity and vibe guide you.
    </p>
  </div>

  {/* Card 2 (bigger on desktop) */}
  <div className="bg-muted/30 border border-border rounded-xl p-6 md:p-8 lg:-translate-y-2 lg:scale-[1.04] lg:shadow-lg lg:z-10 transition-transform shadow-[0_10px_30px_rgba(24,25,112,0.06)] ring-1 ring-[#EFBF04]/35">
    <div className="relative w-full h-36 md:h-44 lg:h-52 mb-3 rounded-lg overflow-hidden bg-[#fbf8f1] ring-1 ring-[#EFBF04]/25">
      <Image
        src="/images/how-it-works/perfect-discoveries.png"
        alt="Smart Matching"
        fill
        className="object-contain opacity-90"
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0)_0%,rgba(255,255,255,0.35)_55%,rgba(251,248,241,0.85)_100%)]" />
    </div>

    <h3
      className="mb-3"
      style={{
        fontSize: "clamp(20px, 2.5vw, 24px)",
        fontWeight: 600,
        color: "#191970",
        lineHeight: "1.3",
      }}
    >
      Smart Matching
    </h3>

    <p
      className="text-base leading-relaxed"
      style={{
        color: "#2A2A2A",
        fontFamily: "'Source Sans 3', 'Source Sans Pro', sans-serif",
        fontWeight: 400,
      }}
    >
      ThriftShopper listens. Your mood and vibe guides what you see.
      Swipe up through treasures, stop when something catches your eye or fine tune your request with voice or mood wheel inputs.
    </p>
  </div>

  {/* Card 3 */}
  <div className="bg-muted/30 border border-border rounded-xl p-6 md:p-8 shadow-[0_10px_30px_rgba(24,25,112,0.06)]">
    <div className="relative w-full h-36 md:h-44 lg:h-52 mb-3 rounded-lg overflow-hidden bg-[#fbf8f1] ring-1 ring-[#EFBF04]/25">
      <Image
        src="/images/how-it-works/ai-learning.png"
        alt="Stories You Can Trust"
        fill
        className="object-contain opacity-90"
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0)_0%,rgba(255,255,255,0.35)_55%,rgba(251,248,241,0.85)_100%)]" />
    </div>

    <h3
      className="mb-3"
      style={{
        fontSize: "clamp(20px, 2.5vw, 24px)",
        fontWeight: 600,
        color: "#191970",
        lineHeight: "1.3",
      }}
    >
      Stories You Can Trust
    </h3>

    <p
      className="text-base leading-relaxed"
      style={{
        color: "#2A2A2A",
        fontFamily: "'Source Sans 3', 'Source Sans Pro', sans-serif",
        fontWeight: 400,
      }}
    >
      Every item has a story and a new chapter waiting to be written.
      We help buyers feel confident saying yes, and sellers feel confident listing, by making it easier to share context, care, and story.
    </p>
  </div>
</div>
</div>
        </div>
      </section>

      {/* Editorial Quote & Early Beta CTA */}
      <section className="pb-12 md:pb-16 px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="mx-auto mt-10 sm:mt-12 max-w-[420px] rounded-xl bg-[#F7F4EF]/60 px-6 py-8 shadow-sm">
          <p
            className="italic text-[clamp(14px,1.8vw,16px)] leading-6 text-[#4A4A4A]"
            style={{
              fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif",
            }}
          >
            &ldquo;Exactly the kind of place to find vintage treasures I love.
            It feels like a Pinterest board you can shop &mdash; but with real stories behind it&rdquo;
          </p>
          <p className="mt-3 text-xs text-[#6B6B6B]">&mdash; Alie M.</p>
        </div>
        
        {/* Early Beta Editorial CTA */}
        <div className="mt-8 text-center">
          <Link
            href="/join"
            className="text-lg sm:text-xl font-medium text-[#1B2A6B] hover:underline"
            style={{
              fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif",
            }}
          >
            Be part of the early beta.
          </Link>
          <p className="mt-3 max-w-sm mx-auto text-sm text-gray-500" style={{
            fontFamily: "'Source Sans 3', 'Source Sans Pro', sans-serif",
          }}>
            Help shape what discovery is becoming.
          </p>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-[#000080] text-white pt-4 pb-3 sm:pt-6 sm:pb-4">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          {/* Brand */}
          <div className="text-left mb-3">
            <h3
              className="text-sm sm:text-base mb-0.5"
              style={{
                fontWeight: 700,
                letterSpacing: "-0.02em",
                lineHeight: "1.05",
                color: "#ffffff",
              }}
            >
              ThriftShopper
            </h3>
            <p className="font-serif italic text-xs text-[#EFBF04]" style={{ opacity: 0.7 }}>
              the magic of discovery™
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap sm:justify-center gap-y-1.5 gap-x-6 sm:gap-x-4 sm:gap-y-1 text-sm max-w-md sm:max-w-none mx-auto sm:mx-0 mb-3">
            <a href="/about" className="hover:opacity-80 transition-opacity">
              About
            </a>
            <a href="/faq" className="hover:opacity-80 transition-opacity">
              FAQ
            </a>
            <a href="/marketplace-focus" className="hover:opacity-80 transition-opacity whitespace-nowrap">
              Our Marketplace Focus
            </a>
            <a href="mailto:hello@thriftshopper.com" className="hover:opacity-80 transition-opacity">
              hello@thriftshopper.com
            </a>
            <a href="/privacy" className="hover:opacity-80 transition-opacity">
              Privacy
            </a>
            <a href="/terms" className="hover:opacity-80 transition-opacity">
              Terms
            </a>
          </div>

          <div className="border-t border-white/20 pt-2 pb-1 text-center">
            <p
              className="text-[11px] text-white/60"
              style={{
                fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif",
              }}
            >
              &copy; 2026 ThriftShopper. All rights reserved.
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
