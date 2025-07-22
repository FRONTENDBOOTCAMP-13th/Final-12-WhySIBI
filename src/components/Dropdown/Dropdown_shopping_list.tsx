type DropdownShoppingProps = {
  value: string;
  onDropChange: (value: string) => void;
};

function DropdownShoppingList({ value, onDropChange }: DropdownShoppingProps) {
  return (
    <>
      <div className="bg-columbia-blue-250 flex h-[28px] w-[100px] rounded-sm text-size-sm focus-within:outline-1 cursor-pointer relative items-center">
        <select
          name="sort"
          id="sort"
          value={value}
          onChange={e => {
            onDropChange(e.target.value);
          }}
          className="w-full cursor-pointer text-cal-poly-green-600 font-semibold appearance-none outline-0 pl-3"
        >
          <option value="latest">신상품</option>
          <option value="low-cost">낮은가격순</option>
          <option value="high-cost">높은가격순</option>
          <option value="high-star">별점높은순</option>
          <option value="high-review">상품리뷰순</option>
        </select>
        <div className="absolute right-3 pointer-events-none">▼</div>
      </div>
    </>
  );
}

export default DropdownShoppingList;
