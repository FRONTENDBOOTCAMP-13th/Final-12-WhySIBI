'use client';
import getTimeAgo from '@/components/talk_list/time';
import { AddBookMark, DeleteBookMark } from '@/data/actions/bookmark';
import { Post } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { useState } from 'react';

interface TalkCardItemProps {
  post: Post;
  boardType?: string;
  posts?: Post[];
  token?: string;
}

export default function TalkDetail({ post, posts, token }: TalkCardItemProps) {
  const [showAll, setShowAll] = useState(false);

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

  const filteredData = posts?.filter(talkPostItem => {
    const currentPostSubject = post.extra?.subject?.[0];
    const talkPostSubject = talkPostItem.extra?.subject?.[0];
    return (
      currentPostSubject === talkPostSubject && post._id !== talkPostItem._id
    );
  });

  // console.log(posts);
  // console.log(filteredData);

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
      redirect(`/community/talk/${_id}`);
    }
  };

  const handleBookmark = () => {
    if (post.myBookmarkId !== undefined) {
      handleDeleteBookmark();
    } else {
      handleAddBookmark();
    }
  };

  const limitData = showAll ? filteredData : filteredData?.slice(0, 3);
  const moreData = (filteredData?.length || 1) > 3;

  return (
    <>
      <p className="text-size-xs md:text-size-lg py-2 font-basic font-bold text-[#353535]">
        {post.extra?.subject?.[0] || ''}
      </p>
      <section className="mb-6">
        <div className="text-sm md:text-2xl font-basic font-bold flex gap-5 items-center">
          Q {post.title}
          <p className="font-light text-size-md text-gray-400">
            {getTimeAgo(post.createdAt)}
          </p>
          <button
            type="button"
            className="ml-auto cursor-pointer"
            onClick={handleBookmark}
          >
            <Image
              src={
                post.myBookmarkId !== undefined
                  ? '/image/community_icon/heartIcon_active.svg'
                  : '/image/community_icon/heartIcon.svg'
              }
              alt="좋아요 아이콘"
              width={30}
              height={30}
            />
          </button>
        </div>

        <p className="mt-7">{post.content}</p>
        <div className="flex gap-6 max-w-[1000px]">
          {post.image?.map((image, i) => (
            <Image
              key={i}
              src={image}
              alt={`게시글 이미지`}
              width={500}
              height={500}
              className="object-contain rounded-radius-lg aspect-square"
              sizes="(max-width: 768px) 480px, (max-width: 1024px) 450px, 420px"
            />
          ))}
        </div>
      </section>

      <section className="border-b-2 border-t-2 py-14 my-10 border-button-color-opaque-25">
        <div className="w-2/4 mx-auto text-center">
          <p className="font-bold font-basic text-lg md:text-2xl">
            비슷한 고민을 찾아봐요
          </p>
          {limitData?.map(post => (
            <Link
              key={post._id}
              href={`/community/talk/${post._id}`}
              className="block font-basic text-center border-[1px] rounded-full mt-4 py-3 bg-custom-gradient"
            >
              {post.title}
            </Link>
          ))}

          {moreData && (
            <button
              onClick={() => setShowAll(!showAll)}
              className="mt-6 px-6 py-2 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors font-basic"
            >
              {showAll
                ? '접기'
                : `더보기 (+${(filteredData?.length || 1) - 3}개)`}
            </button>
          )}
        </div>
      </section>
    </>
  );
}
