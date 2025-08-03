'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Post } from '@/types';
// import { useBookmarkStore } from '@/zustand/bookMarkStore';
import { AddBookMark, DeleteBookMark } from '@/data/actions/bookmark';
import { redirect } from 'next/navigation';

interface PostCardItemProps {
  post: Post;
  boardType: string;
  index: number;
  token?: string;
  bookmarkID?: number | undefined;
  isHot?: boolean;
}

export default function PostCardItem({
  post,
  boardType,
  index,
  token,
  bookmarkID,
  isHot = false
}: PostCardItemProps) {
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
      redirect(`/community/showRoom`);
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
    <div className="flex flex-col relative items-center cursor-pointer hover:scale-101 hover:duration-200 group">
      {/* 게시글 링크 */}
      <Link
        href={`/community/${boardType}/${post._id}`}
        className="flex flex-col items-center w-full"
      >
        {isHot && (
            <Image src='/image/community_icon/hotIcon.svg' alt="인기게시글" width={40} height={40} className="absolute top-3 right-4 z-10"></Image>
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
        className="absolute right-[15px] top-[150px] z-10"
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
          width="15"
          height="15"
        />
        <span>{post.views}</span>
        <Image
          src="/image/community_icon/chatIcon.svg"
          alt="댓글수"
          width="15"
          height="15"
        />
        <span>{post.repliesCount}</span>
      </div>
    </div>
  );
}
