import getTimeAgo from '@/components/talk_list/time';
import { Post } from '@/types';
import Image from 'next/image';
import Link from 'next/link';

interface PostCardItemProps {
  post: ExtendedPostProps;
  boardType: string;
  index: number;
}
export interface ExtendedPostProps extends Post {
  extra?: {
    subject: string[];
  };
}
export default function TalkInfo({ post, boardType }: PostCardItemProps) {
  return (
    <section className="border-b-[1px] border-button-color-opaque-25 px-4 py-7">
      <Link href={`/community/${boardType}/${post._id}`}>
        <div className="flex gap-4 items-center">
          <p className="inline-block text-size-sm md:text-size-md font-basic font-bold text-livealone-cal-poly-green bg-livealone-columbia-blue py-1 px-3 md:px-4 lg:px-5 rounded-full">
            {post.extra?.subject?.[0]}
          </p>
          <p className="text-size-sm md:text-size-md text-gray-400">
            {getTimeAgo(post.createdAt)}
          </p>
        </div>
        <section className="mb-6 mt-4 md:mt-8">
          <p className="text-size-md sm:text-lg md:text-xl lg:text-2xl font-basic font-bold">
            Q&nbsp;&nbsp;{post.title}
          </p>

          <p className="mt-1.5 sm:mt-1 md:mt-3 flex flex-col min-[450px]:flex-row justify-between text-gray-500">
            <span className="ml-4 sm:ml-6 text-size-xs sm:text-sm md:text-size-md">{post.content}</span>
            {post?.image?.[0] ? (
              <Image
                src={post?.image?.[0]}
                alt={`${post._id}번째 게시물 첫번째 이미지`}
                width={150}
                height={150}
                className="mt-5 sm:mt-0 max-[450px]:w-full max-[640px]:max-h-[150px] object-cover rounded-lg"
              />
            ) : (
              <Image
                src="/image/room_photo/postThumbnail.svg"
                alt={`게시물  이미지 없음`}
                width={150}
                height={150}
                className="mt-5 sm:mt-0 max-[450px]:w-full max-[640px]:max-h-[150px] object-cover rounded-lg"
              />
            )}
          </p>
        </section>
        <section className="flex gap-4 text-size-sm md:text-size-md sm:mr-3 text-gray-400">
          <p>조회수 &nbsp; {post.views}</p>
          <p className="flex gap-3">
            <Image
              alt="댓글수"
              width="25"
              height="25"
              src="/image/community_icon/chatIcon.svg"
              className="opacity-70"
            />
            {post.repliesCount}
          </p>
        </section>
      </Link>
    </section>
  );
}
