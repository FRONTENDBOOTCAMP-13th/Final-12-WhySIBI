import { cookies } from 'next/headers';
import CorderCheck from './Corder_check';

export default async function CorderReceipt() {
  const token = (await cookies()).get('accessToken');

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/carts`, {
    headers: {
      Authorization: `Bearer ${token?.value}`,
      'Content-Type': 'application/json',
      'Client-Id': 'febc13-final12-emjf',
    },
  });
  if (!response.ok) {
    <div>오류가 발생했습니다.</div>;
  }
  const cartList = await response.json();
  console.log('데이터 확인', cartList);
  return (
    <section className="border-2 px-5 py-6 ">
      <h3 className="font-semibold text-xl border-b-1 border-gray-150 pb-6">
        결제 금액
      </h3>
      <table className="border-b-1 border-gray-150 w-full">
        <caption className="sr-only">주문하려는 상품의 상세금액내역</caption>
        <tbody>
          <tr>
            <th className="font-medium pt-5 pb-2">총 상품 금액</th>
            <td className="pt-5 pb-2">
              {cartList.cost.products.toLocaleString()} 원
            </td>
          </tr>
          <tr>
            <th className="font-medium pb-2">배송비</th>
            <td className="pb-2">{cartList.cost.shippingFees} 원</td>
          </tr>
          <tr>
            <th className="font-medium pb-2">할인금액</th>
            <td className="pb-2">-{cartList.cost.discount.products} 원</td>
          </tr>
          <tr>
            <th className="pb-5 font-bold">총 결제 금액</th>
            <td className="pb-5 font-bold">
              {cartList.cost.total.toLocaleString()} 원
            </td>
          </tr>
        </tbody>
      </table>
      <CorderCheck cartList={cartList.item} cost={cartList.cost} />
    </section>
  );
}
