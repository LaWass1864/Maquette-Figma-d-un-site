# Guilhem Angui — Design System

The brand of **Guilhem Angui**, an amateur English boxer (Boxe Anglaise / *Le Noble Art*) building toward a national title. The system powers a one-page site that doubles as a **palmarès** (record) and a **sponsorship pitch** to prospective partners.

It looks like a fight poster: a near-black stage, one burnt-orange spotlight, heavy condensed display type, and real black-and-white photography that warms to colour on hover.

## Sources
- **Figma prototype:** `https://www.figma.com/proto/65IAlNs9d7R7hwothLiZQO/Site-de-guilhem` (prototype link — not directly readable by tools).
- **Original maquette:** a single tall PDF export (`uploads/Frame 3.pdf`) — all copy and the 15 source photographs were extracted from it into `/assets`.
- **Production site (source of truth):** `Guilhem Angui.dc.html` at the project root.

---

## CONTENT FUNDAMENTALS
- **Language:** French, throughout. Keep accents and French typography (« guillemets », `'`).
- **Voice:** first person from Guilhem ("J'ai besoin de vous", "Mon projet à long terme…"), shifting to third person / coach voice for the testimonial. Direct, determined, sincere — never boastful filler.
- **Tone:** combative but humble; values-driven (respect, discipline, dépassement de soi). The recurring rallying cry: **« Écris ton histoire et marques les esprits. »**
- **Casing:** display headings and labels are **UPPERCASE**; body copy is sentence case. Eyebrows are uppercase with wide tracking.
- **Numbers:** French formatting — `1,90 m`, `75 kg`. Record figures are huge and bare ("30", "20", "6").
- **No emoji.** The only glyph used decoratively is the arrow `→` on links/CTAs and the rotated-square "diamond" mark.
- **Copy length:** short. Eyebrow → big statement → one tight paragraph. Cards are 1–2 sentences.

Example blocks:
> *Eyebrow:* `LES OBJECTIFS` · *Headline:* `VOIR LES CHOSES EN GRAND`
> *CTA:* `DEVENIR PARTENAIRE →`
> *Stat:* `20 — Victoires`

---

## VISUAL FOUNDATIONS
- **Palette:** warm-tinted near-blacks (`#0c0c0e` page, `#141416` cards) under one accent, **burnt orange `#e1621d`**. Saturation stays ~0 everywhere except the accent. Text is a warm off-white (`#f4f1ea`) stepping down through greys to `#5a5852`.
- **Accent usage:** sparingly and with intent — CTAs, the diamond mark, key numerals ("20"), eyebrows, the second name "Angui", hover borders. Never large fills beyond buttons.
- **Type:** two families. **Anton** for display (always uppercase, line-height ≈0.86, slight negative tracking) — the fighter. **Archivo** for everything readable (400–800) — the corner-man. Fluid `clamp()` display sizes; the hero name reaches 200px.
- **Layout:** centered `1280px` container, `40px` gutters, `96px` vertical section rhythm. Content is built from **hairline-divided grids** (1px white at 0.08–0.12 alpha) — a strong editorial, almost newspaper, structure. The hero and sponsor sections break full-bleed.
- **Corners:** **sharp — radius 0 everywhere.** The only curve in the system is a full circle (the media play button). Square corners + the rotated-square "diamond" are the geometric signature.
- **Backgrounds:** full-bleed photography with dark scrims (bottom-up on the hero, left-to-right on the sponsor block) to seat text. Flat colour sections otherwise — no gradients as decoration, no textures, no patterns.
- **Imagery vibe:** documentary boxing photography, **desaturated (`grayscale .2`) at rest, warming to full colour on hover**; the hero footage runs **full black-and-white**. Images live in fixed frames and **zoom inside the frame** (`scale 1.06`, `overflow:hidden`) on hover.
- **Cards:** flat `#141416` fill, 1px hairline border, **no shadow at rest**, sharp corners. On hover they **lift `translateY(-6px)`** and the border becomes accent.
- **Buttons:** solid accent fill, black text, uppercase, sharp; hover lifts `-3px` with a soft orange shadow. Ghost buttons are hairline outlines that shift to accent on hover.
- **Borders & dividers:** white at low alpha (0.08 → 0.20 over imagery). No solid grey lines.
- **Shadows:** essentially none on surfaces — depth comes from value (black on black) and hairlines. The only shadows are accent **glows** (`0 0 0 8px` ring on the play button; `0 14px 40px` orange on CTA hover).
- **Transparency & blur:** the fixed nav and glass panels over photos use `backdrop-filter: blur(6–14px)` over a translucent black.
- **Motion:** one easing curve `cubic-bezier(.16,.7,.25,1)`. Hovers are quick (.25–.65s); on scroll, elements **reveal** (opacity 0→1, `translateY 34px`, .85s) with an 80ms stagger down lists. Respects `prefers-reduced-motion`. A slow 18s Ken-Burns zoom animates the hero.

---

## ICONOGRAPHY
- **Minimal, near icon-free by design.** The brand avoids an icon set.
- **The diamond mark:** a `<span>` square rotated 45° in accent — the logo bug (11px) and the timeline node (9px). This is the one recurring "icon".
- **Glyphs:** the arrow `→` (Unicode) on links and CTAs; the CSS-triangle **play button** (a bordered triangle inside an accent circle) on the video thumbnail. No icon font, no SVG icon library.
- **Emoji:** never.
- If a future surface needs UI icons, use a thin line set (e.g. **Lucide**, 1.5px stroke) in `--ga-ink`/`--ga-muted` — and flag the addition, since none exists today.

---

## INDEX / MANIFEST
Root:
- `styles.css` — the single entry point (imports only). Link this.
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `effects.css`.
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand).
- `components/core/` — `Button`, `Badge`, `StatCard`, `MediaCard`, `TimelineItem` (each `.jsx` + `.d.ts` + `.prompt.md`, with `core.card.html`).
- `ui_kits/website/` — full one-page site recreation (`Hero`, `RecordBand`, `NobleArt`, `SponsorCTA` + `index.html`).
- `assets/` — the 15 extracted photographs.
- `Guilhem Angui.dc.html` (project root) — the live production site.
- `SKILL.md` — portable skill manifest.

> **Fonts note:** Anton and Archivo load from Google Fonts (`tokens/fonts.css`). If you need self-hosted binaries, swap that `@import` for local `@font-face` rules.
