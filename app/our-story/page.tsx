"use client"

import { Button } from "@/components/ui/button"

export default function OurStoryPage() {
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
              ThriftShopper
            </a>
            <p className="text-xs font-sans hidden sm:block" style={{ color: "#DAA520" }}>
              the magic of discovery™
            </p>
          </div>
          <div className="flex items-center gap-2 md:gap-4 flex-shrink-0">
            <button
              className="text-sm md:text-base px-3 md:px-4 hover:opacity-80 transition-opacity"
              onClick={() => (window.location.href = "/")}
            >
              Home
            </button>
            <Button
              variant="outline"
              size="sm"
              className="text-sm md:text-base px-3 md:px-4 bg-transparent"
              onClick={() => (window.location.href = "/for-sellers")}
            >
              For Sellers
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="text-sm md:text-base px-3 md:px-4 bg-transparent"
              onClick={() => (window.location.href = "/for-buyers")}
            >
              For Buyers
            </Button>
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

      {/* Mission Statement Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-12" style={{ color: "#000080" }}>
            ThriftShopper Mission Statement
          </h1>

          <div className="prose prose-lg md:prose-xl mx-auto">
            <p className="text-lg md:text-xl lg:text-2xl font-sans leading-relaxed text-foreground">
              We believe the best things are found, not manufactured. The best prices are fair, not fought over. And the
              best marketplace is owned by the people who make it thrive. ThriftShopper is recommerce reimagined:
              intelligent, human, and built for connection.
            </p>
          </div>

          <div className="mt-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8" style={{ color: "#000080" }}>
              Connie's Story
            </h2>

            <div className="prose prose-lg md:prose-xl mx-auto">
              <div className="text-left space-y-6">
                <p className="text-lg md:text-xl font-sans leading-relaxed text-foreground">
                  My love for secondhand started in 2006 when my youngest son, then 8, asked me to sell his cleats on
                  eBay. I couldn't believe that someone would buy his used, albeit Mom-cleaned, shoes. When they sold, I
                  was so excited that I called school, begging the administrator to get the message to him in class.
                  Soon, he had me researching and subsequently selling my childhood Barbies, since my sons quickly
                  became heavily invested in selling almost anything in the house, and they had no use for my old dolls.
                  As a disclaimer, selling is in my DNA, as I had a "restaurant" in my playhouse when I was 5. It didn't
                  matter that every item on my fancy menu returned a piece of Bazooka gum or an Oreo.
                </p>
                <p className="text-lg md:text-xl font-sans leading-relaxed text-foreground">
                  Many years later, after moving to a small town during COVID, I began volunteering at my church thrift
                  shop. I started noticing patterns again — what sells, when people buy, and how moves, downsizing, and
                  even local news shape what comes through the door. Like many thrift shops, ours gives back — every
                  dollar we raise goes straight into the food pantry, which now feeds more than 50 families in our
                  community. I, too, am a buyer and have discovered the magic and the thrill of the find. The "mascot"
                  for ThriftShopper is a rhinestone-rimmed belt with a picture of Dorothy – and company – on the
                  yellow-brick road. Never, in my wildest imagination, would I have gone searching for this belt. Nor
                  did I imagine the number of times I would be stopped while wearing it.
                </p>
                <p className="text-lg md:text-xl font-sans leading-relaxed text-foreground">
                  I know we all get our blood flowing in dusty attics and the way-back shelves, imagining the story
                  behind a vintage cookie jar or a well-loved book. I hope to keep that magic alive — to bring the joy
                  of discovery online, while also creating space for people to share the stories behind the things they
                  find. There's so much possibility here, and I can't wait to see what we'll discover together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#000080] text-white py-12">
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
              <button
                onClick={() => {
                  const contactFormUrl = process.env.NEXT_PUBLIC_CONTACT_FORM_URL || "#"
                  window.open(contactFormUrl, "_blank")
                }}
                className="hover:opacity-80 transition-opacity cursor-pointer"
              >
                Contact
              </button>
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
