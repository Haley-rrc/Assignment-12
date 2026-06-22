// import testing tools
import { render, screen } from '@testing-library/react';

// import TableCell component
import TableCell from './TableCell';

describe('TableCell Component', () => {
  // test if TableCell shows on the page
  test('renders table cell on the screen', () => {
    render(<TableCell text="Test Cell" />);

    const cellElement = screen.getByText('Test Cell');

    expect(cellElement).toBeInTheDocument();
  });

  // test if disabled TableCell background turns gray
  test('changes background color when disabled', () => {
    render(<TableCell text="Disabled Cell" disabled />);

    const cellElement = screen.getByText('Disabled Cell');

    expect(cellElement).toHaveStyleRule('background-color', '#cccccc');
  });
});
