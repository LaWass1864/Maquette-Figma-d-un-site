import * as React from 'react';

export interface BadgeProps {
  children: React.ReactNode;
  /** Show the leading accent dot (pill variant only). */
  dot?: boolean;
  /** Bare uppercase eyebrow (no border / no dot) for section openers. */
  bare?: boolean;
  style?: React.CSSProperties;
}

export function Badge(props: BadgeProps): JSX.Element;
