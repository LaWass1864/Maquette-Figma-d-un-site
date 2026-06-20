import * as React from 'react';

export interface StatCardProps {
  /** The figure, e.g. "30" or "1,90 m". */
  value: React.ReactNode;
  label: string;
  /** 'accent' colours the numeral orange · 'faint' de-emphasises it. */
  tone?: 'default' | 'accent' | 'faint';
  style?: React.CSSProperties;
}

export function StatCard(props: StatCardProps): JSX.Element;
