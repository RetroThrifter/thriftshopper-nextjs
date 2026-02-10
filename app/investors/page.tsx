import Image from "next/image"

const headingColor = "#191970"

export default function InvestorsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto py-10 px-4 sm:px-6">
        <div className="space-y-10">
          <header className="space-y-2">
            <h1 className="text-3xl sm:text-4xl font-serif font-normal" style={{ color: headingColor }}>
              ThriftShopper
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground">
              The Buyer-First Discovery Marketplace for Secondhand Goods
            </p>
          </header>

          <div className="prose prose-sm sm:prose-base max-w-none text-foreground">
            <div className="space-y-8 text-base leading-relaxed">
              <p>
                ThriftShopper is reimagining recommerce by flipping the marketplace model. Instead
                of forcing buyers to search endless listings, we use predictive signals to surface
                items they did not know they were looking for but instantly want. This is
                secondhand shopping as discovery, not search.
              </p>

              <section>
                <h2 className="text-xl font-serif font-normal mb-3" style={{ color: headingColor }}>
                  The Problem
                </h2>
                <ul className="list-disc list-outside space-y-2 ml-6 pl-2">
                  <li>Secondhand marketplaces are optimized for sellers, not buyers.</li>
                  <li>Buyers must hunt, filter, and guess, leading to fatigue and abandoned intent.</li>
                  <li>Sellers compete in oversaturated feeds, racing to the bottom on price.</li>
                  <li>Platforms optimize for volume, not delight, trust, or storytelling.</li>
                  <li>High-quality inventory gets buried. Buyers leave before magic happens.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-serif font-normal mb-3" style={{ color: headingColor }}>
                  Our Insight
                </h2>
                <p>
                  People do not shop secondhand with a SKU in mind. They shop with mood, curiosity,
                  taste, and intention. ThriftShopper captures and predicts those signals, turning
                  latent interest into joyful discovery through The Magic of Discovery&trade;,
                  filed for use in online marketplaces.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-serif font-normal mb-3" style={{ color: headingColor }}>
                  The Solution
                </h2>
                <p>
                  ThriftShopper is a buyer-first, AI-driven discovery marketplace for unique,
                  non-commodity secondhand goods. Instead of search, we enable:
                </p>
                <ul className="list-disc list-outside space-y-2 ml-6 pl-2">
                  <li>Vibe-driven discovery across home, furniture, collectibles, art, and vintage goods.</li>
                  <li>Natural language and visual inputs that reflect how people actually shop.</li>
                  <li>AI-assisted listings that reduce seller friction and increase quality.</li>
                </ul>
                <p className="mt-3">
                  Discovery, not search. Treasure, not inventory.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-serif font-normal mb-3" style={{ color: headingColor }}>
                  What We&apos;re Building
                </h2>
                <ul className="list-disc list-outside space-y-2 ml-6 pl-2">
                  <li>A discovery-led feed that learns buyer taste over time.</li>
                  <li>Seller onboarding optimized for quality, not scale.</li>
                  <li>AI-assisted listing enrichment (titles, descriptions, pricing).</li>
                  <li>A reputation and trust layer that compounds with use.</li>
                  <li>The Magic of Discovery&trade; as a protected framework for buyer-first recommerce.</li>
                </ul>
                <p className="mt-3">
                  This is infrastructure for how people actually shop secondhand.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-serif font-normal mb-3" style={{ color: headingColor }}>
                  Market Opportunity
                </h2>
                <p>
                  Secondhand is one of the fastest-growing global commerce categories.
                </p>
                <ul className="list-disc list-outside space-y-2 ml-6 pl-2">
                  <li>~$600B global secondhand market today, projected to exceed $1T+ over the next decade.</li>
                  <li>Strong growth across non-apparel categories: furniture, homeware, collectibles, art, vintage, and specialty goods.</li>
                </ul>
                <h3 className="mt-4 text-base font-semibold" style={{ color: headingColor }}>
                  White Space &amp; Opportunity
                </h3>
                <ul className="list-disc list-outside space-y-2 ml-6 pl-2">
                  <li>Existing platforms are optimized for search, not discovery.</li>
                  <li>No platform owns vibe-driven secondhand shopping for unique goods.</li>
                  <li>5,000+ charitable thrift shops and countless independent sellers remain offline-only or under-monetized.</li>
                  <li>ThriftShopper is built to own discovery in this market.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-serif font-normal mb-3" style={{ color: headingColor }}>
                  Early Traction
                </h2>
                <p>
                  We are intentionally scaling with control and signal quality.
                </p>
                <ul className="list-disc list-outside space-y-2 ml-6 pl-2">
                  <li>250+ waitlist signups, organic and inbound.</li>
                  <li>500+ products onboarded from a small group of early sellers.</li>
                  <li>Sellers curated for quality, storytelling, and repeat inventory.</li>
                  <li>Controlled beta launching before the end of Q1.</li>
                  <li>Early engagement validates strong buyer response to discovery-based flows over traditional search.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-serif font-normal mb-3" style={{ color: headingColor }}>
                  Business Model
                </h2>
                <p className="font-semibold">
                  A Co-Op Marketplace with Institutional-Grade Economics
                </p>
                <p>
                  ThriftShopper is designed as a co-op-inspired marketplace, aligning incentives
                  between sellers, buyers, and the platform.
                </p>
                <h3 className="mt-4 text-base font-semibold" style={{ color: headingColor }}>
                  The Two-Business-Unit Model
                </h3>
                <h4 className="mt-3 text-base font-semibold" style={{ color: headingColor }}>
                  Business Unit 1: ThriftShopper Marketplace
                </h4>
                <ul className="list-disc list-outside space-y-2 ml-6 pl-2">
                  <li>Consumer-facing co-op.</li>
                  <li>Discovery-driven marketplace for secondhand goods.</li>
                  <li>Sellers participate in governance and long-term value creation.</li>
                  <li>Revenue: 10-15% transaction fees plus premium seller services.</li>
                  <li>Investors hold a minority equity stake with standard liquidation preferences.</li>
                </ul>
                <p className="mt-3">
                  This structure drives trust, quality, and durable supply.
                </p>
                <h4 className="mt-3 text-base font-semibold" style={{ color: headingColor }}>
                  Business Unit 2: ThriftShopper Intelligence
                </h4>
                <ul className="list-disc list-outside space-y-2 ml-6 pl-2">
                  <li>B2B SaaS and data platform.</li>
                  <li>Predictive analytics, trend forecasting, and demand signals derived from marketplace behavior.</li>
                  <li>Products include subscriptions, licensing, white-label tools, and API access.</li>
                  <li>Traditional corporate structure.</li>
                  <li>100% investor-owned.</li>
                </ul>
                <p className="mt-3">
                  This is where enterprise-scale value and expansion multiples are created.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-serif font-normal mb-3" style={{ color: headingColor }}>
                  Why Now
                </h2>
                <ul className="list-disc list-outside space-y-2 ml-6 pl-2">
                  <li>AI now enables taste-based prediction at scale.</li>
                  <li>Buyers are fatigued by infinite-scroll search marketplaces.</li>
                  <li>Sellers want differentiation, not commoditization.</li>
                  <li>Recommerce is massive, but discovery is still broken.</li>
                  <li>ThriftShopper sits at the intersection of AI, trust, and taste.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-serif font-normal mb-3" style={{ color: headingColor }}>
                  Founder
                </h2>
                <p className="font-semibold">Cornelia “Connie” Connors</p>
                <p className="text-muted-foreground">Founder &amp; CEO</p>
                <ul className="list-disc list-outside space-y-2 ml-6 pl-2">
                  <li>Founder and former CEO of HitTail, one of the earliest SEO optimization tools.</li>
                  <li>Named one of BusinessWeek&apos;s Best Products of 2006.</li>
                  <li>Built and successfully sold the company.</li>
                  <li>40+ year career in technology, marketing, and digital platforms.</li>
                  <li>Former founder of Connors Communications (sold), advising and launching companies including Amazon, Disney, and Priceline.</li>
                  <li>Adjunct professor teaching storytelling, media, and AI.</li>
                </ul>
                <h3 className="mt-4 text-base font-semibold" style={{ color: headingColor }}>
                  Founder-Market Fit
                </h3>
                <p>
                  Connie volunteers weekly at her local charitable thrift shop, working directly
                  with inventory, pricing, and buyer behavior. By applying pattern recognition and
                  merchandising strategy, she helped grow revenue from $16K in 2024 to $35K in 2025
                  without increasing inventory volume or footprint. ThriftShopper was initially
                  built full-stack by the founder to validate predictive discovery, seller
                  workflows, and buyer engagement before raising institutional capital.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-serif font-normal mb-3" style={{ color: headingColor }}>
                  Fundraising
                </h2>
                <p>
                  We are preparing to raise $2-5M to expand product and engineering, scale curated
                  seller onboarding, advance predictive discovery and intelligence systems, and
                  launch and iterate post-beta with speed and discipline. We are assembling a
                  small, high-signal investor group aligned with long-term value creation.
                </p>
              </section>

              <section className="pt-2">
                <h2 className="text-xl font-serif font-normal mb-3" style={{ color: headingColor }}>
                  Product Preview
                </h2>
                <p>
                  Early beta screens showing discovery-first browsing, AI-assisted seller
                  workflows, and live marketplace activity.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
                  <div>
                    <Image
                      src="/screen-one-mood.PNG"
                      alt="Buyer discovery mood screen preview"
                      width={420}
                      height={900}
                      className="w-full h-auto border border-border rounded"
                    />
                  </div>
                  <div>
                    <Image
                      src="/screen-two-upload.PNG"
                      alt="AI-assisted seller upload screen preview"
                      width={420}
                      height={900}
                      className="w-full h-auto border border-border rounded"
                    />
                  </div>
                  <div>
                    <Image
                      src="/screen-three-dash.PNG"
                      alt="Marketplace activity dashboard preview"
                      width={420}
                      height={900}
                      className="w-full h-auto border border-border rounded"
                    />
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-serif font-normal mb-3" style={{ color: headingColor }}>
                  Learn More
                </h2>
                <p>
                  For investor materials, demos, or introductions:{" "}
                  <a href="mailto:connie@thriftshopper.com" className="text-primary hover:underline">
                    connie@thriftshopper.com
                  </a>
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
