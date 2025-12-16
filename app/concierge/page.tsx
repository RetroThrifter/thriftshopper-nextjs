export default function ConciergePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="px-6 py-20 md:py-28 max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#000080]">
          Sell without the hassle.
        </h1>

        <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-10">
          ThriftShopper Concierge handles pricing, listing, buyer matching, and shipping — so your
          items find the right home with minimal effort from you.
        </p>

        <a
          href="#intake"
          className="inline-flex items-center justify-center rounded-xl px-8 py-4 font-semibold text-white"
          style={{ backgroundColor: "#000080" }}
        >
          Start Concierge Intake
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

      {/* Intake */}
      <section id="intake" className="px-6 py-20 max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#000080]">
          Ready to get started?
        </h2>
        <p className="text-gray-700 mb-8">
          Tell us a bit about what you’d like to sell. We’ll review your submission and follow up
          personally.
        </p>

        <form className="grid gap-4">
          <input className="border rounded-xl p-3" placeholder="Name" />
          <input className="border rounded-xl p-3" placeholder="Email" />
          <input className="border rounded-xl p-3" placeholder="Location (City/State)" />
          <select className="border rounded-xl p-3">
            <option>Item category</option>
            <option>Collectibles</option>
            <option>Home / Decor</option>
            <option>Furniture</option>
            <option>Art</option>
            <option>Other</option>
          </select>
          <input className="border rounded-xl p-3" placeholder="Approximate number of items" />
          <textarea className="border rounded-xl p-3" rows={4} placeholder="Optional notes" />
          <label className="flex items-center gap-2 text-gray-700">
            <input type="checkbox" />
            I need help with photos
          </label>

          <button
            type="submit"
            className="rounded-xl px-6 py-3 font-semibold text-white"
            style={{ backgroundColor: "#000080" }}
          >
            Submit Concierge Intake
          </button>

          <p className="text-xs text-gray-500">
            (For now, this form doesn’t submit anywhere — we’ll wire it to Supabase/Zapier next.)
          </p>
        </form>
      </section>
    </main>
  );
}
