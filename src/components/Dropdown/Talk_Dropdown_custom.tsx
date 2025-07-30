type DropdownShoppingProps = {
  value?: string;
  onDropChange?: (value: string) => void;
};

export default function TalkPostDropdownTime({
  value,
  onDropChange,
}: DropdownShoppingProps) {
  return (
    <>
      <div className="font-variable text-livealone-cal-poly-green bg-columbia-blue-300 flex h-[30px] w-[90px] rounded-sm text-size-xs focus-within:outline-1 cursor-pointer relative items-center m-5 active:translate-y-0.5">
        <select
          name="sort"
          id="sort"
          value={value}
          className="w-full h-full cursor-pointer font-semibold appearance-none outline-0 text-center pr-4"
          onChange={e => {
            onDropChange?.(e.target.value);
          }}
        >
          <option value="latest">최신순</option>
          <option value="oldest">오래된 순</option>
        </select>
        <div className="absolute right-4 pointer-events-none">▼</div>
      </div>
    </>
  );
}
