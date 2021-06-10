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
    
})

