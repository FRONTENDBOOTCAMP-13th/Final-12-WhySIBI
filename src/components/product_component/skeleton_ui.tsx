//로딩중일때 보여줄 스켈레톤 UI
export default function SkeletonUI({ count = 4 }) {
  const skeleton = [];

  for (let i = 0; i < count; i++) {
    //ui 4번반복
    skeleton.push(
      <div key={i} className="flex flex-col gap-2 p-4">
        <div className="bg-gray-300 h-[180px] w-full rounded-md" />
        <div className="h-4 bg-gray-300 rounded w-3/4" />
        <div className="h-4 bg-gray-300 rounded w-1/2" />
        <div className="h-4 bg-gray-300 rounded w-1/2" />
      </div>,
    );
  }

  return <>{skeleton}</>;
}
