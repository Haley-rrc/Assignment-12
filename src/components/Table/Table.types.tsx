import type { ReactNode } from 'react';

// Props for Table component
export interface TableProps {
  // Table title
  caption?: string;

  // Table background color
  backgroundColor?: string;

  // Disable the table or not
  disabled?: boolean;

  // Table content
  children?: ReactNode;
}
