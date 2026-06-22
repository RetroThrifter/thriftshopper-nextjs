"use client"

import { WaitlistForm } from "@/components/waitlist-form"

export default function JoinPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-lg mx-auto py-12 px-4">
        <h1 className="text-4xl font-serif font-bold mb-4 text-center">
          Get notified when we come to your neighborhood
        </h1>
        <p className="text-lg leading-relaxed text-muted-foreground mb-8 text-center">
          Inventory is growing city by city. Leave your email and we&apos;ll let you know when
          sellers and treasures are nearby.
        </p>
        <div className="bg-card border rounded-lg p-6 md:p-8">
          <WaitlistForm />
        </div>
      </div>
    </div>
  )
}

