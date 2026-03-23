# Shoe Investments v2 — Webflow Rebuild Spec

## Context

Shoe Investments has a static HTML/CSS/JS website built with Claude Code, hosted on GitHub Pages at `cecedeboon-png.github.io/shoe-investments-website`. The goal is to rebuild this site in Webflow so it can be managed visually, using the empty "Delphine's Marvelous Site" (ID: `69b92c716a13b4d542e9ad3e`) as the target. This rebuild should NOT replace the current production Webflow site at `shoeinvestments.nl`.

## Scope

- **All 9 main pages** rebuilt as native Webflow elements
- **26 portfolio detail pages** via a CMS collection template
- **8 VOCCP companies** as CMS items (cards only, no detail pages)
- **Bilingual support** (NL primary + EN) using Webflow Localization
- **CMS collections** for portfolio companies, funds, team members, and blog posts

## Target Site

- **Webflow Site:** "Delphine's Marvelous Site" (ID: `69b92c716a13b4d542e9ad3e`)
- Will be renamed/treated as "Shoe Investments v2"
- Stays separate from production site `shoeinvestments.nl`

## Design System (Webflow Variables)

### Colors
| Variable | Value | Usage |
|----------|-------|-------|
| Navy | `#0A2342` | Primary dark, headings, hero backgrounds |
| Blue | `#1C5FA8` | Accent, links, buttons |
| Blue-light | `#2d74c7` | Hover states |
| White | `#FFFFFF` | Backgrounds |
| Grey-bg | `#F7F8FA` | Alternating section backgrounds |
| Grey-border | `#e2e6ea` | Card borders, dividers |
| Grey-text | `#6b7a8d` | Body text, meta text |
| Text | `#1a2a3a` | Primary body text |

### Typography
- **Font:** Inter (Google Fonts) — weights 400, 500, 600, 700, 800
- **H1:** clamp(2rem, 4vw, 3rem), weight 700, letter-spacing -0.02em
- **Hero H1 override:** clamp(2rem, 4.5vw, 3.5rem), line-height 1.1 (larger than global H1)
- **H2:** clamp(1.5rem, 2.5vw, 2.25rem), weight 700, letter-spacing -0.01em
- **H3:** 1.25rem, weight 700
- **H4:** 1rem, weight 600
- **Body:** 16px base, line-height 1.6

### Spacing & Layout
- Container max-width: 1200px, padding 24px horizontal
- Section padding: 80px vertical
- Border-radius: 4px throughout
- Shadow: `0 2px 12px rgba(10,35,66,0.08)`
- Shadow-hover: `0 6px 24px rgba(10,35,66,0.14)`
- Nav height: 72px

## CMS Collections

### 1. Portfolio Companies
| Field | Type | Notes |
|-------|------|-------|
| Name | Plain Text | Company name |
| Slug | Auto | URL path |
| Logo | Image | Company logo/hero image |
| Category | Plain Text | e.g. "HR Tech", "Fintech" |
| Type | Option (current/exit) | For filtering |
| Description NL | Rich Text | Dutch description |
| Description EN | Rich Text | English description (localized) |
| Founders | Plain Text | Founder names |
| Partner Since | Plain Text | e.g. "2025" |
| Tooltip NL | Plain Text | Short description for card hover |
| Tooltip EN | Plain Text | English tooltip (localized) |
| Main Content NL | Rich Text | Full page content Dutch |
| Main Content EN | Rich Text | English content (localized) |
| Company Image | Image | Detail page sidebar image |
| Country NL | Plain Text | e.g. "Nederland" |
| Country EN | Plain Text | e.g. "Netherlands" (localized) |
| External Link | URL | Company website |
| Order | Number | Display order |
| Featured | Switch | Show on homepage teaser |

### 2. Funds
| Field | Type | Notes |
|-------|------|-------|
| Name | Plain Text | Fund name |
| Logo | Image | Fund logo |
| Category | Plain Text | e.g. "Early-stage tech VC" |
| Description NL/EN | Plain Text | Localized |
| Since | Plain Text | Vintage/since year for fund cards |
| External Link | URL | Fund website |
| Order | Number | Display order |
| Featured | Switch | Show on homepage |

### 3. Team Members
| Field | Type | Notes |
|-------|------|-------|
| Name | Plain Text | Full name |
| Photo | Image | Profile photo |
| Job Title NL/EN | Plain Text | Localized |
| Bio NL/EN | Rich Text | Localized |
| Bio Summary NL/EN | Plain Text | Short bio for card |
| Email | Email | Contact email |
| LinkedIn | URL | Profile link |
| Order | Number | Display order |

