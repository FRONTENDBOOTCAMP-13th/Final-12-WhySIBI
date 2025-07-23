import { ChangeEvent } from 'react';

export default function DropdownSize({
  onChange,
  id,
  content,
  option,
}: {
  id: string;
  content: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  option: string[];
}) {
  console.log('나야 옵션', option);

  return (
    <>
      <div className="bg-white font-variable w-[250px] h-[31px] rounded-sm text-size-sm border-1 border-[#c7c7c7] focus-within:outline-1 relative flex items-center">
        <select
          onChange={onChange}
          name="sort"
          id={id}
          defaultValue="default"
          className="w-full text-[#777777] font-semibold cursor-pointer outline-0 appearance-none text-center"
        >
          <option value="default">{content}</option>
          {option &&
            option.map((item, index) => {
              return (
                <option key={index} value={item}>
                  {item}
                </option>
              );
            })}
        </select>
        <svg
          className="absolute right-3 pointer-events-none"
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
    </>
  );
}
