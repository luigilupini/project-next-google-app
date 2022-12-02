import Head from "next/head";
/* # https://nextjs.org/docs/api-reference/next/router
If you want to access the router object inside any function component in your app, you can use the `useRouter` hook. The following is the definition of the `router` object returned by both useRouter and withRouter:

- `pathname`: String
The path for current route file that comes after `/pages`. Therefore, basePath, locale and trailing slash are not included.

- `query`: Object defaults to {}
The query string parsed to an object, including dynamic route parameters. It will be an empty object during pre-rendering, if the page doesn't use SSR.

- `asPath`: String
The path as shown in the browser including the search params and respecting the trailingSlash configuration. basePath and locale are not included.

- `isFallback`: boolean
Whether the current page is in fallback mode.

- `isReady`: boolean
Whether the router fields are updated client-side and ready for use. Should only be used inside of useEffect methods and not for conditionally rendering on the server. See related docs for use case with auto statically optimized pages.

The following methods are included inside `router`:

- `router.push(url, as, options)`
Handle client-side transition, useful for cases where next/link is not enough.
The parameter `url`: address to navigate to. A `as` optional decorator for the path that will be shown in the browser url bar. The `options` another optional object with the following configuration options:

A `scroll` - Optional boolean, controls scrolling to the top of the page after navigation and is defaulted to true. A `shallow` update the path of the current page, without rerunning getStaticProps, getServerSideProps or getInitialProps its defaulted to false. A `locale` optional indicates locale of the new page. */
import { useRouter } from "next/router";

import { useRef } from "react";
import Body from "../components/Body";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Home() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const searchHandler = (e) => {
    e.preventDefault(); // stop default behavior
    const term = searchInputRef.current.value;
    if (!term) return; // exit logic
    // otherwise, forward to `pages/search.js` with the query param `term`:
    router.push(`/search?term=${term}`);
  };
  return (
    <div className="flex flex-col h-screen justify-evenly">
      <Head>
        <title>Google</title>
      </Head>
      <Header />
      <Body onSearch={searchHandler} searchInputRef={searchInputRef} />
      <Footer />
    </div>
  );
}
