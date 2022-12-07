import Head from "next/head";
import Body from "../components/Body";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="flex flex-col h-screen justify-evenly">
      <Head>
        <title>Google</title>
      </Head>
      <Header />
      <Body />
      <Footer />
    </div>
  );
}
