import "./App.css";
import { useState } from "react";

const RED_BUTTON = {
    colour: "red",
    text: "Change to blue",
};

const BLUE_BUTTON = {
    colour: "blue",
    text: "Change to red",
};

const App = () => {
    const [isRed, setIsRed] = useState(true);
    const [isChecked, setIsChecked] = useState(false);

    return (
        <div>
            <button
                style={{
                    backgroundColor: isRed
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
