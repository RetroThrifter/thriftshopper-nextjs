export default function ConciergePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="px-6 py-12 md:py-16 max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-[#000080]">
          Sell without the hassle.
        </h1>

        <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 max-w-2xl mx-auto">
          ThriftShopper Concierge handles pricing, listing, buyer matching, and shipping — so
          your items find the right home with minimal effort from you.
        </p>

        {/* Scroll-to-Intake CTA */}
        <a
          href="#intake"
          className="inline-flex items-center justify-center rounded-xl px-8 py-4 font-semibold text-white"
          style={{ backgroundColor: "#000080" }}
        >
          Start Concierge Intake
        </a>

        {/* Single callout box (keep ONE) */}
        <section className="px-6 py-10 max-w-3xl mx-auto text-center bg-[#F6F7FA] rounded-2xl mt-10">
          <h3 className="text-2xl font-bold mb-3">Prefer to sell yourself?</h3>
          <p className="text-gray-700 mb-6">
            ThriftShopper also supports independent sellers who want full control over pricing,
            listings, and buyer conversations.
          </p>
          <a href="/for-sellers" className="inline-block font-semibold text-[#000080] underline">
            Learn about selling on ThriftShopper →
          </a>
        </section>
      </section>

      {/* How it works */}
      <section className="px-6 py-12 max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-[#000080]">
          How Concierge Works
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white border rounded-2xl p-6">
            <div className="text-xl font-bold text-[#000080] mb-2">1. You tell us about your items</div>
            <p className="text-gray-700">
              Share a few details and photos — or let us know if you’d like help capturing them.
            </p>
          </div>

          <div className="bg-white border rounded-2xl p-6">
            <div className="text-xl font-bold text-[#000080] mb-2">2. We price and list</div>
            <p className="text-gray-700">
              Using market data, buyer demand, and condition, we position your items to sell — not sit.
            </p>
          </div>

          <div className="bg-white border rounded-2xl p-6">
            <div className="text-xl font-bold text-[#000080] mb-2">3. We handle buyers & shipping</div>
            <p className="text-gray-700">
              We manage questions, offers, and logistics so you don’t have to.
            </p>
          </div>

          <div className="bg-white border rounded-2xl p-6">
            <div className="text-xl font-bold text-[#000080] mb-2">4. You get paid</div>
            <p className="text-gray-700">
              Once your item sells, you receive your payout — simple and transparent.
            </p>
          </div>
        </div>
      </section>

      {/* Intake */}
      <section id="intake" className="px-6 py-14 max-w-4xl mx-auto">
        <div className="bg-[#F6F7FA] rounded-2xl p-8 md:p-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#000080]">
            Ready to get started?
          </h2>

          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            Email us what you’d like to sell. Include a few photos (if you have them), your city/state,
            and anything you know about the item (brand, age, condition).
          </p>

          {/* Reliable email action */}
          <a
            href="mailto:connie@thriftshopper.com?subject=Concierge%20Intake"
            className="inline-flex items-center justify-center rounded-xl px-8 py-4 font-semibold text-white"
            style={{ backgroundColor: "#000080" }}
          >
            Email Concierge Intake
          </a>

          {/* Fallback (works even when mailto fails) */}
          <div className="mt-6 text-gray-700">
            If the button doesn’t open email on your device, send a note to:
            <div className="font-semibold text-[#000080] mt-1">connie@thriftshopper.com</div>
          </div>
        </div>
      </section>
    </main>
  );
}