import Image from "next/image";

function Avatar({ url }) {
  return (
    <Image
      src={url}
      alt="avatar"
      loading="lazy"
      width={100}
      height={100}
      className="w-10 h-10 transition duration-150 transform border rounded-full cursor-pointer border-slate-100 hover:scale-110 hover:border-slate-300"
    />
  );
}

export default Avatar;
