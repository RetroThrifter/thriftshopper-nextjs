import Image from "next/image"

export default function FounderPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto py-8 px-4 sm:px-6">
        <div className="space-y-8">
          {/* Header */}
          <div className="border-b border-border pb-6">
            <h1 className="text-2xl sm:text-3xl font-serif font-normal mb-2 text-foreground">
              Founder Notes — ThriftShopper
            </h1>
            <p className="text-sm text-muted-foreground">
              Private snapshot · Jan 2026
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-sm sm:prose-base max-w-none text-foreground">
            <div className="space-y-6 text-base leading-relaxed">
              {/* Origin */}
              <section>
                <h2 className="text-xl font-serif font-normal mb-3 text-foreground">
                  Origin
                </h2>
                <ul className="list-disc list-outside space-y-2 ml-6 pl-2">
                  <li>ThriftShopper began as an exploration of buyer discovery in secondhand — not search, not listings, but discovery driven by taste, vibes, story, and context.</li>
                  <li>The framing: secondhand treasure, not resale inventory (and not clothing).</li>
                  <li>Active build began November 2025.</li>
                </ul>
              </section>

              {/* Product */}
              <section>
                <h2 className="text-xl font-serif font-normal mb-3 text-foreground">
                  Product
                </h2>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li>Buyer-first discovery flow (not keyword search)</li>
                  <li>Mood / vibe wheel and voice input (see snapshot below)</li>
                  <li>Seller onboarding in progress</li>
                  <li>Listings possible in ~15 seconds with AI-assisted title, description, and price (see snapshot below)</li>
                  <li>&ldquo;Just Sold&rdquo; logic live (no holds; shop-like inventory behavior)</li>
                  <li>Mobile-first UX refined through hands-on testing</li>
                </ul>
              </section>

              {/* Stack */}
              <section>
                <h2 className="text-xl font-serif font-normal mb-3 text-foreground">
                  Stack
                </h2>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li>Frontend: Next.js</li>
                  <li>Hosting: Vercel</li>
                  <li>Backend: Supabase (auth, data, storage)</li>
                  <li>Payments: Stripe (Connect; seller payouts in progress)</li>
                  <li>AI: Vision + NLP for listing enrichment and discovery signals</li>
                  <li>Analytics: GA4 + internal founder dashboard</li>
                </ul>
              </section>

              {/* Early Signals */}
              <section>
                <h2 className="text-xl font-serif font-normal mb-3 text-foreground">
                  Early Signals
                </h2>
                <ul className="list-disc list-outside space-y-2 ml-6 pl-2">
                  <li>Nov–Jan: 150+ waitlist signups with no paid marketing, no SEO, and no formal launch, driven primarily by domain discovery and word of mouth.</li>
                  <li>Jan 4–6: High-context replies on X and Threads (e.g., &ldquo;Is there an alternative to Facebook Marketplace?&rdquo;) generated 260+ new visits over two days and 40+ new waitlist signups, reinforcing strong conversion from problem-led conversation.</li>
                </ul>
              </section>

              {/* Pre-Marketing */}
              <section>
                <h2 className="text-xl font-serif font-normal mb-3 text-foreground">
                  Pre-Marketing
                </h2>
                <ul className="list-disc list-outside space-y-2 ml-6 pl-2">
                  <li>Establishing RetroThrifter.com Connie as an influencer with IG moniker Retrothrifter_notes</li>
                  <li>Setting up socials for ThriftShopper</li>
                </ul>
              </section>

              {/* Current Status */}
              <section>
                <h2 className="text-xl font-serif font-normal mb-3 text-foreground">
                  Current Status
                </h2>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li>Private beta</li>
                  <li>
                    ~200+ waitlist signups{" "}
                    <a
                      href="https://www.google.com/maps/d/edit?mid=1jewIjp9hzFLZVOMvtpx0e9u9bu1Ehz4&usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      (Link to Google Maps with Waitlist Signups)
                    </a>
                  </li>
                  <li>Sellers onboarding deliberately to maintain discovery quality</li>
                  <li>Trademark for &ldquo;the magic of discovery&rdquo; filed for online marketplaces of pre-owned merchandise</li>
                </ul>
              </section>

              {/* What I'm Watching */}
              <section>
                <h2 className="text-xl font-serif font-normal mb-3 text-foreground">
                  What I&apos;m Watching
                </h2>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li>Conversion from conversation-driven traffic</li>
                  <li>Buyer dwell time and discovery depth</li>
                  <li>Seller friction during onboarding</li>
                  <li>Language that resonates (&ldquo;treasure,&rdquo; &ldquo;story,&rdquo; &ldquo;discovery&rdquo;)</li>
                  <li>Supply velocity vs discovery quality as buyer demand increases</li>
                </ul>
                <p className="mt-4 italic text-muted-foreground">
                  These notes are a living snapshot of progress and signal, not a roadmap.
                </p>
                <p className="mt-2 italic text-muted-foreground">
                  * Personal note: we closed out 2025 at the physical church thrift shop where I volunteer at $35,000, up from $16,000 in 2024.
                </p>
              </section>

              {/* Product Snapshots */}
              <section className="pt-6">
                <h2 className="text-xl font-serif font-normal mb-4 text-foreground">
                  Product Snapshots (early)
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Image
                      src="/images/founder/buyer-discovery-one.PNG"
                      alt="Buyer Discovery interface showing mood/vibe wheel and voice input"
                      width={100}
                      height={75}
                      className="w-full h-auto border border-border rounded"
                    />
                  </div>
                  <div>
                    <Image
                      src="/images/founder/buyer-discovery-two.PNG"
                      alt="Buyer Discovery interface showing discovery features"
                      width={100}
                      height={75}
                      className="w-full h-auto border border-border rounded"
                    />
                  </div>
                  <div>
                    <Image
                      src="/images/founder/seller-upload-one.PNG"
                      alt="Seller upload interface showing AI-assisted listing creation"
                      width={100}
                      height={75}
                      className="w-full h-auto border border-border rounded"
                    />
                  </div>
                  <div>
                    <Image
                      src="/images/founder/seller-upload-two.PNG"
                      alt="Seller upload interface with AI-assisted features"
                      width={100}
                      height={75}
                      className="w-full h-auto border border-border rounded"
                    />
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
