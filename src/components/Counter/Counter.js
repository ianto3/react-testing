import React, { useState, useEffect } from 'react';
import "./Counter.css";

const Counter = () => {
    const [counterValue, setCounterValue] = useState(0);
    const [inputValue, setInputValue] = useState(1);

    const handleAddition = () => {
        setCounterValue(prevVal => prevVal + inputValue)
    }

    const handleSubstraction = () => {
        setCounterValue(prevVal => prevVal - inputValue)
    }

    return (
        <div>
            <h1 data-testid="header">Counter</h1>
            <h2
                className={`${counterValue >= 100 ? "green" : counterValue <= -100 ? "red" : ""}`}
                data-testid="counter"
            >{counterValue}</h2>
            <button
                data-testid="sub-btn"
                onClick={handleSubstraction}
            >-</button>
            <input
                className="text-center"
                type="number"
                data-testid="input"
                defaultValue={inputValue}
                onChange={(ev) => { setInputValue(parseInt(ev.target.value)) }}
            ></input>
            <button
                data-testid="add-btn"
                onClick={handleAddition}
            >+</button>
        </div >
    )
}

export default Counter
