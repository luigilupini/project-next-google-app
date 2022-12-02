import Image from "next/image";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

function Body({ onSearch, searchInputRef }) {
  return (
    <form className="flex flex-col items-center justify-center flex-grow w4/5">
      <Image src={"/google.avif"} height={100} width={300} alt="logo" />
      {/* input wrapper */}
      <div className="flex items-center w-full max-w-md p-2 px-5 py-3 mt-6 border border-gray-200 rounded-full hover:shadow-airbnb focus-within:shadow-airbnb sm:max-w-xl lg:max-w-2xl hover:border-gray-100">
        <MagnifyingGlassIcon className="w-5 h-5 mr-3 text-gray-400" />
        <input
          ref={searchInputRef}
          type="text"
          className="flex-1 focus:outline-none"
        />
        <Image src={"/mic.png"} height={13} width={13} alt="mic" />
      </div>
      {/* buttons */}
      <div className="flex gap-4 mt-8">
        <button className="btn" onClick={onSearch}>
          Google Search
        </button>
        <button className="btn" onClick={onSearch}>
          I&apos;m Feeling Lucky
        </button>
      </div>
    </form>
  );
}

export default Body;
