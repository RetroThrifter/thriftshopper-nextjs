export default function ConciergePage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto py-12 px-4">
        <h1 className="text-4xl font-serif font-bold mb-8" style={{ color: "#000080" }}>
          Sell without the hassle.
        </h1>

        <div className="prose prose-lg max-w-none">
          <div className="text-lg leading-relaxed space-y-6 text-foreground">
            <p>
              ThriftShopper Concierge handles pricing, listing, buyer matching, and shipping — so
              your items find the right home with minimal effort from you.
            </p>

            <p className="text-muted-foreground">
              For sellers who want their items handled thoughtfully, end to end.
            </p>
          </div>
        </div>

        {/* How it works */}
        <section className="mt-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8" style={{ color: "#000080" }}>
            How Concierge Works
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-muted/30 border rounded-xl p-6">
              <div className="text-xl font-serif font-bold mb-2" style={{ color: "#000080" }}>1. You tell us about your items</div>
              <p className="text-foreground">
                Share a few details and photos — or let us know if you'd like help capturing them.
              </p>
            </div>

            <div className="bg-muted/30 border rounded-xl p-6">
              <div className="text-xl font-serif font-bold mb-2" style={{ color: "#000080" }}>2. We price and list</div>
              <p className="text-foreground">
                Using market data, buyer demand, and condition, we position your items to sell — not sit.
              </p>
            </div>

            <div className="bg-muted/30 border rounded-xl p-6">
              <div className="text-xl font-serif font-bold mb-2" style={{ color: "#000080" }}>3. We handle buyers & shipping</div>
              <p className="text-foreground">
                We manage questions, offers, and logistics so you don't have to.
              </p>
            </div>

            <div className="bg-muted/30 border rounded-xl p-6">
              <div className="text-xl font-serif font-bold mb-2" style={{ color: "#000080" }}>4. You get paid</div>
              <p className="text-foreground">
                Once your item sells, you receive your payout — simple and transparent.
              </p>
            </div>
          </div>
        </section>

        {/* Intake */}
        <section className="mt-12">
          <div className="bg-muted/40 rounded-xl p-6 md:p-8 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4" style={{ color: "#000080" }}>
              Ready to get started?
            </h2>

            <p className="text-foreground mb-6 max-w-2xl mx-auto">
              Email us what you'd like to sell. Include a few photos (if you have them), your city/state,
              and anything you know about the item (brand, age, condition).
            </p>

            {/* Primary email action */}
            <a
              href="mailto:connie@thriftshopper.com?subject=Concierge%20Intake"
              className="inline-flex items-center justify-center rounded-lg px-8 py-4 font-semibold text-white"
              style={{ backgroundColor: "#000080" }}
            >
              Email Concierge Intake
            </a>

            {/* Helper text */}
            <p className="mt-4 text-sm text-muted-foreground">
              If the button doesn&apos;t open email on your device, send a note to: connie@thriftshopper.com
            </p>
          </div>
        </section>

        {/* Prefer to sell yourself? */}
        <section className="mt-8">
          <div className="bg-muted/40 rounded-xl p-6 text-center">
            <h3 className="text-2xl font-serif font-bold mb-3" style={{ color: "#000080" }}>Prefer to sell yourself?</h3>
            <p className="text-foreground mb-6">
              ThriftShopper also supports independent sellers who want full control over pricing,
              listings, and buyer conversations.
            </p>
            <a href="/for-sellers" className="inline-block font-semibold underline" style={{ color: "#000080" }}>
              Learn about selling on ThriftShopper →
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
