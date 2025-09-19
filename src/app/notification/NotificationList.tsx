'use client';

import { useEffect } from 'react';
import NotificationItem from './NotificationItem';
import useNoticeStore from '@/zustand/useNoticeStore';
import type { NotificationItem as NotificationItemType } from '@/data/actions/toast_alarm';

export default function NotificationList({ items }: { items: NotificationItemType[] }) {
  const setUnreadCount = useNoticeStore((state) => state.setUnreadCount);

  // 페이지 들어올 때 unreadCount 최신화
  useEffect(() => {
    if (items) {
      const unread = items.filter((n) => !n.isRead).length;
      setUnreadCount(unread);
    }
  }, [items, setUnreadCount]);

  return (
    <ul className="mt-4 space-y-5">
      {items.map((n) => (
        <NotificationItem
          key={n._id}
          n={n}
        />
      ))}
    </ul>
  );
}
