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