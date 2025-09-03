'use client';
import { createEachPurchaseAction } from '@/data/actions/create_each_purchase_action';
import useUserStore from '@/zustand/useUserStore';
import { useActionState, useCallback, useEffect } from 'react';
import * as PortOne from '@portone/browser-sdk/v2';

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

  //결제 api호출
  const fetchPayment = useCallback(
    async function fetchPayment() {
      const response = await PortOne.requestPayment({
        storeId: `${process.env.NEXT_PUBLIC_PORTONE_STORE_ID}`,
        channelKey: `${process.env.NEXT_PUBLIC_PORTONE_CHANNEL_KEY}`,
        paymentId: `payment-${crypto.randomUUID()}`,
        orderName: '상품임 아무튼',
        totalAmount: 1000,
        currency: 'CURRENCY_KRW',
        payMethod: 'EASY_PAY',
      });

      if (response?.code !== undefined) {
        return alert(response.message);
      }

      const notified = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/orders`,
        {
          method: 'POST',
          body: JSON.stringify({ products: [productData] }),
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
            'Client-Id': 'febc13-final12-emjf',
          },
        },
      );

      console.log(response);
      console.log('노티파이드가뭔데', notified);
      if (notified.ok) {
        // true일때 결제가 완료 되었다 처리 해주면 될듯
      }
    },
    [productData, token],
  );

  useEffect(() => {
    if (state && state.status === false) {
      alert(state.error);
    } else if (state && state.status === true) {
      alert('success!');
      // showSuccessToast();
      // triggerRefresh();
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
        type="button"
        onClick={fetchPayment}
        className={`box-border w-full h-[48px]  border-2 rounded-sm font-bold ${!allChecked ? 'bg-gray-150 text-gray-550 border-gray-150 cursor-not-allowed' : 'text-white bg-flame-250 border-flame-250 cursor-pointer'}`}
      >
        바로구매
      </button>
    </form>
  );
}
