'use client';
import useSearchStore from '@/zustand/searchStore';
import useSubjectStore from '@/zustand/subjectStore';
import Image from 'next/image';
import { useRef, useState } from 'react';

export default function RoomPostSearch() {
  const { handleSearchClick } = useSearchStore();
  const searchText = useRef<HTMLInputElement>(null);
  const { resetSubject } = useSubjectStore();
  const handleClick = () => {
    const searchValue = String(searchText.current?.value);
    handleSearchClick(searchValue);
  };
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <div className="flex items-center text-sm font-variable">
      <input
        type="search"
        name="search_post"
        id="search_post"
        ref={searchText}
        placeholder="제목이나 내용을 입력해주세요"
        className="max-w-[280px] w-64 hidden md:block px-2 py-1 border-b"
        onKeyDown={e => {
          if (e.key === 'Enter') {
            handleClick();
            resetSubject();
          }
        }}
      />

      {isSearchOpen && (
        <input
          type="search"
          name="search_post_mobile"
          id="search_post_mobile"
          ref={searchText}
          placeholder="제목이나 내용을 입력해주세요"
          className="md:hidden w-64 max-w-[calc(100vw-80px)] mr-2"
          onKeyDown={e => {
            if (e.key === 'Enter') {
              handleClick();
              resetSubject();
              setIsSearchOpen(false);
            }
          }}
          autoFocus
        />
      )}

      <button
        type="button"
        onClick={() => {
          if (window.innerWidth < 768) {
            if (isSearchOpen) {
              handleClick();
              resetSubject();
            }
            setIsSearchOpen(!isSearchOpen);
          } else {
            handleClick();
            resetSubject();
          }
        }}
        className="flex items-center justify-center pr-1"
      >
        <Image
          src={'/image/community_icon/search_icon.svg'}
          alt="검색 아이콘"
          width={15}
          height={15}
        />
      </button>
    </div>
  );
}
