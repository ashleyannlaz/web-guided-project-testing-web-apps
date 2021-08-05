import React from 'react';
import { render, screen } from "@testing-library/react"
import App from "./App"


// TEST ONE ----------------------------------------
test("Renders the component", () => {
    render(<App />)
})

// TEST TWO ----------------------------------------
test("On mount, renders the app header", () => {
    //Arrange: render our component
    render(<App />)
    // act: find the header
    const header = screen.queryByText(/add new animal/i);
    // console.log(header);
    // assert: verify the header exists
    expect(header).toBeInTheDocument();
    expect(header.className).toBe("header");
    expect(header).toHaveTextContent(/add new animal/i)
    //verify if something is equal to something else
})

// TEST THREE -------------------------------------





// test("does the a test 1", () => {
//     console.log("doing a test");
// });

// test( "", () => {

// })

// test( "", () => {

// })

// it( "doing the test 1", () => {
//     console.log("doing a test with it!!!")
// })

// describe("edge cases" , ()=>{

//     it( "doing the test 1", () => {
//         console.log("doing a test with it!!!")
//     })
// })