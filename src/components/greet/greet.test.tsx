// import { render, screen } from "@testing-library/react";
// import Greet from "./Greet";

import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

// describe("group tests for greet components", () => {
//   it("should test if the greet component renders correctly", () => {
//     render(<Greet />);

//     const textElement = screen.getByText(/hello/i);
//     expect(textElement).toBeInTheDocument();
//   });
// });

/**
 * Greet should render the text hello and if a name is passed into the component it should render hello followed by the name
 */

describe("a group of tests for Greet component", () => {
  // it.only("should render Greet component correctly", () => {
  //   render(<Greet />);
  //   const textElement = screen.getByText("Hello");
  //   expect(textElement).toBeInTheDocument();
  // });
  it.skip("should render Greet component correctly", () => {
    render(<Greet />);
    const textElement = screen.getByText("Hello");
    expect(textElement).toBeInTheDocument();
  });

  it("should render Greet component with a name", () => {
    render(<Greet name="Valentine" />);
    const textElement = screen.getByText("Hello");
    expect(textElement).toBeInTheDocument();
  });
});
