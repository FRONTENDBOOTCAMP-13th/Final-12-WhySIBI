'use client';

import Link from 'next/link';
import Image from 'next/image';
import { getTimeAgo } from '@/utils/time';
import { readNotification } from '@/data/actions/notification';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import useNoticeStore from '@/zustand/useNoticeStore';

export default function NotificationItem({ n, sessionUserId }: { n: any; sessionUserId?: number; }) {
  const router = useRouter();
  const decreaseUnread = useNoticeStore((s) => s.decreaseUnread);

  const [isRead, setIsRead] = useState<boolean>(!!n.isRead);

  const handleRead = async () => {
    // Optimistic
    if (!isRead) {
      setIsRead(true);
      decreaseUnread();
    }

    const res = await readNotification(n._id);
    if (!res?.ok) {
      setIsRead(false);
      // decreaseUnread(-1) 같은 롤백 제거. 화면 동기화만.
      if (String(res.message || '').includes('/notifications/') && res.message.includes('/read')) {
        alert('이 알림은 단건 읽음 처리에 실패했습니다.\n상단의 "전체 읽음 처리" 버튼을 사용해 주세요.');
      } else {
        alert(`읽음 처리 실패: ${res.message || '알 수 없는 오류'}`);
      }
      router.refresh();
      return;
    }

    // 서버 데이터와 동기화
    router.refresh();
  };

  return (
    <li className="flex items-center gap-2">
      <Link
        href={`${n.extra.url}#reply-${n.extra.replyId}`}
        className="flex-1 flex sm:p-5 md:p-6 lg:p-7 rounded-lg items-center space-x-5 bg-gray-50 hover:bg-columbia-blue-100"
      >
        {/* 프로필 */}
        <div className="flex-shrink-0">
          <Image
            src={n.user?.image || '/image/community_icon/profile_sample.png'}
            alt={`${n.user?.name || '알 수 없음'} 프로필`}
            width={40}
            height={40}
            className="rounded-full object-cover"
          />
        </div>
        {/* 내용 */}
        <div className="flex-1 min-w-0">
          <p className="md:text-sm lg:text-md">
            <span className="font-semibold">{n.user?.name}</span> 님이{' '}
            <span className="font-semibold">{n.extra?.mentionName}</span> 님을 멘션하였습니다.
          </p>
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
}
