import React from 'react';

/**
 * StatCard — a single record figure: a huge Anton numeral over an
 * uppercase label. tone='accent' colours the numeral burnt-orange;
 * tone='faint' de-emphasises it (used for "Défaites").
 */
export function StatCard({ value, label, tone = 'default', style = {} }) {
  const colors = {
    default: 'var(--ga-ink)',
    accent: 'var(--ga-accent)',
    faint: 'var(--ga-faint)',
  };
  return (
    <div style={{ padding: '46px 30px', ...style }}>
      <div style={{
        fontFamily: 'var(--font-display)', fontSize: 'var(--type-stat)',
        lineHeight: 1, color: colors[tone] || colors.default,
      }}>{value}</div>
      <div style={{
        marginTop: '10px', fontFamily: 'var(--font-text)', fontSize: '12px',
        letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--ga-muted-2)',
      }}>{label}</div>
    </div>
  );
}
