import logo from "./logo.svg";
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

    return (
        <div>
            <button
                style={{
                    backgroundColor: isRed
                        ? RED_BUTTON.colour
                        : BLUE_BUTTON.colour,
                }}
                onClick={() => setIsRed(!isRed)}
            >
                {isRed ? RED_BUTTON.text : BLUE_BUTTON.text}
            </button>
        </div>
    );
};

export default App;
