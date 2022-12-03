import { render, screen } from "@testing-library/react";
import App from "./App";
import { logRoles } from "@testing-library/dom";

test("button has correct initial color", () => {
    const { container } = render(<App />);
    logRoles(container);
    const button = screen.getByRole("button", { name: "Change to blue" });
    expect(button).toHaveStyle({ backgroundColor: "red" });
});

test("button turns blue when clicked", () => {
    render(<App />);
    const button = screen.getByRole("button", { name: "Change to blue" });
});
