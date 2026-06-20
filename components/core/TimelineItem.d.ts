import * as React from 'react';

export interface TimelineItemProps {
  /** Milestone year, e.g. "2016". */
  year: string;
  title: string;
  detail: string;
  style?: React.CSSProperties;
}

export function TimelineItem(props: TimelineItemProps): JSX.Element;
