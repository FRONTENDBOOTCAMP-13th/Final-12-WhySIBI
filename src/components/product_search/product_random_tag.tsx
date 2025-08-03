import { getProductList } from '@/data/actions/products.fetch';
import { ProductListProps } from '@/types';
import useProductSearchStore from '@/zustand/productSearchStore';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

//나혼산 추천 검색어 태그
export default function ProductRandomTag() {
  const [keyword, setKeyword] = useState<string[]>([]); // 기본빈배열
  const { handleSearchClick, toggleModal } = useProductSearchStore();
  const router = useRouter();

  //전체 상품 키워드에서 랜덤으로 8개 가져오기
  useEffect(() => {
    //랜덤 키워드 추출 함수
    const getRandomIndex = (length: number) =>
      parseInt(String(Math.random() * length));
    const getRandomKeyword = (products: ProductListProps[], count: number) => {
      const uniqKeywords = [...new Set(products.flatMap(p => p.keyword || []))];

      const result: string[] = [];
      while (result.length < count && uniqKeywords.length > 0) {
        const index = getRandomIndex(uniqKeywords.length);
        result.push(uniqKeywords[index]);
        uniqKeywords.splice(index, 1);
      }

      return result;
    };
    const keywords = async () => {
      try {
        const res = await getProductList();
        if (res.ok === 1) {
          const randomTag = getRandomKeyword(res.item, 8);
          setKeyword(randomTag);
        }
      } catch (err) {
        console.log('추천 검색어 태그 가져오기 실패', err);
      }
    };
    keywords();
  }, []); //한번만 실행

  //태그 클릭시 검색
  const handleTagClick = (tag: string) => {
    handleSearchClick(tag);
    toggleModal(false);
    router.push('/search');
  };

  return (
    <>
      <div className="grid grid-cols-4 gap-3 w-full max-w-lg text-livealone-cal-poly-green font-bold text-xs">
        {keyword.map((tag, index) => (
          <button
            key={index}
            onClick={() => handleTagClick(tag)}
            className="cursor-pointer px-3 py-1 rounded-radius-full border-2 border-button-color-opaque-25 hover:bg-livealone-cal-poly-green hover:text-white transition"
          >
            # {tag}
          </button>
        ))}
      </div>
    </>
  );
}
