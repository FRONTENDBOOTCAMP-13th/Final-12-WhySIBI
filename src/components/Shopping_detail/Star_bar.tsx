export default function StarBar({
  rank,
  count,
  score,
}: {
  rank: number;
  count: number;
  score: number;
}) {
  // 별점에 따른 채워진 부분의 높이 계산 (5점 만점 기준)
  const fillPercentage = (rank / 5) * 100;
  return (
    <div
      className={`flex flex-col justify-center items-center gap-2 font-semibold text-xl ${rank === 5 ? 'text-flame-250' : 'text-[#777777]'}`}
    >
      <div className="">{count}</div>
      <div className="w-3 h-16 bg-[#d9d9d9] relative">
        <div
          className="absolute bottom-0 left-0 right-0 bg-flame-250"
          style={{ height: `${fillPercentage}%` }}
        ></div>
      </div>
      <div>{score}점</div>
    </div>
  );
}
