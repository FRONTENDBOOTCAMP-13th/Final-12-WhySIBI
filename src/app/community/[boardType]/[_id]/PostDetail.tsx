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
  token?: string;
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
      redirect(`/community/showRoom/${_id}`);
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
    <div className="text-center px-4 sm:px-0">
      <div className="title-wrapper min-w-[15.625rem] max-w-[18.75rem] md:max-w-[600px] md:min-w-2xl text-center overflow-hidden mx-auto">
        <Image
          src={post.image?.[0] || '/image/room_photo/postThumbnail.svg'}
          alt="썸네일"
          width={300}
          height={190}
          priority
          className="w-full h-60 sm:h-72 md:h-90 object-cover bg-livealone-columbia-blue pointer-events-none"
        />
        <section className="h-auto md:h-25 [box-shadow:0px_2px_20px_0px_rgba(0,0,0,0.1)] bg-white p-4 sm:p-6 md:p-7 mb-12 sm:mb-16 md:mb-20 flex items-center justify-between">
          <div className="title-wrapper flex flex-col items-start text-left space-y-1 flex-1 min-w-0">
            <h1 className="w-full text-lg sm:text-xl font-bold line-clamp-2 pr-2">
              {post.title}
            </h1>
            <time
              className="text-gray-icon text-xs sm:text-sm"
              dateTime={post.createdAt}
            >
              {getTimeAgo(post.createdAt)}
            </time>
          </div>
          {/* 북마크 */}
          <button
            onClick={handleBookmark}
            className="text-livealone-cal-poly-green flex-shrink-0 p-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
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

      <span className="text-gray-icon text-sm sm:text-base">
        <span className="font-extrabold">
          {post.user?.name ? `${post.user.name}` : '알 수 없는 사용자'}
        </span>
        님의 집
      </span>

      <div className="mt-4 sm:mt-6 md:mt-8">
        <DetailSwiper images={post.image?.slice(1) ?? []}></DetailSwiper>
      </div>

      <section className="content-wrapper min-w-[15.625rem] max-w-[18.75rem] md:max-w-[600px] md:min-w-2xl text-gray-icon text-center pt-12 sm:pt-16 md:pt-20 pb-16 sm:pb-20 md:pb-25 border-b px-6 sm:px-8 md:px-10 space-y-8 sm:space-y-12 md:space-y-15 mx-auto">
        {Array.isArray(post.tag) && post.tag.length > 0 && (
          <div className="space-y-3 sm:space-y-4">
            <h2 className="font-bold text-lg sm:text-xl">집정보</h2>
            <p className="font-light text-sm sm:text-base leading-relaxed">
              {post.tag.join(' | ')}
            </p>
          </div>
        )}

        <div className="space-y-3 sm:space-y-4">
          <h2 className="font-bold text-lg sm:text-xl">집을 소개합니다</h2>
          <p className="font-light text-sm sm:text-base leading-relaxed text-left sm:text-center">
            {post.content}
          </p>
        </div>
      </section>
    </div>
  );
}
