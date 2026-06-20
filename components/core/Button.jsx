import React from 'react';

/**
 * Button — the system's primary action. Square corners, uppercase optional.
 * variant: 'primary' (burnt-orange fill) | 'ghost' (hairline outline) | 'nav' (compact header CTA)
 */
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  icon,
  uppercase = true,
  style = {},
  ...rest
}) {
  const pads = { sm: '10px 18px', md: '14px 26px', lg: '18px 32px' };
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '12px',
    fontFamily: 'var(--font-text)',
    fontWeight: 800,
    fontSize: size === 'lg' ? '15px' : size === 'sm' ? '12.5px' : '14px',
    letterSpacing: uppercase ? '1px' : '0',
    textTransform: uppercase ? 'uppercase' : 'none',
    textDecoration: 'none',
    padding: pads[size] || pads.md,
    border: '1px solid transparent',
    cursor: 'pointer',
    transition: 'transform var(--dur-fast) var(--ease-out), filter var(--dur-fast), box-shadow var(--dur-fast), background var(--dur-fast)',
  };
  const variants = {
    primary: { background: 'var(--ga-accent)', color: '#0c0c0e' },
    ghost: { background: 'transparent', color: 'var(--ga-ink)', borderColor: 'var(--ga-line-3)' },
    nav: { background: 'var(--ga-accent)', color: '#0c0c0e', padding: '10px 18px' },
  };
  const [hover, setHover] = React.useState(false);
  const hoverStyle = hover
    ? variant === 'ghost'
      ? { borderColor: 'var(--ga-accent)', color: 'var(--ga-accent)' }
      : { transform: 'var(--lift-cta)', boxShadow: 'var(--shadow-cta)' }
    : {};
  const Tag = href ? 'a' : 'button';
  return (
    <Tag
      href={href}
      style={{ ...base, ...variants[variant], ...hoverStyle, ...style }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      {...rest}
    >
      {children}
      {icon ? <span aria-hidden="true">{icon}</span> : null}
    </Tag>
  );
}
