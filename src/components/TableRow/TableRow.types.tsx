import type { ReactNode } from 'react';

// Props for TableRow component
export interface TableRowProps {
  // Row text
  text?: string;

  // Row background color
  backgroundColor?: string;

  // Disable the row or not
  disabled?: boolean;

  // Row content
  children?: ReactNode;
}
