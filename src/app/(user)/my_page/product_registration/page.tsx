import ProductRegistrationForm from '@/components/product_registration/product_registration';
import { cookies } from 'next/headers';

export default async function ProductRegistration() {
  const user_type = (await cookies()).get('type');
  return <ProductRegistrationForm userType={user_type?.value as string} />;
}
