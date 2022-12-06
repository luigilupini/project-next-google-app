import PaginationBtn from "./PaginationBtn";

function Snippet({ result }) {
  // console.log(result);
  return (
    <div key={result.link} className="max-w-xl mb-8 text-gray-800">
      <div className="group">
        <a href={result.link} className="text-sm">
          {result.formattedUrl}
        </a>
        <a href={result.link}>
          <h2 className="text-xl font-medium text-blue-700 truncate group-hover:underline">
            {result.title}
          </h2>
        </a>
      </div>
      <p className="text-[13px] line-clamp-2">{result.snippet}</p>
    </div>
  );
}

function SearchResults({ results }) {
  // console.log(results); // Copy result for static data `responseCopy`.
  const { formattedSearchTime, formattedTotalResults } =
    results.searchInformation;
  return (
    <div className="w-full px-3 mx-auto sm:pl-[5%] md:pl-[15%] lg:pl-[150px]">
      <p className="mt-3 mb-5 text-sm text-gray-500">
        About {formattedTotalResults} results ({formattedSearchTime} seconds)
      </p>
      {results?.items?.map((result) => {
        return <Snippet key={result.link} result={result} />;
      })}
      <PaginationBtn />
    </div>
  );
}

export default SearchResults;
