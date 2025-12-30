import { WaitlistForm } from "@/components/waitlist-form"

// Force dynamic rendering - this page needs to read URL params
export const dynamic = 'force-dynamic'
export const revalidate = 0

export default function JoinPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-lg mx-auto py-12 px-4">
        <h1 className="text-4xl font-serif font-bold mb-4 text-center">Join the Network</h1>
        <p className="text-lg leading-relaxed text-muted-foreground mb-8 text-center">
          Be among the first to experience ThriftShopper. Join our early access waitlist.
        </p>
        <div className="bg-card border rounded-lg p-6 md:p-8">
          <WaitlistForm />
        </div>
      </div>
    </div>
  )
}

