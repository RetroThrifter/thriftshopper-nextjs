import { ImageResponse } from 'next/og'

export const runtime = 'edge'

async function loadGoogleFont(font: string, weights: string[]) {
  const fonts = await Promise.all(
    weights.map(async (weight) => {
      const url = `https://fonts.googleapis.com/css2?family=${font.replace(' ', '+')}:wght@${weight}&display=swap`
      const css = await fetch(url).then((res) => res.text())
      const resource = css.match(/src: url\((.+)\) format\('(opentype|truetype)'\)/)
      if (resource) {
        const response = await fetch(resource[1])
        if (response.ok) {
          return {
            name: font,
            data: await response.arrayBuffer(),
            weight: parseInt(weight),
            style: 'normal' as const,
          }
        }
      }
      return null
    })
  )
  return fonts.filter(Boolean)
}

export async function GET() {
  const playfairFonts = await loadGoogleFont('Playfair Display', ['400', '700'])

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#000080',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '80px',
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              color: '#ffffff',
              fontFamily: 'Playfair Display',
              marginBottom: 16,
            }}
          >
            ThriftShopper
          </div>
          <div
            style={{
              fontSize: 24,
              fontStyle: 'italic',
              color: '#EFBF04',
              fontFamily: 'Playfair Display',
              marginBottom: 0,
            }}
          >
            the magic of discovery™
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: playfairFonts,
    }
  )
}

