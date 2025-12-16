export default function ConciergePage() {
    return (
        <main className="min-h-screen bg-white">
            <section className="px-6 py-20 md:py-28 max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#000080]">
                    Sell without the hassle.
                </h1>

                <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 max-w-2xl mx-auto">
                    ThriftShopper Concierge handles pricing, listing, buyer matching, and shipping — so
                    your items find the right home with minimal effort from you.
                </p>

                <a href="#intake" className="inline-flex items-center justify-center rounded-xl px-8 py-4 text-lg font-semibold" style={{ backgroundColor: "#000080", color: "white" }}>Start Concierge Intake</a>


                <section id="intake" className="px-6 py-16 max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#000080]">
                        Ready to get started?
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                        <span className="font-semibold">Tell us a bit about what you’d like to sell.</span>
                        <br />
                        We’ll review your submission and follow up personally.
                    </p>
                </section>
        </main>
    );
}
