'use client';

import { createEachPurchaseAction } from '@/data/actions/create_each_purchase_action';
import { ProductButtonProps } from '@/types/shopping_detail';
import useUserStore from '@/zustand/useUserStore';
import { useRouter } from 'next/navigation';
import { useActionState, useCallback, useEffect } from 'react';
import toast from 'react-hot-toast';

export default function ProductPurchaseButton({
  option,
  id,
}: ProductButtonProps) {
  const initialState: { status?: boolean; error: string } = {
    // status: false,
    error: '',
  };

  const [state, formAction, isPending] = useActionState(
    createEachPurchaseAction,
    initialState,
  );

  const product = {
    _id: Number(id ?? '0'),
    quantity: option.quantity ?? 1,
    color: option.color ?? '',
    size: option.size ?? '',
  };

  const { user } = useUserStore();
  const token = user?.token?.accessToken || '';

  const router = useRouter();

  // 구매버튼 클릭시 토스트ui
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
                구매완료!
              </p>

              {/* 버튼 */}
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    toast.dismiss(t.id);
                    router.push('/my_page');
                  }}
                  className="
                    text-xs font-medium cursor-pointer border-b-1
                    text-cal-poly-green-200 border-b-cal-poly-green-200
                "
                >
                  구매목록 이동
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
    <form action={formAction}>
      <input name="product" value={JSON.stringify(product)} hidden readOnly />
      <input name="token" value={token} hidden readOnly />
      <button
        disabled={isPending}
        className={`box-border cursor-pointer bg-flame-250 w-[196px] h-[48px] text-white border-2 border-flame-250 rounded-sm font-bold`}
      >
        바로구매
      </button>
    </form>
  );
}
