'use client';
import { useEffect, useState } from 'react';
import { getReplies } from '@/data/functions/post';
import CommentItem from './CommentItem';
import { PostReply } from '@/types';

export default function CommentList({ _id }: { _id: number }) {
  const [replies, setReplies] = useState<PostReply[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReplies = async () => {
      const res = await getReplies(_id);
      if (res.ok) {
        setReplies(res.item);
      } else {
        setError(res.message);
      }
    };

    fetchReplies();
  }, [_id]);

  if (error) return <p>{error}</p>;

  return (
    <div className="mt-5">
      {replies.map((reply) => (
        <CommentItem
          key={reply._id}
          reply={reply}
          mentionUser={(name) => {
            const input = document.getElementById('comment-input') as HTMLInputElement;
            if (input) {
              input.focus();
              const event = new CustomEvent('mention-user', { detail: name });
              window.dispatchEvent(event);
            }
          }}
        />
      ))}
    </div>
  );
}
