'use client';
import CommentItem from './CommentItem';
import { PostReply } from '@/types';

interface CommentListProps {
  replies: PostReply[];
  onDeleteSuccess: () => void;
  onDelete: (replyId: number) => void;
}

export default function CommentList({ replies, onDeleteSuccess, onDelete }: CommentListProps) {

  return (
    <div className="mt-5">
      {replies.map((reply) => (
        <CommentItem
          key={reply._id}
          reply={reply}
          onDeleteSuccess={onDeleteSuccess}
          onDelete={onDelete}
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
