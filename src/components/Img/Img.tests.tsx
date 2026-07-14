// import testing tools
import { render, screen } from "@testing-library/react";

// import Img component
import Img from "./Img";

describe("Img Component", () => {
  // test if Img shows on the page
  test("renders image on the screen", () => {
    render(<Img alt="Test Image" />);

    const imgElement = screen.getByAltText("Test Image");

    expect(imgElement).toBeInTheDocument();
  });

  // test if disabled Img background turns gray
  test("changes background color when disabled", () => {
    render(<Img alt="Disabled Image" disabled />);

    const imgElement = screen.getByAltText("Disabled Image");

    expect(imgElement).toHaveStyleRule("background-color", "#cccccc");
  });
});
