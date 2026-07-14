import { render, screen } from "@testing-library/react";

// import the button
import Button from "./Button";

describe("Button Component", () => {
  // test if Button show up or not
  test("renders button on the screen", () => {
    render(<Button label="Test Button" />);

    const buttonElement = screen.getByText("Test Button");

    expect(buttonElement).toBeInTheDocument();
  });

  // test if disabled would the bg turn gary
  test("changes background color when disabled", () => {
    render(<Button label="Disabled Button" disabled />);

    const buttonElement = screen.getByText("Disabled Button");

    expect(buttonElement).toHaveStyleRule("background-color", "#cccccc");
  });
});
