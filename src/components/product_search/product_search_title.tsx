import useProductSearchStore from '@/zustand/productSearchStore';

function ProductSearchTitle() {
  const { searchText } = useProductSearchStore();

  return (
    <div className="text-center font-bold text-2xl">
      <h1 className="text-livealone-cal-poly-green">
        <span className="text-livealone-flame">{`'${searchText}'`}</span> 에
        대한 검색 결과 🔍
      </h1>
    </div>
  );
}
export default ProductSearchTitle;
