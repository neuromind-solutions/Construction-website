# Component Implementation Specification
<!-- Verified from live visual audit 2026-10-14 — use this file during Phase 3-6 build -->

---

## 1. SiteHeader.tsx

### Structure
```
<header class="site-header">
  <nav class="nav-container">
    <a class="logo-link">
      <span class="logo-diamond">◆</span>
      <span class="logo-text">RAW STRUCTURE</span>
    </a>
    <ul class="nav-links">
      <li><a href="/about">ABOUT</a></li>
      <li><a href="/services">SERVICES</a></li>
      <li><a href="/projects">PROJECTS</a></li>
      <li><a href="/journal">JOURNAL</a></li>
      <li><a href="/contact">CONTACT</a></li>
    </ul>
    <a class="cta-compound" href="/contact">
      <span class="cta-label">START A PROJECT</span>
      <span class="cta-icon">↗</span>
    </a>
  </nav>
</header>
```

### CSS Tokens
```css
.site-header {
  position: fixed;
  top: 0; left: 0; right: 0;
  height: 64px;
  background: var(--color-bg-base); /* #0e0e0d */
  border-bottom: 1px solid var(--color-border-subtle);
  z-index: 100;
  display: flex;
  align-items: center;
}

.logo-diamond {
  color: var(--color-accent-safety); /* #ff4d00 */
  font-size: 18px;
  margin-right: 10px;
}

.logo-text {
  font-family: 'Archivo', sans-serif;
  font-weight: 700;
  font-size: 15px;
  letter-spacing: 0.04em;
  color: var(--color-text-primary);
  text-transform: uppercase;
}

.nav-links a {
  font-family: 'Archivo', sans-serif;
  font-weight: 500;
  font-size: 13px;
  letter-spacing: 0.04em;
  color: var(--color-text-secondary);
  text-transform: uppercase;
  transition: color 0.2s;
}
.nav-links a:hover,
.nav-links a.active { color: var(--color-accent-safety); }

/* COMPOUND CTA button — NOT a pill/capsule, it's a flat rectangle with separate icon box */
.cta-compound {
  display: inline-flex;
  align-items: stretch;
  text-decoration: none;
}

.cta-label {
  background: var(--color-accent-safety); /* #ff4d00 */
  color: var(--color-bg-base);            /* #0e0e0d */
  font-family: 'Archivo', sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding: 10px 16px;
}

.cta-icon {
  background: var(--color-bg-base);
  color: var(--color-text-primary);
  border: 1px solid var(--color-border-medium);
  padding: 10px 12px;
  font-size: 14px;
}
```

---

## 2. HeroSection.tsx

### Layout Sections (top to bottom)

**A. Coordinate Bar** (above photo strip)
```html
<div class="coord-bar">
  <span class="coord-left">N 51°54' / E 4°28' — SITE 07</span>
  <span class="coord-right">EST. 1987 · ROTTERDAM — NEW YORK — OSLO</span>
</div>
```
CSS: `font-family: 'JetBrains Mono'; font-size: 11px; color: var(--color-text-muted); text-transform: uppercase; letter-spacing: 0.08em;`

**B. Photo Strip (L01–L06)**
```html
<div class="hero-strip">
  <div class="strip-item" data-label="L01">
    <img src="/images/mUdMPbzNFGwgVSZnu6VXATDtkPs.jpg" alt="L01 Concrete Core Base" />
    <span class="strip-label">L01</span>
  </div>
  <div class="strip-item" data-label="L02">
    <img src="/images/cHIsaLk2xKFqBdK4OgR66pZJk64.jpg" alt="L02 Tower Crane Scaffolding" />
    <span class="strip-label">L02</span>
  </div>
  <!-- L03 Orange Accent Card -->
  <div class="strip-accent-card">
    <span class="accent-star">✳</span>
    <p class="accent-text">42 FLOORS TOPPED OUT THIS YEAR</p>
  </div>
  <div class="strip-item" data-label="L04">
    <img src="/images/XCsFzEjL11OrhWvehONxhZVKUo.jpg" alt="L04 Framework Structure" />
    <span class="strip-label">L04</span>
  </div>
  <div class="strip-item" data-label="L05">
    <img src="/images/uBBAplfPyIWicTCsVvWg7UU.jpg" alt="L05 Floor Plate Pour" />
    <span class="strip-label">L05</span>
  </div>
  <div class="strip-item" data-label="L06">
    <img src="/images/dIXtk7wOxfTY46ikTp5PnquPG7Q.jpg" alt="L06 Steel Superstructure" />
    <span class="strip-label">L06</span>
  </div>
</div>
```

