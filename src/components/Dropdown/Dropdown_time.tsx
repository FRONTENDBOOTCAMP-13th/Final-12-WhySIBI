export default function DropdownTime() {
  return (
    <>
      <div className="bg-columbia-blue-250 flex h-[28px] w-[100px] rounded-sm text-size-sm focus-within:outline-1 cursor-pointer relative items-center">
        <select
          name="sort"
          id="sort"
          defaultValue="latest"
          className="w-full cursor-pointer text-cal-poly-green-600 font-semibold appearance-none outline-0 pl-3"
        >
          <option value="latest">최신순</option>
          <option value="oldest">오래된 순</option>
        </select>
        <div className="absolute right-3 pointer-events-none">▼</div>
      </div>
    </>
  );
}
