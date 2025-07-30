'use client';
import useSearchStore from '@/zustand/searchStore';
import Image from 'next/image';

export default function TalkPostSearch() {
  const { text, handleSearchClick } = useSearchStore();
  const handleSearch = () => {
    console.log('검색할래?');
  };
  return (
    <form onSubmit={handleSearch}>
      <div className="flex items-center mb-8">
        <input
          type="search"
          name="search_post"
          id="search_post"
          placeholder="제목이나 내용을 입력해주세요"
          className="max-w-[280px] w-64"
        />
        <button type="submit">
          <Image
            src={'/image/community_icon/search_icon.svg'}
            alt="검색 아이콘"
            width={20}
            height={20}
          />
        </button>
      </div>
    </form>
  );
}