Strip accent card CSS:
```css
.strip-accent-card {
  background: var(--color-accent-safety); /* #ff4d00 */
  color: var(--color-bg-base);
  font-family: 'Anton', sans-serif;
  font-size: 22px;
  line-height: 1.05;
  padding: 24px 20px;
  flex-shrink: 0;
  width: 200px;
}
.accent-star { font-size: 20px; display: block; margin-bottom: 40px; }
```

Strip label CSS:
```css
.strip-label {
  position: absolute; bottom: 8px; left: 8px;
  font-family: 'JetBrains Mono'; font-size: 10px;
  color: #fff; text-transform: uppercase;
}
```

**C. Main H1**
```html
<h1 class="hero-h1">WE BUILD WHAT STANDS.</h1>
```
```css
.hero-h1 {
  font-family: 'Anton', sans-serif;
  font-size: clamp(72px, 10vw, 130px);
  line-height: 0.88;
  letter-spacing: -0.02em;
  color: var(--color-text-primary);
  text-transform: uppercase;
}
```

**D. LOT Tag**
```html
<div class="lot-tag">
  <span class="lot-line"></span>
  <span class="lot-text">LOT 07 — 1 200 × 900 M</span>
  <span class="lot-line"></span>
</div>
```
```css
.lot-tag { display: flex; align-items: center; gap: 12px; }
.lot-text { font-family: 'JetBrains Mono'; font-size: 11px; color: var(--color-accent-safety); text-transform: uppercase; }
.lot-line { height: 1px; width: 32px; background: var(--color-accent-safety); }
```

**E. Body + CTA Row**
```html
<div class="hero-body-row">
  <p class="hero-body-text">
    Raw Structure is a design-build contractor for towers, bridges and industrial
    buildings — engineered with obsessive precision and delivered without drama.
  </p>
  <div class="hero-ctas">
    <a class="cta-compound" href="/contact">
      <span class="cta-label">START A PROJECT</span>
      <span class="cta-icon">↗</span>
    </a>
    <a class="cta-outline" href="/projects">
      <span class="cta-label">VIEW PROJECTS</span>
      <span class="cta-icon">↗</span>
    </a>
  </div>
</div>
```

---

## 3. DiagonalMarquee.tsx

### DOM Structure
```html
<div class="marquee-wrapper" aria-hidden="true">
  <!-- Ribbon 1: Orange -->
  <div class="marquee-ribbon ribbon-orange" style="transform: rotate(-5deg)">
    <div class="marquee-track" data-direction="ltr">
      <span class="marquee-inner">
        RETROFIT * GENERAL CONTRACTING * ZERO HARM * DESIGN &amp; BUILD * STRUCTURAL STEEL *&nbsp;
        <!-- duplicated once for seamless loop -->
        RETROFIT * GENERAL CONTRACTING * ZERO HARM * DESIGN &amp; BUILD * STRUCTURAL STEEL *&nbsp;
      </span>
    </div>
  </div>
  <!-- Ribbon 2: Cream -->
  <div class="marquee-ribbon ribbon-cream" style="transform: rotate(-5deg)">
    <div class="marquee-track" data-direction="rtl">
      <span class="marquee-inner">
        GENERAL CONTRACTING ⊕ ZERO HARM ⊕ DESIGN &amp; BUILD ⊕ STRUCTURAL STEEL ⊕&nbsp;
        GENERAL CONTRACTING ⊕ ZERO HARM ⊕ DESIGN &amp; BUILD ⊕ STRUCTURAL STEEL ⊕&nbsp;
      </span>
    </div>
  </div>
</div>
```

