'use server';

export async function deleteAllCartAction(
  checkedItems: number[],
  token: string | undefined,
) {
  // const stringItems = formData.get('checkedItems'); //배열 데이터를 넘겨받을때는 getAll을 사용
  // const stringItems = formData.get('checkedItems'); //배열 데이터를 넘겨받을때는 getAll을 사용
  // const token = formData.get('token')?.toString();

  // const checkedItems: number[] = stringItems?.map(item => Number(item));
  // console.log('ㅎㅇㅎㅇ4', checkedItems);
  // if (!checkedItems) {
  console.log('체크 아이템즈', checkedItems);
  if (!checkedItems) {
    // return {
    //   status: false,
    //   error: '삭제할 상품이 없습니다.',
    // };
  }
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/carts/`, {
      method: 'DELETE',
      body: JSON.stringify({
        carts: checkedItems,
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
    //재검증
    // return {
    //   status: true,
    //   error: '',
    // };
  } catch (err) {
    // return {
    //   status: false,
    //   error: `상품 삭제에 실패했습니다: ${err}`,
    // };
    console.error(err);
  }
}
