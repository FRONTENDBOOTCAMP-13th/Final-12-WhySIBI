import { cookies } from 'next/headers';
import { getNotifications, readAllNotifications } from '@/data/actions/notification';
import NotificationList from './NotificationList';
import NotificationEmpty from './NotificationEmpty';
import useNoticeStore from '@/zustand/useNoticeStore';

// 서버에서만 쓰는 간단한 JWT 디코더
// function decodeJwt(token?: string) {
//   try {
//     if (!token) return null;
//     const [, payload] = token.split('.');
//     // base64url → Buffer 디코드 (Node 18+는 'base64url' 지원)
//     const json = Buffer.from(payload, 'base64url').toString();
//     return JSON.parse(json);
//   } catch {
//     return null;
//   }
// }

export default async function NotificationPage() {

    const cookieStore = await cookies();
    const token = cookieStore.get('accessToken')?.value || '';

    // (참고) 계정 전환/읽음 직후 최신 유지 → no-store 권장 (서버액션이 이미 정상이라면 유지해도 되고요)
    const res = await getNotifications(1, 20);

    if (!res.ok) {
      return <div>알림을 불러오지 못했습니다: {res.message}</div>;
    }

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
            <NotificationList items={res.item} />
          )}
        </section>
      </div>
    );
}
