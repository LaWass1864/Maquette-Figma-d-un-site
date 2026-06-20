# Website — UI Kit

A high-fidelity recreation of the **Guilhem Angui** one-page site (boxer portfolio + sponsorship pitch). It composes the design-system tokens and mirrors the live build.

## Screens
- **Hero.jsx** — full-bleed B&W media header, fighter name in Anton, next-fight strip on a bottom scrim.
- **RecordBand.jsx** — the fight record (4 StatCards over a hairline grid) + physical measurements.
- **NobleArt.jsx** — "Galerie & Médias" editorial card trio over a 3-up photo gallery (cards lift on hover).
- **SponsorCTA.jsx** — closing partnership pitch on a darkened victory photo; benefits / commitments columns + primary CTA.

`index.html` stitches them under a fixed nav into the scrolling page.

## Notes
- The production site lives at the project root as **`Guilhem Angui.dc.html`** (a Design Component) and is the source of truth; these screens are cosmetic recreations for the kit.
- Imagery lives in `/assets`. Photography is desaturated at rest and warms on hover; the hero runs full black-and-white (`--img-hero`).
- The kit drops the scroll-reveal animations of the live site for a static, scannable preview.
