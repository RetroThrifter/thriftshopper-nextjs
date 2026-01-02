export default function SupportPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-serif font-bold mb-8" style={{ color: "#000080" }}>
          Support
        </h1>
        <div className="prose prose-lg max-w-none space-y-6">
          <p>
            ThriftShopper is designed to feel different from traditional resale platforms — slower, more thoughtful, and more human.
          </p>
          <p>
            This page explains how things work, why some choices are intentional, and where to go if you need help.
          </p>
          <p>
            If you're new here, start with Quick Tips below.
          </p>

          <h2 className="text-2xl font-serif font-semibold mt-8 mb-4">Quick Tips</h2>
          
          <h3 className="text-xl font-serif font-semibold mt-6 mb-3">For Buyers</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Browse curated finds at your own pace.</li>
            <li>Use discovery tools like the Mood Wheel, search, or voice input to explore items you didn't know you were looking for.</li>
            <li>Checkout is secure with Stripe, and you can track orders in your Canvas.</li>
            <li>Most sales are final — part of what keeps secondhand honest and trusted.</li>
          </ul>

          <h3 className="text-xl font-serif font-semibold mt-6 mb-3">For Sellers</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Upload or take photos — think storefront glimpses, not perfection.</li>
            <li>Clear, honest photos matter more than polish.</li>
            <li>AI tools can help draft listings, but you're always in control.</li>
            <li>Payouts happen through Stripe Connect. Turn on notifications in Settings so you don't miss important updates.</li>
          </ul>

          <h2 className="text-2xl font-serif font-semibold mt-8 mb-4">Stories Matter</h2>
          <p>
            Secondhand works best when there's a story behind it — whether you're buying or selling.
          </p>

          <h2 className="text-2xl font-serif font-semibold mt-8 mb-4">Your Canvas</h2>
          <p>
            Your Canvas is your personal hub for favorites, orders, messages, and listings.
          </p>

          <h2 className="text-2xl font-serif font-semibold mt-8 mb-4">Selling on ThriftShopper</h2>
          <p className="text-muted-foreground mb-4">
            First time selling? Start here.
          </p>

          <h3 className="text-xl font-serif font-semibold mt-6 mb-3">Start with one great item</h3>
          <p>
            The best first listings have a story — something well-made, interesting, collectible, or simply loved. One thoughtful listing often performs better than many rushed ones.
          </p>

          <h3 className="text-xl font-serif font-semibold mt-6 mb-3">Take honest photos</h3>
          <p>
            Secondhand isn't perfect — and that's the point. Good light, clear views, and visible wear build trust. Small scuffs or patina often add character, not concern.
          </p>

          <h3 className="text-xl font-serif font-semibold mt-6 mb-3">You'll see your photo right away</h3>
          <p>
            When you upload a photo, your listing begins immediately. Behind the scenes, ThriftShopper analyzes the image to help suggest a title, description, and price. Details may fill in gradually — that's normal.
          </p>

          <h3 className="text-xl font-serif font-semibold mt-6 mb-3">AI suggestions are optional</h3>
          <p>
            Think of AI as a second opinion, not a decision-maker.
          </p>
          <p>
            You can edit anything, ignore suggestions, or overwrite text at any time. Your typing always takes priority.
          </p>

          <h3 className="text-xl font-serif font-semibold mt-6 mb-3">Pricing is about fit, not speed</h3>
          <p>
            Suggested prices reflect real buyer interest, condition cues, and recent sales — not just what others are asking. Good matches lead to fewer questions and smoother sales.
          </p>

          <h3 className="text-xl font-serif font-semibold mt-6 mb-3">Discovery works differently here</h3>
          <p>
            Your item may appear in partial views or grouped with others as buyers explore. This helps the right people find it — even if they weren't searching for it yet.
          </p>

          <h3 className="text-xl font-serif font-semibold mt-6 mb-3">Start small</h3>
          <p>
            We intentionally slow mass uploads. Fewer, more thoughtful listings tend to perform better over time. You can always add more later.
          </p>

          <h2 className="text-2xl font-serif font-semibold mt-8 mb-4">Common Questions</h2>

          <h3 className="text-xl font-serif font-semibold mt-6 mb-3">Why does it sometimes take longer to upload a listing?</h3>
          <p>
            ThriftShopper doesn't just upload a photo — it reads it.
          </p>
          <p>
            When you add a listing, our system analyzes your image to understand what the item is, its condition, comparable pricing, and how buyers are searching for it. That extra step helps your item reach the right buyer, not just the fastest one.
          </p>
          <p>
            You'll see your photo right away, and details continue to fill in as analysis completes.
          </p>

          <h3 className="text-xl font-serif font-semibold mt-6 mb-3">Why does the app feel different from other resale apps?</h3>
          <p>
            Most resale apps are optimized for speed and volume.
          </p>
          <p>
            ThriftShopper is optimized for fit — matching items with buyers who are actually looking for them. That means fewer generic listings, more thoughtful descriptions, and a discovery experience that feels more like real shopping than scrolling.
          </p>
          <p>
            It may feel slower at times — but it's working harder behind the scenes.
          </p>

          <h3 className="text-xl font-serif font-semibold mt-6 mb-3">Why do some fields auto-fill while I'm editing?</h3>
          <p>
            Our AI suggests titles, descriptions, and pricing as it learns more about your item.
          </p>
          <p>
            You're always in control:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>You can edit anything</li>
            <li>You can ignore suggestions</li>
            <li>You can overwrite text at any time</li>
          </ul>
          <p>
            If you start typing, your edits take priority.
          </p>

          <h3 className="text-xl font-serif font-semibold mt-6 mb-3">Why does pricing sometimes change or get suggested differently than I expected?</h3>
          <p>
            Pricing suggestions are based on:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Current market demand</li>
            <li>Condition signals from photos</li>
            <li>Similar items buyers are engaging with</li>
            <li>Recent sales (not just listings)</li>
          </ul>
          <p>
            These are suggestions, not requirements. Think of them as a second opinion — helpful, but optional.
          </p>

          <h3 className="text-xl font-serif font-semibold mt-6 mb-3">Why do photos matter so much?</h3>
          <p>
            Secondhand isn't perfect — and that's the point.
          </p>
          <p>
            Clear, honest photos help buyers understand the story of an item: its age, wear, quirks, and charm. A small scuff or patina often adds character, not value loss — but buyers need to see it.
          </p>
          <p>
            Good photos lead to fewer questions and happier matches.
          </p>

          <h3 className="text-xl font-serif font-semibold mt-6 mb-3">Why don't you accept everything?</h3>
          <p>
            ThriftShopper is a curated marketplace.
          </p>
          <p>
            We focus on items with story, craftsmanship, collectibility, or strong buyer interest. Limiting what's listed helps:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Buyers trust what they're seeing</li>
            <li>Sellers get more meaningful engagement</li>
            <li>The marketplace stay human-scaled and navigable</li>
          </ul>
          <p>
            If an item isn't a fit, it's about alignment — not worth.
          </p>
          <p>
            Over time, we expect to explore additional marketplaces and brand spaces that welcome different types of items. What belongs here is intentional.
          </p>

          <h3 className="text-xl font-serif font-semibold mt-6 mb-3">Why does discovery look different from traditional grids?</h3>
          <p>
            We designed discovery to feel like wandering — not searching a warehouse.
          </p>
          <p>
            You may see partial images, grouped items, or unexpected connections. This mirrors how people actually shop in real life: noticing, pausing, circling back.
          </p>
          <p>
            If something catches your eye, tap it — the details are always there.
          </p>

          <h3 className="text-xl font-serif font-semibold mt-6 mb-3">Why can't I instantly list hundreds of items?</h3>
          <p>
            We intentionally slow mass uploads.
          </p>
          <p>
            This protects buyers, supports fair pricing, and helps each item find its right audience. Thoughtful listings tend to perform better — and sellers often sell more over time by listing fewer, better items.
          </p>

          <h3 className="text-xl font-serif font-semibold mt-6 mb-3">Why does messaging feel guided or limited?</h3>
          <p>
            We reduce friction and noise in conversations.
          </p>
          <p>
            Most buyer–seller questions are predictable. Guided messaging helps:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Prevent misunderstandings</li>
            <li>Reduce ghosting</li>
            <li>Keep conversations respectful and efficient</li>
          </ul>
          <p>
            If something needs human support, we step in.
          </p>

          <h3 className="text-xl font-serif font-semibold mt-6 mb-3">Why does ThriftShopper sometimes ask me to wait?</h3>
          <p>
            Because good matching takes a moment.
          </p>
          <p>
            Whether it's verifying a seller, processing a payment, or refining a match, pauses are usually about accuracy — not delay. We'd rather get it right than rush it through.
          </p>

          <h2 className="text-2xl font-serif font-semibold mt-8 mb-4">About This Beta</h2>
          <p>
            ThriftShopper is currently in beta.
          </p>
          <p>
            That means some features are still evolving, and we're actively learning from how people use the platform.
          </p>
          <p>
            We're grateful you're here early — your feedback helps shape what comes next.
          </p>
          <p>
            Questions or feedback?
            <br />
            Email <a href="mailto:beta@thriftshopper.com" className="text-primary hover:underline">beta@thriftshopper.com</a>
          </p>

          <h2 className="text-2xl font-serif font-semibold mt-8 mb-4">Need Help?</h2>
          <p>
            We're real people behind this.
          </p>
          <p>
            If something feels confusing, stuck, or off, reach out. We're building this with care, and your experience matters.
          </p>
          <p>
            <strong>Contact Support:</strong>
            <br />
            <a href="mailto:support@thriftshopper.com" className="text-primary hover:underline">support@thriftshopper.com</a>
          </p>

          <p className="mt-8 italic">
            ThriftShopper is built for discovery, not speed alone.
            <br />
            Thanks for slowing down with us.
          </p>
        </div>
      </div>
    </div>
  )
}

