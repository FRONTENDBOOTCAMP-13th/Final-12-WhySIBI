import SellerOrderList from '@/components/seller_order_list/seller_order_list';
import { getProductOrderList } from '@/data/actions/seller';
import { cookies } from 'next/headers';
import Image from 'next/image';

export default async function SellerOrder() {
  const token = (await cookies()).get('accessToken');
  const res = await getProductOrderList(token?.value as string);
  return res.ok === 1 ? (
    <SellerOrderList res={res.item} token={token?.value as string} />
  ) : (
    <div className="font-logo text-3xl">
      {' '}
      <section className="h-72 flex flex-col justify-center items-center gap-3">
        <h3 className="font-bold text-2xl">들어온 주문이이 없다냥</h3>
        <Image
          src="/image/category_icon/furniture.svg"
          alt="판매자 로그인이 필요하다냥"
          width="150"
          height="150"
          className="opacity-20 mt-5 mb-2.5"
          aria-hidden="true"
        />
      </section>
    </div>
  );
}
