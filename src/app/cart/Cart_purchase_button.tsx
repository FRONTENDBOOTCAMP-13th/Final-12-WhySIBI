'use client';

import { CartData } from '@/types/cart';
import useUserStore from '@/zustand/useUserStore';
import { useRouter } from 'next/navigation';

export default function CartPurchaseButton({
  price,
  cartData,
}: {
  price: number | undefined;
  cartData: CartData | null;
}) {
  const { user } = useUserStore();
  const token = user?.token?.accessToken;

  // 구매 서버액션에 넘겨줄 상품 목록배열
  const products =
    cartData?.item.map(item => ({
      _id: item.product_id,
      quantity: item.quantity,
      color: item.color,
      size: item.size,
    })) || [];

  const router = useRouter();

  return (
    <div
      onClick={() => {
        router.push('cart/order');
      }}
    >
      <input name="token" value={token || ''} hidden readOnly />
      <input
        name="purchaseList"
        value={JSON.stringify(products)}
        hidden
        readOnly
      />
      <button
        className={`box-border cursor-pointer bg-flame-250 w-full h-[48px] text-white border-2 border-flame-250 rounded-sm font-bold`}
      >
        총 {price?.toLocaleString()} 구매하기
      </button>
    </div>
  );
}
