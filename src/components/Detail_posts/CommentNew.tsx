export default function CommentNew() {
  return (
    <div className="w-[600px] border-1 rounded-full h-14 p-4 flex items-center justify-between focus-within:outline-1">
      <form action="#" className="flex-1 flex items-center">
          <input
            type="text"
            className="flex-1 outline-0 text-sm ml-2"
            placeholder="댓글 달기..."
            name="comment"></input>
      </form>
        <button type="submit" className="bg-columbia-blue-200 w-15 h-7 font-semibold border-1 rounded-full text-[12px] cursor-pointer ml-3">
          저장
        </button>
    </div>
  );
}