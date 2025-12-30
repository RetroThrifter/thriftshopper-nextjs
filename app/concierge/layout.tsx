import { createMetadata } from "@/lib/metadata"

export const metadata = createMetadata({
  title: "Concierge Selling - Sell Without the Hassle",
  description: "ThriftShopper Concierge handles pricing, listing, buyer matching, and shipping — so your items find the right home with minimal effort from you.",
  path: "/concierge",
})

export default function ConciergeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

