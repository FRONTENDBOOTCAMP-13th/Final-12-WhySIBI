'use client';
import CommentItem from './CommentItem';
import { PostReply } from '@/types';

export default function CommentList({ replies }: { replies: PostReply[]; }) {

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
