import { createMetadata } from "@/lib/metadata"

export const metadata = createMetadata({
  title: "Blog - Stories from ThriftShopper",
  description: "Read stories about secondhand treasures, thrift shop discoveries, and the human connections behind every item on ThriftShopper.",
  path: "/blog",
})

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

