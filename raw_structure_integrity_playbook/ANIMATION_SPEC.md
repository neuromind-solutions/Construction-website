# Animation Specification & Interaction Mechanics
<!-- VERIFIED against live-site screenshots captured 2026-10-14 -->

## Guiding Principles

Animations on RAW STRUCTURE do not exist for frivolous decoration. Every motion conveys **structural weight, tectonic stability, and precision engineering**:
- Heavy, damped easings (`cubic-bezier(0.25, 1, 0.5, 1)` or `power3.out`).
- Zero jitter, zero layout jumps, and strict cleanup of all ScrollTriggers on route changes.
- Seamless reverse-scroll support on all scroll-linked triggers.
- Robust `@media (prefers-reduced-motion: reduce)` fallbacks across all motion components.

---

## 1. Dual Diagonal Hazard Marquee (`DiagonalMarquee.tsx`)

### Observable Behavior
Two continuous ticker ribbons cut diagonally across the full viewport width, angled at approximately `-5deg` (going from lower-left to upper-right). They appear between the hero body copy and the `(01) WHO WE ARE` section.

### Ribbon 1 — Safety Orange
- **Background:** `#ff4d00` (solid safety orange)
- **Text color:** `#0e0e0d` (near-black)
- **Separator icon:** `*` (asterisk, bold, same black)
- **Text (repeating loop):** `RETROFIT * GENERAL CONTRACTING * ZERO HARM * DESIGN & BUILD * STRUCTURAL STEEL *`
- **Direction:** Scrolls left-to-right (→) continuously.
- **Font:** Anton or Archivo Black, uppercase, ~20px, tight tracking.

### Ribbon 2 — Cream/Off-White
- **Background:** `#f6f4f0` (concrete chalk off-white / cream)
- **Text color:** `#0e0e0d` (near-black)
- **Separator icon:** `⊕` (target crosshair circle — construction survey icon)
- **Text (repeating loop):** `GENERAL CONTRACTING ⊕ ZERO HARM ⊕ DESIGN & BUILD ⊕ STRUCTURAL STEEL ⊕`
- **Direction:** Scrolls right-to-left (←) continuously (opposite direction to Ribbon 1).
- **Font:** Anton or Archivo Black, uppercase, ~20px.

### Animation Mechanics
- Infinite horizontal loop using GSAP `gsap.to(track, { xPercent: -50, duration: 30, ease: "none", repeat: -1 })`.
- Content is duplicated (`track` contains two copies of the text) for seamless looping.
- Pause or reduce speed by 60% on `pointerenter`, resume on `pointerleave`.
- CSS: `will-change: transform` on the inner track element.
- The two ribbons are positioned as siblings, the second offset vertically to create the crossing double-ribbon appearance.

### Reduced Motion Fallback
```css
@media (prefers-reduced-motion: reduce) {
  .marquee-track { animation: none; transform: none; }
}
```

---

## 2. Horizontal Drag Carousel — Selected Work (`SelectedWorkSlider.tsx`)

### Observable Behavior
A horizontal row of project cards (`04 FEATURED / 214 DELIVERED` counter shown top-left). Users can drag left and right or use the `←` / `→` arrow buttons (top-right of the section header row).

### Card Categories Visible (confirmed from screenshots)
- Card 1: **COMMERCIAL** category tag
- Card 2: **INFRASTRUCTURE** category tag
- Card 3: **RESIDENTIAL** category tag
- (More cards exist and become visible on drag)

### Category Badge Structure
```html
<div class="category-badge">
  <span style="color:#ff4d00">■</span> COMMERCIAL
</div>
```
Background: dark semi-transparent `rgba(0,0,0,0.8)` with white text.

### Interaction Mechanics
- **Pointer drag:** Pointer down + drag tracks displacement with smooth inertia/momentum damping using GSAP `Draggable` or custom pointer event listeners.
- **Arrow nav buttons:** `←` and `→` rectangular buttons (top-right of section), each click advances or retreats by one card width.
- **Touch:** Native momentum horizontal scroll with `-webkit-overflow-scrolling: touch` and hidden scrollbar.
- **Bounds:** Clamped between `0` and `maxScroll = totalContentWidth - containerWidth`.
- **Floating cursor pill:** A custom cursor pill with text `DRAG TO EXPLORE →` tracks cursor position inside the gallery area (visible only on non-touch desktop).

