import * as React from 'react';

export interface MediaCardProps {
  title: string;
  children: React.ReactNode;
  /** Colour the title burnt-orange (used to accent the middle card). */
  accentTitle?: boolean;
  style?: React.CSSProperties;
}

export function MediaCard(props: MediaCardProps): JSX.Element;
