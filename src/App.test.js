import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import { logRoles } from "@testing-library/dom";

test("change colour button", () => {
    const { container } = render(<App />);
    logRoles(container);

    // Initial
    const button = screen.getByRole("button", { name: "Change to blue" });
    expect(button).toHaveStyle({ backgroundColor: "red" });

    // Click
    fireEvent.click(button);
    expect(button).toHaveStyle({ backgroundColor: "blue" });
    expect(button).toHaveTextContent("Change to red");
});

test("checkbox", () => {
    render(<App />);
    const button = screen.getByRole("button", { name: "Change to blue" });
    expect(button).toBeEnabled();

    const checkbox = screen.getByRole("checkbox", { name: "Disable button" });
    expect(checkbox).not.toBeChecked();

    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
    expect(button).toBeDisabled();
});
