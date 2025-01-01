import React, { useState } from "react";
import "./App.css";
import ResultsList from "./ResultsList";
import { Result } from "./types/Result";
import data from "./response.json";
import { Metro } from "./types/Metro";
import { Product } from "./types/Product";
import { Project } from "./types/Project";

export default function App() {
  const initialResults: Result[] = mapApiData();
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
  //if using an actual backend, we'd call out from here and then map that data.
  let results: Result[] = [];
  let metros: Metro[] = data.Metros;
  let projects: Project[] = data.Projects;
  let products: Product[] = data.Products;
  for (let index in metros) {
    let testProjects = projects.filter(
      (i) => i.metroAreaId === metros[index].metroAreaId
    );
    if (!testProjects) {
      //We have no projects associated, add the metro area and continue
      results.push(new Result(new Product(), metros[index], new Project()));
      continue;
    }
    for (let projectIndex in testProjects) {
      let testProducts = products.filter(
        (i) => i.projectGroupId === testProjects[projectIndex].projectGroupId
      );
      if (!testProducts) {
        //We have no products associated, add the metro area and continue
        results.push(
          new Result(new Product(), metros[index], testProjects[index])
        );
        continue;
      }
      for (let product in testProducts) {
        results.push(
          new Result(testProducts[product], metros[index], testProjects[index])
        );
      }
    }
  }
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
