'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Post } from '@/types';
// import { useBookmarkStore } from '@/zustand/bookMarkStore';
import { AddBookMark, DeleteBookMark } from '@/data/actions/bookmark';
// import { redirect } from 'next/navigation';
import toast from 'react-hot-toast';
import { useCallback } from 'react';
import { useRouter } from 'next/navigation';

interface PostCardItemProps {
  post: Post;
  boardType: string;
  index: number;
  token?: string;
  bookmarkID?: number | undefined;
  isHot?: boolean;
  isNew?: boolean;
}

export default function PostCardItem({
  post,
  boardType,
  index,
  token,
  bookmarkID,
  isHot = false,
  isNew = false,
}: PostCardItemProps) {
  // const toggleBookmark = useBookmarkStore(state => state.toggleBookmark);
  // const isBookmarked = useBookmarkStore(state => state.isBookmarked(post._id));
  const _id = Number(post._id);
  const type = post.type;

  const router = useRouter();

  const showErrorToast = useCallback(() => {
    toast.custom(
      t => (
        <div
          className={`
          ${t.visible ? 'animate-in slide-in-from-bottom-full' : 'animate-out slide-out-to-bottom-full'}
          max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-red-200 p-4 border-l-4 border-red-500
        `}
          role="alert"
          aria-live="assertive"
          aria-label="찜하기 실패알림"
        >
          <div className="flex items-center">
            {/* 에러 아이콘 */}
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-8 w-8 rounded-full bg-red-100">
                <svg
                  className="h-5 w-5 text-red-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
            </div>

            <div className="ml-3 flex-1">
              <p className="text-sm font-medium text-red-800 mb-1">
                로그인이 필요합니다.
              </p>
            </div>
          </div>
        </div>
      ),
      {
        duration: 5000,
        position: 'top-center',
      },
    );
  }, []);

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
      router.refresh();
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
      router.refresh();
    }
  };

  const handleBookmark = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (!token) {
      showErrorToast();
      return;
    }

    if (post.myBookmarkId !== undefined) {
      handleDeleteBookmark();
    } else {
      handleAddBookmark();
    }
  };
  return (
    <div className="flex flex-col relative items-center cursor-pointer hover:scale-101 hover:duration-200 group">
      {/* 게시글 링크 */}
      <Link
        href={`/community/${boardType}/${post._id}`}
        className="flex flex-col items-center w-full"
      >
        {isHot && (
          <>
            <div className="w-[200px] h-[120px] absolute z-10 top-0 right-0 bg-gradient-to-tr from-transparent via-transparent to-livealone-cal-poly-green rounded-md"></div>
            <Image
              src="/image/community_icon/hotIcon.svg"
              alt="인기게시글"
              width={40}
              height={40}
              className="absolute top-3 right-4 z-10"
            ></Image>
          </>
        )}
        {isNew && (
          <>
            <div className="w-[200px] h-[120px] absolute z-10 top-0 right-0 bg-gradient-to-tr from-transparent via-transparent to-livealone-cal-poly-green rounded-md"></div>
            <Image
              src="/image/community_icon/newIcon.svg"
              alt="최근게시글"
              width={40}
              height={40}
              className="absolute top-3 right-4 z-10"
            ></Image>
          </>
        )}
        <div className="relative w-[300px] h-[190px] mb-3">
          <Image
            src={post.image?.[0] || '/image/room_photo/postThumbnail.svg'}
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
        // onClick={() => toggleBookmark(post._id)}
        onClick={handleBookmark}
        className="absolute right-[15px] top-[150px] z-10 cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 48 61"
          fill="none"
        >
          <path
            d="M2 59V2H46V59L23.2414 44.75L2 59Z"
            fill="white"
            fillOpacity={bookmarkID ? 1 : 0.3}
            stroke="white"
            strokeWidth="3"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* 게시글 작성자 */}
      <div className="flex justify-center items-center gap-2 mt-0.5">
        <div>
          <span className="font-medium text-sm text-gray-icon">
            {post.user?.name}
          </span>
        </div>
      </div>

      {/* 게시글 하단 정보 */}
      <div className="forIcon flex mt-2 text-xs font-regular text-gray-icon gap-2">
        <Image
          src="/image/community_icon/eyeIcon.svg"
          alt="조회수"
          width={15}
          height={15}
        />
        <span>{post.views}</span>
        <Image
          src="/image/community_icon/chatIcon.svg"
          alt="댓글수"
          width={15}
          height={15}
        />
        <span>{post.repliesCount}</span>
      </div>
    </div>
  );
}
