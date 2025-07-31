'use client';

import { createPurchaseAction } from '@/data/actions/create_purchase_action';
import { CartData } from '@/types/cart';
import useCartRefreshStore from '@/zustand/useCartRefreshStore';
import useUserStore from '@/zustand/useUserStore';
import { useActionState, useEffect } from 'react';

export default function CartPurchaseButton({
  price,
  cartData,
}: {
  price: number | undefined;
  cartData: CartData | null;
}) {
  const { user } = useUserStore();
  const token = user?.token?.accessToken;
  console.log('이게 카트데이터야', cartData);
  const { triggerRefresh } = useCartRefreshStore();
  // 구매 서버액션에 넘겨줄 상품 목록배열
  const products =
    cartData?.item.map(item => ({
      _id: item.product_id,
      quantity: item.quantity,
      color: item.color,
      size: item.size,
    })) || [];

  console.log('돼ㅆ나?', products);

  // 초기 상태 정의
  const initialState: { status?: boolean; error: string } = {
    // status: false,
    error: '',
  };
  const [state, formAction, isPending] = useActionState(
    createPurchaseAction,
    initialState,
  );

  useEffect(() => {
    if (state && state.status === false) {
      alert(state.error);
    } else if (state && state.status === true) {
      alert('주문이 완료되었습니다.');
      triggerRefresh();
    }
  }, [state, triggerRefresh]);
  return (
    <form action={formAction}>
      <input name="token" value={token || ''} hidden readOnly />
      <input
        name="purchaseList"
        value={JSON.stringify(products)}
        hidden
        readOnly
      />
      <button
        disabled={isPending}
        className={`box-border cursor-pointer bg-flame-250 w-full h-[48px] text-white border-2 border-flame-250 rounded-sm font-bold`}
      >
        총 {price?.toLocaleString()} 구매하기
      </button>
    </form>
  );
}
