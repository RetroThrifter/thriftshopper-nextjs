"use client"

import { Button } from "@/components/ui/button"

export default function AboutPage() {
  const airtableFormUrl = process.env.NEXT_PUBLIC_AIRTABLE_FORM_URL || "#"

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
              ThriftShopper AI
            </a>
            <p className="text-xs font-sans hidden sm:block" style={{ color: "#DAA520" }}>
              the magic of predictive discovery
            </p>
          </div>
          <div className="flex items-center gap-2 md:gap-4 flex-shrink-0">
            <button
              className="text-sm md:text-base px-3 md:px-4 hover:opacity-80 transition-opacity"
              onClick={() => (window.location.href = "/")}
            >
              Home
            </button>
            <button
              className="text-sm md:text-base px-3 md:px-4 hover:opacity-80 transition-opacity"
              onClick={() => (window.location.href = "/for-sellers")}
            >
              For Sellers
            </button>
            <button
              className="text-sm md:text-base px-3 md:px-4 hover:opacity-80 transition-opacity"
              onClick={() => (window.location.href = "/for-buyers")}
            >
              For Buyers
            </button>
            <Button
              size="sm"
              className="text-sm md:text-base px-3 md:px-4"
              style={{ backgroundColor: "#000080" }}
              onClick={() => window.open(airtableFormUrl, "_blank")}
            >
              <span className="hidden sm:inline">Join the Network</span>
              <span className="sm:hidden">Join</span>
            </Button>
          </div>
        </div>
      </header>

      {/* About Content */}
      <div className="max-w-4xl mx-auto py-12 px-4">
        <h1 className="text-4xl font-serif font-bold mb-8" style={{ color: "#000080" }}>
          About Us
        </h1>

        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-serif font-semibold mb-6" style={{ color: "#000080" }}>
            Connie Connors
          </h2>

          <div className="text-lg leading-relaxed space-y-6 text-foreground">
            <p>
              Connie Connors is a leader in global communications and business strategy. She manages her local church
              thrift shop and pantry. Her love of tech and big data has had her "building" ThriftShopper for the past
              three years. Connie is a passionate serial entrepreneur.
            </p>

            <p>
              She founded, funded, and developed HitTail, the first SEO (search engine optimization) tool, which
              BusinessWeek named one of the best new products of 2006. Connie sold the Company in 2011.
            </p>

            <p>
              For more than 25 years, Connie led her global PR firm, Connors Communications, ushering companies into the
              digital era—from then-unknown startups like Amazon and Priceline to household names like Disney and
              National Geographic.
            </p>

            <p>
              When she's not working around the clock on ThriftShopper, she teaches Public Relations & Storytelling at
              Fordham University. She writes Almost Intelligent.ai to explore how technology—especially AI—is reshaping
              the way we live, learn and work.
            </p>
          </div>

          <div className="mt-12 p-6 bg-muted/30 rounded-lg">
            <h2 className="text-xl font-serif font-semibold mb-4">Questions?</h2>
            <p className="text-muted-foreground">
              For any questions about ThriftShopper, please{" "}
              <button
                onClick={() => {
                  const contactFormUrl = process.env.NEXT_PUBLIC_CONTACT_FORM_URL || "#"
                  window.open(contactFormUrl, "_blank")
                }}
                className="text-primary hover:underline cursor-pointer"
              >
                contact us
              </button>
              .
            </p>
            <p className="text-muted-foreground mt-4">
              Or email Connie directly at{" "}
              <a href="mailto:connie@thriftshopper.com" className="text-primary hover:underline">
                connie@thriftshopper.com
              </a>
              . She'd love to hear from you. And please let us know if you'd like to join the beta test roll out this
              month, December.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
