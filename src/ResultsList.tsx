import { useState } from "react";

import Results from "./Results";

export default function ResultsList({ results }: { results: Result[] }) {
  return (
    <div className="Results .row">
      {results.map((product: Result) => {
        return <Results rs={product} />;
      })}
    </div>
  );
}
