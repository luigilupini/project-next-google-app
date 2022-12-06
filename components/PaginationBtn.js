import Link from "next/link";
import { useRouter } from "next/router";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

function PaginationBtn() {
  const router = useRouter();
  // console.log(router.query.start);
  const startIdx = Number(router.query.start) || 0;
  return (
    <div className="flex gap-5 mb-10 text-sm text-gray-700 hover:text-blue-600">
      {startIdx >= 10 && (
        <Link href={`/search?term=${router.query.term}&start=${startIdx - 10}`}>
          <div className="flex flex-col items-center flex-grow cursor-pointer hover:link">
            <ChevronLeftIcon className="h-6 p-1 rounded-full hover:bg-blue-50" />
            <p className="p-2">Pervious</p>
          </div>
        </Link>
      )}
      <Link href={`/search?term=${router.query.term}&start=${startIdx + 10}`}>
        <div className="flex flex-col items-center flex-grow cursor-pointer hover:link">
          <ChevronRightIcon className="h-6 p-1 rounded-full hover:bg-blue-50" />
          <p className="p-2">Next</p>
        </div>
      </Link>
    </div>
  );
}

export default PaginationBtn;
