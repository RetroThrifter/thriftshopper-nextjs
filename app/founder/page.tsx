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
                <ul className="list-disc list-outside space-y-2 ml-6 pl-2">
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
                  Stack{" "}
                  <span className="text-xs text-muted-foreground">
                    * See full technical leadership and implementation below.
                  </span>
                </h2>
                <ul className="list-disc list-outside space-y-2 ml-6 pl-2">
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
                  <li>Nov–Jan: 225+ waitlist signups with no paid marketing, no SEO, and no formal launch, driven primarily by domain discovery and word of mouth.</li>
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
                  <li>Developing future strategies for potential vertical deployment of 25+ domains such as grandmotherschina.com</li>
                  <li>Setting up socials for ThriftShopper</li>
                </ul>
              </section>

              {/* Current Status */}
              <section>
                <h2 className="text-xl font-serif font-normal mb-3 text-foreground">
                  Current Status
                </h2>
                <ul className="list-disc list-outside space-y-2 ml-6 pl-2">
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
                <ul className="list-disc list-outside space-y-2 ml-6 pl-2">
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

              {/* Technical Leadership & Implementation */}
              <section>
                <h2 className="text-xl font-serif font-normal mb-3 text-foreground">
                  Technical Leadership &amp; Implementation
                </h2>
                <p>
                  I architected and built ThriftShopper&apos;s entire technical stack from the
                  ground up, driven by speed-to-market and my conviction that the founder should
                  own the product vision at the code level. This isn&apos;t a no-code MVP. It&apos;s a
                  production-grade, multi-sided marketplace with real-time data synchronization,
                  semantic search infrastructure, and a multi-agent AI pipeline engineered to solve
                  the cold start problem every marketplace faces.
                </p>
                <h3 className="mt-4 text-base font-semibold text-foreground">
                  The Core Strategy: Discovery Over Search
                </h3>
                <p>
                  ThriftShopper replaces the traditional search-and-scroll paradigm with
                  multi-modal discovery inputs that make finding secondhand goods feel like
                  entertainment, not work. Every input method feeds the same semantic engine,
                  creating multiple pathways to the same intelligent matching system.
                </p>
                <ul className="list-disc list-outside space-y-2 ml-6 pl-2">
                  <li>
                    <strong>The Vibe Wheel:</strong> TikTok-style swipeable interface where users
                    select moods and aesthetics (cozy, minimalist, maximalist, vintage, modern)
                    and AI surfaces matching inventory.
                  </li>
                  <li>
                    <strong>Voice Search:</strong> Natural speech like &ldquo;show me something for a
                    small apartment that feels warm&rdquo; interpreted by semantic AI, not keywords.
                  </li>
                  <li>
                    <strong>Visual Search:</strong> Photo uploads matched through vision AI to find
                    similar items.
                  </li>
                  <li>
                    <strong>Semantic Discovery:</strong> Natural language queries that understand
                    context, synonyms, and relationships between concepts.
                  </li>
                </ul>
                <h3 className="mt-4 text-base font-semibold text-foreground">
                  Core Technical Challenges Solved
                </h3>
                <ul className="list-disc list-outside space-y-2 ml-6 pl-2">
                  <li>
                    <strong>Multi-Modal Semantic Engine:</strong> Unified discovery system that
                    processes vibe selection, voice, visual, and text inputs through the same
                    semantic layer, powered by a multi-model AI pipeline (OpenAI, Google Cloud,
                    Claude Vision).
                  </li>
                  <li>
                    <strong>Vibe Wheel Architecture:</strong> Swipeable discovery interface with
                    real-time filtering based on an aesthetic taxonomy mapped to product
                    attributes.
                  </li>
                  <li>
                    <strong>Payment Orchestration:</strong> Stripe integration for end-to-end
                    transactions with seller payout functionality.
                  </li>
                  <li>
                    <strong>Voice-Powered Search:</strong> Voice-to-text with semantic search
                    responses tuned for sub-200ms queries.
                  </li>
                  <li>
                    <strong>Real-Time Messaging:</strong> Stream Chat for buyer-seller
                    communication with timeout handlers and fallback messaging for intermittent
                    connection issues.
                  </li>
                  <li>
                    <strong>Database Architecture:</strong> Many-to-many relationships between
                    products, sellers, buyers, and semantic tags with query optimization for scale.
                  </li>
                </ul>
                <h3 className="mt-4 text-base font-semibold text-foreground">
                  Current Technical Stack
                </h3>
                <ul className="list-disc list-outside space-y-2 ml-6 pl-2">
                  <li>
                    <strong>Frontend:</strong> React, mobile-first responsive design, TikTok-style
                    swipe interface, real-time state management.
                  </li>
                  <li>
                    <strong>Backend:</strong> PostgreSQL (Supabase), RESTful APIs, serverless
                    functions.
                  </li>
                  <li>
                    <strong>AI/ML:</strong> Multi-model vision pipeline (GPT-4V, Google Cloud
                    Vision, Claude Vision), semantic embeddings, voice-to-text processing, mood and
                    aesthetic taxonomy mapping.
                  </li>
                  <li>
                    <strong>Infrastructure:</strong> Stripe payments, Stream Chat messaging, cloud
                    storage with CDN.
                  </li>
                  <li>
                    <strong>Deployment:</strong> Production environment with 205+ active users,
                    500+ SKUs, live transactions.
                  </li>
                </ul>
                <h3 className="mt-4 text-base font-semibold text-foreground">
                  Technical Roadmap - Near Term
                </h3>
                <ul className="list-disc list-outside space-y-2 ml-6 pl-2">
                  <li>
                    <strong>Shipping Integration:</strong> Pirate Ship or Shippo API for
                    streamlined fulfillment and real-time tracking.
                  </li>
                  <li>
                    <strong>Semantic Depth:</strong> Hugging Face models for custom embedding
                    generation tuned to the thrift and resale vertical.
                  </li>
                  <li>
                    <strong>Inventory Expansion:</strong> Web scraping infrastructure to
                    auto-populate from existing marketplaces.
                  </li>
                  <li>
                    <strong>Predictive Intelligence:</strong> Pricing algorithms based on
                    historical transaction data and demand signals.
                  </li>
                  <li>
                    <strong>Discovery Refinement:</strong> ML on user swipe patterns to improve
                    vibe-to-product matching accuracy.
                  </li>
                </ul>
                <h3 className="mt-4 text-base font-semibold text-foreground">
                  Technical Roadmap - Scale Phase
                </h3>
                <ul className="list-disc list-outside space-y-2 ml-6 pl-2">
                  <li>Caching layers for performance optimization.</li>
                  <li>GraphQL migration for efficient data fetching.</li>
                  <li>
                    Analytics infrastructure feeding behavioral data back into the recommendation
                    engine.
                  </li>
                  <li>Domain-specific vision model training on thrift product imagery.</li>
                  <li>Personalized discovery feeds based on user history and behavior patterns.</li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
