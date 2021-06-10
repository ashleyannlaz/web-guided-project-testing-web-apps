import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import AnimalForm from "./AnimalForm";

test("AnimalForm component renders without blowing up", () => {
    render(<AnimalForm />);
});

test("User can add a new animal by filling out the form", async () => { 
    // Arrange: render & grab the elements we need
    render(<AnimalForm />);

    const speciesInput = screen.getByLabelText(/species/i);
    const ageInput = screen.getByLabelText(/age/i);
    const notesInput = screen.getByLabelText(/notes/i);
    const submitButton = screen.getByRole('button', { name: /submit/i });

    // Act: fill out the form and click the button (simulating user behavior with userEvent)
    userEvent.type(speciesInput, "Deer");
    userEvent.type(ageInput, "98");
    userEvent.type(notesInput, "I love the band 98 Degrees");
    userEvent.click(submitButton);

    // Assert
    const newAnimal = await screen.findByText(/deer/i); // implicit assertion here
    expect(newAnimal).toBeInTheDocument();

    // Example of asserting that something isn't in the DOM:
    const invisibleAnimal = await screen.queryByText(/llama/i);
    expect(invisibleAnimal).toEqual(null);
    expect(invisibleAnimal).toBeFalsy();
});


test("User can add multiple animals", () => {
    // Arrange: render & grab the elements we need
    render(<AnimalForm />);

    const speciesInput = screen.getByLabelText(/species/i);
    const ageInput = screen.getByLabelText(/age/i);
    const notesInput = screen.getByLabelText(/notes/i);
    const submitButton = screen.getByRole('button', { name: /submit/i });

    // Act: fill out the form and click the button (simulating user behavior with userEvent)
    userEvent.type(speciesInput, "Deer");
    userEvent.type(ageInput, "98");
    userEvent.type(notesInput, "I'm the first animal and I love 98 Degrees");
    userEvent.click(submitButton);

    userEvent.type(speciesInput, "Llama");
    userEvent.type(ageInput, "3");
    userEvent.type(notesInput, "Mama Llama is my favorite Migos song");
    userEvent.click(submitButton);

    // Assert
    const newAnimal = screen.getByText(/deer/i); // implicit assertion here
    expect(newAnimal).toBeInTheDocument();

    // Example of asserting that something isn't in the DOM:
    const invisibleAnimal = screen.queryByText(/llama/i);
    expect(invisibleAnimal).toEqual(null);
    expect(invisibleAnimal).toBeFalsy();
});