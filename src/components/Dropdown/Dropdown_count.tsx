export default function DropdownCount({ count, decrease, increase }) {
  return (
    <div>
      <button
        onClick={() => {
          decrease();
        }}
      >
        -
      </button>
      <span>{count}</span>
      <button
        onClick={() => {
          increase();
        }}
      >
        +
      </button>
    </div>
  );
}
