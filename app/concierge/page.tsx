export default function ConciergePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
    <section className="px-6 py-12 md:py-16 max-w-4xl mx-auto text-center">

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-[#000080]">
          Sell without the hassle.
        </h1>

       <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-7 max-w-2xl mx-auto">
  ThriftShopper Concierge handles pricing, listing, buyer matching, and shipping — so your items find the right home with minimal effort from you.
</p>


        <a
          href="#intake"
          className="inline-flex items-center justify-center rounded-xl px-8 py-4 font-semibold text-white"
          style={{ backgroundColor: "#000080" }}
        >
          Start Concierge Intake
        </a>
      </section>
<section className="px-6 py-8 max-w-3xl mx-auto text-center bg-[#F6F7FA] rounded-2xl my-8">
  <h3 className="text-2xl font-bold mb-3">
    Prefer to sell yourself?
  </h3>
  <p className="text-gray-700 mb-6">
    ThriftShopper also supports independent sellers who want full control over pricing,
    listings, and buyer conversations.
  </p>
  <a
    href="/for-sellers"
    className="inline-block font-semibold text-[#000080] underline"
  >
    Learn about selling on ThriftShopper →
  </a>
</section>
<section className="px-6 py-12 max-w-3xl mx-auto text-center bg-[#F6F7FA] rounded-2xl my-12">
  <h3 className="text-2xl font-bold mb-3">
    Want to sell on your own?
  </h3>
  <p className="text-gray-700 mb-6">
    ThriftShopper also supports independent sellers who want full control over pricing,
    listings, and buyer conversations.
  </p>
  <a
    href="/for-sellers"
    className="inline-block font-semibold text-[#000080] underline"
  >
    Learn about selling on ThriftShopper →
  </a>
</section>

      {/* How it works */}
      <section className="px-6 py-14 max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-[#000080]">
          How Concierge Works
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <div className="text-xl font-bold text-[#000080]">1. You tell us about your items</div>
            <p className="text-gray-700 leading-relaxed mt-2">
              Share a few details and photos — or let us know if you’d like help capturing them.
            </p>
          </div>

          <div>
            <div className="text-xl font-bold text-[#000080]">2. We price and list</div>
            <p className="text-gray-700 leading-relaxed mt-2">
              Using market data, buyer demand, and condition, we position your items to sell — not
              sit.
            </p>
          </div>

          <div>
            <div className="text-xl font-bold text-[#000080]">3. We handle buyers & shipping</div>
            <p className="text-gray-700 leading-relaxed mt-2">
              We manage questions, offers, and logistics — and get it out the door.
            </p>
          </div>

          <div>
            <div className="text-xl font-bold text-[#000080]">4. You get paid</div>
            <p className="text-gray-700 leading-relaxed mt-2">
              After the sale, you receive your payout — minus the Concierge fee.
            </p>
          </div>
        </div>
      </section>

      {/* Split */}
      <section className="px-6 py-14 max-w-4xl mx-auto">
        <div className="rounded-2xl border border-gray-200 p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#000080]">The split</h2>
          <div className="mt-4 grid sm:grid-cols-2 gap-6">
            <div className="rounded-xl bg-gray-50 p-5">
              <div className="text-sm text-gray-600">Concierge fee</div>
              <div className="text-3xl font-bold text-[#000080]">30%</div>
            </div>
            <div className="rounded-xl bg-gray-50 p-5">
              <div className="text-sm text-gray-600">Seller receives</div>
              <div className="text-3xl font-bold text-[#000080]">70%</div>
            </div>
          </div>
          <p className="text-gray-600 mt-4">
            Comparable to premium resale services — without mass-market pricing pressure.
          </p>
        </div>
      </section>

      {/* Best for / Not a fit */}
      <section className="px-6 py-14 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10">
          <div className="rounded-2xl border border-gray-200 p-8">
            <h3 className="text-xl font-bold text-[#000080]">Best for</h3>
            <ul className="mt-4 list-disc pl-5 text-gray-700 space-y-2">
              <li>Estate items</li>
              <li>Design pieces</li>
              <li>Collectibles</li>
              <li>Small curated sets</li>
              <li>Sellers who don’t want to manage listings</li>
            </ul>
            <p className="text-gray-600 mt-4">
              If you love your things but hate selling them — this is for you.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 p-8">
            <h3 className="text-xl font-bold text-[#000080]">Not a fit</h3>
            <ul className="mt-4 list-disc pl-5 text-gray-700 space-y-2">
              <li>Fast fashion</li>
              <li>Large bulk clothing lots</li>
              <li>Items better suited for donation</li>
            </ul>
          </div>
        </div>
      </section>

    <a
  href="mailto:connie@thriftshopper.com?subject=Concierge%20Intake"
  className="inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold shadow-sm hover:shadow transition"
  style={{ backgroundColor: "#000080", color: "white" }}
>
  Start Concierge Intake
</a>

    </main>
  );
}
