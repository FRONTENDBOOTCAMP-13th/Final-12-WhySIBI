'use server';

export async function createCartAction(
  _: { status?: boolean; error: string },
  formData: FormData,
) {
  const size = formData.get('size')?.toString();
  const color = formData.get('color')?.toString();
  const quantity = formData.get('quantity')?.toString();
  const id = formData.get('id')?.toString();
  const token = formData.get('token')?.toString();

  console.log(size, color, quantity);

  //예외처리
  if (!quantity || !id || !token) {
    return {
      status: false,
      error: '로그인이 필요합니다.',
    };
  }

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/carts/`, {
      method: 'POST',
      body: JSON.stringify({
        product_id: id,
        quantity: quantity,
        size: size,
        color: color,
      }),
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        'Client-Id': 'febc13-final12-emjf',
      },
    });
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return {
      status: true,
      error: '',
    };
  } catch (err) {
    return {
      status: false,
      error: `장바구니담기에 실패했습니다. : ${err}`,
    };
  }
}
