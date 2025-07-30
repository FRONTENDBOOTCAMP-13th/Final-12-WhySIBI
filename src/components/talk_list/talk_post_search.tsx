'use client';
import useSearchStore from '@/zustand/searchStore';
import useSubjectStore from '@/zustand/subjectStore';
import Image from 'next/image';
import { useRef } from 'react';

export default function TalkPostSearch() {
  const { handleSearchClick } = useSearchStore();
  const searchText = useRef<HTMLInputElement>(null);
  const { resetSubject } = useSubjectStore();
  const handleClick = () => {
    const searchValue = String(searchText.current?.value);
    handleSearchClick(searchValue);
  };
  return (
    <div className="flex items-center mb-8">
      <input
        type="search"
        name="search_post"
        id="search_post"
        ref={searchText}
        placeholder="제목이나 내용을 입력해주세요"
        className="max-w-[280px] w-64"
        onKeyDown={e => {
          if (e.key === 'Enter') {
            handleClick();
            resetSubject();
          }
        }}
      />
      <button type="submit" onClick={handleClick}>
        <Image
          src={'/image/community_icon/search_icon.svg'}
          alt="검색 아이콘"
          width={20}
          height={20}
          onClick={() => {
            handleClick();
            resetSubject();
          }}
        />
      </button>
    </div>
  );
}
