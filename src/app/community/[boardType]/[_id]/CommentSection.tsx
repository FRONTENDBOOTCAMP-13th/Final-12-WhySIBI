'use client';
import { useEffect, useState } from 'react';
import { getReplies } from '@/data/functions/post';
import CommentNew from './CommentNew';
import CommentList from './CommentList';
import { PostReply } from '@/types';

export default function CommentSection({ _id }: { _id: number }) {
  const [replies, setReplies] = useState<PostReply[]>([]);

  const fetchReplies = async () => {
    const res = await getReplies(_id);
    if (res.ok) setReplies(res.item);
  };

  useEffect(() => {
    fetchReplies();
  }, [_id]);

  return (
    <>
      <CommentNew _id={_id} repliesCount={replies.length} onSuccess={fetchReplies} />
      <CommentList replies={replies} />
    </>
  );
}
