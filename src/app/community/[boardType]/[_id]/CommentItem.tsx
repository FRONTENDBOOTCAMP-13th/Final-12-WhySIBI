'use client';
import Image from 'next/image';
import { PostReply } from '@/types';
import { getTimeAgo } from '@/utils/time';
import CommentDeleteForm from './CommentDeleteForm';

interface CommentProps {
  reply: PostReply;
  onDeleteSuccess: () => void;
  onDelete: (replyId: number) => void;
  mentionUser: (name: string) => void;
}

export default function CommentItem({
  reply,
  onDeleteSuccess,
  onDelete,
  mentionUser,
}: CommentProps) {
  const profileImage = reply.user.image
    ? reply.user.image
    : '/image/community_icon/profile_sample.png';

  return (
    <div className="min-w-[15.625rem] max-w-[18.75rem] md:max-w-[37.5rem] md:min-w-2xl flex py-5 text-[14px] text-black gap-3 px-3">
      <div>
        <Image
          src={profileImage}
          alt={`${reply.user.name} 프로필 이미지`}
          width={34}
          height={34}
          className="h-[34px] object-cover rounded-full outline-1 outline-black"
        />
      </div>
      <div>
        <span
          className="font-bold leading-xl cursor-pointer hover:underline"
          onClick={() => mentionUser(reply.user.name)}
        >
          {reply.user.name}
        </span>
        <p className="mb-3 mt-1">
          {reply.content.split(/(@\S+)/g).map((part, idx) => {
            return part.startsWith('@') ? (
              <span key={idx} className="text-livealone-flame">
                {part}
              </span>
            ) : (
              <span key={idx}>{part}</span>
            );
          })}
        </p>
        <div className="flex items-center text-gray-400 text-[12px] space-x-2">
          <time dateTime={reply.createdAt}>{getTimeAgo(reply.createdAt)}</time>
          <CommentDeleteForm
            reply={reply}
            onSuccess={onDeleteSuccess}
            onDelete={onDelete}
          />
        </div>
      </div>
    </div>
  );
}
