'use client';
import { useState } from 'react';
import Image from 'next/image';

interface HousePost{
  id: number;
  title: string;
  imgUrl: string;
  isLiked: number;
  views: number;
  comments: number;
  bookMark: boolean;
}

export const dummyHousePosts: HousePost[] = [
  { id: 1, title: '유럽 에어비엔비처럼 꾸민 자취방', imgUrl: '/image/europeShowroom.png', isLiked: 0, views: 10, comments: 100, bookMark: true },
  { id: 2, title: '제주 게스트하우스 느낌으로 꾸민 룸', imgUrl: '/image/jejuShowroom.png', isLiked: 0, views: 10, comments: 100, bookMark: false },
  { id: 3, title: '18평 빌라에서 만든 초록색 신혼집', imgUrl: '/image/greenShowroom.png', isLiked: 0, views: 10, comments: 100, bookMark: true },
  { id: 4, title: '식물과 빈티지 소품으로 꾸민 8층 복층', imgUrl: '/image/whiteShowroom.png', isLiked: 0, views: 10, comments: 100, bookMark: true },
  { id: 5, title: '유럽 에어비엔비처럼 꾸민 자취방', imgUrl: '/image/europeShowroom.png', isLiked: 0, views: 10, comments: 100, bookMark: true },
  { id: 6, title: '제주 게스트하우스 느낌으로 꾸민 룸', imgUrl: '/image/jejuShowroom.png', isLiked: 0, views: 10, comments: 100, bookMark: false },
  { id: 7, title: '유럽 에어비엔비처럼 꾸민 자취방', imgUrl: '/image/europeShowroom.png', isLiked: 0, views: 10, comments: 100, bookMark: true },
  { id: 8, title: '제주 게스트하우스 느낌으로 꾸민 룸', imgUrl: '/image/jejuShowroom.png', isLiked: 0, views: 10, comments: 100, bookMark: false },
  { id: 9, title: '18평 빌라에서 만든 초록색 신혼집', imgUrl: '/image/greenShowroom.png', isLiked: 0, views: 10, comments: 100, bookMark: true },
  { id: 10, title: '식물과 빈티지 소품으로 꾸민 8층 복층', imgUrl: '/image/whiteShowroom.png', isLiked: 0, views: 10, comments: 100, bookMark: true },
  { id: 11, title: '유럽 에어비엔비처럼 꾸민 자취방', imgUrl: '/image/europeShowroom.png', isLiked: 0, views: 10, comments: 100, bookMark: true },
  { id: 12, title: '제주 게스트하우스 느낌으로 꾸민 룸', imgUrl: '/image/jejuShowroom.png', isLiked: 0, views: 10, comments: 100, bookMark: false },
  { id: 13, title: '유럽 에어비엔비처럼 꾸민 자취방', imgUrl: '/image/europeShowroom.png', isLiked: 0, views: 10, comments: 100, bookMark: true },
  { id: 14, title: '제주 게스트하우스 느낌으로 꾸민 룸', imgUrl: '/image/jejuShowroom.png', isLiked: 0, views: 10, comments: 100, bookMark: false },
  { id: 15, title: '18평 빌라에서 만든 초록색 신혼집', imgUrl: '/image/greenShowroom.png', isLiked: 0, views: 10, comments: 100, bookMark: true },
  { id: 16, title: '식물과 빈티지 소품으로 꾸민 8층 복층', imgUrl: '/image/whiteShowroom.png', isLiked: 0, views: 10, comments: 100, bookMark: true },
  { id: 17, title: '유럽 에어비엔비처럼 꾸민 자취방', imgUrl: '/image/europeShowroom.png', isLiked: 0, views: 10, comments: 100, bookMark: true },
  { id: 18, title: '제주 게스트하우스 느낌으로 꾸민 룸', imgUrl: '/image/jejuShowroom.png', isLiked: 0, views: 10, comments: 100, bookMark: false },
  { id: 19, title: '유럽 에어비엔비처럼 꾸민 자취방', imgUrl: '/image/europeShowroom.png', isLiked: 0, views: 10, comments: 100, bookMark: true },
  { id: 20, title: '제주 게스트하우스 느낌으로 꾸민 룸', imgUrl: '/image/jejuShowroom.png', isLiked: 0, views: 10, comments: 100, bookMark: false },
  { id: 21, title: '18평 빌라에서 만든 초록색 신혼집', imgUrl: '/image/greenShowroom.png', isLiked: 0, views: 10, comments: 100, bookMark: true },
  { id: 22, title: '식물과 빈티지 소품으로 꾸민 8층 복층', imgUrl: '/image/whiteShowroom.png', isLiked: 0, views: 10, comments: 100, bookMark: true },
  { id: 23, title: '유럽 에어비엔비처럼 꾸민 자취방', imgUrl: '/image/europeShowroom.png', isLiked: 0, views: 10, comments: 100, bookMark: true },
  { id: 24, title: '제주 게스트하우스 느낌으로 꾸민 룸', imgUrl: '/image/jejuShowroom.png', isLiked: 0, views: 10, comments: 100, bookMark: false },
];

export default function PostCard(){
  const [posts, setPosts] = useState(dummyHousePosts);

  const toggleBookmark = (id: number) => {
    setPosts(prev =>
      prev.map(post =>
        post.id === id ? { ...post, bookMark: !post.bookMark } : post
      )
    );
  };

  return(
    <>
      <div className='grid grid-flow-row grid-cols-[repeat(auto-fill,_minmax(250px,_auto))] gap-15 font-variable'>
        {posts.map((post) => (
        <div
          key={post.id}
          className="flex flex-col relative items-center cursor-pointer hover:scale-101 hover:duration-200 group "
        >
          <Image
            src={post.imgUrl}
            alt="썸네일"
            width={300}
            height={190}
            className="object-cover rounded-md mb-3 bg-livealone-columbia-blue pointer-events-none group-hover:opacity-80"
          />
          <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 48 61" fill="none" className="absolute right-7 top-3/5" onClick={() => toggleBookmark(post.id)} >
            <path d="M2 59V2H46V59L23.2414 44.75L2 59Z" fill="white" fillOpacity={post.bookMark ? 1 : 0.5} stroke="white" strokeWidth="3" strokeLinejoin="round"/>
          </svg>
          <p className="text-md font-bold">{post.title}</p>
          <div className="forIcon flex mt-2 text-xs font-regular text-gray-icon gap-2">
            <img src="/image/community_icon/heartIcon.svg" alt="공감" width="15" />
            <span>{post.isLiked}</span>
            <img src="/image/community_icon/eyeIcon.svg" alt="조회수" width="15" />
            <span>{post.views}</span>
            <img src="/image/community_icon/chatIcon.svg" alt="댓글수" width="15" />
            <span>{post.comments}</span>
          </div>
        </div>
      ))}
      </div>
    </>
  );
}