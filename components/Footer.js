import Image from "next/image";
// 16:03
function Footer() {
  return (
    <footer className="divide-y-[1px] divide-gray-200 w-full text-sm bg-gray-100 text-[#70757a]">
      {/* top */}
      <div className="px-8 py-3">
        <p className="font-medium">Amsterdam, NL</p>
      </div>
      {/* middle (grid) */}
      <div className="grid grid-flow-row-dense grid-cols-1 px-8 py-3 md:grid-cols-2 lg:grid-cols-3 gap-y-2">
        {/* gird item 1 */}
        <div className="flex items-center justify-center gap-2 py-1 md:col-span-2 lg:col-span-1 lg:col-start-2">
          {/* shift into middle on large screens */}
          <Image src={"/leaf.png"} width={12} height={12} alt="leaf" />
          <p>Carbon neutral since 2007</p>
        </div>
        {/* gird item 2 */}
        <div className="flex items-center justify-center space-x-8 whitespace-nowrap md:justify-self-start">
          <p>About</p>
          <p>Advertising</p>
          <p>Business</p>
          <p>How Search works</p>
        </div>
        {/* gird item 3 */}
        <div className="flex items-center justify-center space-x-8 whitespace-nowrap md:justify-self-start md:ml-auto">
          <p>Privacy</p>
          <p>Terms</p>
          <p>Settings</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
