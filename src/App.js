import React from "react";
import AnimalForm from "./components/AnimalForm";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Add New Animal</h1>
      <AnimalForm />
      <AnimalList />
    </div>
  );
}

export default App;
