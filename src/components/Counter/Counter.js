import React, { useState } from 'react';
import "./Counter.css";

const Counter = () => {
    const [counterValue, setCounterValue] = useState(0);
    const [inputValue, setInputValue] = useState(1);

    return (
        <div>
            <h1 data-testid="header">Counter</h1>
            <h2 data-testid="counter">{counterValue}</h2>
            <button data-testid="sub-btn">-</button>
            <input
                className="text-center"
                type="number"
                data-testid="input"
                defaultValue={inputValue}
            ></input>
            <button data-testid="add-btn">+</button>
        </div>
    )
}

export default Counter
