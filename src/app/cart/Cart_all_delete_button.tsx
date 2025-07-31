'use client';

import { deleteAllCartAction } from '@/data/actions/delete_all_cart_action';
import useCartRefreshStore from '@/zustand/useCartRefreshStore';
import useUserStore from '@/zustand/useUserStore';
// import { useActionState, useEffect } from 'react';

export default function CartAllDeleteButton({
  checkedItems,
}: {
  checkedItems: number[];
}) {
  const { user } = useUserStore();
  const token = user?.token?.accessToken;

  const { triggerRefresh } = useCartRefreshStore();
  // 서버액션
  // const initialState: { status?: boolean; error: string } = {
  //   // status: false,
  //   error: '',
  // };

  // const [state, formAction, isPending] = useActionState(
  //   deleteAllCartAction,
  //   initialState,
  // );

  // useEffect(() => {
  //   if (state && state.status === false) {
  //     alert(state.error);
  //   } else if (state && state.status === true) {
  //     alert('성공적으로 삭제되었습니다!');
  //   }
  // }, [state]);

  //인풋 히든으로 숫자배열 넘기면 타입에러 나서 스트링 배열로 바꿔줌...빡치네
  // const stringItems = checkedItems.map(item => item.toString());
  async function handleDelete() {
    if (checkedItems.length === 0) {
      alert('삭제할 아이템을 선택해주세요');
    } else {
      await deleteAllCartAction(checkedItems, token);
      triggerRefresh();
    }
  }
  return (
    // <form action={formAction}>
    //   <input name="token" value={token} hidden readOnly />
    //   <input
    //     name="checkedItems"
    //     value={JSON.stringify(checkedItems)}
    //     // value={stringItems}
    //     hidden
    //     readOnly
    //   />
    //   <button
    //     className="border-2 rounded-3xl text-button-color w-24 h-9 font-bold"
    //     disabled={isPending}
    //   >
    //     선택삭제
    //   </button>
    // </form>

    <button
      onClick={handleDelete}
      className="border-2 rounded-3xl text-button-color w-24 h-9 font-bold"
    >
      선택삭제
    </button>
  );
}
