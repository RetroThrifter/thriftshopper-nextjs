"use client"

import Link from "next/link"

export default function WhyTheMagicOfDiscoveryPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-serif font-bold mb-8" style={{ color: "#000080" }}>
          The Magic of Discovery
        </h1>
        <div className="prose prose-lg max-w-none space-y-6">
          <h2 className="text-2xl font-serif font-semibold mt-8 mb-4" style={{ color: "#000080" }}>
            Why ThriftShopper Exists
          </h2>

          <h3 className="text-xl font-serif font-semibold mt-6 mb-3" style={{ color: "#000080" }}>
            Search and Scroll is Dead
          </h3>
          <p className="text-lg leading-relaxed text-foreground">
            Open any marketplace today. Search &ldquo;vintage lamp.&rdquo; Get 47,000 results. Scroll endlessly. Give up.
          </p>
          <p className="text-lg leading-relaxed text-foreground">
            This is broken.
          </p>
          <p className="text-lg leading-relaxed text-foreground">
            ThriftShopper works differently. We don&apos;t make you search—we help you discover.
          </p>

          <h3 className="text-xl font-serif font-semibold mt-6 mb-3" style={{ color: "#000080" }}>
            For Buyers: Find Treasures You Didn&apos;t Know You Wanted
          </h3>
          <p className="text-lg leading-relaxed text-foreground">
            You don&apos;t always know what you&apos;re looking for. But you know it when you see it.
          </p>
          <p className="text-lg leading-relaxed text-foreground">
            Instead of searching and scrolling, tell us what vibe you want: &ldquo;something whimsical,&rdquo; &ldquo;cozy,&rdquo; &ldquo;a statement piece.&rdquo; Our discovery feed surfaces treasures that match your taste.
          </p>
          <p className="text-lg leading-relaxed text-foreground">
            Every item comes with a story. Fair, transparent pricing. No bargain hunting required—just the magic of finding something special.
          </p>
          <p className="text-lg leading-relaxed text-foreground">
            80% of our buyers aren&apos;t traders or resellers. They&apos;re people who love unique things and hate endless scrolling.
          </p>

          <h3 className="text-xl font-serif font-semibold mt-6 mb-3" style={{ color: "#000080" }}>
            For Sellers: We Find Your Buyers
          </h3>
          <p className="text-lg leading-relaxed text-foreground">
            You don&apos;t need another place to list. You need buyers.
          </p>
          <p className="text-lg leading-relaxed text-foreground">
            Estate sales, auctions, thrift shops, vintage collectors—you all face the same problem: how do people find your treasures when they don&apos;t know what to search for?
          </p>
          <p className="text-lg leading-relaxed text-foreground">
            ThriftShopper solves this. Our AI tags your items by mood, style, and intent. Your inventory gets discovered by people browsing for a vibe, not a keyword.
          </p>
          <p className="text-lg leading-relaxed text-foreground">
            We bring you buyers who fall in love with items through discovery, not search.
          </p>

          <h2 className="text-2xl font-serif font-semibold mt-8 mb-4" style={{ color: "#000080" }}>
            The Reality of Recommerce Today
          </h2>
          <p className="text-lg leading-relaxed text-foreground">
            Yes, there are people who flip items for profit. Yes, there are apps that help you find pricing. Yes, thrifting-as-a-sport exists.
          </p>
          <p className="text-lg leading-relaxed text-foreground">
            But that&apos;s not most people.
          </p>
          <p className="text-lg leading-relaxed text-foreground">
            Most sellers just want to move inventory to people who&apos;ll appreciate it. Most buyers want to find special things without wading through junk.
          </p>
          <p className="text-lg leading-relaxed text-foreground">
            ThriftShopper is for the 80%—the people who are tired of the noise.
          </p>

          <h2 className="text-2xl font-serif font-semibold mt-8 mb-4" style={{ color: "#000080" }}>
            Our Approach: Discovery, Not Search
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-lg leading-relaxed text-foreground">
            <li><strong>Fair pricing.</strong> Sellers use our AI-powered suggestions to price items transparently. Buyers trust the pricing is already fair.</li>
            <li><strong>Storytelling.</strong> Every item has a story that makes it irresistible.</li>
            <li><strong>Mood-based discovery.</strong> Browse by vibe, not keywords.</li>
            <li><strong>No endless scrolling.</strong> A curated feed of treasures, not 47,000 results.</li>
          </ul>

          <h2 className="text-2xl font-serif font-semibold mt-8 mb-4" style={{ color: "#000080" }}>
            This Isn&apos;t Another Marketplace
          </h2>
          <p className="text-lg leading-relaxed text-foreground">
            We&apos;re not eBay. We&apos;re not Poshmark. We&apos;re not a price comparison tool.
          </p>
          <p className="text-lg leading-relaxed text-foreground">
            We&apos;re the place where buyers discover treasures they&apos;ll love and sellers find the buyers who&apos;ve been looking for them—even if they didn&apos;t know it yet.
          </p>

          <h2 className="text-2xl font-serif font-semibold mt-8 mb-4" style={{ color: "#000080" }}>
            This Is What We Believe
          </h2>
          <p className="text-lg leading-relaxed text-foreground">
            Discovery is better than search. Stories matter more than specifications. Fair pricing builds trust. And the best finds are the ones you didn&apos;t know you were looking for.
          </p>
          <p className="text-lg leading-relaxed text-foreground">
            If this resonates with you, we&apos;d love to have you here.
          </p>

          <div className="mt-8">
            <Link
              href="/join"
              className="inline-block"
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
              Join the waitlist
            </Link>
          </div>

          <p className="text-lg leading-relaxed text-foreground mt-8">
            Questions about our approach? <a href="mailto:hello@thriftshopper.com" className="text-[#191970] hover:underline">hello@thriftshopper.com</a>—we&apos;re always happy to chat.
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#000080] text-white py-12 mt-16">
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
                onClick={() => {
                  const contactFormUrl = process.env.NEXT_PUBLIC_CONTACT_FORM_URL || "#"
                  window.open(contactFormUrl, "_blank")
                }}
                className="hover:opacity-80 transition-opacity cursor-pointer"
              >
                Contact
              </button>
              <a href="/faq" className="hover:opacity-80 transition-opacity">
                FAQ
              </a>
              <a href="/why-the-magic-of-discovery" className="hover:opacity-80 transition-opacity">
                Why the Magic of Discovery?
              </a>
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
