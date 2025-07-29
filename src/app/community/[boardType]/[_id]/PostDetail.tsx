'use client';
import { ButtonBack } from "@/components/Button_back";
import DetailSwiper from '@/components/Detail_posts/Detail_swiper';
import Image from "next/image";
import { Post } from "@/types";
import { useBookmarkStore } from "@/zustand/bookMarkStore";

export default function PostDetail({ post }: { post: Post }) {
  const toggleBookmark = useBookmarkStore((state) => state.toggleBookmark);
  const isBookmarked = useBookmarkStore((state) => state.isBookmarked(post._id));

  return (
    <div className="text-center">
      <div className="button-wrapper w-[600px] flex justify-between items-center text-gray-icon text-md mb-6">
        <ButtonBack />
        <div className='button-list space-x-3 mr-2'>
          <button className="cursor-pointer hover:opacity-80">수정</button>
          <button className="cursor-pointer hover:opacity-80">삭제</button>
        </div>
      </div>
      <div className="title-wrapper w-[600px] text-center overflow-hidden">
      <Image
        src={post.image?.[0] || '/image/room_photo/postThumbnail.svg'}
        alt="썸네일"
        width={300}
        height={190}
        priority
        className="w-full h-90 object-cover bg-livealone-columbia-blue pointer-events-none"
      />
      <section className="h-25 [box-shadow:0px_2px_20px_0px_rgba(0,0,0,0.1)] bg-white p-7 mb-20 flex items-center justify-between">
        <div className="space-y-1.5">
          <h1 className="w-full text-xl font-bold">{post.title}</h1>
        </div>
        <button onClick={() => toggleBookmark(post._id)} className="text-livealone-cal-poly-green">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 48 61" fill="none">
            <path d="M2 59V2H46V59L23.2414 44.75L2 59Z"
              fill="currentColor"
              fillOpacity={isBookmarked ? 1 : 0}
              stroke="currentColor"
              strokeWidth="5"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </section>
      </div>
      <span className="text-gray-icon font-extrabold">{post.user.name}님의 집</span>
      <DetailSwiper images={post.image?.slice(1) ?? []} ></DetailSwiper>
      <section className="content-wrapper w-[600px] text-gray-icon text-center pt-20 pb-25 border-b px-10 space-y-15">
        {Array.isArray(post.tag) && post.tag.length > 0 && (
          <div className="space-y-4">
            <h2 className="font-bold text-xl">집정보</h2>
            <p className="font-light">{post.tag.join(' | ')}</p>
          </div>
        )}
        <div className="space-y-4">
          <h2 className="font-bold text-xl">집을 소개합니다</h2>
          <p className="font-light">{post.content}</p>
        </div>
      </section>
    </div>
  );
}
