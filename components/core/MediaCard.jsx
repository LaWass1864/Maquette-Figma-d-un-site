import React from 'react';

/**
 * MediaCard — the flat surface card used for the "Le Noble Art" trio.
 * An Anton title (optionally accent) over muted body copy. Lifts and
 * grows an accent border on hover. Square corners, no shadow at rest.
 */
export function MediaCard({ title, children, accentTitle = false, style = {} }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: hover ? 'var(--ga-surface-2)' : 'var(--ga-surface)',
        padding: '30px 26px',
        border: `1px solid ${hover ? 'var(--ga-accent)' : 'var(--ga-line)'}`,
        transform: hover ? 'var(--lift-card)' : 'none',
        transition: 'transform var(--dur-med) var(--ease-out), border-color var(--dur-med), background var(--dur-med)',
        ...style,
      }}
    >
      <div style={{
        fontFamily: 'var(--font-display)', fontSize: '21px', textTransform: 'uppercase',
        marginBottom: '12px', color: accentTitle ? 'var(--ga-accent)' : 'var(--ga-ink)',
      }}>{title}</div>
      <p style={{
        margin: 0, fontFamily: 'var(--font-text)', fontSize: '14px',
        lineHeight: 1.6, color: 'var(--ga-muted)',
      }}>{children}</p>
    </div>
  );
}