### 4. VOCCP Portfolio
Note: VOCCP companies are card-only items with no detail pages.

| Field | Type | Notes |
|-------|------|-------|
| Name | Plain Text | Company name |
| Card Image | Image | Full-bleed photo (not a logo) |
| Image Alt Text | Plain Text | Accessibility alt text for image |
| Description NL/EN | Rich Text | Localized |
| Meta NL/EN | Plain Text | e.g. "VOC Capital Partners investeerder sinds 2018." |
| External Link | URL | Company website |

### 5. Blog Posts
| Field | Type | Notes |
|-------|------|-------|
| Title NL/EN | Plain Text | Localized |
| Summary NL/EN | Plain Text | Localized |
| Body NL/EN | Rich Text | Localized |
| Main Image | Image | Article image |
| Date | Date | Publication date |
| Featured | Switch | Highlight flag |

## Shared Components

### Navbar
- Fixed position, 72px height, background: `rgba(255,255,255,0.97)` with `backdrop-filter: blur(8px)` (frosted-glass effect — requires custom CSS embed)
- Left: Shoe Investments logo (SVG)
- Center: Nav links — "Over Ons" (dropdown: Over Ons, Team, ESG), "Investeringen" (dropdown: Portfolio, Fondsen), Stage, Actueel
- Right: NL/EN toggle, "Neem Contact Op" button (navy, primary)
- Mobile: Hamburger menu at 991px breakpoint

