'use client';
import Pagenation from '@/components/basic_component/Pagenation';
import TalkInfo from '@/components/talk_list/talk_info/talk_info';
import { Post } from '@/types';
import { useState } from 'react';

export interface TalkListProps {
  item: Post[];
  boardType: string;
}

export default function TalkList({ item, boardType }: TalkListProps) {
  const [page, setPage] = useState(1);

  //상품 slice해서 보여주기
  const handlePagenation = (page: number) => {
    setPage(page);
  };
  const onePage = 10; //한 페이지에 보여줄 상품 수

  const totalPage = Math.ceil(item.length / onePage); //총 페이지 수

  const startPage = (page - 1) * onePage; //(1-1) * 12 = 0 , (2-1) * 12 = 12
  const endPage = page * onePage; //1 * 12 = 12 , 2 * 12 = 24
  const sliceData = item.slice(startPage, endPage); //12 , 24 ... 개씩 잘라서 보여주기

  return (
    <>
      {sliceData.map((post: Post, index: number) => (
        <TalkInfo
          key={post._id}
          post={post}
          index={index}
          boardType={boardType}
        />
      ))}
      <Pagenation
        page={page}
        totalPage={totalPage}
        onPageTurner={handlePagenation}
      />
    </>
  );
}
