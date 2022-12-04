import "./App.css";
import { useState } from "react";

export const RED_BUTTON = {
    colour: "mediumVioletRed",
    text: "Change to midnight blue",
};

export const BLUE_BUTTON = {
    colour: "midnightBlue",
    text: "Change to medium violet red",
};

export const replaceCamelWithSpaces = (color) => {
    return color.replace(/\B([A-Z])\B/g, " $1");
};

const App = () => {
    const [isRed, setIsRed] = useState(true);
    const [isChecked, setIsChecked] = useState(false);

    return (
        <div>
            <button
                style={{
                    backgroundColor: isChecked
                        ? "gray"
                        : isRed
                        ? RED_BUTTON.colour
                        : BLUE_BUTTON.colour,
                }}
                onClick={() => setIsRed(!isRed)}
                disabled={isChecked}
            >
                {isRed ? RED_BUTTON.text : BLUE_BUTTON.text}
            </button>
            <input
                onChange={(event) => {
                    setIsChecked(event.target.checked);
                }}
                type="checkbox"
                name="disable-colour"
                id="disable-colour"
                defaultChecked={isChecked}
            />
            <label htmlFor="disable-colour">Disable button</label>
        </div>
    );
};

export default App;
