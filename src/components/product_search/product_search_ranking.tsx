import { getProductList } from '@/data/actions/products.fetch';
import useProductSearchStore from '@/zustand/productSearchStore';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

//나혼산 인기 검색어 랭킹 : 가장 많이 팔린 상품의 키워드 가져오기
export default function ProductSearchRanking() {
  const [keyword, setKeyword] = useState<string[]>([]);
  const { handleSearchClick, toggleModal } = useProductSearchStore();
  const router = useRouter();

  //API - 가장많이 팔린 10개 상품의 첫번째 키워드만 가져오기
  useEffect(() => {
    const keywordRanking = async () => {
      try {
        const res = await getProductList({ sort: 'best-selling', limit: 10 });
        if (res.ok === 1) {
          const bestKeyword = res.item.map(p => p.keyword?.[0] || '');
          setKeyword(bestKeyword);
        }
      } catch (err) {
        console.error('인기 검색어 태그 가져오기 실패', err);
      }
    };
    keywordRanking();
  }, []);

  //인기 검색어 클릭시 검색
  const handleTagClick = (tag: string) => {
    handleSearchClick(tag);
    toggleModal(false);
    router.push('/search');
  };

  return (
    <>
      <ul className=" text-sm font-bold text-livealone-cal-poly-green ">
        {keyword.map((tag, index) => (
          <li
            key={index}
            onClick={() => handleTagClick(tag)}
            className="flex justify-start border-b border-gray-300 items-center  py-2 cursor-pointer
            hover:bg-livealone-columbia-blue transition"
          >
            <span className="w-6">{index + 1}</span>
            <span className="ml-8">{tag}</span>
          </li>
        ))}
      </ul>
    </>
  );
}
