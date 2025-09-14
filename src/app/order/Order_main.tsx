import { Suspense } from 'react';
import OrderInfo from './Order_info';
import OrderItem from './Order_item';
import OrderReceipt from './Order_receipt';

export default function OrderMain() {
  return (
    <section className="max-w-[1280px] mx-auto w-full flex justify-center gap-5">
      <div className="w-3/5 flex flex-col gap-4">
        <OrderInfo />
        <ul className="border-1 px-5 pt-3 rounded-2xl">
          <Suspense fallback={<div>로딩중...</div>}>
            <OrderItem />
          </Suspense>
        </ul>
      </div>
      <aside className="w-2/5">
        <Suspense fallback={<div>로딩중...</div>}>
          <OrderReceipt />
        </Suspense>
      </aside>
    </section>
  );
}
