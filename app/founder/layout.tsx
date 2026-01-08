import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Founder Notes — ThriftShopper",
  robots: {
    index: false,
    follow: false,
  },
}

export default function FounderLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
