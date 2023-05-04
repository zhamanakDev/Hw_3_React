import React, { useState } from "react";

const Square = () => {
    const [color, setColor] = useState("red");
    const [color1, setColor1] = useState("blue");

    function handleQuadClick() {
        setColor(color1);
        setColor1(color);
    }

    function handleQuadClick1() {
        setColor1(color);
        setColor1(color);
    }

    return (
        <div>
            <div
                style={{ width: "100px", height: "100px", backgroundColor: color }}
                onClick={handleQuadClick}
            />
            <div
                style={{ width: "100px", height: "100px", backgroundColor: color1 }}
                onClick={handleQuadClick1}
            />
        </div>
    );
}

export default Square;