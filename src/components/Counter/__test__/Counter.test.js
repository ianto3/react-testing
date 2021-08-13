import React from "react";
import Counter from "../Counter";
// Needed to render the component on the virtual DOM
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test("Test if header renders correctly", () => {
    // const component = render(<Counter />);
    // const headerEl = component.getByTestId("header");

    // Alternative with destructuring
    const { getByTestId } = render(<Counter />);
    const headerEl = getByTestId("header");

    expect(headerEl.textContent).toBe("Counter");
});

test("Counter intializes with text of 0", () => {
    const { getByTestId } = render(<Counter />);
    const counterEl = getByTestId("counter");

    expect(counterEl.textContent).toBe("0");
})

test("Input initially contains the value of 1", () => {
    const { getByTestId } = render(<Counter />);
    const inputEl = getByTestId("input");

    expect(inputEl.value).toBe("1");
})

test("Add button renders with + sign", () => {
    const { getByTestId } = render(<Counter />);
    const addBtn = getByTestId("add-btn");

    expect(addBtn.textContent).toBe("+");
})

test("Subtract button renders with - sign", () => {
    const { getByTestId } = render(<Counter />);
    const subtractBtn = getByTestId("sub-btn");

    expect(subtractBtn.textContent).toBe("-");
})