### CSS
```css
.marquee-wrapper {
  position: relative;
  width: 100%;
  overflow: hidden;
  padding: 40px 0;
  z-index: 2;
}

.marquee-ribbon {
  width: 120%;
  margin-left: -10%;
  padding: 14px 0;
  overflow: hidden;
}

.ribbon-orange {
  background: #ff4d00;
}

.ribbon-cream {
  background: #f6f4f0;
  margin-top: 8px;
}

.marquee-track {
  display: flex;
  white-space: nowrap;
  will-change: transform;
}

.marquee-inner {
  font-family: 'Anton', sans-serif;
  font-size: 20px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #0e0e0d;
  padding-right: 0;
}
```

### GSAP
```typescript
'use client';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export function DiagonalMarquee() {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tracks = wrapperRef.current?.querySelectorAll('.marquee-track');
    if (!tracks) return;

    tracks.forEach((track, i) => {
      const dir = i === 0 ? -50 : 50; // ltr vs rtl
      gsap.to(track, {
        xPercent: dir,
        duration: 28,
        ease: 'none',
        repeat: -1,
      });

      // Hover pause
      const ribbon = track.closest('.marquee-ribbon');
      ribbon?.addEventListener('mouseenter', () => gsap.globalTimeline.pause());
      ribbon?.addEventListener('mouseleave', () => gsap.globalTimeline.resume());
    });
  }, { scope: wrapperRef });

  return (
    <div ref={wrapperRef} className="marquee-wrapper" aria-hidden>
      {/* JSX structure matching DOM above */}
    </div>
  );
}
```

---

## 4. DisciplineRow (Homepage + Services)

### Row Structure
```html
<div class="discipline-row" role="listitem">
  <span class="discipline-number">01</span>
  <h3 class="discipline-name">GENERAL CONTRACTING</h3>
  <div class="discipline-tags">PROGRAMME · COST CONTROL · SITE MANAGEMENT</div>
  <a class="discipline-arrow" href="/services#general-contracting" aria-label="General Contracting details">↗</a>
</div>
```

### CSS
```css
.discipline-row {
  display: grid;
  grid-template-columns: 48px 1fr auto 48px;
  align-items: center;
  gap: 24px;
  padding: 32px 0;
  border-bottom: 1px solid var(--color-border-subtle);
  cursor: pointer;
  transition: border-color 0.2s;
}
.discipline-row:hover { border-color: var(--color-accent-safety); }

.discipline-number {
  font-family: 'JetBrains Mono';
  font-size: 13px;
  color: var(--color-accent-safety);
  font-weight: 500;
}

.discipline-name {
  font-family: 'Archivo', sans-serif;
  font-weight: 800;
  font-size: clamp(36px, 5vw, 64px);
  letter-spacing: -0.02em;
  color: var(--color-text-primary);
  text-transform: uppercase;
  line-height: 0.95;
}

.discipline-tags {
  font-family: 'JetBrains Mono';
  font-size: 11px;
  letter-spacing: 0.05em;
  color: var(--color-text-muted);
  text-transform: uppercase;
  text-align: right;
}

.discipline-arrow {
  width: 40px; height: 40px;
  border: 1px solid var(--color-border-medium);
  display: flex; align-items: center; justify-content: center;
  color: var(--color-text-primary);
  font-size: 16px;
  transition: background 0.2s, border-color 0.2s;
}
.discipline-arrow:hover { background: var(--color-accent-safety); border-color: var(--color-accent-safety); color: #0e0e0d; }
```

---

## 5. HowWeBuildTimeline.tsx

### Layout: Sticky Scroll Panels
Each level = a `<section>` that sticks while scrolling past it.

