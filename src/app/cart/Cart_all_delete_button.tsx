'use client';

import { deleteAllCartAction } from '@/data/actions/delete_all_cart_action';
import useCartRefreshStore from '@/zustand/useCartRefreshStore';
import useUserStore from '@/zustand/useUserStore';
import { useActionState, useEffect } from 'react';

export default function CartAllDeleteButton({
  checkedItems,
}: {
  checkedItems: number[];
}) {
  const { user } = useUserStore();
  const token = user?.token?.accessToken;

  const { triggerRefresh } = useCartRefreshStore();
  // 서버액션
  const initialState: { status?: boolean; error: string } = {
    // status: false,
    error: '',
  };

  const [state, formAction, isPending] = useActionState(
    deleteAllCartAction,
    initialState,
  );

  useEffect(() => {
    if (state && state.status === false) {
      alert(state.error);
    } else if (state && state.status === true) {
      triggerRefresh();
    }
  }, [state, triggerRefresh]);

  return (
    <form action={formAction}>
      <input name="token" value={token || ''} hidden readOnly />
      <input
        name="checkedItems"
        value={JSON.stringify(checkedItems || [])}
        // value={stringItems}
        hidden
        readOnly
      />
      <button
        className="border-2 rounded-3xl text-button-color w-24 h-9 font-bold"
        disabled={isPending}
      >
        선택삭제
      </button>
    </form>
  );
}
