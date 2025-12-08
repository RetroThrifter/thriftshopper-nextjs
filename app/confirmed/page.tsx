"use client"

export default function ConfirmedPage() {
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
              the magic of predictive discovery
            </p>
          </div>
        </div>
      </header>

      {/* Confirmation Content */}
      <div className="max-w-4xl mx-auto py-16 px-4 text-center">
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 mb-6">
            <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4" style={{ color: "#000080" }}>
            You're In!
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8">Welcome to the ThriftShopper Network</p>
        </div>

        <div className="max-w-2xl mx-auto space-y-6 text-lg leading-relaxed">
          <p>
            Thank you for joining ThriftShopper. We'll keep you updated on our progress and let you know as soon as
            we're ready to launch.
          </p>

          <p>
            Get ready for a revolutionary, easy-to-use platform that connects buyers and sellers through intelligent
            matching and predictive discovery.
          </p>

          <div className="mt-12 pt-8 border-t">
            <p className="text-muted-foreground mb-6">In the meantime, explore what makes ThriftShopper special</p>

            <div className="flex flex-wrap gap-4 justify-center">
              {/* How It Works button removed as page was deleted */}
              <a
                href="/for-buyers"
                className="inline-block px-6 py-3 border-2 rounded-lg font-semibold transition-colors"
                style={{ borderColor: "#000080", color: "#000080" }}
              >
                For Buyers
              </a>
              <a
                href="/for-sellers"
                className="inline-block px-6 py-3 border-2 rounded-lg font-semibold transition-colors"
                style={{ borderColor: "#000080", color: "#000080" }}
              >
                For Sellers
              </a>
              <a
                href="/blog"
                className="inline-block px-6 py-3 border-2 rounded-lg font-semibold transition-colors"
                style={{ borderColor: "#000080", color: "#000080" }}
              >
                Blog
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
