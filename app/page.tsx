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
      <section className="pt-9 pb-8 md:pt-12 md:pb-12">
        <div className="w-full max-w-[420px] md:max-w-[560px] mx-auto px-6">
          <div className="flex flex-col items-center gap-5 md:gap-6 text-center">
            <div className="flex flex-col items-center">
              <h1
                className="ts-masthead leading-none"
                style={{
                  fontSize: "clamp(46px, 6vw, 72px)",
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
            <h2
              className="text-[clamp(28px,4.3vw,42px)] leading-[1.1] text-[#191970] max-w-[20ch]"
              style={{
                letterSpacing: "-0.01em",
              }}
            >
              Every treasure has a story. Find yours.
            </h2>
            <Link
              href="/join"
              className="inline-block"
              style={{
                backgroundColor: "#191970",
                color: "#fff",
                padding: "14px 34px",
                borderRadius: "999px",
                fontFamily: "'Source Sans 3', 'Source Sans Pro', sans-serif",
                fontWeight: 600,
                fontSize: "16px",
                textDecoration: "none",
                boxShadow: "0 12px 24px rgba(25, 25, 112, 0.18)",
              }}
            >
              Join the Founding Waitlist
            </Link>
          </div>
        </div>
      </section>

      {/* Founder Note */}
      <section className="pt-5 pb-9 md:pt-4 md:pb-12">
        <div className="w-full max-w-[42rem] mx-auto px-6 text-center">
          <h2
            className="mb-4"
            style={{
              fontSize: "clamp(24px, 3.4vw, 34px)",
              fontWeight: 600,
              color: "#191970",
              lineHeight: "1.2",
            }}
          >
            A Founder&apos;s Note
          </h2>
          <p
            className="text-base sm:text-lg leading-relaxed text-[#2A2A2A]"
            style={{
              fontFamily: "'Source Sans 3', 'Source Sans Pro', sans-serif",
            }}
          >
            ThriftShopper is for the pieces you do not set out to find, but remember when you do.
            A trusted place to discover secondhand treasures, and to sell with care.
          </p>
        </div>
      </section>


      {/* Product Discovery Visuals */}
      <section className="pt-3 pb-9 md:pt-2 md:pb-12">
        <div className="w-full max-w-5xl mx-auto px-6">
          <h2
            className="text-center mb-4"
            style={{
              fontSize: "clamp(24px, 3.4vw, 34px)",
              fontWeight: 600,
              color: "#191970",
              lineHeight: "1.2",
            }}
          >
            A glimpse of what discovery can feel like
          </h2>
          <p
            className="mx-auto mb-7 max-w-[44rem] text-center text-base sm:text-lg text-[#2A2A2A]"
            style={{
              fontFamily: "'Source Sans 3', 'Source Sans Pro', sans-serif",
            }}
          >
            Browse by feeling, story, and trust, not endless search.
          </p>
          <div className="-mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-3 pr-[18vw] [scrollbar-width:none] md:mx-auto md:grid md:max-w-4xl md:grid-cols-3 md:gap-5 md:overflow-visible md:px-0 md:pr-0 md:pb-0 [&::-webkit-scrollbar]:hidden">
            <div className="w-[78vw] max-w-[255px] shrink-0 snap-center rounded-2xl border border-black/5 bg-white p-2.5 shadow-[0_8px_20px_rgba(24,25,112,0.055)] md:w-auto md:max-w-none">
              <Image
                src="/discovery-candlesticks.png"
                alt="Buyer discovery screen showing lucite candlesticks"
                width={900}
                height={1600}
                sizes="(min-width: 768px) 280px, 78vw"
                className="w-full h-auto rounded-xl"
              />
            </div>
            <div className="w-[78vw] max-w-[255px] shrink-0 snap-center rounded-2xl border border-black/5 bg-white p-2.5 shadow-[0_8px_20px_rgba(24,25,112,0.055)] md:w-auto md:max-w-none">
              <Image
                src="/discovery-tumblers.png"
                alt="Product listing screen showing vintage tumblers"
                width={900}
                height={1600}
                sizes="(min-width: 768px) 280px, 78vw"
                className="w-full h-auto rounded-xl"
              />
            </div>
            <div className="w-[78vw] max-w-[255px] shrink-0 snap-center rounded-2xl border border-black/5 bg-white p-2.5 shadow-[0_8px_20px_rgba(24,25,112,0.055)] md:w-auto md:max-w-none">
              <Image
                src="/seller-dashboard.png"
                alt="Seller dashboard showing trusted seller profile and payouts"
                width={900}
                height={1600}
                sizes="(min-width: 768px) 280px, 78vw"
                className="w-full h-auto rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Founding CTA */}
      <section className="pb-11 md:pb-14 px-6">
        <div className="mx-auto max-w-[40rem] text-center">
          <h2
            className="mb-3"
            style={{
              fontSize: "clamp(26px, 3.6vw, 36px)",
              fontWeight: 600,
              color: "#191970",
              lineHeight: "1.2",
            }}
          >
            Join the Founding Waitlist
          </h2>
          <p
            className="text-base sm:text-lg leading-relaxed text-[#2A2A2A]"
            style={{
              fontFamily: "'Source Sans 3', 'Source Sans Pro', sans-serif",
            }}
          >
            Join early and help shape the future of discovery-driven secondhand.
          </p>
          <div className="mt-6">
            <Link
              href="/join"
              className="inline-block"
              style={{
                backgroundColor: "#191970",
                color: "#fff",
                padding: "12px 30px",
                borderRadius: "999px",
                fontFamily: "'Source Sans 3', 'Source Sans Pro', sans-serif",
                fontWeight: 600,
                fontSize: "15px",
                textDecoration: "none",
              }}
            >
              Keep Me Updated
            </Link>
          </div>
          <div className="mt-7">
            <div className="mx-auto flex max-w-[20rem] flex-col items-center gap-2.5 rounded-2xl border border-black/5 bg-[#fbf8f1] px-4 py-3 text-center">
              <img
                src="/goshed-logo.svg"
                alt="GoShed"
                className="h-10 w-10 rounded-xl"
              />
              <p
                className="text-[13px] text-[#5A5A5A]"
                style={{
                  fontFamily: "'Source Sans 3', 'Source Sans Pro', sans-serif",
                  lineHeight: "1.5",
                }}
              >
                <span>Need help deciding what to keep, sell, donate, or let go? </span>
                <a
                  href="https://goshedapp.com"
                  className="font-semibold text-[#191970] hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Explore GoShed.
                </a>
              </p>
              <a
                href="https://apps.apple.com/us/app/goshed/id6763424403"
                className="inline-flex transition-opacity hover:opacity-85"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download GoShed on the App Store"
              >
                <Image
                  src="/goshed-app-store-badge.svg"
                  alt="Download on the App Store"
                  width={120}
                  height={40}
                  className="h-8 w-auto"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-[#191970] text-white pt-4 pb-3 sm:pt-6 sm:pb-4">
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
            <a href="/why-the-magic-of-discovery" className="hover:opacity-80 transition-opacity whitespace-nowrap">
              Why the Magic of Discovery?
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
