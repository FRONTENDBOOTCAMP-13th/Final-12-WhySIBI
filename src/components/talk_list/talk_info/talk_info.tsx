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
    <section className="border-b-[1px] border-button-color-opaque-25 p-4">
      <Link href={`/community/${boardType}/${post._id}`}>
        <p className="text-size-xs md:text-size-lg font-basic font-bold text-[#353535]">
          {post.extra?.subject?.[0]}
        </p>
        <section className="mb-6 mt-4">
          <p className="text-sm md:text-2xl font-basic font-bold">
            Q {post.title}
          </p>

          <p className="mt-7 flex justify-between">
            {post.content}
            {post?.image?.[0] ? (
              <Image
                src={`${post?.image?.[0]}`}
                alt={`${post._id}번째 게시물 첫번째 이미지`}
                width={150}
                height={150}
              />
            ) : (
              <Image
                src="/image/room_photo/postThumbnail.svg"
                alt={`게시물  이미지 없음`}
                width={150}
                height={150}
              />
            )}
          </p>
        </section>
        <section className="flex justify-between ">
          <div className="flex gap-5">
            <ul className="flex gap-4">
              <li className="font-bold font-basic">#테그</li>
              <li className="font-bold font-basic">#테그</li>
              <li className="font-bold font-basic">#테그</li>
              <li className="font-bold font-basic">#테그</li>
            </ul>
            <p className="text-size-xs md:text-size-md font-basic  text-gray-400">
              {getTimeAgo(post.createdAt)}
            </p>
          </div>
          <div className="flex gap-4">
            <p>조회수 &nbsp; {post.views}</p>
            <p className="flex gap-3">
              <Image
                alt="댓글수"
                width="25"
                height="25"
                src="/image/community_icon/chatIcon.svg"
              />
              {post.repliesCount}
            </p>
          </div>
        </section>
      </Link>
    </section>
  );
}