### Counter Display
```
04 FEATURED / 214 DELIVERED
```
Rendered in JetBrains Mono, muted color, top-left of the selected work section.

---

## 3. Interactive Level Progression — How We Build (`HowWeBuildTimeline.tsx`)

### Observable Behavior
A 5-phase vertical construction timeline. Each level occupies full viewport height and has:
- **Left column:** Orange `LEVEL XX` label (JetBrains Mono, `#ff4d00`) + time range label + A massive outline number in Anton (e.g., `01`, `02`, `03`) rendered in outline/stroke style (text-stroke orange on dark background) + level name text partially visible below.
- **Right column:** Full-bleed B&W construction photograph.

### Confirmed Timeline Steps (from screenshots)
| Level | Time Range | Step Name | Right Image Content |
|---|---|---|---|
| `LEVEL 00` | `WEEK 0-4` | SURVEY | Blueprint/architectural drawing document |
| `LEVEL 01` | `WEEK 4-12` | EXCAVATE | Construction excavator against sky |
| `LEVEL 02` | `WEEK 12-24` | FOUNDATION | Concrete foundation / pile work |
| `LEVEL 03` | `MONTH 6-18` | FRAME | Structural steel frame / jump-form core |
| `LEVEL 04` | `MONTH 18+` | HANDOVER | Finished structure / digital twin render |

### Number Rendering Style
The large step number (e.g., `01`) is rendered as an **outline/stroke** character:
```css
.timeline-number {
  font-family: 'Anton', sans-serif;
  font-size: clamp(120px, 18vw, 240px);
  color: transparent;
  -webkit-text-stroke: 2px #ff4d00;
  line-height: 0.85;
}
```

### Scroll Animation Mechanics
- Each level panel is a full-height `section` with `position: sticky; top: 64px` (below nav).
- ScrollTrigger pins each panel, transitioning to the next via `scrub: 1` fade/clip transition.
- The step name text (`SURVEY`, `EXCAVATE`…) fades and slides up (`y: 20 → 0`, `opacity: 0 → 1`) as the panel enters.

---

## 4. Live Counter Scrub — Statistics (`CounterScrub.tsx`)

### Observable Behavior
Key performance metrics count up smoothly when scrolled into view. A large 3D geometric building model (rendered as a dark cube/building mesh with orange face panels and structural grid lines) appears on the left side.

### Confirmed Metrics (from live screenshot)
```
(01) YEARS BUILDING        →  38+
     "Since a single excavator in 1987."

(02) PROJECTS DELIVERED    →  214+
     "Towers, bridges, plants and homes."

(03) SAFE WORK HOURS       →  1.2M
     [sub-label cut off in screenshot — "Without a lost-time incident"]

(04) PEOPLE ON PAYROLL     →  640+
     [sub-label — "Engineers, foremen & trades"]
```

> ⚠️ **CRITICAL CORRECTION:** Earlier documentation incorrectly stated `420 projects`. The confirmed live value is **`214+`**.

### 3D Object on Left
- A 3D geometric model of a building/cube shape with orange facade panels and structural crosshatch grid pattern on the dark faces.
- Appears to be either a CSS 3D transform, an SVG, or a lightweight WebGL element (Three.js or Spline embed).
- Slowly rotates or has a subtle parallax shift on scroll.

### Animation Mechanics
```javascript
gsap.to(counter, {
  value: targetValue,
  duration: 2.0,
  ease: "power2.out",
  snap: { value: 1 },
  onUpdate: () => { el.textContent = Math.round(counter.value).toLocaleString(); }
});
// ScrollTrigger: start when stats section top reaches 75% viewport
ScrollTrigger.create({
  trigger: ".stats-section",
  start: "top 75%",
  once: true,
  onEnter: () => tl.play()
});
```

---

## 5. Services FAQ Accordion (`FaqAccordion.tsx`)

