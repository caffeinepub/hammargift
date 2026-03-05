# HammarGift

## Current State
- Fresh Caffeine project with React + TypeScript + Tailwind CSS frontend
- Zustand, Lucide React, Radix UI, Embla Carousel, Sonner toasts, Motion already available as dependencies
- OKLCH CSS variables defined in index.css (default neutral palette)
- No App.tsx or meaningful frontend code yet

## Requested Changes (Diff)

### Add
- Full HammarGift online gift store SPA at www.hammargift.com
- Brand: warm rose/pink primary (#e11d48 → oklch), gold accent (#f59e0b → oklch), Bricolage Grotesque headings, Cabinet Grotesk body
- Sticky header: top info bar, logo + search with category dropdown, wishlist/cart/account icons, category navigation bar
- Hero carousel: 3 auto-sliding banners (birthday, anniversary, party decor themes) with gradient backgrounds and emoji decorations
- Horizontally scrollable category tiles (12 categories with emojis)
- Flash sale section with live countdown timer + horizontal scrolling product cards
- Trending Gifts product grid: responsive 2/3/4-5 col, product cards with gradient image placeholders, ratings, pricing with discounts, add-to-cart, wishlist toggle, badges
- Birthday Gifts section with age filter tabs (All / 0-5 / 6-12 / Teens / Adults / Seniors)
- Anniversary & Party Decor two-column section
- Trust badges section (4 cards: delivery, packaging, returns, payments)
- Testimonials section (3-4 review cards)
- Newsletter signup section
- Footer with logo, links, social icons, copyright
- 30+ sample products across all categories with id, name, category, ageGroup, price, originalPrice, discount, rating, reviewCount, badge, emoji
- Cart: sliding right-drawer, add/remove, quantity control, total
- Wishlist: toggle heart, count badge in header
- Real-time search filter on product name
- Category filter on product grid
- Age group filter on birthday section
- Product Quick View modal
- Toast notifications via Sonner

### Modify
- index.css: override OKLCH CSS variables with rose/pink primary and amber/gold accent palette
- App.tsx: replace default content with the HammarGift SPA

### Remove
- Any placeholder/default App.tsx content

## Implementation Plan
1. Update index.css with HammarGift brand OKLCH color tokens (rose primary, amber accent)
2. Create data/products.ts — 30+ mock products with all required fields
3. Create store/useStore.ts — Zustand store for cart, wishlist, search query, active category
4. Create components:
   - Header.tsx (top bar, search with category dropdown, icons with badges, nav bar)
   - HeroBanner.tsx (auto-sliding carousel, 3 themed banners)
   - CategoryTiles.tsx (horizontally scrollable category cards)
   - FlashSale.tsx (countdown timer + horizontal scrolling product cards)
   - ProductCard.tsx (reusable card with gradient image, rating, price, add-to-cart, wishlist)
   - TrendingGifts.tsx (responsive grid with search/category filter)
   - BirthdaySection.tsx (age filter tabs + filtered grid)
   - AnniversaryPartySection.tsx (two-column layout)
   - TrustBadges.tsx (4 cards)
   - Testimonials.tsx (3-4 review cards)
   - Newsletter.tsx (email subscribe form)
   - Footer.tsx
   - CartDrawer.tsx (right-side sliding drawer)
   - QuickViewModal.tsx (product detail modal)
5. Update App.tsx to compose all sections in order
6. Ensure full mobile responsiveness and smooth animations
