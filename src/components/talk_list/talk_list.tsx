'use client';
import Pagenation from '@/components/basic_component/Pagenation';
import TalkPostDropdownTime from '@/components/Dropdown/Talk_Dropdown_custom';
import TalkInfo, {
  ExtendedPostProps,
} from '@/components/talk_list/talk_info/talk_info';
import { Post } from '@/types';
import useSubjectStore from '@/zustand/subjectStore';
import { useState } from 'react';

export interface TalkListProps {
  item: ExtendedPostProps[];
  boardType: string;
}

export default function TalkList({ item, boardType }: TalkListProps) {
  const [page, setPage] = useState(1);
  const [sortValue, setSortValue] = useState<string>('latest');
  // 상태명 변경
  const { activeSubject } = useSubjectStore();

  const sortedData = [...item].sort((a, b) => {
    const dateA = new Date(a.createdAt).getTime();
    const dateB = new Date(b.createdAt).getTime();

    return sortValue === 'latest'
      ? dateB - dateA // 최신순
      : dateA - dateB; // 오래된순
  });

  const handleSortChange = (value: string) => {
    setSortValue(value);
    setPage(1); // 정렬 변경 시 첫 페이지로
  };

  //상품 slice해서 보여주기
  const handlePagenation = (page: number) => {
    setPage(page);
  };
  const onePage = 10; //한 페이지에 보여줄 상품 수

  const totalPage = Math.ceil(sortedData.length / onePage); //총 페이지 수

  const startPage = (page - 1) * onePage; //(1-1) * 12 = 0 , (2-1) * 12 = 12
  const endPage = page * onePage; //1 * 12 = 12 , 2 * 12 = 24
  const sliceData = sortedData.slice(startPage, endPage); //12 , 24 ... 개씩 잘라서 보여주기

  const filteredData = sliceData.filter(post => {
    if (activeSubject === 'all') {
      return true;
    }
    return post.extra?.subject?.[0] == activeSubject;
  });

  return (
    <>
      <section className="w-full block pr-14">
        <div className="float-right">
          <TalkPostDropdownTime
            value={sortValue}
            onDropChange={handleSortChange}
          />
        </div>
      </section>

      {filteredData.map((post: Post, index: number) => (
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
