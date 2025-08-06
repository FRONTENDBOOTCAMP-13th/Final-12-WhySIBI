import DeliveryState from '@/components/delivery_state/delivery_state';
import { getOrderInfo } from '@/data/actions/order';
import { cookies } from 'next/headers';

interface DeliveryStatePageProps {
  params: Promise<{
    id: string;
  }>;
}
export default async function DeliverState({ params }: DeliveryStatePageProps) {
  const { id } = await params;
  const token = (await cookies()).get('accessToken');
  // 서버에서 상품 정보 미리 가져오기
  const res = await getOrderInfo(id, token?.value as string);
  if (res.ok === 1) {
    return <DeliveryState productData={res.item} productID={id} />;
  }
}
