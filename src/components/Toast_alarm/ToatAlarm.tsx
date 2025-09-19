'use client';

import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { getToastablesOnce } from '@/data/actions/toast_alarm';
import toast from 'react-hot-toast';


function BellIcon({ size = 18, color = '#f59e0b' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      {/* 종 본체 */}
      <path
        d="M18 8a6 6 0 10-12 0v4c0 .8-.32 1.56-.88 2.12L4 16h16l-1.12-1.88A3 3 0 0118 12V8z"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* 딸랑이(방울) */}
      <path
        d="M10 19a2 2 0 004 0"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ToastAlarm() {
  const calledRef = useRef(false);
  const router = useRouter();

  useEffect(() => {
    if (calledRef.current) return;
    calledRef.current = true;

    if (typeof document !== 'undefined' && document.visibilityState !== 'visible') return;

    (async () => {
        const { toasts } = await getToastablesOnce();
        if (!Array.isArray(toasts) || toasts.length === 0) return;

        const count = toasts.length;
        const firstWriter = toasts[0]?.user?.name ?? '알 수 없음';

        console.log(`새 알림 요약: ${count}개의 알림이 있어요.`, toasts);

        toast.custom(
          (t) => {
          const goToNotification = () => {
            toast.dismiss(t.id);
            router.push('/notification');  // 알림 페이지로 이동
          };
          const onKey = (e: React.KeyboardEvent<HTMLDivElement>) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              goToNotification();
            }
          };

          return (
            <div
              role="button"
              tabIndex={0}
              aria-label={`${count}개의 알림이 있어요. 알림 페이지로 이동`}
              onClick={goToNotification}
              onKeyDown={onKey}
              className={`${
                t.visible
                  ? 'animate-in slide-in-from-bottom-full'
                  : 'animate-out slide-out-to-bottom-full'
              } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-gray-200 p-4
                 border-l-4 border-amber-400 cursor-pointer hover:bg-amber-50 duration-300`}
            >
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-amber-100">
                    <BellIcon />
                  </div>
                </div>

                <div className="ml-3 flex-1 flex items-center justify-between gap-4">
                  <p className="text-sm font-medium text-gray-900">
                    {count}개의 알림이 있어요.
                  </p>
                  <span className="text-xs text-gray-500">
                    {firstWriter}
                    {count > 1 && ` 외 ${count - 1}명`}
                  </span>
                </div>
              </div>
            </div>
          );
        },
          {
            id: 'notif-summary',
            duration: 5000,
            position: 'top-center',
          }
        );
    })();
  }, [router]);

  return null;
}