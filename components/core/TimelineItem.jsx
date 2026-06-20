import React from 'react';

/**
 * TimelineItem — one milestone in the Parcours: an Anton year in accent,
 * then a hairline-led column with a diamond node, a bold title and detail.
 */
export function TimelineItem({ year, title, detail, style = {} }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '96px 1fr', gap: '24px', padding: '0 0 30px', ...style }}>
      <div style={{ fontFamily: 'var(--font-display)', fontSize: '30px', color: 'var(--ga-accent)', lineHeight: 1 }}>{year}</div>
      <div style={{ borderLeft: '1px solid var(--ga-line-2)', padding: '0 0 4px 26px', position: 'relative' }}>
        <span style={{ position: 'absolute', left: '-5px', top: '6px', width: '9px', height: '9px', background: 'var(--ga-accent)', transform: 'rotate(45deg)' }} />
        <div style={{ fontFamily: 'var(--font-text)', fontSize: '17px', fontWeight: 700, color: 'var(--ga-ink)', marginBottom: '6px' }}>{title}</div>
        <div style={{ fontFamily: 'var(--font-text)', fontSize: '14px', color: 'var(--ga-muted)', lineHeight: 1.55 }}>{detail}</div>
      </div>
    </div>
  );
}
