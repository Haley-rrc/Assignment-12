// import testing tools
import { render, screen } from '@testing-library/react';

// import Text component
import Text from './Text';

describe('Text Component', () => {
  // test if Text shows on the page
  test('renders text on the screen', () => {
    render(<Text text="Test Text" />);

    const textElement = screen.getByText('Test Text');

    expect(textElement).toBeInTheDocument();
  });

  // test if disabled Text background turns gray
  test('changes background color when disabled', () => {
    render(<Text text="Disabled Text" disabled />);

    const textElement = screen.getByText('Disabled Text');

    expect(textElement).toHaveStyleRule('background-color', '#cccccc');
  });
});
