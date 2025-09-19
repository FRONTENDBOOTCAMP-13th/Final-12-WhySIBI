'use client';
import { getTimeAgo } from '@/utils/time';
import Link from 'next/link';
import Image from 'next/image';
import type { NotificationItem } from '@/data/actions/toast_alarm';

export default function NotificationItem({ n }: { n: NotificationItem }) {

  const isMention = n.type === 'mention';
  const isReply   = n.type === 'reply';

  return (
    <li className="flex items-center gap-2">
      <Link
        href={`${n.extra?.url ?? ''}#reply-${n.extra?.replyId ?? ''}`}
        className="flex-1 flex sm:p-5 md:p-6 lg:p-7 rounded-lg items-center space-x-5 bg-gray-50 hover:bg-columbia-blue-100 visited:text-gray-400"
      >
        {/* 프로필 */}
        <div className="flex-shrink-0 relative w-10 h-10">
          <Image
            src={n.user?.image || '/image/community_icon/profile_sample.png'}
            alt={`${n.user?.name || '알 수 없음'} 프로필`}
            fill
            sizes="40px"
            className="rounded-full object-cover bg-white"
          />
        </div>
        {/* 내용 */}
        <div className="flex-1 min-w-0">
          {isMention && (
            <p className="md:text-sm lg:text-md">
              <span className="font-semibold">{n.user?.name}</span> 님이{' '}
              <span className="font-semibold">{n.extra?.mentionName}</span> 님을 멘션하였습니다.
            </p>
          )}
          {isReply && (
            <p className="md:text-sm lg:text-md">
              <span className="font-semibold">{n.user?.name}</span> 님이 내 게시글에 댓글을 남겼습니다.
            </p>
          )}
          {!isMention && !isReply && (
            <p className="md:text-sm lg:text-md">
              <span className="font-semibold">{n.user?.name}</span> 님이 알림입니다.
            </p>
          )}
          <p className="text-sm text-gray-500 mt-1">{n.content}</p>
        </div>
        <time className="text-xs text-gray-400">{getTimeAgo(n.createdAt)}</time>
      </Link>

      {/* {!isRead && (
        <button
          type="button"
          onClick={handleRead}
          className="text-gray-600 cursor-pointer ml-3 hover:text-gray-400 disabled:opacity-50"
        >
          읽음
        </button>
      )} */}
    </li>
  );
  };
