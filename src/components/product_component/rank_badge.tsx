//등수 뱃지

function RankBadge({ rank }: { rank: number }) {
  return (
    <>
      <div
        className="
       absolute top-2 left-2
       px-4 py-1 
     bg-[var(--color-livealone-vanilla)]
       rounded-[var(--radius-radius-md)]
       font-basic
       text-(length:--font-size-sm)
      "
      >
        {rank}등
      </div>
    </>
  );
}
export default RankBadge;
