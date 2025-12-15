"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

// Blog posts data - add new posts here
const blogPosts = [
  {
    id: 1,
    title: "My Father's Canteen from WWII",
    date: "October 17, 2025",
    image: "/dad-canteen.jpg",
    description:
      "Out of the blue, I received an email from a 5th grader studying WWII who had purchased this canteen on eBay. I'm not exactly sure how he found me and concluded that it belonged to my father. But he wanted to know if I had any stories about it that he could add to his school essay. Suffice to say, I purchased the canteen from him! Stay tuned for other odd family stories found through items that surfaced on online marketplaces.",
    keywords: ["canteen", "WWII", "family stories", "history"],
  },
  {
    id: 2,
    title: "Working in a Thrift Shop: Everyday Oddities",
    date: "October 21, 2025",
    image: "/religious-lamp-oddity.jpg",
    description:
      "I can understand why so many thrifters post 'Does anyone know what this is?' I had to figure out how to assemble this item as I found pieces in bubble wrap and not all in one place. It's really quite unique and beautiful but I'm not sure if you put it in a window, or hang it? And I haven't plugged it in yet. Any interest? Let me know!",
    keywords: ["thrift shop", "oddities", "vintage", "religious items", "holiday", "ornaments"],
  },
  {
    id: 3,
    title: "Giving Thrift Shops",
    date: "November 10, 2025",
    image: "/connie-food-pantry.jpg",
    description:
      "I volunteer at my church thrift shop and we use the proceeds to help purchase food for our food pantry. We offer food to more than 75 families weekly. Often times you'll find real treasures in charitable shops, sometimes buried in back corners. I'll soon post a video tour of our church shop to give you an idea. For many charitable shops, prices are negotiable but take note of where your dollars are going. This is especially true for your donations: think, is this something a shop can sell?",
    keywords: ["charity", "thrift shop", "food pantry", "donations", "community", "volunteer"],
  },
  {
    id: 4,
    title: "You Never Know...",
    date: "November 17, 2025",
    image: "/mug_set.jpg",
    description:
      "Thrift shops that accept donations (mine does as our proceeds go directly to our food pantry) are full of surprises, and stories. There is no shortage of learning and history, and fabulous stories (if I only had more time when customers are shopping to hear them all!) and sometimes you take the good with the bad. 'Could you have just washed the goblets before donating, just a bit?' I say sometimes to myself. Bet you didn't know that these mugs are vintage Fire-King Glamite coffee mugs in a carrier. Look that one up! 1950-1959.",
    keywords: ["vintage", "Fire-King", "thrift shop", "donations", "history", "1950s"],
  },
  {
  id: 5,
  title: "My Latest Find: Reclaimed Treasures",
  date: "December 8, 2025",
  image: "/lumber-salt-sign.JPEG",
  description:
    "My car has thrift-radar. It self-drives toward the coolest, most interesting shops filled with endless stories. Lumber + Salt and meeting Nicole and Brooke was the highlight of yesterday.",
  keywords: ["thrift shop", "antiques", "vintage", "Lumber + Salt", "finds"],
},

]

export default function BlogPage() {
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
            <button
              className="text-sm md:text-base px-3 md:px-4 hover:opacity-80 transition-opacity"
              onClick={() => (window.location.href = "/for-sellers")}
            >
              For Sellers
            </button>
            <button
              className="text-sm md:text-base px-3 md:px-4 hover:opacity-80 transition-opacity"
              onClick={() => (window.location.href = "/for-buyers")}
            >
              For Buyers
            </button>
            <button
              className="text-sm md:text-base px-3 md:px-4 hover:opacity-80 transition-opacity"
              onClick={() => (window.location.href = "/our-story")}
            >
              Our Story
            </button>
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

      {/* Hero Section */}
      <section className="py-12 md:py-16 px-4 bg-muted/30">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4" style={{ color: "#000080" }}>
            The ThriftShopper Blog
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Stories, tips, and insights from the world of thrifting and sustainable shopping
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                <div className="relative h-80 w-full bg-muted/30">
                  <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-contain p-2" />
                </div>
                <CardContent className="p-6">
                  <p className="text-sm text-muted-foreground mb-2">{post.date}</p>
                  <h3 className="text-xl font-serif font-semibold mb-3" style={{ color: "#000080" }}>
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{post.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {post.keywords.map((keyword) => (
                      <span
                        key={keyword}
                        className="text-xs px-2 py-1 rounded-full bg-muted"
                        style={{ color: "#000080" }}
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#000080] text-white py-12 mt-12">
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
              <a href="/blog" className="hover:opacity-80 transition-opacity">
                Blog
              </a>
              <a href="/ai-environment" className="hover:opacity-80 transition-opacity">
                AI and Environment
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
