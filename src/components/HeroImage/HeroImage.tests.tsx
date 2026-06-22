// import testing tools
import { render, screen } from '@testing-library/react';

// import HeroImage component
import HeroImage from './HeroImage';

describe('HeroImage Component', () => {
  // test if HeroImage shows on the page
  test('renders hero image on the screen', () => {
    render(<HeroImage title="Test Hero" />);

    const heroElement = screen.getByText('Test Hero');

    expect(heroElement).toBeInTheDocument();
  });

  // test if disabled HeroImage background turns gray
  test('changes background color when disabled', () => {
    render(<HeroImage title="Disabled Hero" disabled />);

    const heroElement = screen.getByTestId('hero-image');

    expect(heroElement).toHaveStyleRule('background-color', '#cccccc');
  });
});
