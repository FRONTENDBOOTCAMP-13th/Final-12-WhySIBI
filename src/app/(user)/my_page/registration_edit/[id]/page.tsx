import ProductRegistrationEditForm from '@/components/product_registration_edit/product_registration_edit';
import { getProductRegistrationInfo } from '@/data/actions/seller';
import { cookies } from 'next/headers';
interface DeliveryStatePageProps {
  params: Promise<{
    id: string;
  }>;
}
export default async function ProductRegistrationEdit({
  params,
}: DeliveryStatePageProps) {
  const { id } = await params;
  const token = (await cookies()).get('accessToken');
  const res = await getProductRegistrationInfo(
    Number(id),
    token?.value as string,
  );
  if (res.ok === 1) {
    return <ProductRegistrationEditForm res={res.item} />;
  }
}
