import React from 'react';

/**
 * RecordBand — the fight record as a 4-up row of StatCards over a
 * hairline grid, with the physical measurements beneath.
 */
export function RecordBand() {
  const stats = [
    { v: '30', l: 'Combats', t: 'default' },
    { v: '20', l: 'Victoires', t: 'accent' },
    { v: '6', l: 'Victoires par KO', t: 'default' },
    { v: '10', l: 'Défaites', t: 'faint' },
  ];
  const tones = { default: 'var(--ga-ink)', accent: 'var(--ga-accent)', faint: 'var(--ga-faint)' };
  const meta = [['Taille', '1,90 m'], ['Poids', '75 kg'], ['Allonge des bras', '1,97 m']];
  return (
    <section style={{ borderTop: '1px solid var(--ga-line)', borderBottom: '1px solid var(--ga-line)' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)' }}>
        {stats.map((s, i) => (
          <div key={s.l} style={{ padding: '46px 30px', borderRight: i < 3 ? '1px solid var(--ga-line)' : 'none' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--type-stat)', lineHeight: 1, color: tones[s.t] }}>{s.v}</div>
            <div style={{ marginTop: '10px', fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--ga-muted-2)' }}>{s.l}</div>
          </div>
        ))}
      </div>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', display: 'flex', gap: '46px', flexWrap: 'wrap', padding: '0 30px 40px', fontSize: '14px', color: 'var(--ga-muted)' }}>
        {meta.map(([k, v]) => (
          <div key={k}><span style={{ color: 'var(--ga-muted-2)', textTransform: 'uppercase', letterSpacing: '1.5px', fontSize: '11px', marginRight: '10px' }}>{k}</span><strong style={{ color: 'var(--ga-ink)' }}>{v}</strong></div>
        ))}
      </div>
    </section>
  );
}
