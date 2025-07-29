'use client';

import { deleteCartAction } from '@/data/actions/delete_cart_action';
import useUserStore from '@/zustand/useUserStore';
import { useActionState, useEffect } from 'react';

export default function CartDeleteButton({ id }) {
  const { user } = useUserStore();
  const token = user?.token?.accessToken;

  // 서버액션
  const initialState: { status?: boolean; error: string } = {
    // status: false,
    error: '',
  };

  const [state, formAction, isPending] = useActionState(
    deleteCartAction,
    initialState,
  );

  useEffect(() => {
    if (state && state.status === false) {
      alert(state.error);
    } else if (state && state.status === true) {
      alert('성공적으로 삭제되었습니다!');
    }
  }, [state]);

  return (
    <form action={formAction}>
      <input name="id" value={id} hidden readOnly />
      <input name="token" value={token} hidden readOnly />
      <button
        disabled={isPending}
        className="border-2 rounded-3xl text-button-color w-24 h-9 font-bold"
      >
        삭제
      </button>
    </form>
  );
}
