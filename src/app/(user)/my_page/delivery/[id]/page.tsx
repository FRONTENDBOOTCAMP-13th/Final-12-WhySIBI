import DeliveryState from '@/components/delivery_state/delivery_state';
import { getProductInfo } from '@/data/actions/products';

interface DeliveryStatePageProps {
  params: Promise<{
    id: string;
  }>;
}
export default async function DeliverState({ params }: DeliveryStatePageProps) {
  const { id } = await params;
  // 서버에서 상품 정보 미리 가져오기
  const res = await getProductInfo(id);
  if (res.ok === 1) {
    return <DeliveryState productData={res.item} productID={id} />;
  }
}
