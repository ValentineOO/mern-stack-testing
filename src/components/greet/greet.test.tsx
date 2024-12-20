import { render, screen, cleanup } from "@testing-library/react";
import Greet from "./Greet";

afterEach(() => {
  cleanup();
});

describe("a group of tests for Greet component", () => {
  // it.only("should render Greet component correctly", () => {
  //   render(<Greet />);
  //   const textElement = screen.getByText("Hello");
  //   expect(textElement).toBeInTheDocument();
  // });

  // it.skip("should render Greet component correctly", () => {
  //   render(<Greet />);
  //   const textElement = screen.getByText("Hello");
  //   expect(textElement).toBeInTheDocument();
  // });w

  test("should render Greet component correctly", () => {
    render(<Greet />);
    const textElement = screen.getByText(/Hello/);
    expect(textElement).toBeInTheDocument();
  });

  // describe("Nested", () => {
  //   test("should render Greet component with a name", () => {
  //     render(<Greet name="Valentine" />);
  //     const textElement = screen.getByText("Hello");
  //     expect(textElement).toBeInTheDocument();
  //   });
  // });

  // describe.only("Nested", () => {
  //   it("should render Greet component with a name", () => {
  //     render(<Greet name="Valentine" />);
  //     const textElement = screen.getByText("Hello");
  //     expect(textElement).toBeInTheDocument();
  //   });
  // });

  // describe.skip("Nested", () => {
  //   it("should render Greet component with a name", () => {
  //     render(<Greet name="Valentine" />);
  //     const textElement = screen.getByText("Hello");
  //     expect(textElement).toBeInTheDocument();
  //   });
  // });
});
