import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

describe("group tests for greet components", () => {
  it("should test if the greet component renders correctly", () => {
    render(<Greet />);

    const textElement = screen.getByText("Hello");
    expect(textElement).toBeInTheDocument();
  });
});
