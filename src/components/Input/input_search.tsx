export default function InputSearch() {
  return (
    <div className="border-1 opacity-50 flex w-[533px]  justify-between px-4 py-2 focus-within:outline-1 rounded-xl">
      <input type="search" className="flex-1 outline-0" />
      <button className="cursor-pointer">
        <svg
          aria-hidden="true"
          width="35"
          height="38"
          viewBox="0 0 35 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="14.9005"
            cy="14.9005"
            r="12.9005"
            stroke="#25442C"
            stroke-opacity="0.5"
            stroke-width="4"
          />
          <line
            x1="23.9251"
            y1="25.7417"
            x2="31.4916"
            y2="34.7703"
            stroke="#25442C"
            stroke-opacity="0.5"
            stroke-width="8"
          />
        </svg>
      </button>
    </div>
  );
}
