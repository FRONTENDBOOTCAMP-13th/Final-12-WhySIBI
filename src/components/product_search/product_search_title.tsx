'use client';
import useProductSearchStore from '@/zustand/productSearchStore';

function ProductSearchTitle() {
  const { searchText, searchKeywords } = useProductSearchStore();

  const hasKeywords = searchKeywords.length > 0;

  return (
    <div className="text-center font-bold text-2xl">
      <h1 className="text-livealone-cal-poly-green">
        {hasKeywords ? (
          <div> 
            <span>비슷한 상품 찾기 🔍</span>
            {searchKeywords.map((k, i) => (
              <span
                key={i}
                className="bg-livealone-columbia-blue text-gray-700 px-3 py-1 rounded-full ml-2"
              >
                #{k}
              </span>
            ))}
          </div>
        ) : (
          <>
            <span className="text-livealone-flame">{`'${searchText}'`}</span> 에
            대한 검색 결과 🔍
          </>
        )}
      </h1>
    </div>
  );
}

export default ProductSearchTitle;
