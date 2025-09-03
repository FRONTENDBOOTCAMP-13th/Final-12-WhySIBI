import { getNotifications, readNotification, readAllNotifications } from '@/data/actions/notification';
import { cookies } from 'next/headers';

export default async function Notification() {
  const cookieStore = await cookies();
  const token = cookieStore.get('accessToken')?.value || '';
  const res = await getNotifications(token, 1, 10);

  if (!res.ok) {
    return <div>알림을 불러오지 못했습니다: {res.message}</div>;
  }

  if (!res.item || res.item.length === 0) {
    // ✅ 알림 없을 때
    return (
      <div className="flex flex-col items-center justify-center h-[300px] text-gray-500">
        <p className="text-lg font-semibold">알림이 없습니다</p>
        <p className="text-sm mt-2">새로운 활동이 생기면 이곳에서 확인할 수 있어요.</p>
      </div>
    );
  }
  
  return (
    <div className="max-w-[1280px] mx-auto my-0 flex px-3 justify-center ">
      <section className="bg-white md:min-w-[640px] lg:min-w-[1024px] xl:min-w-[1280px] pb-24">
        <div className="max-w-[1280px] mx-auto pt-15 pb-6">
          <h2 className="text-3xl font-bold mb-2">알림 🔔</h2>
        </div>

        <button
          className="border p-2 bg-gray-100"
          formAction={async () => {
            'use server';
            await readAllNotifications(token);
          }}
        >
          전체 읽음 처리
        </button>

      <ul className="mt-4 space-y-2">
        {res.item.map((n) => (
          <li key={n._id} className="border p-2 flex justify-between items-center">
            <div>
              <p>{n.content}</p>
              <span className="text-sm text-gray-500">{n.createdAt}</span>
            </div>
            {!n.isRead && (
              <form action={async () => {
                'use server';
                await readNotification(n._id, token);
              }}>
                <button className="text-blue-600">읽음</button>
              </form>
            )}
          </li>
        ))}
      </ul>
        
      </section>
    </div>
  );
}