```html
<div class="timeline-container">
  <!-- LEVEL 00: SURVEY -->
  <section class="timeline-level" data-level="00">
    <div class="level-left">
      <div class="level-meta">
        <span class="level-label">LEVEL 00</span>
        <span class="level-time">WEEK 0-4</span>
      </div>
      <div class="level-number-outline">01</div>
      <h3 class="level-name">SURVEY</h3>
    </div>
    <div class="level-right">
      <img src="/images/yBBY6MbyHbb3vNonuZPaW1SRx4.jpg" alt="Level 00 Survey" />
    </div>
  </section>

  <!-- LEVEL 01: EXCAVATE -->
  <section class="timeline-level" data-level="01">
    <div class="level-left">
      <div class="level-meta">
        <span class="level-label">LEVEL 01</span>
        <span class="level-time">WEEK 4-12</span>
      </div>
      <div class="level-number-outline">02</div>
      <h3 class="level-name">EXCAVATE</h3>
    </div>
    <div class="level-right">
      <img src="/images/umiAul3BCC6J5wiNHx7VCJRrs.jpg" alt="Level 01 Excavate" />
    </div>
  </section>

  <!-- LEVEL 02: FOUNDATION -->
  <section class="timeline-level" data-level="02">
    <div class="level-left">
      <div class="level-meta">
        <span class="level-label">LEVEL 02</span>
        <span class="level-time">WEEK 12-24</span>
      </div>
      <div class="level-number-outline">03</div>
      <h3 class="level-name">FOUNDATION</h3>
    </div>
    <div class="level-right">
      <img src="/images/N3y8qP9josbTFQ04tUWWGGECc.jpg" alt="Level 02 Foundation" />
    </div>
  </section>

  <!-- LEVEL 03: FRAME -->
  <section class="timeline-level" data-level="03">
    <div class="level-left">
      <div class="level-meta">
        <span class="level-label">LEVEL 03</span>
        <span class="level-time">MONTH 6-18</span>
      </div>
      <div class="level-number-outline">04</div>
      <h3 class="level-name">FRAME</h3>
    </div>
    <div class="level-right">
      <img src="/images/kQlbW52BNh2N5AkiRh0cQPwGWA.jpg" alt="Level 03 Frame" />
    </div>
  </section>

  <!-- LEVEL 04: HANDOVER -->
  <section class="timeline-level" data-level="04">
    <div class="level-left">
      <div class="level-meta">
        <span class="level-label">LEVEL 04</span>
        <span class="level-time">MONTH 18+</span>
      </div>
      <div class="level-number-outline">05</div>
      <h3 class="level-name">HANDOVER</h3>
    </div>
    <div class="level-right">
      <img src="/images/lQ9et0c22tqAJR1VFU4r9RQCf3w.jpg" alt="Level 04 Handover" />
    </div>
  </section>
</div>
```

### CSS — Outline Number
```css
.level-number-outline {
  font-family: 'Anton', sans-serif;
  font-size: clamp(100px, 16vw, 220px);
  line-height: 0.85;
  color: transparent;
  -webkit-text-stroke: 2px var(--color-accent-safety);
  user-select: none;
}

.level-label {
  font-family: 'JetBrains Mono';
  font-size: 12px;
  color: var(--color-accent-safety);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.level-time {
  font-family: 'JetBrains Mono';
  font-size: 12px;
  color: var(--color-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}
```

---

## 6. StatsGrid.tsx (Metrics Section)

