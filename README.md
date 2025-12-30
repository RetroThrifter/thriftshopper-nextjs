# ThriftShopper Next.js Website

The official website for ThriftShopper - The Magic of Discovery™

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Database**: Supabase
- **Deployment**: Vercel
- **Analytics**: Google Analytics (via Vercel Analytics)

## Environment Variables

Create a `.env.local` file (not committed to git) with the following variables:

### Required for Production

```bash
# Site URL (used for SEO, OG images, sitemap)
NEXT_PUBLIC_SITE_URL=https://www.thriftshopper.com

# Supabase (for waitlist form)
# Use these (server-side only, more secure):
SUPABASE_URL=your_supabase_url
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# OR use these (exposed to client, less secure but works):
# NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
# NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# Google Analytics (optional)
NEXT_PUBLIC_GA_ID=your_ga_id

# Airtable Webhook (optional, for dual-write)
AIRTABLE_WEBHOOK_URL=your_airtable_webhook_url
```

### Setting up in Vercel

1. Go to your Vercel project settings
2. Navigate to **Environment Variables**
3. Add all the variables listed above
4. Make sure to set them for **Production**, **Preview**, and **Development** environments

## Local Development

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

## Project Structure

- `/app` - Next.js App Router pages and routes
- `/components` - React components
- `/lib` - Utility functions and helpers
- `/public` - Static assets (images, etc.)

## Key Features

- ✅ SEO optimized (sitemap, robots.txt, structured data)
- ✅ Dynamic OG image generation
- ✅ Waitlist form with Supabase integration
- ✅ Responsive design (mobile-first)
- ✅ Playfair Display typography
- ✅ Custom 404 page

## Deployment

The site is automatically deployed to Vercel when you push to the main branch.

### Pre-deployment Checklist

- [ ] All environment variables set in Vercel
- [ ] `NEXT_PUBLIC_SITE_URL` matches your production domain
- [ ] Supabase tables created and configured
- [ ] Google Analytics ID configured (if using)
- [ ] Test waitlist form submission
- [ ] Verify OG image at `/og-image`

## Notes

- The OG image is dynamically generated at `/og-image` route
- Sitemap is auto-generated at `/sitemap.xml`
- Robots.txt is at `/robots.txt`
- All sensitive files are in `.gitignore`

