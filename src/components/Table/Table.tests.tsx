// import testing tools
import { render, screen } from "@testing-library/react";

// import Table component
import Table from "./Table";

describe("Table Component", () => {
  // test if Table shows on the page
  test("renders table on the screen", () => {
    render(<Table caption="Test Table" />);

    const tableElement = screen.getByText("Test Table");

    expect(tableElement).toBeInTheDocument();
  });

  // test if disabled Table background turns gray
  test("changes background color when disabled", () => {
    render(<Table caption="Disabled Table" disabled />);

    const tableElement = screen.getByRole("table");

    expect(tableElement).toHaveStyleRule("background-color", "#cccccc");
  });
});
