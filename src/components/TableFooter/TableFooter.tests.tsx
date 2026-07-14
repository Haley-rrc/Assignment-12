// import testing tools
import { render, screen } from "@testing-library/react";

// import TableFooter component
import TableFooter from "./TableFooter";

describe("TableFooter Component", () => {
  // test if TableFooter shows on the page
  test("renders table footer on the screen", () => {
    render(<TableFooter text="Test Footer" />);

    const footerElement = screen.getByText("Test Footer");

    expect(footerElement).toBeInTheDocument();
  });

  // test if disabled TableFooter background turns gray
  test("changes background color when disabled", () => {
    render(<TableFooter text="Disabled Footer" disabled />);

    const footerElement = screen.getByText("Disabled Footer");

    expect(footerElement).toHaveStyleRule("background-color", "#cccccc");
  });
});
