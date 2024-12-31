import React from "react";
import "./App.css";
import ResultsList from "./ResultsList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Interview Title</p>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="searchInput">Search:</label>
            <input
              id="searchInput"
              type="text"
              placeholder="Please Enter A Search Term"
            />
            <button type="submit">Submit</button>
          </div>
        </form>
      </header>
      <div className="Results">
        <ResultsList />
      </div>
    </div>
  );
}

function handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
  event.preventDefault();
  const form = event.currentTarget;
  const formElements = form.elements as typeof form.elements & {
    searchInput: { value: string };
  };
  console.log("safe, plus:" + formElements.searchInput?.value);
  //onSubmitUsername(formElements.usernameInput.value)
}

export default App;
