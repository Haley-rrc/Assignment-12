// import testing tools
import { render, screen } from '@testing-library/react';

// import Label component
import Label from './Label';

describe('Label Component', () => {
  // test if Label shows on the page
  test('renders label on the screen', () => {
    render(<Label text="Test Label" />);

    const labelElement = screen.getByText('Test Label');

    expect(labelElement).toBeInTheDocument();
  });

  // test if disabled Label background turns gray
  test('changes background color when disabled', () => {
    render(<Label text="Disabled Label" disabled />);

    const labelElement = screen.getByText('Disabled Label');

    expect(labelElement).toHaveStyleRule('background-color', '#cccccc');
  });
});
