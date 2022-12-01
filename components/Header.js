import { Squares2X2Icon, SquaresPlusIcon } from "@heroicons/react/24/solid";
import Avatar from "../components/Avatar";

function Header() {
  return (
    <header className="flex justify-between w-full p-5 text-sm text-gray-700">
      {/* left */}
      <div className="flex items-center space-x-4">
        <p className="link">About</p>
        <p className="link">Store</p>
      </div>
      {/* right */}
      <div className="flex items-center space-x-4">
        <p className="link">Gmail</p>
        <p className="link">Images</p>
        <div className="relative w-10 h-10 rounded-full cursor-pointer group hover:bg-slate-100">
          <Squares2X2Icon className="absolute p-2 text-gray-600 group-hover:opacity-0" />
          <SquaresPlusIcon className="absolute p-2 text-gray-600 opacity-0 group-hover:opacity-100 hover:scale-110" />
        </div>
        <Avatar url={"/mario.jpeg"} />
      </div>
    </header>
  );
}

export default Header;
