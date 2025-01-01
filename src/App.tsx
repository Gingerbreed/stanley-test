import React, { useState } from "react";
import "./App.css";
import ResultsList from "./ResultsList";
import { Result } from "./types/Result";
import data from "./response.json";
import { Metro } from "./types/Metro";
import { Product } from "./types/Product";
import { Project } from "./types/Project";

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
  // ESLint is disabled here to search only on the values, and not the property titles.
  let caseParam = param.toLowerCase();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  for (const [key, value] of Object.entries(result.metro)) {
    if (value?.toLowerCase().includes(caseParam)) {
      return true;
    }
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  for (const [key, value] of Object.entries(result.project)) {
    if (value?.toLowerCase().includes(caseParam)) {
      return true;
    }
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  for (const [key, value] of Object.entries(result.product)) {
    if (value?.toLowerCase().includes(caseParam)) {
      return true;
    }
  }
  return false;
}