### Layout
```html
<section class="stats-section">
  <!-- Left: 3D model -->
  <div class="stats-model">
    <!-- CSS 3D or SVG geometric building -->
  </div>

  <!-- Right: 2x2 grid -->
  <div class="stats-grid">
    <div class="stat-card">
      <span class="stat-tag">(01) YEARS BUILDING</span>
      <div class="stat-number">
        <span class="counter" data-target="38">0</span>
        <span class="stat-plus">+</span>
      </div>
      <p class="stat-desc">Since a single excavator in 1987.</p>
    </div>

    <div class="stat-card">
      <span class="stat-tag">(02) PROJECTS DELIVERED</span>
      <div class="stat-number">
        <span class="counter" data-target="214">0</span>
        <span class="stat-plus">+</span>
      </div>
      <p class="stat-desc">Towers, bridges, plants and homes.</p>
    </div>

    <div class="stat-card">
      <span class="stat-tag">(03) SAFE WORK HOURS</span>
      <div class="stat-number">
        <span class="counter-formatted">1.2M</span>
      </div>
      <p class="stat-desc">Without a lost-time incident.</p>
    </div>

    <div class="stat-card">
      <span class="stat-tag">(04) PEOPLE ON PAYROLL</span>
      <div class="stat-number">
        <span class="counter" data-target="640">0</span>
        <span class="stat-plus">+</span>
      </div>
      <p class="stat-desc">Engineers, foremen &amp; trades.</p>
    </div>
  </div>
</section>
```

### CSS
```css
.stats-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1px;
  background: var(--color-border-subtle);
}

.stat-card {
  background: var(--color-bg-base);
  padding: 40px;
}

.stat-tag {
  font-family: 'JetBrains Mono';
  font-size: 11px;
  color: var(--color-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  display: block;
  margin-bottom: 16px;
}

.stat-number {
  font-family: 'Anton', sans-serif;
  font-size: clamp(56px, 8vw, 96px);
  line-height: 0.9;
  color: var(--color-text-primary);
  display: flex;
  align-items: baseline;
}

.stat-plus {
  color: var(--color-accent-safety);
  font-size: 0.6em;
  margin-left: 4px;
}

.stat-desc {
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  color: var(--color-text-muted);
  margin-top: 12px;
  line-height: 1.5;
}
```

---

## 7. SiteFooter.tsx

### Structure
```html
<footer class="site-footer">
  <!-- Pre-footer CTA -->
  <div class="footer-cta-section">
    <h2 class="footer-cta-headline">
      GOT A SITE? LET'S BUILD
      SOMETHING THAT STANDS.
    </h2>
    <a class="cta-compound" href="/contact">
      <span class="cta-label">START A PROJECT</span>
      <span class="cta-icon">↗</span>
    </a>
  </div>

  <!-- 4-column grid -->
  <div class="footer-columns">
    <div class="footer-col">
      <span class="col-tag">(01) HEAD OFFICE</span>
      <p>18 Dock Street, Unit 4<br />3011 BJ Rotterdam<br />The Netherlands</p>
    </div>
    <div class="footer-col">
      <span class="col-tag">(02) TALK TO US</span>
      <a href="mailto:build@rawstructure.com">build@rawstructure.com</a>
      <a href="tel:+31105550187">+31 10 555 0187</a>
    </div>
    <div class="footer-col">
      <span class="col-tag">(03) SITEMAP</span>
      <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/services">Services</a>
        <a href="/projects">Projects</a>
        <a href="/journal">Journal</a>
        <a href="/contact">Contact</a>
      </nav>
    </div>
    <div class="footer-col">
      <span class="col-tag">(04) FOLLOW THE BUILD</span>
      <nav>
        <a href="#">LinkedIn</a>
        <a href="#">Instagram</a>
        <a href="#">X / Twitter</a>
        <a href="#">YouTube</a>
      </nav>
    </div>
  </div>

  <!-- Massive wordmark -->
  <div class="footer-wordmark">RAW STRUCTURE</div>

  <!-- Bottom bar -->
  <div class="footer-bottom">
    <span>© 2026 Raw Structure B.V. — All rights reserved</span>
    <span>ISO 9001 · ISO 45001 · VCA**</span>
  </div>
</footer>
```

