import Head from "next/head";
import { useRouter } from "next/router";
import SearchHeader from "../components/SearchHeader";

function Search() {
  const router = useRouter();
  console.log(router);
  return (
    <div>
      <Head>
        <title>Search Results</title>
      </Head>
      <SearchHeader />
      {/* Result */}
    </div>
  );
}

export default Search;
