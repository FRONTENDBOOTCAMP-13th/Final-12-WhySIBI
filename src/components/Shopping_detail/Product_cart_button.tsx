'use client';

import { createCartAction } from '@/data/actions/create_cart_action';
import { ProductButtonProps } from '@/types/shopping_detail';
import useUserStore from '@/zustand/useUserStore';
import { useRouter } from 'next/navigation';
import { useActionState, useCallback, useEffect } from 'react';
import toast from 'react-hot-toast';

export default function ProductCartButton({ option, id }: ProductButtonProps) {
  const router = useRouter();

  // 서버액션
  const initialState: { status?: boolean; error: string } = {
    // status: false,
    error: '',
  };

  const [state, formAction, isPending] = useActionState(
    createCartAction,
    initialState,
  );

  const { user } = useUserStore();
  const token = user?.token?.accessToken;

  // 장바구니 클릭시 토스트ui
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
                장바구니에 상품을 담았습니다!
              </p>

              {/* 버튼 */}
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    toast.dismiss(t.id);
                    router.push('/cart');
                  }}
                  className="
                    text-xs font-medium cursor-pointer border-b-1
                    text-cal-poly-green-200 border-b-cal-poly-green-200
                "
                >
                  장바구니 이동
                </button>
              </div>
            </div>
          </div>
        </div>
      ),
      {
        duration: 5000,
        position: 'bottom-center',
      },
    );
  }, [router]);

  useEffect(() => {
    if (state && state.status === false) {
      toast.error(state.error);
    } else if (state && state.status === true) {
      showSuccessToast();
    }
  }, [state, showSuccessToast]);

  return (
    <>
      <form action={formAction}>
        <input name="size" value={option.size ?? ''} hidden readOnly />
        <input name="color" value={option.color ?? ''} hidden readOnly />
        <input name="quantity" value={option.quantity ?? ''} hidden readOnly />
        <input name="id" value={id ?? ''} hidden readOnly />
        <input name="token" value={token ?? ''} hidden readOnly />
        <button
          type="submit"
          disabled={isPending}
          className={`box-border cursor-pointer bg-white w-[196px] h-[48px] text-flame-250 border-2 border-flame-250 rounded-sm font-bold`}
        >
          장바구니
        </button>
      </form>
    </>
  );
}
