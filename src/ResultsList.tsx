import Results from "./Results";
import { Result } from "./types/Result";

export default function ResultsList({ results }: { results: Result[] }) {
  return (
    <div className="Results .row">
      {results.map((product: Result) => {
        return <Results rs={product} />;
      })}
    </div>
  );
}
