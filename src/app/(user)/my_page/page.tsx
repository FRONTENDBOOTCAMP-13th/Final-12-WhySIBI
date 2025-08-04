import OrderList from '@/components/order_list/order_list';
import { getOrderList } from '@/data/actions/order';
import { cookies } from 'next/headers';

export default async function MyPage() {
  const token = (await cookies()).get('accessToken');
  const res = await getOrderList(token?.value as string);
  return res.ok === 1 ? (
    <OrderList orderItem={res.item} />
  ) : (
    <div className="font-logo text-3xl">주문 목록이 없습니다</div>
  );
}