### Observable Behavior
Expandable technical question panels on `/services` — the section heading is `BEFORE YOU BREAK GROUND.`

### Interaction Mechanics
- Click toggles accordion state. Only one item open at a time (single-open mode).
- Smooth height expansion from `0` to `scrollHeight` using CSS grid trick:
  ```css
  .accordion-body { display: grid; grid-template-rows: 0fr; transition: grid-template-rows 0.35s ease; }
  .accordion-body.open { grid-template-rows: 1fr; }
  .accordion-body-inner { overflow: hidden; }
  ```
- Plus `+` icon: When closed, shows `+`. When open, rotates to `×` (`transform: rotate(45deg)`, `transition: 0.3s`).
- Accessible via keyboard (Enter / Space) with `aria-expanded` and `aria-controls`.

---

## 6. Full-Screen Industrial Mobile Drawer (`MobileNavDrawer.tsx`)

### Observable Behavior
On mobile/tablet, the hamburger icon (`≡`) opens a full-screen dark overlay.

### Animation Mechanics
- Backdrop opens with `clipPath: "inset(0 0 100% 0)" → "inset(0 0 0% 0)"` over 0.45s (`ease: "power3.inOut"`).
- Navigation links stagger in from bottom: `y: 24 → 0`, `opacity: 0 → 1`, stagger: 0.07s per link.
- Body scroll locked: `document.body.style.overflow = 'hidden'` while menu is active.

---

## 7. Sticky Architectural HUD (`ArchitecturalHUD.tsx`)

### Observable Behavior
A discrete vertical coordinate widget pinned to the top-left of the hero content area, below the navigation.

**Left-side content:** `N 51°54' / E 4°28' — SITE 07`
**Right-side content:** `EST. 1987 · ROTTERDAM — NEW YORK — OSLO`

Both lines are rendered in `JetBrains Mono` ~11px, muted gray/white, all uppercase.

### Right-Side Elevation Ruler
A separate fixed element — a vertical scale bar on the far right edge of the viewport:
- Width: ~20px.
- Shows current scroll elevation in meters: `000 M` → increments to values like `032 M`, `065 M`, `100 M` etc.
- The number is rotated 90° (vertical text).
- Color: safety orange `#ff4d00` with thin rule lines.
- Updates in real-time via `window.addEventListener('scroll', ...)`.

### LOT Dimension Tag
A horizontal orange line with label `LOT 07 — 1 200 × 900 M ——` appears in the intro body copy section. Small JetBrains Mono text with an orange horizontal rule.

---

## 8. Page Transition (`PageTransition.tsx`)

### Observable Behavior
Between route changes, a brief wipe animation covers/uncovers the screen.

### Mechanics
- Dark overlay slides in from the bottom (`y: 100% → 0%`) on route exit, then slides out upward (`y: 0% → -100%`) on route entry.
- Duration: 0.4s each way.
- Timed with Next.js router events or via the `useRouter` + animation callbacks.

---

## 9. Hero Image Strip Animation

### Observable Behavior
In the hero section, 6 construction photographs (labeled L01–L06) are arranged in a horizontal strip. The center slot (L03 position) contains the orange card with `42 FLOORS TOPPED OUT THIS YEAR` text.

### Entry Animation (on page load)
- Images slide into position from left: `x: -40px → 0`, `opacity: 0 → 1`, staggered 0.1s per image.
- The orange card scales in: `scale: 0.92 → 1`, `opacity: 0 → 1`.
- The H1 text (`WE BUILD WHAT STANDS.`) reveals via a split-line mask: each word's container clips from bottom to top.

---

## 10. Split Headline Text Reveal (`SplitHeadline.tsx`)

### Observable Behavior
Used on most page H1 headings and section H2 headings.

### Mechanics
- Each word (or character) is wrapped in a `<span class="word-wrapper">` with `overflow: hidden`.
- Inner `<span class="word">` animates `y: 110% → 0%` (slides up from below the clip).
- GSAP `stagger: 0.05s` per word, `duration: 0.7s`, `ease: "power3.out"`.
- ScrollTrigger activates when heading enters viewport (`start: "top 85%"`).
