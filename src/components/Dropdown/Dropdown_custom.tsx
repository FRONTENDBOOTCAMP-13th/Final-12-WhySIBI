interface CategoryProps {
  title: string;
  category: string[];
  onSelect: (selected: string) => void;
}

function DropdownCustom({ title, category, onSelect }: CategoryProps) {
  return (
    <div className="relative inline-flex items-center bg-white font-variable h-[31px] rounded-sm text-size-sm border-1 border-[#c7c7c7] focus-within:outline-1">
      <select
        name="sort"
        id="sort"
        defaultValue={title}
        className="text-[#777777] font-semibold cursor-pointer outline-0 appearance-none text-center pl-3 pr-6"
        onChange={(e) => onSelect(e.target.value)}
      >
        <option value={title} disabled hidden>{title}</option>
        {category.map((item) => (
          <option key={item} value={item}>{item}</option>
        ))}
      </select>
      <svg
        className="absolute right-2 pointer-events-none"
        width="13"
        height="13"
        viewBox="0 0 30 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15 26L0.27757 0.499999L29.7224 0.499996L15 26Z"
          fill="#D9D9D9"
        />
      </svg>
    </div>
  );
}

export default DropdownCustom;
