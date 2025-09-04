import { cookies } from 'next/headers';
import { getNotifications, readAllNotifications } from '@/data/actions/notification';
import NotificationList from './NotificationList';
import NotificationEmpty from './NotificationEmpty';
import useNoticeStore from '@/zustand/useNoticeStore';

export default async function NotificationPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get('accessToken')?.value || '';
  const res = await getNotifications(token, 1, 10);

  if (!res.ok) {
    return <div>알림을 불러오지 못했습니다: {res.message}</div>;
  }

  const items = res.item || [];

  return (
    <div className="max-w-[1280px] mx-auto my-0 flex px-3 justify-center">
      <section className="bg-white md:min-w-[640px] lg:min-w-[1024px] xl:min-w-[1280px] pb-24">
        <div className="max-w-[1280px] mx-auto pt-15 pb-6 flex justify-between">
          <h2 className="text-3xl font-bold mb-2">알림 🔔</h2>
          {res.item?.length > 0 && (
            <form action={async () => { 'use server'; await readAllNotifications(token); useNoticeStore.getState().setUnreadCount(0); }}>
              <button type="submit" className="border px-3 py-2 bg-gray-100 rounded text-sm hover:bg-gray-200">
                전체 읽음 처리
              </button>
            </form>
          )}
        </div>

        {!res.item || res.item.length === 0 ? (
          <NotificationEmpty />
        ) : (
          <NotificationList items={res.item} token={token} />
        )}
      </section>
    </div>
  );
}
