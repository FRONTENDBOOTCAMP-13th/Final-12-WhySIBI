'use client';
import { useState } from 'react';
import Link from "next/link";
import Image from 'next/image';
import { dummyHousePosts } from './dummyHousePosts';

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
        {posts.map((post, index) => (
          <Link 
            key={post.id} 
            href={`/showRoom/${post.id}`}
            className="flex flex-col relative items-center cursor-pointer hover:scale-101 hover:duration-200 group"
          >
            <Image
              src={post.imgUrl}
              alt="썸네일"
              width={300}
              height={190}
              priority={index === 0}
              className="object-cover rounded-md mb-3 bg-livealone-columbia-blue pointer-events-none group-hover:opacity-80"
            />
            <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 48 61" fill="none" className="absolute right-7 top-3/5" onClick={(e) => { e.preventDefault(); toggleBookmark(post.id); }}>
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
          </Link>
        ))}
      </div>
    </>
  );
}