"use client"

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

          <p className="text-lg leading-relaxed text-foreground">
            Most marketplaces are built for search.
          </p>
          <p className="text-lg leading-relaxed text-foreground">
            Type in &ldquo;vintage lamp.&rdquo;<br />
            Get 47,000 results.<br />
            Scroll endlessly.<br />
            Forget why you came.
          </p>
          <p className="text-lg leading-relaxed text-foreground">
            But the best secondhand finds rarely begin with a keyword.
          </p>
          <p className="text-lg leading-relaxed text-foreground">
            They begin with a feeling.
          </p>
          <p className="text-lg leading-relaxed text-foreground">
            A room that suddenly feels complete.<br />
            A glass that reminds you of your grandmother.<br />
            A chair you didn&apos;t know you wanted until you saw it.
          </p>
          <p className="text-lg leading-relaxed text-foreground">
            ThriftShopper is built around discovery instead of search, helping buyers uncover
            meaningful things through taste, mood, story, and connection.
          </p>
          <p className="text-lg leading-relaxed text-foreground">
            For sellers, that changes everything too.
          </p>
          <p className="text-lg leading-relaxed text-foreground">
            The challenge isn&apos;t simply listing inventory. It&apos;s helping the right people find it.
            Estate sales, thrift shops, collectors, and curators all have treasures waiting for
            someone who will love them.
          </p>
          <p className="text-lg leading-relaxed text-foreground">
            We believe recommerce should feel more human:<br />
            less endless scrolling,<br />
            less noise,<br />
            more connection.
          </p>
          <p className="text-lg leading-relaxed text-foreground">
            Because the best finds are usually the ones you weren&apos;t looking for.
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
