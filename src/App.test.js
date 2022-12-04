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

test("Button is initially enabled, checkbox disables it", () => {
    render(<App />);
    // Button initially enabled
    const button = screen.getByRole("button", { name: "Change to blue" });
    expect(button).toBeEnabled();

    // Checkbox initially unchecked
    const checkbox = screen.getByRole("checkbox", { name: "Disable button" });
    expect(checkbox).not.toBeChecked();

    // Checking checkbox disables button, disabled button has gray background
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
    expect(button).toBeDisabled();
    expect(button).toHaveStyle({ backgroundColor: "gray" });

    // Re-enabling button
    fireEvent.click(checkbox);
    expect(button).toHaveStyle({ backgroundColor: "red" });
    expect(button).toBeEnabled();
});
