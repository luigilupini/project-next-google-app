import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import Avatar from "../components/Avatar";
import MenuOptions from "./MenuOptions";

function SearchHeader() {
  const router = useRouter();
  const [xIcon, setXIcon] = useState("");
  const searchInputRef = useRef(null);

  const clearRef = () => {
    searchInputRef.current.value = "";
    setXIcon("");
  };
  const searchHandler = (e) => {
    e.preventDefault(); // stop default behavior
    const term = searchInputRef.current.value;
    if (!term) return; // exit logic
    // otherwise, forward to `pages/search.js` with the query param `term`:
    router.push(`/search?term=${term}`);
  };
  return (
    <header className="sticky top-0 bg-white border-b border-gray-100">
      <div className="flex items-center w-full p-6">
        {/* left */}
        <Image
          src={"/google.avif"}
          height={10}
          width={90}
          alt="logo"
          onClick={() => router.push("/")}
          className="mt-2 cursor-pointer"
        />
        <form className="flex flex-1 items-center max-w-2xl gap-3 px-3 py-2 ml-10 mr-5 border-[1px] rounded-full shadow-sm hover:shadow-airbnb focus-within:shadow-airbnb">
          <input
            onChange={(e) => setXIcon(e.target.value)}
            type="text"
            ref={searchInputRef}
            className="flex-grow p-1 ml-2 focus:outline-none"
          />
          {xIcon && (
            <XMarkIcon
              onClick={() => clearRef()}
              className="text-gray-500 transition duration-100 transform cursor-pointer h-7 hover:scale-110"
            />
          )}
          <Image
            src={"/mic.png"}
            height={15}
            width={15}
            alt="mic"
            className="hidden object-contain w-5 h-5 sm:inline-flex"
          />
          <MagnifyingGlassIcon className="hidden w-6 h-6 mr-2 text-gray-500 sm:inline-flex" />
          <button hidden type="submit" onClick={searchHandler}></button>
        </form>
        {/* right */}
        <Avatar url={"/mario.jpeg"} addStyle="ml-auto" />
      </div>
      {/* bottom */}
      <MenuOptions />
    </header>
  );
}

export default SearchHeader;
