'use client';
import CommentItem from './CommentItem';
import { PostReply } from '@/types';
import { useEffect } from 'react';

interface CommentListProps {
  replies: PostReply[];
  onDeleteSuccess: () => void;
  onDelete: (replyId: number) => void;
}

export default function CommentList({ replies, onDeleteSuccess, onDelete }: CommentListProps) {
  
  useEffect(() => {
    if (window.location.hash.startsWith('#reply-')) {
      const targetId = window.location.hash.replace('#', '');
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        el.classList.add('bg-columbia-blue-100', 'transition-colors', 'duration-1000');
        setTimeout(() => {
          el.classList.remove('bg-columbia-blue-100');
        }, 2000);
      }
    }
  }, []);

  return (
    <ul className="mt-5">
      {replies.map((reply) => (
        <li id={`reply-${reply._id}`} key={reply._id} className='list-none rounded-2xl pb-2'>
          <CommentItem
            key={reply._id}
            reply={reply}
            onDeleteSuccess={onDeleteSuccess}
            onDelete={onDelete}
            mentionUser={(_id, name) => {
              const input = document.getElementById('comment-input') as HTMLInputElement;
              if (input) {
                input.focus();
                const event = new CustomEvent('mention-user', { detail: { _id, name }, });
                window.dispatchEvent(event);
              }
            }}
          />
        </li>
      ))}
    </ul>
  );
}
