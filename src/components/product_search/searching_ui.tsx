interface SearchingUIProps {
  text?: string;
}

function SearchingUI({ text }: SearchingUIProps) {
  return (
    <div className="flex flex-col justify-center items-center h-40 mt-10">
      <div className="w-10 h-10 border-5  border-t-vanilla-300 border-r-columbia-blue-300 border-b-transparent border-l-transparent rounded-full animate-spin"></div>
      <p className="my-5 text-gray-400 text-sm">{text}</p>
    </div>
  );
}
export default SearchingUI;
