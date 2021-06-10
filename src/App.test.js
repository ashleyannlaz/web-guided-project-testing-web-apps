import { render } from "@testing-library/react";
import React from "react";
import App from "./App";

// Don't worry about being DRY when writing tests
// Better to make them extra clear!! AHA - Avoid Hasty Abstractions
// For example, if you have the same setup (Arrange) steps for a few different tests, you might think to refactor those into a helper function. That would be good logic for application code, but not here! We want to keep each test as independent and self-contained as possible. We're going for coverage and rigor here, not DRYness.

test("App component renders", () => {
    // Arrange
    render(<App />);

    // (No Act needed here)

    // Assert: we already have the implicit assertion that the component renders above. If that render command errors out in any way, this test will fail
});

test("App component renders a header", () => {
    // Arrange: setup and grab the virtual DOM elements we want to work with
    const matchers = render(<App />);
    // Act: click stuff, type into forms, etc
    const header = matchers.getByText("ADD NEW ANIMAL");

    // Assert: make sure the expected behavior happened (and that unexpected behavior didn't happen! Multiple assertions preferred)
})

