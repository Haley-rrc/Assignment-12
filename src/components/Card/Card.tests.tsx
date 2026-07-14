// import testing tools
import { render, screen } from '@testing-library/react';

// import Card component
import Card from './Card';

describe('Card Component', () => {
  // test if Card shows on the page
  test('renders card on the screen', () => {
    render(<Card title="Test Card" />);

    const cardElement = screen.getByText('Test Card');

    expect(cardElement).toBeInTheDocument();
  });

  // test if disabled Card background turns gray
  test('changes background color when disabled', () => {
    render(<Card title="Disabled Card" disabled />);

    const cardElement = screen.getByTestId('card');

    expect(cardElement).toHaveStyleRule('background-color', '#cccccc');
  });
});
