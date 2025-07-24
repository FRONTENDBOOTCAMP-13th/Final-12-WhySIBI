import DeliveryState from '@/components/delivery_state/delivery_state';
import { getProductInfo } from '@/data/actions/products.fetch';

interface DeliveryStatePageProps {
  params: {
    id: string;
  };
}

export default async function DeliverState({ params }: DeliveryStatePageProps) {
  const productID = params.id;
  // 서버에서 상품 정보 미리 가져오기
  const res = await getProductInfo(productID);
  return <DeliveryState productData={res.item} productID={productID} />;
}
