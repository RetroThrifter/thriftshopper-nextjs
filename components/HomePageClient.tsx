"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { TreasureSourceRecommendModal } from "@/components/treasure-source-recommend-modal"

export default function HomePageClient() {
  const [showFloatingButton, setShowFloatingButton] = useState(false)
  const [treasureSourceModalOpen, setTreasureSourceModalOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowFloatingButton(window.scrollY > 400)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const openTreasureSource = () => {
      setTreasureSourceModalOpen(true)
    }

    const openTreasureSourceFromHash = () => {
      if (window.location.hash !== "#treasure-source") return

      document.getElementById("treasure-source")?.scrollIntoView({ behavior: "smooth", block: "start" })
      openTreasureSource()
    }

    openTreasureSourceFromHash()
    window.addEventListener("hashchange", openTreasureSourceFromHash)
    window.addEventListener("open-treasure-source", openTreasureSource)
    return () => {
      window.removeEventListener("hashchange", openTreasureSourceFromHash)
      window.removeEventListener("open-treasure-source", openTreasureSource)
    }
  }, [])

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Hero Section */}
      <section className="pt-8 pb-8 md:pt-11 md:pb-12">
        <div className="w-full max-w-[480px] md:max-w-[560px] mx-auto px-6">
          <div className="flex flex-col items-center gap-4 md:gap-5 text-center">
            <div className="flex flex-col items-center">
              <h1
                className="ts-masthead leading-none"
                style={{
                  fontSize: "clamp(40px, 5.2vw, 64px)",
                }}
              >
                ThriftShopper
              </h1>
              <p
                className="mt-2"
                style={{
                  fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif",
                  fontSize: "clamp(14px, 1.8vw, 18px)",
                  fontStyle: "italic",
                  color: "#EFBF04",
                }}
              >
                the magic of discovery<span className="text-xs align-super">™</span>
              </p>
            </div>
            <h2
              className="text-[clamp(24px,4vw,42px)] leading-[1.12] text-[#191970] max-w-[18ch] sm:max-w-[20ch]"
              style={{
                letterSpacing: "-0.01em",
              }}
            >
              Every treasure has a story. Find yours.
            </h2>
            <p
              className="max-w-[42ch] text-[clamp(14px,2.2vw,18px)] leading-relaxed text-[#2A2A2A]"
              style={{
                fontFamily: "'Source Sans 3', 'Source Sans Pro', sans-serif",
              }}
            >
              Built with local thrift shops, nonprofits, collectors, and everyday sellers.
            </p>
            <div className="flex w-full max-w-[200px] sm:max-w-none flex-col items-center gap-2">
              <a
                href="https://apps.apple.com/app/thriftshopper/id6776904270"
                className="inline-flex w-full transition-opacity hover:opacity-85 sm:w-auto"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download ThriftShopper on the App Store"
              >
                <Image
                  src="/app-store-badge.png"
                  alt="Download on the App Store"
                  width={120}
                  height={40}
                  className="h-10 w-full object-contain sm:h-11 sm:w-auto"
                />
              </a>
              <span className="inline-flex items-center rounded-full border border-[#191970]/10 bg-[#fbf8f1] px-2.5 py-0.5 text-[11px] text-[#5A5A5A]">
                Android coming soon
              </span>
            </div>
            <p
              className="max-w-[38ch] pt-1 text-[clamp(12px,2vw,14px)] leading-relaxed text-[#B8952E]"
              style={{
                fontFamily: "'Source Sans 3', 'Source Sans Pro', sans-serif",
              }}
            >
              Selling? No listing fees. No monthly fees. Local pickup or ship — your choice.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Note */}
      <section className="pt-4 pb-7 md:pt-3 md:pb-10">
        <div className="w-full max-w-[44rem] mx-auto px-6 text-center">
          <h2
            className="mb-4"
            style={{
              fontSize: "clamp(22px, 3.2vw, 34px)",
              fontWeight: 600,
              color: "#191970",
              lineHeight: "1.2",
            }}
          >
            A Founder&apos;s Note
          </h2>
          <blockquote
            className="text-[clamp(15px,2.2vw,18px)] leading-relaxed text-[#2A2A2A]"
            style={{
              fontFamily: "'Source Sans 3', 'Source Sans Pro', sans-serif",
            }}
          >
            <p className="mb-3">
              ThriftShopper is a discovery feed — swipe through items the way you&apos;d wander a great
              thrift shop. Tell it your mood. Ask by voice. Filter by vibe, style, or purpose.
            </p>
            <p className="mb-3">
              Every item comes from a real person with a real story. Some sellers ship. Some are a
              neighborhood away. Most joined because they were looking for something different than a
              traditional marketplace.
            </p>
            <p className="mb-3">
              The more time I&apos;ve spent with thrift shops, nonprofits, collectors, estate sellers,
              and everyday families, the more I&apos;ve realized this isn&apos;t really about buying and
              selling. It&apos;s about helping meaningful things find their next home.
            </p>
            <p>
              We&apos;re learning every week, and we&apos;re building ThriftShopper together.
            </p>
            <footer
              className="mt-4 text-[clamp(14px,2vw,16px)] italic text-[#5A5A5A]"
              style={{
                fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif",
              }}
            >
              — Connie Connors, Founder
            </footer>
          </blockquote>
        </div>
      </section>

      {/* For Buyers / For Sellers */}
      <section className="pb-8 md:pb-11">
        <div className="mx-auto max-w-3xl px-6">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
            <div className="rounded-2xl border border-black/5 bg-[#fbf8f1] px-5 py-4 text-left">
              <h3
                className="mb-2 text-[clamp(17px,2.4vw,20px)] font-semibold text-[#191970]"
                style={{ lineHeight: "1.2" }}
              >
                For Buyers
              </h3>
              <div
                className="space-y-2 text-[clamp(14px,2vw,16px)] leading-relaxed text-[#2A2A2A]"
                style={{
                  fontFamily: "'Source Sans 3', 'Source Sans Pro', sans-serif",
                }}
              >
                <p>Discover by mood, style, or purpose — not endless searching.</p>
                <p>Swipe the feed. Ask by voice. Save your favorites.</p>
                <p>Message sellers directly. Every item has a story.</p>
              </div>
            </div>
            <div className="rounded-2xl border border-black/5 bg-[#fbf8f1] px-5 py-4 text-left">
              <h3
                className="mb-2 text-[clamp(17px,2.4vw,20px)] font-semibold text-[#191970]"
                style={{ lineHeight: "1.2" }}
              >
                For Sellers
              </h3>
              <div
                className="space-y-2 text-[clamp(14px,2vw,16px)] leading-relaxed text-[#2A2A2A]"
                style={{
                  fontFamily: "'Source Sans 3', 'Source Sans Pro', sans-serif",
                }}
              >
                <p>List in minutes with AI-assisted pricing.</p>
                <p>No listing fees. Keep what you earn.</p>
                <p>Local pickup, shipping, or both — you decide.</p>
                <p>Join early and help shape the future of discovery-driven secondhand.</p>
              </div>
            </div>
          </div>
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
                alt="Discovery feed showing modernist lucite candlesticks"
                width={900}
                height={1600}
                sizes="(min-width: 768px) 280px, 78vw"
                className="w-full h-auto rounded-xl"
              />
            </div>
            <div className="w-[78vw] max-w-[255px] shrink-0 snap-center rounded-2xl border border-black/5 bg-white p-2.5 shadow-[0_8px_20px_rgba(24,25,112,0.055)] md:w-auto md:max-w-none">
              <Image
                src="/discovery-tumblers.png"
                alt="Product listing for vintage binoculars with shipping and local pickup"
                width={900}
                height={1600}
                sizes="(min-width: 768px) 280px, 78vw"
                className="w-full h-auto rounded-xl"
              />
            </div>
            <div className="w-[78vw] max-w-[255px] shrink-0 snap-center rounded-2xl border border-black/5 bg-white p-2.5 shadow-[0_8px_20px_rgba(24,25,112,0.055)] md:w-auto md:max-w-none">
              <Image
                src="/seller-dashboard.png"
                alt="Seller dashboard showing founding seller profile, listings, and earnings"
                width={900}
                height={1600}
                sizes="(min-width: 768px) 280px, 78vw"
                className="w-full h-auto rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Know a Great Treasure Source? */}
      <section id="treasure-source" className="pb-9 md:pb-12 scroll-mt-20">
        <div className="mx-auto max-w-[40rem] px-6 text-center">
          <h2
            className="mb-4"
            style={{
              fontSize: "clamp(24px, 3.4vw, 34px)",
              fontWeight: 600,
              color: "#191970",
              lineHeight: "1.2",
            }}
          >
            Know a Great Treasure Source?
          </h2>
          <div
            className="space-y-3 text-[clamp(15px,2.2vw,18px)] leading-relaxed text-[#2A2A2A]"
            style={{
              fontFamily: "'Source Sans 3', 'Source Sans Pro', sans-serif",
            }}
          >
            <p>We&apos;re building ThriftShopper one community at a time.</p>
            <p>
              Know a thrift shop, nonprofit, antique store, vintage seller, estate sale company,
              collector, church shop, or local business with unique inventory?
            </p>
            <p>Make an introduction.</p>
            <p>The best discoveries come from people who care about what they&apos;re selling.</p>
          </div>
          <div className="mt-6">
            <button
              type="button"
              onClick={() => setTreasureSourceModalOpen(true)}
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
                border: "none",
                cursor: "pointer",
              }}
            >
              Recommend a Seller
            </button>
          </div>
        </div>
      </section>

      <TreasureSourceRecommendModal
        open={treasureSourceModalOpen}
        onClose={() => setTreasureSourceModalOpen(false)}
      />

      {/* GoShed cross-link */}
      <section className="px-6 pb-8 md:pb-10">
        <div
          className="mx-auto max-w-[40rem] text-center text-[13px] leading-relaxed text-[#5A5A5A]"
          style={{
            fontFamily: "'Source Sans 3', 'Source Sans Pro', sans-serif",
          }}
        >
          <p>Not ready to sell?</p>
          <p className="mt-1">Need help deciding what to keep, sell, donate, or let go?</p>
          <p className="mt-1">
            <a
              href="https://goshedapp.com"
              className="font-medium text-[#191970]/80 hover:text-[#191970] hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore GoShed →
            </a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#16193a] text-white pt-4 pb-3 sm:pt-6 sm:pb-4">
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

      {/* Floating Download Button - Mobile/Tablet Only */}
      {showFloatingButton && (
        <a
          href="https://apps.apple.com/app/thriftshopper/id6776904270"
          className="fixed bottom-6 right-4 md:bottom-8 md:right-6 lg:hidden z-50 px-4 py-2.5 rounded-full bg-white border border-[#191970]/20 shadow-lg transition-all hover:shadow-xl hover:border-[#191970]/40"
          style={{
            fontFamily: "'Source Sans 3', 'Source Sans Pro', sans-serif",
            fontSize: "13px",
            fontWeight: 500,
            color: "#191970",
            textDecoration: "none",
          }}
          target="_blank"
          rel="noopener noreferrer"
        >
          Download
        </a>
      )}
    </div>
  )
}
