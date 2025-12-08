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
    title: "My Latest Find: Reclaimed Treasures at Lumber+Salt",
    date: "December 7, 2025",
    image: "/lumber-salt-sign.jpg",
    description: "My car has thrift-radar. It self-drives toward the coolest, most interesting shops filled with endless stories. Lumber + Salt and meeting Nicole and Brooke was the highlight of yesterday. Just check out this merchandising by Brooke. It makes you want to buy the entire wall of teacups, cigar boxes and all! They are so excited about ThriftShopper that they gave me this wonderful sweatshirt, perfect while engineering the final touches on TS on these cold not-yet-winter nights. More to come from this wonderful story-filled shop on the east end of Long Island.",
    keywords: ["lumber+salt", "jamesport", "teacups", "cigar boxes", "reclaimed treasures"],
  }
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            The ThriftShopper Blog
          </h1>
          <p className="text-pretty text-lg text-muted-foreground">
            Stories, tips, and insights from the world of thrifting and sustainable shopping
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden transition-all hover:shadow-lg">
              <div className="relative aspect-video w-full overflow-hidden">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <time className="text-sm text-muted-foreground">{post.date}</time>
                <h2 className="mt-2 text-balance text-xl font-bold text-foreground">{post.title}</h2>
                <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">{post.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {post.keywords.map((keyword) => (
                    <span
                      key={keyword}
                      className="rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" size="lg" asChild>
            <a href="/">Back to Home</a>
          </Button>
        </div>
      </div>
    </div>
  )
}
