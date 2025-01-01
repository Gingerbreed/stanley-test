import React, { useState } from "react";
import "./App.css";
import ResultsList from "./ResultsList";

const initialResults: Result[] = mapApiData();

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
            onChange={handleSubmit}
            placeholder="Please Enter A Search Term"
          />
        </div>
      </header>
      <ResultsList results={results} />
    </div>
  );

  function onSubmitSearch(at: string) {
    let newResults = initialResults;
    setResults(
      newResults.filter((el) => {
        if (at === "") {
          return el;
        } else {
          return includes(at, el) ? el : "";
        }
      })
    );
  }

  function handleSubmit(event: React.SyntheticEvent<HTMLInputElement>) {
    const input = event.currentTarget.value;
    console.log("safe, plus:" + input);
    onSubmitSearch(input);
  }
}
function mapApiData() {
  let results: Result[] = [
    {
      product: {
        projectName: "undefined",
        productId: "undefined",
        projectGroupId: "undefined",
        productName: "undefined",
      },
      metro: {
        metroAreaId: "undefined",
        metroAreaTitle: "undefined",
        metroAreaStateAbr: "VA",
        metroAreaStateName: "undefined",
      },
      project: {
        projectGroupId: "undefined",
        metroAreaId: "undefined",
        fullName: "undefined",
        status: "undefined",
      },
    },
  ];

  return results;
}
function includes(param: string, result: Result) {
  let caseParam = param.toLowerCase();
  for (const [key, value] of Object.entries(result.metro)) {
    if (value?.toLowerCase().includes(caseParam)) {
      return true;
    }
  }
  for (const [key, value] of Object.entries(result.project)) {
    if (value?.toLowerCase().includes(caseParam)) {
      return true;
    }
  }
  for (const [key, value] of Object.entries(result.product)) {
    if (value?.toLowerCase().includes(caseParam)) {
      return true;
    }
  }
  return false;
}
