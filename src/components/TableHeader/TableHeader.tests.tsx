// import testing tools
import { render, screen } from "@testing-library/react";

// import TableHeader component
import TableHeader from "./TableHeader";

describe("TableHeader Component", () => {
  // test if TableHeader shows on the page
  test("renders table header on the screen", () => {
    render(<TableHeader text="Test Header" />);

    const headerElement = screen.getByText("Test Header");

    expect(headerElement).toBeInTheDocument();
  });

  // test if disabled TableHeader background turns gray
  test("changes background color when disabled", () => {
    render(<TableHeader text="Disabled Header" disabled />);

    const headerElement = screen.getByText("Disabled Header");

    expect(headerElement).toHaveStyleRule("background-color", "#cccccc");
  });
});
