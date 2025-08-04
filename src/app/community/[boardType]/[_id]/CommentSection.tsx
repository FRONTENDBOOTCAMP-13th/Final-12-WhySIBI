'use client';
import { useState } from 'react';
import { getReplies } from '@/data/functions/post';
import CommentNew from './CommentNew';
import CommentList from './CommentList';
import { PostReply } from '@/types';

interface CommentSectionProps {
  _id: number;
  initialReplies: PostReply[];
}

export default function CommentSection({ _id, initialReplies }: CommentSectionProps) {
  const [replies, setReplies] = useState<PostReply[]>(initialReplies);

  // 댓글 추가
  const addReply = (reply: PostReply) => {
    setReplies((prev) => [...prev, reply]);
  };

  // 댓글 삭제
  const removeReply = (replyId: number) => {
    setReplies((prev) => prev.filter((reply) => reply._id !== replyId));
  };

    // 서버 재동기화 (fetchReplies)
  const fetchReplies = async () => {
    const res = await getReplies(_id);
    if (res.ok) setReplies(res.item);
  };

  return (
    <>
      <CommentNew _id={_id} repliesCount={replies.length} onAdd={addReply} />
      <CommentList replies={replies} onDeleteSuccess={fetchReplies} onDelete={removeReply} />
    </>
  );
}
