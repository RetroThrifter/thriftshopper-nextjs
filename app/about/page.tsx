import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto py-12 px-4">
        <h1 className="text-4xl font-serif font-bold mb-8" style={{ color: "#000080" }}>
          About Us
        </h1>

        <div className="prose prose-lg max-w-none">
          <div className="text-lg leading-relaxed space-y-6 text-foreground">
            <p>
              ThriftShopper is the first buyer discovery marketplace for secondhand treasures, allowing sellers to easily list treasures for buyers to discovery, not search and scroll for.
            </p>

            <p>
              The company was founded in 2025 by Connie Connors, a serial entrepreneur and studied "thrifter" or as her friends say, a "thriftslayer," who wants to bring the magic of discovery to online shopping. You can find her on Saturday mornings where she volunteers at the local church thrift shop, or follow her car anywhere because it has autopilot braking for anything secondhand.
            </p>

            <p>
              She loves meeting shop managers and inspired buyers. Connie&apos;s passion is hearing the stories that make every treasure, magical. Her mascot is her Wizard of Oz rhinestone encrusted belt with Dorothy and team on the yellow brick road. She&apos;s always happy to hear about your latest find, and perhaps your new mascot or collectible.{" "}
              <a href="mailto:connie@thriftshopper.com" className="text-primary hover:underline">
                connie@thriftshopper.com
              </a>
              .
            </p>

            <div className="mt-8">
              <Image
                src="/dorothy-belt.JPG"
                alt="Wizard of Oz rhinestone encrusted belt with Dorothy and team on the yellow brick road"
                width={600}
                height={400}
                className="rounded-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
