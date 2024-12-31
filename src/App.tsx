import React, { useState } from "react";
import "./App.css";
import ResultsList from "./ResultsList";

const initialResults: Result[] = [
  {
    fullName: "Test Drive",
    productName: "Elle",
    productId: "3GV",
    metroArea: "undefined",
    projectGroupId: 5643,
  },
  {
    productName: "Wendigo",
    productId: "4389",
    metroArea: "Staunton",
    fullName: "Refined Industries",
    projectGroupId: 35,
  },
  {
    productName: "undefined",
    productId: "LV3",
    metroArea: "Cuzco",
    fullName: "Village",
    projectGroupId: 223,
  },
  {
    productName: "undefined",
    productId: "LV3",
    metroArea: "Cuzco",
    fullName: "Village",
    projectGroupId: 223,
  },
];

export default function App() {
  const [results, setResults] = useState(initialResults);
  return (
    <div className="App">
      <header className="App-header">
        <p>Interview Title</p>
        <div>
          <label htmlFor="searchInput">Search:</label>
          <input
            id="searchInput"
            type="text"
            onKeyDown={handleSubmit}
            placeholder="Please Enter A Search Term"
          />
        </div>
      </header>
      <ResultsList results={results} />
    </div>
  );

  function onSubmitSearch(at: string) {
    let newResults = results;
    newResults = newResults.filter((obj) =>
      Object.values(obj).some((val) => val === at)
    );
    setResults(newResults);
  }

  function handleSubmit(event: React.SyntheticEvent<HTMLInputElement>) {
    event.preventDefault();
    const input = event.currentTarget.value;

    console.log("safe, plus:" + input);
    onSubmitSearch(input);
  }
}
