function InputRefly() {
  return (
    <>
      <div className="border-1 rounded-full h-14 p-4 flex items-center justify-between focus-within:outline-1">
        <input
          type="text"
          placeholder="댓글 달기..."
          className="flex-1 outline-0"
        />
        <button className="bg-columbia-blue-250 w-15 h-7 font-semibold border-1 rounded-full text-[12px] cursor-pointer ">
          저장
        </button>
      </div>
    </>
  );
}

export default InputRefly;
