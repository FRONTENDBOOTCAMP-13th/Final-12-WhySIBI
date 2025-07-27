'use client';
import Link from "next/link";
import Image from "next/image";
import { Post } from "@/types";
import { useState } from "react";

interface PostCardItemProps {
  post: Post;
  boardType: string;
  index: number;
}


export default function PostCardItem({ post, boardType, index }: PostCardItemProps) {
  const [isBookmarked, setIsBookmarked] = useState(false);

    // 북마크 토글 함수
  const toggleBookmark = (id: number) => {
    setIsBookmarked((prev) => !prev);
  };
  
  return (
    <div 
      className="flex flex-col relative items-center cursor-pointer hover:scale-101 hover:duration-200 group"
    >
      {/* 게시글 링크 */}
      <Link 
        href={`/community/${boardType}/${post._id}`}
        className="flex flex-col items-center w-full"
      >
        <div className="relative w-[300px] h-[190px] mb-3">
          <Image
            src={post.image[0] || "/image/room_photo/postThumbnail.svg"}
            alt="썸네일"
            fill
            sizes="300px"
            priority={index === 0}
            className="object-cover rounded-md mb-3 bg-livealone-columbia-blue pointer-events-none group-hover:opacity-80"
          />
        </div>
        <p className="text-md font-bold">{post.title}</p>
      </Link>

      {/* 북마크 버튼 */}
      <button
        onClick={() => toggleBookmark(post._id)}
        className="absolute right-[12px] top-[150px] z-10"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 61" fill="none">
          <path d="M2 59V2H46V59L23.2414 44.75L2 59Z"
            fill="white"
            fillOpacity={isBookmarked ? 1 : 0.3}
            stroke="white"
            strokeWidth="3"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* 게시글 하단 정보 */}
      <div className="forIcon flex mt-2 text-xs font-regular text-gray-icon gap-2">
        <img src="/image/community_icon/heartIcon.svg" alt="공감" width="15" height="15" />
        <span>{post.views}</span>
        <img src="/image/community_icon/eyeIcon.svg" alt="조회수" width="15" height="15" />
        <span>{post.views}</span>
        <img src="/image/community_icon/chatIcon.svg" alt="댓글수" width="15" height="15" />
        <span>{post.repliesCount}</span>
      </div>
    </div>
  );
}
