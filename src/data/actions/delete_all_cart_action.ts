'use server';

export async function deleteAllCartAction(
  _: { status?: boolean; error: string },
  formData: FormData,
) {
  const stringItems = formData.get('checkedItems'); //배열 데이터를 넘겨받을때는 getAll을 사용
  const token = formData.get('token')?.toString();

  //조건식 이렇게 하면 parse에 타입에러 없어짐
  if (!stringItems || typeof stringItems !== 'string') {
    return {
      status: false,
      error: '삭제할 상품이 없습니다.',
    };
  }
  const deleteList = JSON.parse(stringItems);
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/carts/`, {
      method: 'DELETE',
      body: JSON.stringify({
        carts: deleteList,
      }),
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        'client-Id': 'febc13-final12-emjf',
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
      error: `상품 삭제에 실패했습니다: ${err}`,
    };
  }
}
