import * as React from 'react';

export interface ButtonProps {
  children: React.ReactNode;
  /** 'primary' burnt-orange fill · 'ghost' hairline outline · 'nav' compact header CTA */
  variant?: 'primary' | 'ghost' | 'nav';
  size?: 'sm' | 'md' | 'lg';
  /** Renders an <a> when set, otherwise a <button>. */
  href?: string;
  /** Trailing glyph node, e.g. an arrow "→". */
  icon?: React.ReactNode;
  uppercase?: boolean;
  style?: React.CSSProperties;
}

export function Button(props: ButtonProps): JSX.Element;