### CSS
```css
.footer-cta-headline {
  font-family: 'Anton', sans-serif;
  font-size: clamp(40px, 6vw, 80px);
  text-transform: uppercase;
  color: var(--color-text-primary);
  line-height: 0.92;
  margin-bottom: 32px;
}

.col-tag {
  font-family: 'JetBrains Mono';
  font-size: 11px;
  color: var(--color-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  display: block;
  margin-bottom: 16px;
}

.footer-wordmark {
  font-family: 'Anton', sans-serif;
  font-size: clamp(64px, 12vw, 200px);
  color: var(--color-text-primary);
  text-transform: uppercase;
  line-height: 0.85;
  text-align: center;
  padding: 40px 0 24px;
  opacity: 0.9;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  font-family: 'JetBrains Mono';
  font-size: 11px;
  color: var(--color-text-muted);
  padding: 16px 0;
  border-top: 1px solid var(--color-border-subtle);
}
```

---

## 8. ElevationRuler.tsx (Right-side fixed widget)

```typescript
'use client';
import { useEffect, useRef } from 'react';

export function ElevationRuler() {
  const labelRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const update = () => {
      const pct = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      const meters = Math.round(pct * 120); // 0 to ~120m
      if (labelRef.current) {
        labelRef.current.textContent = String(meters).padStart(3, '0') + ' M';
      }
    };
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  return (
    <div style={{
      position: 'fixed', right: 0, top: 0, height: '100vh',
      width: '24px', zIndex: 99, pointerEvents: 'none',
      borderLeft: '1px solid rgba(255,77,0,0.2)',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
    }}>
      <span ref={labelRef} style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: '9px', color: '#ff4d00',
        textTransform: 'uppercase', letterSpacing: '0.05em',
        writingMode: 'vertical-rl', transform: 'rotate(180deg)',
      }}>000 M</span>
    </div>
  );
}

---

## 9. SelectedWorkSlider.tsx (Horizontal Project Carousel)

### Structure
Counter: `04 FEATURED / 214 DELIVERED`

```html
<section class="selected-work-section">
  <div class="carousel-header">
    <div class="carousel-title-row">
      <span class="carousel-tag">(04) SELECTED WORK</span>
      <h2 class="carousel-h2">BUILT TO LAST CENTURIES.</h2>
    </div>
    <div class="carousel-controls">
      <span class="carousel-counter">04 FEATURED / 214 DELIVERED</span>
      <button class="carousel-btn prev-btn" aria-label="Previous project">
        <svg viewBox="0 0 24 24" class="arrow-svg"><path d="M 6.75 0 L 0 6.75 L 6.75 13.5 Z" fill="currentColor"/></svg>
      </button>
      <button class="carousel-btn next-btn" aria-label="Next project">
        <svg viewBox="0 0 24 24" class="arrow-svg"><path d="M 0 0 L 6.75 6.75 L 0 13.5 Z" fill="currentColor"/></svg>
      </button>
    </div>
  </div>

  <div class="carousel-track-container" data-cursor="DRAG TO EXPLORE →">
    <div class="carousel-track">
      <!-- Project 01: Meridian Tower -->
      <article class="project-slide">
        <div class="project-media">
          <img src="/images/eqrLSETPpkJONqFnCfAZhUsKem0.jpg" alt="Meridian Tower Rotterdam" />
        </div>
        <div class="project-info">
          <div class="project-meta">
            <span class="project-cat">COMMERCIAL</span>
            <span class="project-loc">ROTTERDAM, NL · 2025</span>
          </div>
          <h3 class="project-name">MERIDIAN TOWER</h3>
        </div>
      </article>

      <!-- Project 02: Kessel Bridge -->
      <article class="project-slide">
        <div class="project-media">
          <img src="/images/a37tu7mhireD1ajDd8iWq6BbrmY.jpg" alt="Kessel Bridge Hamburg" />
        </div>
        <div class="project-info">
          <div class="project-meta">
            <span class="project-cat">INFRASTRUCTURE</span>
            <span class="project-loc">HAMBURG, DE · 2024</span>
          </div>
          <h3 class="project-name">KESSEL BRIDGE</h3>
        </div>
      </article>

      <!-- Project 03: Foundry Lofts -->
      <article class="project-slide">
        <div class="project-media">
          <img src="/images/ZXGCQ9ramf2nzvPDkqJe6G1p7E.jpg" alt="Foundry Lofts Brooklyn" />
        </div>
        <div class="project-info">
          <div class="project-meta">
            <span class="project-cat">RESIDENTIAL</span>
            <span class="project-loc">BROOKLYN, NY · 2024</span>
          </div>
          <h3 class="project-name">FOUNDRY LOFTS</h3>
        </div>
      </article>

      <!-- Project 04: Atlas Clinic -->
      <article class="project-slide">
        <div class="project-media">
          <img src="/images/1Z6NS71E0hj9I28vHqgoVDEVo8.jpg" alt="Atlas Clinic Oslo" />
        </div>
        <div class="project-info">
          <div class="project-meta">
            <span class="project-cat">HEALTHCARE</span>
            <span class="project-loc">OSLO, NO · 2023</span>
          </div>
          <h3 class="project-name">ATLAS CLINIC</h3>
        </div>
      </article>
    </div>
  </div>
