'use client';

import { createCartAction } from '@/data/actions/create_cart_action';
import { ProductButtonProps } from '@/types/shopping_detail';
import useUserStore from '@/zustand/useUserStore';
import { useActionState, useEffect } from 'react';

export default function ProductCartButton({ option, id }: ProductButtonProps) {
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

  useEffect(() => {
    if (state && state.status === false) {
      alert(state.error);
    } else if (state && state.status === true) {
      alert('성공적으로 장바구니에 담겼습니다!');
    }
  }, [state]);
  return (
    <form action={formAction}>
      <input name="size" value={option.size} hidden readOnly />
      <input name="color" value={option.color} hidden readOnly />
      <input name="quantity" value={option.quantity} hidden readOnly />
      <input name="id" value={id} hidden readOnly />
      <input name="token" value={token} hidden readOnly />
      <button
        disabled={isPending}
        className={`box-border cursor-pointer bg-white w-[196px] h-[48px] text-flame-250 border-2 border-flame-250 rounded-sm font-bold`}
      >
        장바구니
      </button>
    </form>
  );
}
