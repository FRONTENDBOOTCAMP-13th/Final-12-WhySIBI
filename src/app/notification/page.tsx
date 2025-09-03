import Image from 'next/image';
import Link from 'next/link';
import { getNotifications, readNotification, readAllNotifications } from '@/data/actions/notification';
import { cookies } from 'next/headers';
import { getTimeAgo } from '@/utils/time';

export default async function Notification() {
  const cookieStore = await cookies();
  const token = cookieStore.get('accessToken')?.value || '';

  const res = await getNotifications(token, 1, 10);

  if (!res.ok) {
    return <div>알림을 불러오지 못했습니다: {res.message}</div>;
  }

  if (!res.item || res.item.length === 0) {
    // 알림 없을 때
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
          <form 
            action={async () => {
              'use server';
              await readAllNotifications(token);
            }}>
            <button
              type="submit"
              className="border px-3 py-2 bg-gray-100 rounded hover:bg-gray-200"
            >
              전체 읽음 처리
            </button>
          </form>
        </div>

        <ul className="mt-4 space-y-2">
          {res.item.map((n: any) => (
              <li
                key={n._id}
                className={`flex items-center gap-2`}
              >
                <Link href={`${n.extra.url}#reply-${n.extra.replyId}`} className={`flex-1 flex border p-5 rounded-lg items-center space-x-2 hover:bg-gray-50`}>
                  {/* 발송자 프로필 */}
                  <div className="flex-shrink-0">
                    <Image
                      src={n.user?.image || '/image/community_icon/profile_sample.png'}
                      alt={`${n.user?.name || '알 수 없음'} 프로필`}
                      width={40}
                      height={40}
                      className="rounded-full object-cover"
                    />
                  </div>
                  {/* 알림 내용 */}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm">
                      <span className="font-semibold">{n.user?.name}</span> 님이{' '}
                      <span className="font-semibold">{n.extra?.mentionName}</span> 님을 멘션하였습니다.
                    </p>        
                      <p className="text-sm text-gray-500 mt-1">{n.content}</p>
                  </div>

                  <time className="text-xs text-gray-400">
                    {getTimeAgo(n.createdAt)}
                  </time>
                </Link>
                {/* 개별 읽음 처리: form으로 감싸기 */}
                {!n.isRead && (
                  <form
                    action={async () => {
                      'use server';
                      await readNotification(n._id, token);
                    }}
                    className={`w-fit`}
                  >
                    <button type="submit" className="text-blue-600 cursor-pointer hover:underline">
                      읽음
                    </button>
                  </form>
                )}
              </li>
          ))}
        </ul>
      </section>
    </div>
  );
}