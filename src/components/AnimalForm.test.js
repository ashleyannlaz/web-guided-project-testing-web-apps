import React from 'react';
import { screen, render, waitFor } from '@testing-library/react';
import AnimalForm from './AnimalForm'
import userEvent from '@testing-library/user-event'

test("Renders the component", ()=> {
    render(<AnimalForm />);
})

test("When a form is fully filled out and submitted, species is displayed", ()=> {
    // Arrange: Render AnimalForm
    render(<AnimalForm />);

    // Act: Fill out the form and submit
    // - Select the species input
    const speciesInput = screen.getByLabelText(/species/i)
    // - Type a species into the species input
    userEvent.type(speciesInput, "grizzly bear");
    // - Select Age Input
    const ageInput = screen.getByLabelText(/age/i)

    // - Type in Age
    userEvent.type(ageInput, "5");

    // - Select notes
    const notesInput = screen.getByLabelText(/notes/i)

    // - Type in Notes
    userEvent.type(notesInput, "Happy Days");

    // - Click submit
    const button = screen.getByRole("button");
    userEvent.click(button);

    // Assert: what do we expect to happen? species should show up in current animals list
    const newItemPromise = screen.findByText("grizzly bear");
    newItemPromise.then(newItem=>{
        expect(newItem).toBeInTheDocument();
        // QUESTIONS ABOUT THIS

    });

    // const newItem = await screen.findByText("grizzly bear")
    // expect(newItem).toBeInTheDocument();

    // await waitFor(() => {
    //     const newItem = screen.queryByText("grizzly bear");
    //     expect(newItem).toBeInTheDocument();
    // })


})

// get by assumes something will break if its not there