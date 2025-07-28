import DeliveryState from '@/components/delivery_state/delivery_state';
import { getProductInfo } from '@/data/actions/products';

interface DeliveryStatePageProps {
  params: Promise<{
    productID: string;
  }>;
}
export default async function DeliverState({ params }: DeliveryStatePageProps) {
  const { productID } = await params;
  // 서버에서 상품 정보 미리 가져오기
  const res = await getProductInfo(productID);
  if (res.ok === 1) {
    return <DeliveryState productData={res.item} productID={productID} />;
  }
}
