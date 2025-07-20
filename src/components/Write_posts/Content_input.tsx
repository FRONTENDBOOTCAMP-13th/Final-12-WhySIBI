export default function ContentInput() {
  return (
    <div className="mt-5 w-[600px] font-variable flex">
      <textarea
        placeholder="내용을 입력해주세요."
        className="w-full h-[300px] text-md placeholder-gray-300 resize-none rounded outline-none"
      />
    </div>
  );
}