### Footer
- Navy background (#0A2342)
- 4-column grid: Brand (logo + tagline), Pages links, More links, Contact info
- Bottom bar: Copyright, location, LinkedIn icon

### CTA Banner
- Grey background section
- Centered: "Vragen? Neem contact met ons op", subtitle, contact button

### Page Hero
- Reusable across all subpages
- Background image (unique per page, Rotterdam city images)
- Eyebrow text "Shoe Investments", H1 title, lead paragraph
- Dark overlay for text readability

### Portfolio Card
- Image top (16:10 ratio), body with company name, meta info, badge
- Hover: lift 3px + shadow + **slide-up tooltip overlay** (navy bg, 92% opacity, `translateY(100%)` → `translateY(0)` animation) at card bottom showing short description from `Tooltip NL/EN` CMS field
- Badge variants: "Huidig" (blue) / "Exit" (grey)
- Links to CMS detail page

## Pages

### 1. Homepage (/)
Sections in order:
1. **Full-screen Hero** — Navy bg, hero image overlay, eyebrow "SHOE INVESTMENTS", H1 "De meest ondernemende investeringsmaatschappij van Nederland", subtitle, 2 CTAs (View Portfolio + About Us)
2. **Stats Bar** — 3-column: "30" investments in global funds, "13" Dutch scale-ups, "5×" growth target
3. **Who We Are** — 2-column: text left (section label, quote heading, body, link) + Pieter Schoen photo right (480px height)
4. **Values Grid** — Grey bg, 6 cards (Groei, Ervaring, Kennis, Duurzaam, Social Impact, Evergreen Fund), each with SVG icon, title, description
5. **Quote Block** — Navy bg, blockquote from Pieter Schoen
6. **Portfolio Teaser** — 8 featured portfolio cards (CMS-powered, filtered by `featured`), "Bekijk volledig portfolio" link
7. **Funds Teaser** — Grey bg, 4 fund cards (CMS-powered, filtered by `featured`), "Bekijk alle fondsen" link
8. **CTA Banner**
9. **Footer**

### 2. Over Ons (/over-ons)
1. Page Hero — "Over Ons"
2. Who We Are — 2-col: text left + right column with founder photo (with caption "Pieter Schoen - Founder Shoe Investments"), followed by a 3-column inline grid of investment category tiles (navy "Directe Investeringen" linking to portfolio, blue "Indirecte Investeringen" linking to fondsen, grey "Vastgoed" static)
3. Investment Strategy — Grey bg, 4 pillars grid
4. Portfolio Feature — 2-col with rotating images + text
5. Team Feature — Grey bg, 2-col reversed with team collage + text
6. Actueel Feature — 2-col with news image + text
7. Fondsen Feature — Grey bg, 2-col reversed
8. ESG Feature — 2-col
9. CTA + Footer

### 3. Team (/team)
1. Page Hero — "Team"
2. Team Grid — CMS-powered cards with photos, names, titles, expandable bios
3. CTA + Footer

### 4. ESG (/esg)
1. Page Hero — "ESG"
2. ESG content sections with featured ESG-focused companies
3. CTA + Footer

### 5. Portfolio (/portfolio)
1. Page Hero — "Portfolio"
2. Filter Buttons — All / Huidig / Exit — implemented with **custom JavaScript** reading `data-type` attributes on CMS collection items for instant client-side toggle (native Webflow CMS filtering causes page reloads, not suitable)
3. Portfolio Grid — All portfolio companies from CMS, with cards
4. VOCCP Section — Grey bg, separate grid of VOCCP portfolio companies
5. CTA + Footer

### 6. Fondsen (/fondsen)
1. Page Hero — "Fondsen"
2. Fund categories and cards grid
3. CTA + Footer

### 7. Stage (/stage)
1. Page Hero — "Stage"
2. Program details
3. **How to Apply card** — max-width 860px, 2-column layout: left has contact details for internship coordinator Pepijn van der Leije (pepijn@shoeinvestments.nl, +31 6 17093148), right has circular portrait photo
4. Testimonials
5. CTA + Footer

### 8. Actueel (/actueel)
1. Page Hero — "Actueel"
2. Blog/news grid — CMS-powered
3. CTA + Footer

### 9. Contact (/contact)
1. Page Hero — "Neem contact op"
2. Two-column: Contact form (left) + Contact info (right)
   - Form fields: Naam, E-mail, Onderwerp, Bericht
   - Info: Email, Phone, Location, Internship contact box
3. Footer (no CTA banner on this page)

## Portfolio Detail Template (CMS)
Each portfolio company auto-generates a page at `/portfolio/[slug]`:
1. Hero — text only: eyebrow, H1 (company name), lead paragraph, badge (Huidig/Exit), category tag. No logo in hero.
2. Meta grid — 4 columns: Founders, Sector (category), Status (partner since), Country
3. Two-column: Main content (left, rich text from CMS) + Company image (right, sticky sidebar)
4. CTA + Footer

## Localization Strategy
- Primary locale: Dutch (NL)
- Secondary locale: English (EN)
- All text content has NL and EN variants in CMS fields
- Static text (nav labels, button text, section labels) localized via Webflow's localization feature
- Language toggle in navbar switches between locales

## Build Order
1. Set up Webflow variables (colors, fonts, spacing)
2. Create all CMS collections with fields
3. Build shared components (navbar, footer, CTA banner, page hero, portfolio card)
4. Build Homepage with all sections
5. Build subpages: Over Ons → Team → ESG → Portfolio → Fondsen → Stage → Actueel → Contact
6. Build Portfolio detail CMS template
7. Populate CMS with all portfolio company data (26 companies + 8 VOCCP)
8. Populate CMS with fund data, team data, blog posts
9. Enable localization, add EN translations for all static text
10. Add EN content to CMS items

## Webflow Tools to Use
- `variable_tool` — Set up color and spacing variables
- `data_cms_tool` — Create CMS collections and items
- `data_pages_tool` — Create pages
- `element_builder` — Build page structures and elements
- `style_tool` — Apply styles matching the GitHub CSS
- `asset_tool` — Upload images/assets
- `de_page_tool` / `de_component_tool` — Design page layouts and reusable components

## Verification
1. Compare each page visually against the GitHub Pages version
2. Verify all CMS collections are populated with correct data
3. Test portfolio filtering works
4. Test NL/EN language switching
5. Test responsive layout at 991px and 600px breakpoints
6. Verify all links and navigation work correctly
7. Check all images load correctly (CDN references)

## Key Image Assets (CDN URLs from existing Webflow site)
- Logo (header): `https://cdn.prod.website-files.com/64eccea52a843067f3f921f5/651d822fee055feca2a8ac01_Shoe%20logo.svg`
- Logo (footer): `https://cdn.prod.website-files.com/64eccea52a843067f3f921f5/6537e6a56e33669aa1f856d7_Group%20(7).png`
- Pieter Schoen: `https://cdn.prod.website-files.com/64eccea52a843067f3f921f5/655d7f0e24937e7ac4d2b156_pieter.jpg`
- Team collage: `https://cdn.prod.website-files.com/64eccea52a843067f3f921f5/6613c8a79e651af2f034a796_Team%20Collage.jpg`
- All portfolio company images are on the Webflow CDN (see portfolio.html for full list)
