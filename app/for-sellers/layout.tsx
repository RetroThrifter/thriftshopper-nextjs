import { createMetadata } from "@/lib/metadata"

export const metadata = createMetadata({
  title: "For Sellers - List in Seconds, Zero Hassle",
  description: "Sell your one-of-a-kind items on ThriftShopper. AI-powered listing, fair pricing, and low fees. List in under 10 seconds or use our Concierge service.",
  path: "/for-sellers",
})

export default function ForSellersLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

