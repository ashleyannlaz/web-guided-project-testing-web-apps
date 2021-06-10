import { render, screen } from "@testing-library/react";
import React from "react";
import AnimalForm from "./AnimalForm";

test("AnimalForm component renders without blowing up", () => {
    render(<AnimalForm />);
});

test("User can add a new animal by filling out the form", () => {
    render(<AnimalForm />);
});