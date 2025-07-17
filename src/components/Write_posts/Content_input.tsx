export default function ContentInput() {
  return (
    <div className="mt-6 w-[600px] font-variable flex">
      <textarea
        placeholder="내용을 입력해주세요."
        className="w-full mt-4 text-md placeholder-gray-300 resize-none rounded h-40 outline-none"
      />
    </div>
  );
}