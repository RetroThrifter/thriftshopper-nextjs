"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import * as Dialog from "@radix-ui/react-dialog"

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  const handleShare = async () => {
    const url = window.location.href
    const title = document.title

    // Try Web Share API first (mobile)
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          url: url,
        })
        setOpen(false)
        return
      } catch (err) {
        // User cancelled or error occurred, fall through to clipboard
      }
    }

    // Fallback to clipboard (desktop)
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
      setOpen(false)
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement("textarea")
      textArea.value = url
      textArea.style.position = "fixed"
      textArea.style.opacity = "0"
      document.body.appendChild(textArea)
      textArea.select()
      try {
        document.execCommand("copy")
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
        setOpen(false)
      } catch (err) {
        console.error("Failed to copy:", err)
      }
      document.body.removeChild(textArea)
    }
  }

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  // Handle Esc key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) {
        setOpen(false)
      }
    }
    window.addEventListener("keydown", handleEsc)
    return () => window.removeEventListener("keydown", handleEsc)
  }, [open])

  return (
    <header className="h-14 border-b bg-background/80 backdrop-blur md:h-16 supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="font-serif text-lg leading-none tracking-tight md:text-2xl"
          style={{
            fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif",
            fontWeight: 500,
            color: "#191970",
          }}
        >
          TS
        </Link>

        <Dialog.Root open={open} onOpenChange={setOpen}>
          <Dialog.Trigger asChild>
            <button
              type="button"
              className="flex flex-col gap-1.5 p-2 hover:opacity-80 transition-opacity"
              aria-label="Open menu"
            >
              <span className="w-6 h-0.5 bg-foreground"></span>
              <span className="w-6 h-0.5 bg-foreground"></span>
              <span className="w-6 h-0.5 bg-foreground"></span>
            </button>
          </Dialog.Trigger>

          <Dialog.Portal>
            <Dialog.Overlay
              className="fixed inset-0 bg-black/20 z-40 transition-opacity duration-300 data-[state=open]:opacity-100 data-[state=closed]:opacity-0"
              onClick={() => setOpen(false)}
            />
            <Dialog.Content
              className="fixed right-0 top-0 h-full w-full max-w-sm bg-background shadow-lg z-50 transition-transform duration-300 ease-out data-[state=open]:translate-x-0 data-[state=closed]:translate-x-full"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-6 border-b">
                  <Dialog.Title className="sr-only">Navigation Menu</Dialog.Title>
                  <Dialog.Close asChild>
                    <button
                      type="button"
                      className="relative w-8 h-8 hover:opacity-80 transition-opacity"
                      aria-label="Close menu"
                    >
                      <span className="sr-only">Close</span>
                      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-0.5 bg-foreground rotate-45"></span>
                      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-0.5 bg-foreground -rotate-45"></span>
                    </button>
                  </Dialog.Close>
                </div>

                <nav className="flex-1 overflow-y-auto p-6">
                  <div className="space-y-8">
                    {/* Discover Section */}
                    <div>
                      <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
                        Discover
                      </h2>
                      <ul className="space-y-3">
                        <li>
                          <Link
                            href="/for-buyers"
                            className="block text-base hover:opacity-80 transition-opacity"
                            onClick={() => setOpen(false)}
                          >
                            For Buyers
                          </Link>
                        </li>
                      </ul>
                    </div>

                    {/* Sell Section */}
                    <div>
                      <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
                        Sell
                      </h2>
                      <ul className="space-y-3">
                        <li>
                          <Link
                            href="/for-sellers"
                            className="block text-base hover:opacity-80 transition-opacity"
                            onClick={() => setOpen(false)}
                          >
                            For Sellers
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/concierge"
                            className="block text-base hover:opacity-80 transition-opacity"
                            onClick={() => setOpen(false)}
                          >
                            Concierge Selling
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/faq"
                            className="block text-base hover:opacity-80 transition-opacity"
                            onClick={() => setOpen(false)}
                          >
                            FAQ
                          </Link>
                        </li>
                      </ul>
                    </div>

                    {/* Blog */}
                    <div>
                      <Link
                        href="/blog"
                        className="block text-base hover:opacity-80 transition-opacity"
                        onClick={() => setOpen(false)}
                      >
                        Blog
                      </Link>
                    </div>

                    {/* Join Section */}
                    <div>
                      <Link
                        href="/join"
                        className="block text-base hover:opacity-80 transition-opacity"
                        onClick={() => setOpen(false)}
                      >
                        Join the Network
                      </Link>
                    </div>

                    {/* Share Section */}
                    <div className="pt-4 border-t">
                      <button
                        onClick={handleShare}
                        className="block text-base hover:opacity-80 transition-opacity w-full text-left"
                      >
                        {copied ? "Link copied!" : "Share"}
                      </button>
                    </div>
                  </div>
                </nav>
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </header>
  )
}

