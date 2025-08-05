'use client';

import { deleteCartAction } from '@/data/actions/delete_cart_action';
import useCartRefreshStore from '@/zustand/useCartRefreshStore';
import useUserStore from '@/zustand/useUserStore';
import { useActionState, useCallback, useEffect } from 'react';
import toast from 'react-hot-toast';

export default function CartDeleteButton({ id }: { id: number }) {
  const { user } = useUserStore();
  const token = user?.token?.accessToken;

  const { triggerRefresh } = useCartRefreshStore();

  // 서버액션
  const initialState: { status?: boolean; error: string } = {
    // status: false,
    error: '',
  };

  const [state, formAction, isPending] = useActionState(
    deleteCartAction,
    initialState,
  );

  const showSuccessToast = useCallback(() => {
    toast.custom(
      t => (
        <div
          className={`
          ${t.visible ? 'animate-in slide-in-from-bottom-full' : 'animate-out slide-out-to-bottom-full'}
          max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-gray-200 p-4
        `}
        >
          <div className="flex ">
            {/* 체크 아이콘 */}
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-8 w-8 rounded-full bg-cal-poly-green-100">
                <svg
                  className="h-5 w-5 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            </div>

            <div className="ml-3 flex-1 flex items-center justify-between">
              <p className="text-sm font-medium text-gray-900 mb-1">
                성공적으로 삭제되었습니다.
              </p>
            </div>
          </div>
        </div>
      ),
      {
        duration: 5000,
        position: 'bottom-center',
      },
    );
  }, []);
  useEffect(() => {
    if (state && state.status === false) {
      alert(state.error);
    } else if (state && state.status === true) {
      showSuccessToast();
      triggerRefresh();
    }
  }, [state, triggerRefresh, showSuccessToast]);

  return (
    <form action={formAction}>
      <input name="id" value={id} hidden readOnly />
      <input name="token" value={token} hidden readOnly />
      <button
        disabled={isPending}
        className="border-2 rounded-3xl text-button-color w-24 h-9 font-bold cursor-pointer hover:bg-black hover:text-white"
      >
        삭제
      </button>
    </form>
  );
}
