import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h1
          className="text-6xl md:text-8xl font-serif font-bold mb-4"
          style={{
            fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif",
            color: "#191970",
          }}
        >
          404
        </h1>
        <h2
          className="text-2xl md:text-3xl font-serif font-semibold mb-6"
          style={{
            fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif",
            color: "#191970",
          }}
        >
          Page not found
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block px-8 py-3 rounded-lg font-semibold text-white transition-opacity hover:opacity-90"
          style={{
            backgroundColor: "#191970",
            fontFamily: "'Source Sans 3', 'Source Sans Pro', sans-serif",
            textDecoration: "none",
          }}
        >
          Back to Home
        </Link>
      </div>
    </div>
  )
}

