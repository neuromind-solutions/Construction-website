# Design System and Visual Fidelity Specification
<!-- VERIFIED against live-site screenshots captured 2026-10-14 -->

## Overview & Visual Aesthetic

**RAW STRUCTURE** employs an uncompromising **Industrial Brutalist / High-Precision Engineering** aesthetic:
- Deep monolithic dark surfaces reminiscent of cured asphalt, cast concrete, and structural carbon steel.
- High-visibility safety accents derived from European construction signage (Hazard Safety Orange `#ff4d00`).
- Strict technical typography pairing monumental sans-serif display headers with monospace blueprint metadata.
- Thin architectural grid lines with subtle opacity, crosshairs, coordinate readouts, and a live elevation ruler on the right edge.
- A hairline blue bar (`#0d3b6e` or similar deep navy) runs along the very top of the viewport above the header.

---

## 1. Color Palette & Token Definitions

All tokens are defined in `src/styles/tokens.css` and mapped to Tailwind utilities:

```css
:root {
  /* Surfaces & Backgrounds */
  --color-bg-base: #0e0e0d;           /* Deep asphalt black / Primary page background */
  --color-bg-surface: #1c1c1a;        /* Cured concrete charcoal / Card & panel background */
  --color-bg-elevated: #262623;       /* Raised container surface */

  /* Text & Readability */
  --color-text-primary: #f6f4f0;      /* Concrete chalk off-white / High contrast titles */
  --color-text-secondary: #e7e3dc;    /* Unfinished plaster / Body text */
  --color-text-muted: #8c877f;        /* Weathered aggregate gray / Captions & metadata */
  --color-text-disabled: #54514c;     /* Inactive elements */

  /* Accents & Signals */
  --color-accent-safety: #ff4d00;     /* Safety orange / Primary CTA, active states, tickers */
  --color-accent-hover: #e04400;      /* Darker orange on hover */

  /* Borders & Architectural Grids */
  --color-border-subtle: rgba(231, 227, 220, 0.14);  /* Subtle blueprint grid line */
  --color-border-medium: rgba(231, 227, 220, 0.28);  /* Card borders and dividers */
  --color-border-strong: #e7e3dc;                    /* Solid architectural accent line */

  /* Selection */
  --color-selection-bg: #ff4d00;
  --color-selection-text: #0e0e0d;
}
```

---

## 2. Typography Hierarchy

| Style Role | Font Family | Weight | Size (Desktop / Mobile) | Line Height | Letter Spacing | Case / Transform | Usage |
|---|---|---|---|---|---|---|---|
| **Display H1** | `Anton` | 400 | `96px–120px` / `52px` | `0.88em–0.92em` | `-0.03em` | UPPERCASE | Major slogans ("WE BUILD WHAT STANDS.", "DRAWING → LANDMARK") |
| **Section H2** | `Archivo` | 800–900 | `56px–72px` / `36px` | `0.95em` | `-0.02em` | UPPERCASE | Section headings ("FLOOR BY FLOOR.", "FIVE WAYS WE MOVE EARTH.") |
| **Discipline Title** | `Archivo` | 800 | `48px–64px` / `32px` | `0.96em` | `-0.02em` | UPPERCASE | Discipline rows ("GENERAL CONTRACTING", "DESIGN & BUILD") |
| **Subhead H3** | `Archivo` | 600 | `24px` / `20px` | `1.2em` | `-0.01em` | Normal | Card titles, process step names, article titles |
| **Technical Label** | `JetBrains Mono` | 500 | `11px–12px` | `1.4em` | `+0.08em` | UPPERCASE | Coordinate tags (`N 51°54'`), level markers (`(01) WHO WE ARE`), `LEVEL 00` / `WEEK 0-4`, metrics |
| **Body Large** | `Inter` | 400 | `18px` / `16px` | `1.55em` | `normal` | Normal | Hero intro paragraphs, lead paragraphs |
| **Body Regular** | `Inter` | 400 | `15px` / `14px` | `1.6em` | `normal` | Normal | Standard descriptive text, case study copy, FAQ answers |
| **Discipline Subtag** | `JetBrains Mono` | 500 | `11px` | `1.4em` | `+0.08em` | UPPERCASE | Right-side tag cluster on discipline rows ("PROGRAMME · COST CONTROL · SITE MANAGEMENT") |

