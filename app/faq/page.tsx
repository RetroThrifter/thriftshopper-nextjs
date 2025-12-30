export default function FAQPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-8" style={{ color: "#000080" }}>
          Frequently Asked Questions
        </h1>

        <div className="prose prose-lg max-w-none">
          <div className="text-lg leading-relaxed space-y-6 text-foreground">
            <p className="text-muted-foreground italic">
              FAQ content coming soon. We&apos;re working on comprehensive answers to your questions.
            </p>
            <p>
              In the meantime, feel free to{" "}
              <a
                href="mailto:support@thriftshopper.com"
                className="underline hover:opacity-80"
                style={{ color: "#000080" }}
              >
                reach out to us
              </a>{" "}
              with any questions.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

