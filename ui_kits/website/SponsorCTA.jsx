import React from 'react';

const A = '../../assets';

/**
 * SponsorCTA — the closing partnership pitch on a darkened victory photo,
 * with the benefits / commitments columns and the primary CTA.
 */
export function SponsorCTA() {
  const benefices = [
    "Profiter de l'image et de la beauté du noble art pour affirmer ses valeurs.",
    'Faire de la publicité de manière originale et mémorable.',
    "Véhiculer une image positive d'aide et de soutien à un jeune athlète passionné.",
  ];
  const engagements = [
    'De la visibilité via ma page Instagram et mes publications TikTok.',
    'Une initiation à la boxe, si vous le désirez, pour partager ma passion.',
    'Votre logo sur mon équipement, mes panneaux publicitaires et mes photographies.',
    'Une invitation à chacune de mes prestations de boxe.',
  ];
  const [cta, setCta] = React.useState(false);
  const Col = ({ title, items, accent }) => (
    <div style={{ background: 'rgba(20,20,22,0.85)', backdropFilter: 'var(--blur-glass)', border: '1px solid var(--ga-line)', padding: '38px 34px' }}>
      <div style={{ fontFamily: 'var(--font-display)', fontSize: '22px', textTransform: 'uppercase', marginBottom: '22px', color: accent ? 'var(--ga-accent)' : 'var(--ga-ink)' }}>{title}</div>
      {items.map((t, i) => (
        <div key={i} style={{ display: 'flex', gap: '14px', padding: '13px 0', borderTop: '1px solid var(--ga-line)', fontSize: '15px', lineHeight: 1.55, color: '#d8d5cd' }}>
          <span style={{ color: 'var(--ga-accent)', flex: 'none' }}>→</span><span>{t}</span>
        </div>
      ))}
    </div>
  );
  return (
    <section id="sponsoring" style={{ position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, background: `#141416 url('${A}/victory-bw.png') center 20%/cover`, zIndex: 0 }} />
      <div style={{ position: 'absolute', inset: 0, background: 'var(--ga-scrim-left)', zIndex: 1 }} />
      <div style={{ position: 'relative', zIndex: 2, maxWidth: 'var(--container-max)', margin: '0 auto', padding: '110px var(--page-gutter)' }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--type-display-2)', lineHeight: 0.9, textTransform: 'uppercase', maxWidth: '980px', color: 'var(--ga-ink)', margin: 0 }}>
          Et si on marquait<br />l'histoire <span style={{ color: 'var(--ga-accent)' }}>ensemble</span> ?
        </h2>
        <p style={{ maxWidth: '600px', marginTop: '26px', fontSize: '16px', lineHeight: 1.65, color: 'var(--ga-ink-soft)' }}>
          La participation aux compétitions ne peut se faire sans le soutien de partenaires et sponsors prêts à apporter une aide financière ou matérielle.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginTop: '50px' }}>
          <Col title="Vos bénéfices" items={benefices} accent />
          <Col title="Mes engagements" items={engagements} />
        </div>
        <div style={{ marginTop: '50px', display: 'flex', alignItems: 'center', gap: '30px', flexWrap: 'wrap' }}>
          <p style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(18px,2vw,26px)', textTransform: 'uppercase', lineHeight: 1.1, maxWidth: '560px', color: 'var(--ga-ink)', margin: 0 }}>
            J'ai besoin de vous pour rester concentré sur mes objectifs et briller lors des compétitions.
          </p>
          <a href="mailto:contact@guilhemangui.fr"
            onMouseEnter={() => setCta(true)} onMouseLeave={() => setCta(false)}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', background: 'var(--ga-accent)', color: '#0c0c0e', padding: '18px 32px', fontWeight: 800, fontSize: '15px', letterSpacing: '1px', textTransform: 'uppercase', textDecoration: 'none', transform: cta ? 'var(--lift-cta)' : 'none', boxShadow: cta ? 'var(--shadow-cta)' : 'none', transition: 'transform var(--dur-fast), box-shadow var(--dur-fast)' }}>
            Devenir partenaire <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
