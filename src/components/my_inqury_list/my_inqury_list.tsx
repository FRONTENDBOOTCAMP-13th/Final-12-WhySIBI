'use client';
import InquryInfo from '@/components/my_inqury_list/my_inqury_info/my_inqury_info';
import { GetMyInqury } from '@/data/actions/inqury';
import { Inqury } from '@/types';
import useUserStore from '@/zustand/useUserStore';
import { useEffect, useState } from 'react';

export default function MyInquryList() {
  //상품 리스트 불러오는 부분
  const [inquryList, setInqury] = useState<Inqury[] | null>(null);

  const { user } = useUserStore();
  // user?.token?.accessToken as string;
  useEffect(() => {
    const InquryListData = async () => {
      try {
        const res = await GetMyInqury(user?.token?.accessToken as string);
        if (res.ok === 1) {
          setInqury(res.item);
          console.log(res.item);
        } else {
          setInqury(null);
        }
      } catch (error) {
        console.error('상품 정보 로딩 실패:', error);
      }
    };

    InquryListData();
  }, []);

  return (
    <nav className="mt-20">
      <ul className="flex flex-col flex-wrap gap-16">
        {inquryList?.map((inqury, i) => (
          <InquryInfo
            title={inqury.title}
            content={inqury.content}
            productImage={inqury.product?.image}
            _id={inqury._id}
            createdAt={inqury.createdAt}
            key={i}
          />
        ))}
      </ul>
    </nav>
  );
}
