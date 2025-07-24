'use client';
import { useParams } from 'next/navigation';
import { useRoomStore } from "@/zustand/roomStore";
import { ButtonBack } from "@/components/Button_back";
import DetailHeader from "@/components/Detail_posts/Detail_header";
import DetailSwiper from '@/components/Detail_posts/Detail_swiper';
import DetailSimilar from '@/components/Detail_posts/Detail_similar';
import DetailOther from '@/components/Detail_posts/Detail_other';
import CommentList from '@/components/Detail_posts/CommentList';
import CommentNew from '@/components/Detail_posts/CommentNew';

export default function PostDetail({ postId }: { postId: number }) {
  const params = useParams();
  const posts = useRoomStore((state) => state.posts);
  const post = posts.find((p) => p._id === Number(params.id));

  if (!post) {
    return <div>게시글을 찾을 수 없습니다.</div>;
  }

  return (
    <div className="wrapper flex flex-col justify-center items-center bg-white p-20 font-variable">
      <div className="button-wrapper w-[600px] flex justify-between items-center text-gray-icon text-md mb-6">
        <ButtonBack />
        <div className='button-list space-x-3 mr-2'>
          <button className="cursor-pointer hover:opacity-80">수정</button>
          <button className="cursor-pointer hover:opacity-80">삭제</button>
        </div>
      </div>
      <DetailHeader />
      <span className="text-gray-icon font-extrabold my-10">{post.user.name}님의 집</span>
      <DetailSwiper images={post?.detailImages ?? []} ></DetailSwiper>
      <section className="w-[600px] text-gray-icon text-center pt-20 pb-25 border-b px-10 space-y-15">
        <div className="space-y-4">
          <h2 className="font-bold text-xl">집정보</h2>
          <p className="font-light">{post.tags?.join(' | ')}</p>
        </div>
        <div className="space-y-4">
          <h2 className="font-bold text-xl">집을 소개합니다</h2>
          <p className="font-light">{post.content}</p>
        </div>
      </section>
      <DetailSimilar></DetailSimilar>
      <DetailOther></DetailOther>
      <CommentNew></CommentNew>
      <CommentList></CommentList>
    </div>
  );
}
