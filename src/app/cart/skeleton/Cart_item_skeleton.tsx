export default function CartItemSkeleton() {
  return (
    <div className="flex gap-4 py-5 px-2.5 border-b-1 border-gray-150">
      <div className="w-20 h-[105px] bg-gray-150"></div>
      <div className="flex-1">
        <div className="w-full h-5 bg-gray-150"></div>
        <div className="w-full h-5 bg-gray-150"></div>
        <br />
        <div className="w-full h-5 bg-gray-150"></div>
      </div>
    </div>
  );
}
