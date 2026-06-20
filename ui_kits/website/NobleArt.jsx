import React from 'react';

/**
 * NobleArt — the "Galerie & Médias" trio of editorial cards over a
 * three-up photo gallery. Cards lift on hover.
 */
export function NobleArt() {
  const cards = [
    { t: 'Le Noble Art', accent: false, b: "La boxe amateur est un sport incroyable : la fatigue due au long effort pour atteindre la victoire est vite oubliée lorsque le combat prend fin." },
    { t: 'Ses valeurs', accent: true, b: "Respect, discipline, humilité et dépassement de soi. Sur le ring comme en dehors, le noble art forge le caractère." },
    { t: 'Les compétitions', accent: false, b: "Championnat de France, Ceintures Montana, Ceintures des Vikings. Un sport au programme des Jeux Olympiques." },
  ];
  const A = '../../assets';
  const gallery = ['victory-ring.png', 'sparring.png', 'competition.png'];
  const [hover, setHover] = React.useState(-1);
  return (
    <section style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'var(--space-section) var(--page-gutter)' }}>
      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--type-display-3)', lineHeight: 0.9, textTransform: 'uppercase', color: 'var(--ga-ink)', margin: '0 0 46px' }}>Galerie &amp; Médias</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '14px', marginBottom: '14px' }}>
        {cards.map((c, i) => (
          <div key={c.t}
            onMouseEnter={() => setHover(i)} onMouseLeave={() => setHover(-1)}
            style={{ background: hover === i ? 'var(--ga-surface-2)' : 'var(--ga-surface)', padding: '30px 26px', border: `1px solid ${hover === i ? 'var(--ga-accent)' : 'var(--ga-line)'}`, transform: hover === i ? 'var(--lift-card)' : 'none', transition: 'transform var(--dur-med) var(--ease-out), border-color var(--dur-med), background var(--dur-med)' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '21px', textTransform: 'uppercase', marginBottom: '12px', color: c.accent ? 'var(--ga-accent)' : 'var(--ga-ink)' }}>{c.t}</div>
            <p style={{ margin: 0, fontSize: '14px', lineHeight: 1.6, color: 'var(--ga-muted)' }}>{c.b}</p>
          </div>
        ))}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '14px' }}>
        {gallery.map((g) => (
          <div key={g} style={{ aspectRatio: '16/10', overflow: 'hidden', background: 'var(--ga-surface)' }}>
            <div style={{ width: '100%', height: '100%', background: `#141416 url('${A}/${g}') center/cover`, filter: 'var(--img-rest)' }} />
          </div>
        ))}
      </div>
    </section>
  );
}
