import getTimeAgo from '@/components/talk_list/time';
import { Post } from '@/types';
import Image from 'next/image';

interface PostCardItemProps {
  post: ExtendedPostProps;
  boardType: string;
  index: number;
}
interface ExtendedPostProps extends Post {
  extra?: {
    subject: string[];
  };
}
export default function TalkInfo({ post }: PostCardItemProps) {
  return (
    <section className="border-b-[1px] border-button-color-opaque-25 p-4">
      <p className="text-size-xs md:text-size-lg font-basic font-bold text-[#353535]">
        {post.extra?.subject?.[0]}
      </p>
      <section className="mb-6 mt-4">
        <p className="text-sm md:text-2xl font-basic font-bold">
          Q {post.title}
        </p>

        <p className="mt-7">{post.content}</p>
      </section>
      <section className="flex justify-between ">
        <div className="flex gap-5">
          <ul className="flex gap-4">
            <li>#테그</li>
            <li>#테그</li>
            <li>#테그</li>
            <li>#테그</li>
          </ul>
          <p>{getTimeAgo(post.createdAt)}</p>
        </div>
        <div className="flex gap-4">
          <p>조회수 &nbsp; {post.views}</p>
          <p className="flex gap-3">
            <Image
              alt="댓글수"
              width="25"
              height="25"
              src="/image/community_icon/chatIcon.svg"
            />{' '}
            {post.repliesCount}
          </p>
        </div>
      </section>
    </section>
  );
}
