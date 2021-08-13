import React from "react";
import Counter from "../Counter";
// render needed to render the component on the virtual DOM
import { render, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

let getByTestId;

// Executes before each test
// There is also beforeAll, afterEach and afterAll
beforeEach(() => {
    const component = render(<Counter />);
    getByTestId = component.getByTestId;
})

afterEach(() => {
    // cleans up the DOM
    // with create-react-app it executes by default, no need to specify it
    cleanup();
})

test("Test if header renders correctly", () => {
    // const component = render(<Counter />);
    // const headerEl = component.getByTestId("header");

    // Alternative with destructuring
    const headerEl = getByTestId("header");

    expect(headerEl.textContent).toBe("Counter");
});

test("Counter intializes with text of 0", () => {
    const counterEl = getByTestId("counter");

    expect(counterEl.textContent).toBe("0");
})

test("Input initially contains the value of 1", () => {
    const inputEl = getByTestId("input");

    expect(inputEl.value).toBe("1");
})

test("Add button renders with + sign", () => {
    const addBtn = getByTestId("add-btn");

    expect(addBtn.textContent).toBe("+");
})

test("Subtract button renders with - sign", () => {
    const subtractBtn = getByTestId("sub-btn");

    expect(subtractBtn.textContent).toBe("-");
})

test("Change value of input works correctly", () => {
    const inputEl = getByTestId("input");

    fireEvent.change(inputEl, {
        target: {
            value: "5"
        }
    });

    expect(inputEl.value).toBe("5");
})

test("Clicking on add button adds to counter", () => {
    const addBtn = getByTestId("add-btn");
    const counterEl = getByTestId("counter");

    fireEvent.click(addBtn);

    expect(counterEl.textContent).toBe("1");
})

test("Clicking on subtract button subtracts to counter", () => {
    const subBtn = getByTestId("sub-btn");
    const counterEl = getByTestId("counter");

    fireEvent.click(subBtn);

    expect(counterEl.textContent).toBe("-1");
})

test("Changing input value and than adding with add button", () => {
    const addBtn = getByTestId("add-btn");
    const counterEl = getByTestId("counter");
    const inputEl = getByTestId("input");

    fireEvent.change(inputEl, {
        target: {
            value: "-5"
        }
    });

    fireEvent.click(addBtn);

    expect(counterEl.textContent).toBe("-5");
})

test("Changing input value and than substracting with substract button", () => {
    const subBtn = getByTestId("sub-btn");
    const counterEl = getByTestId("counter");
    const inputEl = getByTestId("input");

    fireEvent.change(inputEl, {
        target: {
            value: "-5"
        }
    });

    fireEvent.click(subBtn);

    expect(counterEl.textContent).toBe("5");
})

test("Changing input value and adding/subtracting a couple of times", () => {
    const addBtn = getByTestId("add-btn");
    const subBtn = getByTestId("sub-btn");
    const counterEl = getByTestId("counter");
    const inputEl = getByTestId("input");

    fireEvent.change(inputEl, {
        target: {
            value: "10"
        }
    });

    fireEvent.click(addBtn);
    fireEvent.click(addBtn);
    fireEvent.click(addBtn);
    fireEvent.click(addBtn);
    fireEvent.click(subBtn);
    fireEvent.click(subBtn);

    expect(counterEl.textContent).toBe("20");

    fireEvent.change(inputEl, {
        target: {
            value: "-5"
        }
    });

    fireEvent.click(addBtn);
    fireEvent.click(addBtn);
    fireEvent.click(subBtn);

    expect(counterEl.textContent).toBe("15");
})

test("counter h2 has no class on mount and changes within limts", () => {
    const addBtn = getByTestId("add-btn");
    const subBtn = getByTestId("sub-btn");
    const counterEl = getByTestId("counter");
    const inputEl = getByTestId("input");

    expect(counterEl.className).toBe("");

    fireEvent.change(inputEl, {
        target: {
            value: "10"
        }
    });

    fireEvent.click(addBtn);

    expect(counterEl.className).toBe("");

    fireEvent.change(inputEl, {
        target: {
            value: "100"
        }
    });

    fireEvent.click(addBtn);

    expect(counterEl.className).toBe("green");

    fireEvent.change(inputEl, {
        target: {
            value: "210"
        }
    });

    fireEvent.click(subBtn);

    expect(counterEl.className).toBe("red");
})