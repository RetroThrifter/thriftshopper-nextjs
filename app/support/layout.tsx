import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Support - ThriftShopper",
  description: "Get help with ThriftShopper. Learn how things work, why some choices are intentional, and where to go if you need help.",
  robots: {
    index: false,
    follow: false,
  },
}

export default function SupportLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

