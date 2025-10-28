'use client';
import { patchDeliveryState } from '@/data/actions/seller';
import { useRouter } from 'next/navigation';
import { useActionState, useEffect } from 'react';
interface OrderModalProps {
  token: string | undefined;
  _id: string | undefined;
  name: string;
  userName: string;
  deliveryState: string;
  onClose: () => void;
}

export default function OrderModal({
  token,
  _id,
  name,
  userName,
  deliveryState,
  onClose,
}: OrderModalProps) {
  const [state, formAction] = useActionState(patchDeliveryState, null);
  const router = useRouter();
  useEffect(() => {
    if (state?.ok) {
      const navigateAndRefresh = async () => {
        alert('상품 등록이 완료되었습니다. 등록 리스트 페이지로 이동합니다.');
        await router.push('/my_page/seller_orderList'); // 이동 완료 기다림
        router.refresh(); // 새로고침
      };
      navigateAndRefresh();
      onClose();
    }
  }, [state, router]);
  return (
    <>
      <div
        id="modalContainer"
        className="fixed inset-0 bg-[rgba(0,0,0,0.3)] bg-opacity-50 flex items-center justify-center z-50"
      >
        <div
          id="modalContent"
          className="bg-white rounded-2xl border-2 p-6 mx-4 w-auto max-w-3xl"
          onClick={e => e.stopPropagation}
        >
          <div>
            <div className="flex justify-between mb-4">
              <p className="font-basic text-md font-bold">
                {userName}님이 주문하신 &nbsp;
                {name} 상품의&nbsp;배송 상태 수정
              </p>
              <button type="button" onClick={onClose}>
                X
              </button>
            </div>
            <form action={formAction}>
              <input type="hidden" name="_id" id="productID" value={_id} />
              <input type="hidden" name="token" id="token" value={token} />
              <div className="flex gap-4">
                <div>
                  <label htmlFor="OS010">상품 준비중</label>
                  <input
                    type="radio"
                    name="DeliveryState"
                    id="OS010"
                    value="OS010"
                    defaultChecked={deliveryState === 'OS010'} // 추가
                  />
                </div>
                <div>
                  <label htmlFor="OS020">배송 준비중</label>
                  <input
                    type="radio"
                    name="DeliveryState"
                    id="OS020"
                    value="OS020"
                    defaultChecked={deliveryState === 'OS020'} // 추가
                  />
                </div>
                <div>
                  <label htmlFor="OS030">배송중</label>
                  <input
                    type="radio"
                    name="DeliveryState"
                    id="OS030"
                    value="OS030"
                    defaultChecked={deliveryState === 'OS030'} // 추가
                  />
                </div>
                <div>
                  <label htmlFor="OS035">배송 완료</label>
                  <input
                    type="radio"
                    name="DeliveryState"
                    id="OS035"
                    value="OS035"
                    defaultChecked={deliveryState === 'OS035'} // 추가
                  />
                </div>
              </div>
              <button
                type="submit"
                className="block nahonsan-btn-3d-sky border-button-color rounded-radius-full mt-16 py-4 px-8 font-basic tracking-paragraph-default font-bold text-size-md"
              >
                수정 완료
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
