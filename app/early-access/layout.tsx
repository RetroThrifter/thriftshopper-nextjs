import { createMetadata } from "@/lib/metadata"

export const metadata = createMetadata({
  title: "Early Access - Join ThriftShopper Waitlist",
  description: "Join the ThriftShopper early access waitlist and discover one-of-a-kind secondhand treasures. Free to join • Beta launching soon.",
  path: "/early-access",
})

export default function EarlyAccessLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

