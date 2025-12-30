import { createMetadata } from "@/lib/metadata"

export const metadata = createMetadata({
  title: "Join the Network - Early Beta Access",
  description: "Be part of the early beta. Help shape what discovery is becoming. Join ThriftShopper's network of thoughtful buyers and sellers.",
  path: "/join",
})

export default function JoinLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

