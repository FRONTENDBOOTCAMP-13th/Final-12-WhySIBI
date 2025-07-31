'use client';

import { createEachPurchaseAction } from '@/data/actions/create_each_purchase_action';
import { ProductButtonProps } from '@/types/shopping_detail';
import useUserStore from '@/zustand/useUserStore';
import { useActionState, useEffect } from 'react';

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
    _id: Number(id),
    quantity: option.quantity,
    color: option.color,
    size: option.size,
  };

  const { user } = useUserStore();
  const token = user?.token?.accessToken;

  useEffect(() => {
    if (state && state.status === false) {
      alert(state.error);
    } else if (state && state.status === true) {
      alert('성공적으로 구매하였습니다!');
    }
  }, [state]);

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
