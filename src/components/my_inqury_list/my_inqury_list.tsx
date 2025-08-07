'use client';
import Pagenation from '@/components/basic_component/Pagenation';
import InquryInfo from '@/components/my_inqury_list/my_inqury_info/my_inqury_info';
import SkeletonUI from '@/components/product_component/skeleton_ui';
import { Inqury } from '@/types';
import Image from 'next/image';
import { useEffect, useState } from 'react';

interface MyInQuryListProp {
  MyInqury: Inqury[];
}

export default function MyInquryList({ MyInqury }: MyInQuryListProp) {
  //상품 리스트 불러오는 부분
  const [inquryList, setInqury] = useState<Inqury[] | null>(null);
  //페이지 네이션
  const [page, setPage] = useState(1);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    const InquryListData = async () => {
      try {
        if (MyInqury) {
          setInqury(MyInqury);
        } else {
          setInqury(null);
        }
      } catch (error) {
        console.error('상품 정보 로딩 실패:', error);
      } finally {
        setLoading(false);
      }
    };

    InquryListData();
  }, [MyInqury]);

  const onePage = 10; //한 페이지에 보여줄 상품 수
  const totalPage = Math.max(1, Math.ceil((inquryList?.length || 0) / onePage)); //총 페이지 수
  const startPage = (page - 1) * onePage; //(1-1) * 12 = 0 , (2-1) * 12 = 12
  const endPage = page * onePage; //1 * 12 = 12 , 2 * 12 = 24
  const sliceData = inquryList?.slice(startPage, endPage); //12 , 24 ... 개씩 잘라서 보여주기
  const handlePagenation = (page: number) => {
    setPage(page);
  };

  return (
    <>
      {inquryList && inquryList.length > 0 ? (
        isLoading ? (
          <div className="flex justify-center items-center mt-20">
            <SkeletonUI count={10} />
          </div>
        ) : (
          <nav className="mt-20">
            <ul className="flex flex-col flex-wrap gap-16">
              {sliceData?.map(inqury => (
                <InquryInfo
                  title={inqury.title}
                  content={inqury.content}
                  productImage={inqury.product?.image}
                  _id={inqury._id}
                  createdAt={inqury.createdAt}
                  key={inqury._id}
                />
              ))}
            </ul>
            <div className="w-full xl:mt-5 lg:mt-4 md:mt-3 mt-2">
              <Pagenation
                page={page}
                totalPage={totalPage}
                onPageTurner={handlePagenation}
              />
            </div>
          </nav>
        )
      ) : (
        <div>
          {' '}
          <section className="h-72 flex flex-col justify-center items-center gap-3">
            <h3 className="font-bold text-2xl">작성한 문의가 없다냥</h3>
            <Image
              src="/image/category_icon/furniture.svg"
              alt="문의가 필요하다냥"
              width="150"
              height="150"
              className="opacity-20 mt-5 mb-2.5"
              aria-hidden="true"
            />
          </section>
        </div>
      )}
    </>
  );
}
