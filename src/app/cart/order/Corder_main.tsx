import OrderInfo from '@/app/order/Order_info';
import CorderList from './Corder_list';
import CorderReceipt from './Corder_receipt';

export default async function CorderMain() {
  return (
    <section className="max-w-[1280px] mx-auto w-full flex justify-center gap-5">
      <div className="w-3/5 flex flex-col gap-4">
        <OrderInfo />
        <CorderList />
      </div>
      <aside className="w-2/5">
        <CorderReceipt />
      </aside>
    </section>
  );
}
