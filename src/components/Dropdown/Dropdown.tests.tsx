// import testing tools
import { render, screen } from '@testing-library/react';

// import Dropdown component
import Dropdown from './Dropdown';

describe('Dropdown Component', () => {
  // test if Dropdown shows on the page
  test('renders dropdown on the screen', () => {
    render(<Dropdown optionOne="Test Option" />);

    const dropdownElement = screen.getByRole('combobox');

    expect(dropdownElement).toBeInTheDocument();
  });

  // test if disabled Dropdown background turns gray
  test('changes background color when disabled', () => {
    render(<Dropdown optionOne="Disabled Option" disabled />);

    const dropdownElement = screen.getByRole('combobox');

    expect(dropdownElement).toHaveStyleRule('background-color', '#cccccc');
  });
});
