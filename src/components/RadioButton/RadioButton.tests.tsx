// import testing tools
import { render, screen } from "@testing-library/react";

// import RadioButton component
import RadioButton from "./RadioButton";

describe("RadioButton Component", () => {
  // test if RadioButton shows on the page
  test("renders radio button on the screen", () => {
    render(<RadioButton label="Test Radio" />);

    const radioElement = screen.getByText("Test Radio");

    expect(radioElement).toBeInTheDocument();
  });

  // test if disabled RadioButton background turns gray
  test("changes background color when disabled", () => {
    render(<RadioButton label="Disabled Radio" disabled />);

    const radioElement = screen.getByTestId("radio-wrapper");

    expect(radioElement).toHaveStyleRule("background-color", "#cccccc");
  });
});