### Google Fonts Import
```css
@import url('https://fonts.googleapis.com/css2?family=Anton&family=Archivo:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&family=Inter:wght@400;500;600&display=swap');
```

---

## 3. Layout Grid & Spacing System

- **Maximum Container Width:** `1320px` centered (`mx-auto`).
- **Gutter Padding:**
  - Desktop: `40px` (`px-10`).
  - Tablet: `32px` (`px-8`).
  - Mobile: `20px` (`px-5`).
- **Vertical Section Spacing:**
  - Desktop: `120px–160px` top/bottom padding.
  - Tablet: `100px` top/bottom padding.
  - Mobile: `72px` top/bottom padding.
- **Section Dividers:** Top borders with `1px solid var(--color-border-subtle)` separating major chapters.
- **Breakpoints:**
  - `mobile`: `< 810px`
  - `tablet`: `810px – 1199px`
  - `desktop`: `>= 1200px`

### Grid Overlay System (Blueprint Effect)
The site renders thin grid column lines as an overlay across all sections — monochrome vertical lines at `rgba(231, 227, 220, 0.07)` spacing matching a ~12-column grid. This is a purely decorative `::before` pseudo-element or an absolutely-positioned non-interactive overlay.

---

## 4. UI Components & Tokens

### Navigation Bar
- **Position:** Fixed sticky at top, full viewport width.
- **Height:** ~64px.
- **Background:** `#0e0e0d` (solid dark, no blur).
- **Bottom border:** `1px solid rgba(231, 227, 220, 0.14)`.
- **Logo:** Orange diamond icon `◆` + bold white uppercase `RAW STRUCTURE` (Archivo/Anton, ~16px, spaced). Positioned left.
- **Nav Links:** `ABOUT`, `SERVICES`, `PROJECTS`, `JOURNAL`, `CONTACT` — white text, Archivo 500, ~13px, uppercase, center-aligned in header.
- **CTA Button:** A rectangular button (NOT pill/capsule). Structure:
  - Left segment: Safety orange `#ff4d00` background, black uppercase text "START A PROJECT" (Archivo 700).
  - Right segment: Separate black box `#0e0e0d` with border, containing a diagonal arrow icon `↗` (northeast arrow).
  - Combined they read as one compound button unit.
- **Active nav link:** Orange underline or color change for current page (e.g., `ABOUT` highlighted orange on `/about`).

### CTA Button Compound Structure
```
┌─────────────────────────┬──────┐
│  START A PROJECT        │  ↗   │
│  (orange bg, black text)│ (blk)│
└─────────────────────────┴──────┘
```

### "VIEW PROJECTS" Secondary Button
- Outlined rectangular button: transparent background, `1px solid rgba(231,227,220,0.4)` border.
- White text "VIEW PROJECTS" + small diagonal arrow icon.

### Right-Side Elevation Ruler (Architectural HUD)
- A vertical ruler/gauge runs along the far right edge of the viewport (~20px wide).
- Shows elevation measurements in meters: `000 M` at top, incrementing values (e.g., `032 M`, `065 M`, `100 M`) as user scrolls.
- Color: muted orange `#ff4d00` tick marks, with `rgba(231,227,220,0.4)` scale lines.
- This is a `position: fixed; right: 0; top: 0; height: 100vh` element.
- The text is rotated 90° and updates based on `window.scrollY`.

### Technical Badges / Section Tags
- Format: `(01) WHO WE ARE`, `(02) WHAT WE DO`, `(03) HOW WE BUILD`, `(04) SELECTED WORK`, `(05) METRICS`, `(06) FROM THE SITE OFFICE`.
- Monospace font `JetBrains Mono` rendered in `var(--color-accent-safety)` (`#ff4d00`) for the number, `var(--color-text-muted)` for the label text.
- Small dash line `——` often precedes the tag on some pages.

### Discipline Rows (Homepage + Services)
- Full-width rows separated by thin `1px solid rgba(231,227,220,0.14)` horizontal rules.
- Left: Orange number `01`, `02`… (JetBrains Mono, ~13px).
- Center: UPPERCASE bold discipline name (Archivo 800, ~56–72px).
- Right: Small monospace tags cluster ("PROGRAMME · COST CONTROL · SITE MANAGEMENT").
- Far right: Box with diagonal arrow `↗` icon (link indicator).

