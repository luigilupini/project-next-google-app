function Options({ Icon, title, selected }) {
  return (
    <div
      className={`flex items-center space-x-1 pb-3 border-b-2 border-transparent cursor-pointer hover:text-blue-500 hover:border-blue-500 ${
        selected ? "text-blue-500 border-blue-500" : "text-gray-700"
      }`}
    >
      <Icon className="h-4" />
      <p>{title}</p>
    </div>
  );
}

export default Options;
