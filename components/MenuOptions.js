import {
  EllipsisVerticalIcon,
  MapIcon,
  PhotoIcon,
  PlayIcon,
  MagnifyingGlassIcon,
  NewspaperIcon,
} from "@heroicons/react/24/outline";

import Options from "./Options";

function MenuOptions() {
  return (
    <div className="flex items-center text-sm text-gray-700 justify-evenly xl:justify-start lg:max-w-2xl lg:ml-[150px]">
      {/* left */}
      <div className="flex p-1 space-x-8 lg:flex-1">
        <Options Icon={MagnifyingGlassIcon} title="All" />
        <Options Icon={NewspaperIcon} title="News" />
        <Options Icon={PhotoIcon} title="Images" />
        <Options Icon={PlayIcon} title="Videos" />
        <Options Icon={MapIcon} title="Maps" />
        <Options Icon={EllipsisVerticalIcon} title="More" />
      </div>
      {/* right */}
      <div>
        <p className="hidden p-1 px-2 mb-3 text-gray-700 border-0 rounded cursor-pointer order-gray-400 lg:inline-flex hover:bg-gray-100">
          Tools
        </p>
      </div>
    </div>
  );
}

export default MenuOptions;
