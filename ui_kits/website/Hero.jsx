import React from 'react';

const A = '../../assets';

/**
 * Hero — full-bleed black-and-white media header with the fighter's name
 * in Anton and the next-fight strip seated on a bottom scrim.
 */
export function Hero() {
  return (
    <header style={{ position: 'relative', width: '100%', minHeight: '94vh', display: 'flex', alignItems: 'flex-end', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, background: `#141416 url('${A}/fight-smoke.png') center/cover`, filter: 'var(--img-hero)', zIndex: 0 }} />
      <div style={{ position: 'absolute', inset: 0, background: 'var(--ga-scrim-bottom)', zIndex: 1 }} />
      <div style={{ position: 'relative', zIndex: 2, width: '100%', maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 var(--page-gutter) 66px' }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', border: '1px solid var(--ga-line-3)', padding: '8px 14px', fontFamily: 'var(--font-text)', fontSize: '11.5px', letterSpacing: '2.5px', textTransform: 'uppercase', color: 'var(--ga-ink-soft)', marginBottom: '26px', whiteSpace: 'nowrap' }}>
          <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: 'var(--ga-accent)' }} />
          Boxe Anglaise · Amateur Élite
        </span>
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'var(--type-hero)', lineHeight: 0.84, letterSpacing: '-1px', textTransform: 'uppercase', color: 'var(--ga-ink)', margin: 0 }}>
          Guilhem <span style={{ color: 'var(--ga-accent)' }}>Angui</span>
        </h1>
        <p style={{ maxWidth: '480px', marginTop: '24px', fontFamily: 'var(--font-text)', fontSize: '16px', lineHeight: 1.6, color: 'var(--ga-ink-soft)' }}>
          « Écris ton histoire et marques les esprits. » Boxeur amateur, triple champion régional, en route vers le titre national.
        </p>
        <div style={{ marginTop: '36px', display: 'inline-flex', flexWrap: 'wrap', border: '1px solid var(--ga-line-3)', background: 'rgba(12,12,14,0.45)', backdropFilter: 'var(--blur-glass)' }}>
          <div style={{ padding: '18px 26px', borderRight: '1px solid var(--ga-line-2)' }}>
            <div style={{ fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--ga-accent)', marginBottom: '8px', fontWeight: 700 }}>Prochain combat</div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '26px', color: 'var(--ga-ink)' }}>15 NOV 2025</div>
          </div>
          <div style={{ padding: '18px 26px', borderRight: '1px solid var(--ga-line-2)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ fontSize: '11px', letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--ga-muted-2)' }}>Lieu</div>
            <div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--ga-ink)' }}>Paris Arena</div>
          </div>
          <div style={{ padding: '18px 26px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ fontSize: '11px', letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--ga-muted-2)' }}>Enjeu</div>
            <div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--ga-ink)' }}>Championnat</div>
          </div>
        </div>
      </div>
    </header>
  );
}
