import TimeStamp from '@/components/basic_component/Time_stamp';
import ProductRandomTag from '@/components/product_search/product_random_tag';
import ProductSearchRanking from '@/components/product_search/product_search_ranking';
import useProductSearchStore from '@/zustand/productSearchStore';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useRef } from 'react';

function ProductSearchButton() {
  //상태추가
  const { handleSearchClick, isOpen, toggleModal } = useProductSearchStore();
  const searchText = useRef<HTMLInputElement>(null);
  const router = useRouter();

  //검색 입력
  const handleClick = () => {
    const searchValue = String(searchText.current?.value).trim();
    if (!searchValue) return; //빈 검색어 제거
    handleSearchClick(searchValue);
    toggleModal(false);
    router.push('/search');
  };

  //검색창 뒤 백그라운드 제어
  useEffect(() => {
    const prev = document.body.style.overflow;
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  return (
    <>
      {/* 검색 아이콘 */}
      <div className="search_area h-8">
        <button
          type="button"
          onClick={() => toggleModal(true)}
          className="cursor-pointer"
        >
          <Image
            src={'/image/header_icon/search_icon.svg'}
            alt="검색하기"
            width={'30'}
            height={'30'}
          ></Image>
        </button>
      </div>

      {/* 검색 백그라운드 오버레이*/}
      <div
        className={`bg-black fixed top-0 left-0 w-full h-full z-10 ${isOpen ? 'opacity-40 pointer-events-auto' : 'opacity-0 pointer-events-none'} `}
        onClick={() => toggleModal(false)}
      ></div>

      {/* 검색 슬라이드 모달 */}
      <div
        className={`w-[100vw] sm:w-[500px] overflow-y-auto h-full fixed top-0 right-0 z-20 p-10  bg-white transition-transform duration-500 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <button
          className="absolute right-10 text-gray-500 cursor-pointer"
          onClick={() => toggleModal(false)}
        >
          close
        </button>

        {/* 검색바 */}
        <div className="search-bar mt-20 ">
          <div className="flex justify-between items-center gap-2">
            <input
              type="search"
              ref={searchText}
              placeholder=" 검색어를 입력해주세요"
              className="flex-1 focus:outline-none focus:ring-2  focus:ring-livealone-columbia-blue transition"
              onKeyDown={e => {
                if (e.key === 'Enter') {
                  handleClick();
                }
              }}
            />
            <button
              type="submit"
              onClick={handleClick}
              className="cursor-pointer"
            >
              <Image
                src={'/image/community_icon/search_icon.svg'}
                alt="검색하기"
                width={20}
                height={20}
                onClick={() => {
                  handleClick();
                }}
              />
            </button>
          </div>
        </div>

        <hr className="h-0.25 border-0 bg-gray-300 my-5" />
        <h2 className="font-bold text-livealone-cal-poly-green text-lg sm:text-xl text-left mb-5">
          나혼산 추천검색어🏠
        </h2>
        <ProductRandomTag />
        <div className="flex justify-between mt-10 mb-5">
          <h2 className="font-bold text-livealone-cal-poly-green text-lg sm:text-xl text-left">
            실시간 인기검색어🔥
          </h2>
          <p className="text-gray-500 text-sm">
            <TimeStamp /> 기준
          </p>
        </div>
        <ProductSearchRanking />
      </div>
    </>
  );
}
export default ProductSearchButton;
