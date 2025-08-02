'use client';
import DetailSwiper from '@/components/Detail_posts/Detail_swiper';
import Image from 'next/image';
import { Post } from '@/types';
// import { useBookmarkStore } from '@/zustand/bookMarkStore';
import getTimeAgo from '@/components/talk_list/time';
import { AddBookMark, DeleteBookMark } from '@/data/actions/bookmark';
import { redirect } from 'next/navigation';
interface PostDetailProps {
  post: Post;
  token: string;
}
export default function PostDetail({ post, token }: PostDetailProps) {
  // const toggleBookmark = useBookmarkStore(state => state.toggleBookmark);
  // const isBookmarked = useBookmarkStore(state => state.isBookmarked(post._id));
  const _id = Number(post._id);
  const type = post.type;

  const getBookmarkType = (postType: string) => {
    switch (postType) {
      case 'talk':
      case 'qna':
      case 'showRoom':
        return 'post';
      case 'product':
        return 'product';
      case 'user':
        return 'user';
      default:
        return 'post';
    }
  };
  const handleDeleteBookmark = async () => {
    const result = await DeleteBookMark(
      token as string,
      post.myBookmarkId as number,
    );
    if (result.ok === 1) {
      redirect(`/community/talk/${_id}`);
    }
  };

  const handleAddBookmark = async () => {
    const bookmarkType = getBookmarkType(type);
    const result = await AddBookMark(
      bookmarkType as string,
      token as string,
      _id,
    );

    if (result.ok === 1) {
      redirect(`/community/showRoom/${_id}`);
    }
  };

  const handleBookmark = () => {
    if (post.myBookmarkId !== undefined) {
      handleDeleteBookmark();
    } else {
      handleAddBookmark();
    }
  };

  return (
    <div className="text-center">
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
          <div className="title-wrapper flex flex-col items-start text-left space-y-1">
            <h1 className="w-full text-xl font-bold">{post.title}</h1>
            <time className="text-gray-icon text-sm" dateTime={post.createdAt}>
              {getTimeAgo(post.createdAt)}
            </time>
          </div>
          {/* 북마크 */}
          <button
            // onClick={() => toggleBookmark(post._id)}
            onClick={handleBookmark}
            className="text-livealone-cal-poly-green"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 48 61"
              fill="none"
            >
              <path
                d="M2 59V2H46V59L23.2414 44.75L2 59Z"
                fill="currentColor"
                fillOpacity={post.myBookmarkId ? 1 : 0}
                stroke="currentColor"
                strokeWidth="5"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </section>
      </div>
      <span className="text-gray-icon">
        <span className="font-extrabold">
          {post.user?.name ? `${post.user.name}` : '알 수 없는 사용자'}
        </span>
        님의 집
      </span>
      <DetailSwiper images={post.image?.slice(1) ?? []}></DetailSwiper>
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
