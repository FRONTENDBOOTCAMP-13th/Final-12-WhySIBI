'use client';
import TalkInfo from '@/components/talk_list/talk_info/talk_info';
import { Post } from '@/types';

export default function TalkList({ item, boardType }) {
  return (
    <>
      {item.map((post: Post, index: number) => (
        <TalkInfo
          key={post._id}
          post={post}
          index={index}
          boardType={boardType}
        />
      ))}
    </>
  );
}
