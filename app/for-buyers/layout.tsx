import { createMetadata } from "@/lib/metadata"

export const metadata = createMetadata({
  title: "For Buyers - Discover One-of-a-Kind Treasures",
  description: "Discover one-of-a-kind secondhand treasures where the magic isn't just what you find, it's the human connection behind it. Join ThriftShopper's co-op marketplace built on trust and appreciation.",
  path: "/for-buyers",
})

export default function ForBuyersLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

