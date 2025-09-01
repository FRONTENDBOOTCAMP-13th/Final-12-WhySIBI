'use client';
import { createEachPurchaseAction } from '@/data/actions/create_each_purchase_action';
import useUserStore from '@/zustand/useUserStore';
import { useActionState, useEffect } from 'react';

export default function OrderPurchaseButton({
  checkboxStates,
  productData,
}: {
  checkboxStates: {
    agreement: boolean;
    payment: boolean;
    learn: boolean;
  };
  productData: {
    _id: number;
    quantity: number;
    color?: string;
    size?: string;
  } | null;
}) {
  const allChecked =
    checkboxStates.agreement && checkboxStates.payment && checkboxStates.learn;

  const { user } = useUserStore();
  const token = user?.token?.accessToken || '';

  const initialState: { status?: boolean; error: string } = {
    // status: false,
    error: '',
  };

  const [state, formAction, isPending] = useActionState(
    createEachPurchaseAction,
    initialState,
  );

  useEffect(() => {
    if (state && !state.status) {
      alert(state.error);
    }
  }, [state]);

  return (
    <form action={formAction}>
      <input
        name="product"
        value={JSON.stringify(productData)}
        hidden
        readOnly
      />
      <input name="token" value={token} hidden readOnly />
      <button
        disabled={!allChecked || isPending}
        className={`box-border w-full h-[48px]  border-2 rounded-sm font-bold ${!allChecked ? 'bg-gray-150 text-gray-550 border-gray-150 cursor-not-allowed' : 'text-white bg-flame-250 border-flame-250 cursor-pointer'}`}
      >
        바로구매
      </button>
    </form>
  );
}
