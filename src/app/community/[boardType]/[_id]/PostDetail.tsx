'use client';
import { ButtonBack } from "@/components/Button_back";
import DetailSwiper from '@/components/Detail_posts/Detail_swiper';
import Image from "next/image";
import { Post } from "@/types";

export default function PostDetail({ post }: { post: Post }) {
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
      <section className="h-25 [box-shadow:0px_2px_20px_0px_rgba(0,0,0,0.1)] bg-white p-5 mb-10 flex items-center justify-between">
        <Image src="/image/community_icon/heartIcon.svg" width={28} height={28} alt="공감하기" className="w-auto mt-2 self-start" />
        <div className="space-y-1.5">
          <h1 className="text-xl font-bold">{post.title}</h1>
        </div>
        <Image src="/image/community_icon/bookMark_gray.svg" width={20} height={20} alt="복마크" className="w-auto mt-2 self-start" />
      </section>
      </div>
      <span className="text-gray-icon font-extrabold my-10">{post.user.name}님의 집</span>
      <DetailSwiper images={post.image?.slice(1) ?? []} ></DetailSwiper>
      <section className="content-wrapper w-[600px] text-gray-icon text-center pt-20 pb-25 border-b px-10 space-y-15">
        <div className="space-y-4">
          <h2 className="font-bold text-xl">집정보</h2>
          <p className="font-light">{post.tags?.join(' | ')}</p>
        </div>
        <div className="space-y-4">
          <h2 className="font-bold text-xl">집을 소개합니다</h2>
          <p className="font-light">{post.content}</p>
        </div>
      </section>
    </div>
  );
}
