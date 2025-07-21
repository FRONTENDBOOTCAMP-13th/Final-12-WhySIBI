export default function StarBar({
  rank,
  count,
  score,
}: {
  rank: number;
  count: number;
  score: number;
}) {
  return (
    <div
      className={`flex flex-col justify-center items-center gap-2 font-semibold text-xl ${rank === 1 ? 'text-flame-250' : 'text-[#777777]'}`}
    >
      <div className="">{count}</div>
      <div
        className={`w-3 h-16 bg-[#d9d9d9] relative before:content-[''] before:absolute before:inset-x-0  before:bottom-0 before:top-${3 * (rank - 1)} before:bg-flame-250 `}
      ></div>
      <div>{score}점</div>
    </div>
  );
}
