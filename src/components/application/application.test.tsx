import { render, screen } from "@testing-library/react";
import Application from "./Application";

describe("Application Form", () => {
  it("should render text input field", () => {
    render(<Application />);
    const nameElement = screen.getByRole("textbox");
    expect(nameElement).toBeInTheDocument();
  });
});