### Cards & Hover States
- Cured concrete surface `#1c1c1a` with hairline border `rgba(231, 227, 220, 0.14)`.
- Category badge in top-left of project cards: small black rectangle with orange square icon + uppercase label.
- Image zoom on card hover: `scale(1.03)` inside an `overflow-hidden` container with `transition: transform 0.5s ease-out`.

### Project Category Badge
```html
<span class="category-badge">
  <span class="badge-dot">■</span> <!-- orange square -->
  COMMERCIAL
</span>
```
- Background: `rgba(0,0,0,0.8)`.
- Text: White, Archivo 600, uppercase, 11px.
- Orange square dot: `#ff4d00`.

---

## 5. Hero Section Visual Structure

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ [NAV BAR]                                                                   │
├─────────────────────────────────────────────────────────────────────────────┤
│  N 51°54' / E 4°28' — SITE 07          EST. 1987 · ROTTERDAM — NEW YORK … │  ← metadata row (mono)
│                                                                             │
│  [L01 img] [L02 img] [orange card]  [L04 img] [L05 img] [L06 img]         │  ← photo strip
│            (B&W)     42 FLOORS      (B&W)     (B&W)     (worker)           │
│                      TOPPED OUT                                            │
│                      THIS YEAR                                             │
│                                                                            │
│  WE BUILD WHAT                                                             │  ← H1 (Anton, huge)
│  STANDS.                                                                   │
├─────────────────────────────────────────────────────────────────────────────┤
│  [LOT 07 — 1 200 × 900 M]            [START A PROJECT] [VIEW PROJECTS]    │
│                                                                            │
│  Raw Structure is a design-build contractor for towers, bridges and        │
│  industrial buildings — engineered with obsessive precision and            │
│  delivered without drama.                                                  │
│                                                                            │
│  ╱╱╱╱ HAZARD TAPE MARQUEE 1 (orange bg) ╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱   │  ← diagonal ribbon
│  ╲╲╲╲ HAZARD TAPE MARQUEE 2 (cream bg)  ╲╲╲╲╲╲╲╲╲╲╲╲╲╲╲╲╲╲╲╲╲╲╲╲╲╲╲╲╲   │  ← diagonal ribbon
│                                                                            │
│  (01) WHO WE ARE                                                           │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Hero Photo Strip Labels
Photos in hero are labeled `L01` through `L06` (bottom-left of each image, white text on dark overlay, mono font). The orange card between L02 and L04 has:
- A snowflake/asterisk icon `✳` (top-left of card)
- Bold black text: `42 FLOORS TOPPED OUT THIS YEAR`

### "DRAWING → LANDMARK" Full-Screen Banner
Between the hero section and the testimonials/journal section, there is a large full-bleed construction site photograph with the text `DRAWING → LANDMARK` overlaid in massive Anton typography (left-aligned), and a project attribution tag: `MERIDIAN TOWER · ROTTERDAM · 2025`.

---

## 6. Footer Visual Structure

```
┌─────────────────────────────────────────────────────────────────┐
│  (01) HEAD OFFICE    (02) TALK TO US    (03) SITEMAP    (04) FOLLOW THE BUILD │
│  18 Dock Street,     build@rawstructure  Home            LinkedIn              │
│  Unit 4              .com                About           Instagram             │
│  3011 BJ Rotterdam   +31 10 555 0187     Services        X / Twitter          │
│  The Netherlands                         Projects        YouTube              │
│                                          Journal                              │
│                                          Contact                              │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│         RAW STRUCTURE    ← MASSIVE full-width Anton typeface    │
│                           (fills footer bottom, off-white)      │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│  © 2026 Raw Structure B.V. — All rights reserved                │
│  ISO 9001 · ISO 45001 · VCA**          Built to last since 1987 │
└─────────────────────────────────────────────────────────────────┘
```

**Before the footer columns**, there is a large CTA section with heading: `GOT A SITE? LET'S BUILD SOMETHING THAT STANDS.` — Anton font, massive, white, with an orange `START A PROJECT ↗` button below it.
