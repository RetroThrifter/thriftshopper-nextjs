"use client"

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-serif font-bold mb-8" style={{ color: "#000080" }}>
          FAQ
        </h1>
        <div className="prose prose-lg max-w-none space-y-6">
          <h2 className="text-2xl font-serif font-semibold mt-8 mb-4" style={{ color: "#000080" }}>
            Why doesn't ThriftShopper focus on clothing?
          </h2>
          <p className="text-lg leading-relaxed text-foreground">
            We love clothing — but it already dominates resale.
          </p>
          <p className="text-lg leading-relaxed text-foreground">
            ThriftShopper is built for items with story, character, and discovery value: objects, accessories, collectibles, design pieces, and the unexpected. By narrowing the focus, we make discovery calmer, more interesting, and more rewarding.
          </p>
          <p className="text-lg leading-relaxed text-foreground">
            (We may explore other dedicated marketplaces over time. This one is intentional.)
          </p>

          <h2 className="text-2xl font-serif font-semibold mt-8 mb-4" style={{ color: "#000080" }}>
            Why are transaction fees so low?
          </h2>
          <p className="text-lg leading-relaxed text-foreground">
            Because discovery shouldn't be pay-to-play.
          </p>
          <p className="text-lg leading-relaxed text-foreground">
            Right now, ThriftShopper keeps fees minimal to encourage thoughtful listings, experimentation, and early participation. We're focused on building a healthy marketplace first — not extracting value before it exists.
          </p>

          <h2 className="text-2xl font-serif font-semibold mt-8 mb-4" style={{ color: "#000080" }}>
            Can sellers pay to be discovered more?
          </h2>
          <p className="text-lg leading-relaxed text-foreground">
            No — and that's by design.
          </p>
          <p className="text-lg leading-relaxed text-foreground">
            There are no promoted listings, boosted placements, or pay-to-win visibility. Items surface based on relevance, interest, and fit — not who pays the most. This keeps discovery fair, human, and genuinely surprising.
          </p>

          <h2 className="text-2xl font-serif font-semibold mt-8 mb-4" style={{ color: "#000080" }}>
            Why not just browse by category?
          </h2>
          <p className="text-lg leading-relaxed text-foreground">
            You can — but it's not the point.
          </p>
          <p className="text-lg leading-relaxed text-foreground">
            Categories exist, but ThriftShopper isn't built like a warehouse. Discovery here is about wandering, noticing, and finding things you weren't explicitly searching for. There are plenty of places to filter endlessly by category. We wanted to build something different.
          </p>

          <h2 className="text-2xl font-serif font-semibold mt-8 mb-4" style={{ color: "#000080" }}>
            Why does discovery feel slower or different?
          </h2>
          <p className="text-lg leading-relaxed text-foreground">
            Because it's meant to.
          </p>
          <p className="text-lg leading-relaxed text-foreground">
            Most marketplaces optimize for speed and volume. ThriftShopper optimizes for fit — better matches, fewer mismatches, and less noise. Slower discovery often leads to better finds.
          </p>

          <h2 className="text-2xl font-serif font-semibold mt-8 mb-4" style={{ color: "#000080" }}>
            Is ThriftShopper still in beta?
          </h2>
          <p className="text-lg leading-relaxed text-foreground">
            Yes.
          </p>
          <p className="text-lg leading-relaxed text-foreground">
            We're building thoughtfully and learning from how people actually use the platform. Some features are still evolving, and your feedback helps shape what comes next.
          </p>

          <h2 className="text-2xl font-serif font-semibold mt-8 mb-4" style={{ color: "#000080" }}>
            Need more help?
          </h2>
          <p className="text-lg leading-relaxed text-foreground">
            If you're looking for deeper guidance, seller details, or help with an issue, visit our Support page or email us anytime at{" "}
            <a href="mailto:support@thriftshopper.com" className="text-primary hover:underline">
              support@thriftshopper.com
            </a>
            .
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
              <a href="/marketplace-focus" className="hover:opacity-80 transition-opacity">
                Our Marketplace Focus
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
