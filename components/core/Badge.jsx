import React from 'react';

/**
 * Badge — the uppercase eyebrow pill with an accent dot. Used for the
 * hero discipline tag and as a section eyebrow (set dot={false} + bare).
 */
export function Badge({ children, dot = true, bare = false, style = {} }) {
  if (bare) {
    return (
      <span style={{
        fontFamily: 'var(--font-text)', fontWeight: 700, fontSize: '12px',
        letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--ga-accent)', ...style,
      }}>{children}</span>
    );
  }
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: '10px',
      border: '1px solid var(--ga-line-3)', padding: '8px 14px',
      fontFamily: 'var(--font-text)', fontSize: '11.5px', letterSpacing: '2.5px',
      textTransform: 'uppercase', color: 'var(--ga-ink-soft)', whiteSpace: 'nowrap',
      backdropFilter: 'var(--blur-glass)', ...style,
    }}>
      {dot ? <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: 'var(--ga-accent)' }} /> : null}
      {children}
    </span>
  );
}
