import Head from "next/head";
import { useRouter } from "next/router";
import SearchHeader from "../components/SearchHeader";
import SearchResults from "../components/SearchResults";
import { responseCopy } from "../responseCopy";

function Search({ query, route, results }) {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>Search Results: {router.query.term}</title>
      </Head>
      <SearchHeader />
      <SearchResults results={results} />
    </div>
  );
}

export default Search;

/* # Programmable Search Engine:
It enables you to create a search engine for your website, your blog, or a collection of websites. You can configure your search engine to search both web pages and images. You can fine-tune the ranking, customize the look and feel of the search results, and invite your friends or trusted users to help you build your Programmable Search Engine. For more info, see https://programmablesearchengine.google.com/cse/all */

/* # A Custom Search JSON API (Get an API Key) > `NEXT_PUBLIC_API_KEY` Lets you develop websites and applications to retrieve, display search results from Programmable Search Engine (PSE) programmatically. With this API, you can use RESTful requests to get either web search or image search results in JSON. For more info, https://developers.google.com/custom-search/v1/overview. */

/* # Adding a new Custom Search Engine (CSE) > `NEXT_PUBLIC_CONTEXT_KEY`. Get started by providing some basic information about your engine. You'll be able to customize the engine's configs (languages, regions, etc.) further after it is created. For more info, see https://cse.google.com/cse/create/new. */

export async function getServerSideProps(context) {
  // Copy searched object as free tier only gives 100 queries a day limit.
  // This ensures we not exhausting any query quota.
  const useLocalCopy = true; // toggle to before query.
  console.log(context.query);
  // Pagination also known as paging, a process of dividing into discrete pages.
  const startIndex = context.query.start || "0"; // here!

  const baseUrl = "https://customsearch.googleapis.com/customsearch/v1";
  const data = useLocalCopy
    ? responseCopy
    : await fetch(
        `${baseUrl}?cx=${process.env.NEXT_PUBLIC_CONTEXT_KEY}&q=${context.query.term}&key=${process.env.NEXT_PUBLIC_API_KEY}&start=${startIndex}`
      )
        .then((res) => res.json())
        .catch((err) => console.log(err));
  return {
    props: {
      results: data,
    },
  };
}
