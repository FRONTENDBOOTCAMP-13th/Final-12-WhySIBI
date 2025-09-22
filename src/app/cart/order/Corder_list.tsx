import { cookies } from 'next/headers';
import CorderItem from './Corder_item';

export default async function CorderList() {
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
    <ul className="border-1 px-5 pt-3 rounded-2xl">
      {cartList.item.map(item => {
        return <CorderItem key={item._id} {...item} />;
      })}
    </ul>
  );
}
