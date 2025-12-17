"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function AIEnvironmentPage() {
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

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4" style={{ color: "#000080" }}>
          AI and Environmental Concerns
        </h1>
        <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
          We all know that participating in the circular economy by buying and selling preowned items reduces carbon
          footprint, but then do AI-powered marketplaces such as this negate the benefits? There are a lot of factors to
          consider, but as a conversation starter, here are some facts to help foster constructive dialogue. Read the
          latest from{" "}
          <a
            href="https://blog.google/technology/ai/google-ai-energy-efficiency/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
            style={{ color: "#000080" }}
          >
            Google's Blog on energy usage of Gemini
          </a>
          . Chart below.
        </p>

        {/* TL;DR Section */}
        <div className="bg-muted/30 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-serif font-semibold mb-4" style={{ color: "#000080" }}>
            TL;DR (Topline Summary of Below)
          </h2>
          <ul className="space-y-2 text-muted-foreground list-disc list-inside">
            <li>AI is becoming a major energy player, expected to account for 3% of global electricity by 2030.</li>
            <li>Fixes are in progress: renewables, smarter chips, and efficiency tools.</li>
            <li>Transparency and regulation are essential to prevent uncontrolled impacts.</li>
          </ul>
        </div>

        {/* Chart */}
        <div className="mb-12">
          <Image
            src="/ai-energy-chart.jpg"
            alt="Energy per prompt results for large production AI models plotted against LMArena score"
            width={1200}
            height={800}
            className="w-full h-auto rounded-lg border"
          />
          <p className="text-sm text-muted-foreground mt-2 italic">
            Figure 2: Energy per prompt results for large production AI models plotted against LMArena score [22] —
            estimated metrics (gray text) and measured metrics (black, red, and blue text). For similar models and
            parameter counts, the different measurement approaches can lead to large differences in results, e.g. Llama
            3.1 (70B) varies from ~580 to ~3600 prompts per kWh. The results for the median Gemini Apps text prompt
            presented in this paper vary from a more narrowly defined Existing Approach (10,000 prompts per kWh) to the
            more complete Comprehensive Approach (4,167 prompts per kWh) proposed.
          </p>
        </div>

        {/* Main Content Sections */}
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-serif font-semibold mb-4" style={{ color: "#000080" }}>
              Is AI Powering the Planet or Burning it Down?
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              AI saves us time—but at what cost to the grid and the climate? Here's why the digital revolution has an
              energy problem—and what's being done about it.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-serif font-semibold mb-3" style={{ color: "#000080" }}>
              Why the Concern Matters
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Big AI systems demand vast amounts of energy—and that energy comes with an environmental price tag.
              Without transparency or standardized reporting, it's easy to underestimate the scale of the issue.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-serif font-semibold mb-3" style={{ color: "#000080" }}>
              What's Driving the Surge?
            </h3>
            <ul className="space-y-2 text-muted-foreground list-disc list-inside">
              <li>
                <strong>Explosive AI growth:</strong> Model complexity doubles every three months, driving surging
                compute demand.
              </li>
              <li>
                <strong>Flatlining efficiency gains:</strong> While data center PUE (Power Usage Efficiency) hit 1.58 by
                2023, improvements have stalled.
              </li>
              <li>
                <strong>Strained grids:</strong> Power availability is now a major bottleneck for operators worldwide.
              </li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-serif font-semibold mb-3" style={{ color: "#000080" }}>
              How the Industry is Responding
            </h3>
            <ul className="space-y-2 text-muted-foreground list-disc list-inside">
              <li>
                <strong>Cleaner power sources:</strong> Tech giants are investing in nuclear, wind, and solar.
              </li>
              <li>
                <strong>Smart energy systems:</strong> Workloads shift to times when renewable energy is abundant. (I
                have neighbors whose electric provider is offering discounts for things like running your dishwasher at
                night).
              </li>
              <li>
                <strong>Greener hardware:</strong> New AI chips reduce computing energy needs.
              </li>
              <li>
                <strong>AI-for-AI efficiency:</strong> AI tools optimize cooling and workload distribution.
              </li>
              <li>
                <strong>Transparency push:</strong> Efforts are underway to standardize energy and carbon reporting.
              </li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-serif font-semibold mb-3" style={{ color: "#000080" }}>
              Join the Conversation
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Is AI energy use outpacing innovation—or will greener design catch up?
            </p>
          </section>
        </div>

        {/* Back to Home Button */}
        <div className="mt-12 text-center">
          <Button onClick={() => (window.location.href = "/")} size="lg" style={{ backgroundColor: "#000080" }}>
            Back to Home
          </Button>
        </div>
      </main>

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
              <button
                onClick={() => window.open(process.env.NEXT_PUBLIC_CONTACT_FORM_URL || "#", "_blank")}
                className="hover:opacity-80 transition-opacity cursor-pointer"
              >
                Contact
              </button>
              <a href="/marketplace-focus" className="hover:opacity-80 transition-opacity">
                Our Marketplace Focus
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
