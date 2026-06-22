import { createMetadata } from "@/lib/metadata"

export const metadata = createMetadata({
  title: "Get Notified — ThriftShopper in Your Neighborhood",
  description:
    "Inventory is growing city by city. Leave your email and we'll let you know when ThriftShopper comes to your neighborhood.",
  path: "/join",
})

export default function JoinLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