</section>
```

---

## 10. DrawingToLandmark.tsx (Centerpiece Zoom Hero)

```html
<section class="drawing-landmark-section">
  <div class="drawing-landmark-header">
    <span class="blueprint-spec-label">SECTION A–A · 1:200</span>
    <h2 class="drawing-landmark-h2">DRAWING → LANDMARK</h2>
  </div>
  <div class="drawing-landmark-media-wrap">
    <!-- Starts scaled down at 0.3 with rotate(-8deg) and zooms to scale 1.0 full bleed on scroll -->
    <div class="drawing-landmark-photo" style="transform: scale(0.3) rotate(-8deg);">
      <img src="/images/6QMjWT0pZjHhUYaPIXKvYkjjcU.jpg" alt="Drawing to Landmark centerpiece" />
    </div>
  </div>
</section>
```

---

## 11. TestimonialsSlider.tsx (Client Words)

```html
<section class="testimonials-section">
  <span class="testimonials-tag">(05) CLIENT WORDS</span>
  <h2 class="testimonials-h2">WHAT PEOPLE SAY AFTER HANDOVER.</h2>

  <div class="testimonials-grid">
    <!-- Testimonial 01 -->
    <div class="testimonial-card">
      <blockquote class="testimonial-quote">
        "Raw Structure delivered Meridian Tower three weeks ahead of schedule. In 25 years of commercial development, that has never happened to us before."
      </blockquote>
      <div class="testimonial-author">
        <img class="author-avatar" src="/images/Y613vnAJPUR911i0n2tx8ZwHM.jpg" alt="Ilse van Dijk" />
        <div class="author-meta">
          <span class="author-name">ILSE VAN DIJK</span>
          <span class="author-title">CEO, Meridian Holdings</span>
        </div>
      </div>
    </div>

    <!-- Testimonial 02 -->
    <div class="testimonial-card">
      <blockquote class="testimonial-quote">
        "The cantilever tolerances on the Kessel Bridge were within 2 millimeters over a 180-meter span. Their engineering was simply world class."
      </blockquote>
      <div class="testimonial-author">
        <img class="author-avatar" src="/images/lApTWiLV6p4H3Ej4xwxVAC3TLY.jpg" alt="Markus Brandt" />
        <div class="author-meta">
          <span class="author-name">MARKUS BRANDT</span>
          <span class="author-title">Head of Infrastructure, City of Hamburg</span>
        </div>
      </div>
    </div>

    <!-- Testimonial 03 -->
    <div class="testimonial-card">
      <blockquote class="testimonial-quote">
        "Zero lost-time incidents across an entire 24-month build programme. They don't just talk about safety culture — they run their sites like flight decks."
      </blockquote>
      <div class="testimonial-author">
        <img class="author-avatar" src="/images/wQi3fuduH13jDNFulIx6mxVM2CY.jpg" alt="Elena Rostova" />
        <div class="author-meta">
          <span class="author-name">ELENA ROSTOVA</span>
          <span class="author-title">Managing Director, Kessel Real Estate</span>
        </div>
      </div>
    </div>
  </div>
</section>
```

```
