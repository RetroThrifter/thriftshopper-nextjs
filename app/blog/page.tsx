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
      "Out of the blue, I received an email from a 5th grader studying WWII who had purchased this canteen on eBay. I'm not exactly sure how he found me, but he did. This is my father's canteen from WWII. He was a combat medic in the 104th Timberwolf Infantry Division and was awarded two Purple Hearts and a Bronze Star. He was a quiet hero. He never spoke about his service, but I know he was proud of it. I'm so grateful to this young man for reaching out to me and for his interest in WWII history.",
    keywords: ["canteen", "WWII", "family stories", "history"],
  },
  {
    id: 2,
    title: "Working in a Thrift Shop: Everyday Oddities",
    date: "October 21, 2025",
    image: "/religious-lamp-oddity.jpg",
    description:
      "I can understand why so many thrifters post 'Does anyone know what this is?' I had to figure out how to assemble this item as I found pieces and parts all over the shop. In the end, it's a beautiful religious lamp, but it took some detective work. Every day at a thrift shop is an adventure in problem-solving and discovery. You never know what treasures or oddities you'll encounter.",
    keywords: ["thrift shop", "oddities", "vintage", "religious items", "holiday", "ornaments"],
  },
  {
    id: 3,
    title: "Giving Thrift Shops",
    date: "November 10, 2025",
    image: "/church-thrift-shop.jpg",
    description:
      "I volunteer at my church thrift shop and we use the proceeds to help purchase food for our food pantry. We offer food to more than 75 families every month. Thrift shops that support charitable causes are doing incredible work in their communities. It's not just about finding great deals - it's about giving back and helping those in need.",
    keywords: ["charity", "giving", "community", "food pantry", "volunteer"],
  },
  {
    id: 4,
    title: "My Latest Find: Reclaimed Treasures",
    date: "December 8, 2025",
    image: "/lumber-salt-storefront.jpg",
    description:
      "My car has thrift-radar. It self-drives toward the coolest, most interesting shops filled with endless stories. Lumber + Salt and meeting Nicole and Brooke was the highlight of yesterday. Just check out this merchandising by Brooke. It makes you want to buy the entire wall of teacups, cigar boxes and all! They are so excited about ThriftShopper that they gave me this wonderful sweatshirt, perfect while engineering the final touches on TS on these cold not-yet-winter nights. More to come from this wonderful story-filled shop on the east end of Long Island.",
    keywords: ["Lumber + Salt", "Long Island", "reclaimed goods", "merchandising", "thrift shops"],
  },
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
