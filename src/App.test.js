import { render, screen, fireEvent } from "@testing-library/react";
import App, { replaceCamelWithSpaces, RED_BUTTON, BLUE_BUTTON } from "./App";
import { logRoles } from "@testing-library/dom";

test("change colour button", () => {
    const { container } = render(<App />);
    logRoles(container);

    // Initial
    const button = screen.getByRole("button", { name: RED_BUTTON.text });
    expect(button).toHaveStyle({ backgroundColor: RED_BUTTON.colour });

    // Click
    fireEvent.click(button);
    expect(button).toHaveStyle({ backgroundColor: BLUE_BUTTON.colour });
    expect(button).toHaveTextContent(BLUE_BUTTON.text);
});

test("Button is initially enabled, checkbox disables it", () => {
    render(<App />);
    // Button initially enabled
    const button = screen.getByRole("button", { name: RED_BUTTON.text });
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
    expect(button).toHaveStyle({ backgroundColor: RED_BUTTON.colour });
    expect(button).toBeEnabled();
});

describe("spaces before camel-case letters", () => {
    test("works for no inner capital letters", () => {
        const res = replaceCamelWithSpaces("red");
        expect(res).toBe("red");
    });

    test("works for one inner capital letter", () => {
        const res = replaceCamelWithSpaces("MidnightBlue");
        expect(res).toBe("Midnight Blue");
    });

    test("works for multiple capital letters", () => {
        const res = replaceCamelWithSpaces("MediumVioletRed");
        expect(res).toBe("Medium Violet Red");
    });
});
