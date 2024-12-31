import { useState } from "react";
import Results from "./Results";

const initialResults: Result[] = [
  {
    fullName: "Test Drive",
    productName: "Elle",
    productId: "3GV",
    metroArea: "undefined",
    projectGroupId: 5643,
  },
  {
    productName: undefined,
    productId: "4389",
    metroArea: "Staunton",
    fullName: "Refined Industries",
    projectGroupId: 35,
  },
  {
    productName: undefined,
    productId: "LV3",
    metroArea: "Cuzco",
    fullName: "Village",
    projectGroupId: 223,
  },
];

export default function ResultsList() {
  const [results, setResults] = useState(initialResults);
  return (
    <div className={"App-container"}>
      {results.map((product: Result) => {
        return <Results rs={product} />;
      })}
    </div>
  );
}
