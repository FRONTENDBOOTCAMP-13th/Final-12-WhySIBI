//fetch로직
export async function Product_Detail(pageNum: string, token?: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/products/${pageNum}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        'Client-Id': 'febc13-final12-emjf',
      },
    },
  );
  if (!response.ok) {
    <div>오류가 발생했습니다.</div>;
  }
  const detail = await response.json();
  // console.log('데이터 확인', detail.item);
  return detail.item;
}
