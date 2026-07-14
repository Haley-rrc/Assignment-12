// import testing tools
import { render, screen } from '@testing-library/react';

// import TableRow component
import TableRow from './TableRow';

describe('TableRow Component', () => {
  // test if TableRow shows on the page
  test('renders table row on the screen', () => {
    render(<TableRow text="Test Row" />);

    const rowElement = screen.getByText('Test Row');

    expect(rowElement).toBeInTheDocument();
  });

  // test if disabled TableRow background turns gray
  test('changes background color when disabled', () => {
    render(<TableRow text="Disabled Row" disabled />);

    const rowElement = screen.getByTestId('table-row');

    expect(rowElement).toHaveStyleRule('background-color', '#cccccc');
  });
});
