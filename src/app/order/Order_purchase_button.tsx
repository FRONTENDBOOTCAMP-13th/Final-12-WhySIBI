'use client';
// import { createEachPurchaseAction } from '@/data/actions/create_each_purchase_action';
import useUserStore from '@/zustand/useUserStore';
import { useCallback } from 'react';
import * as PortOne from '@portone/browser-sdk/v2';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

export default function OrderPurchaseButton({
  checkboxStates,
  productData,
  finalPayment,
  productName,
}: {
  checkboxStates: {
    agreement: boolean;
    payment: boolean;
    learn: boolean;
  };
  productData: {
    _id: number;
    quantity: number;
    color?: string;
    size?: string;
  } | null;
  finalPayment: number | undefined;
  productName: string | undefined;
}) {
  const allChecked =
    checkboxStates.agreement && checkboxStates.payment && checkboxStates.learn;

  const { user } = useUserStore();
  const token = user?.token?.accessToken || '';

  const router = useRouter();

  // 성공 토스트
  const SuccessToast = useCallback((message: string, alt: string) => {
    toast.custom(
      t => (
        <div
          className={`
          ${t.visible ? 'animate-in slide-in-from-bottom-full' : 'animate-out slide-out-to-bottom-full'}
          max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-gray-200 p-4 border-l-3 border-green-500
        `}
          role="alert"
          aria-live="assertive"
          aria-label={`${alt} 알림`}
        >
          <div className="flex ">
            {/* 체크 아이콘 */}
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-8 w-8 rounded-full bg-cal-poly-green-100">
                <svg
                  className="h-5 w-5 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            </div>

            <div className="ml-3 flex-1 flex items-center justify-between">
              <p className="text-sm font-medium text-gray-900 mb-1">
                {message}
              </p>

              {/* 버튼
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      toast.dismiss(t.id);
                      router.push('/my_page');
                    }}
                    className="
  //                   text-xs font-medium cursor-pointer border-b-1
  //                   text-cal-poly-green-200 border-b-cal-poly-green-200
  //               "
                  >
                    구매목록 이동
                  </button>
                </div> */}
            </div>
          </div>
        </div>
      ),
      {
        duration: 5000,
        position: 'top-center',
      },
    );
  }, []);

  // 에러 토스트
  const ErrorToast = useCallback((message: string, alt: string) => {
    toast.custom(
      t => (
        <div
          className={`
          ${t.visible ? 'animate-in slide-in-from-bottom-full' : 'animate-out slide-out-to-bottom-full'}
          max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-red-200 p-4 border-l-4 border-red-500
        `}
          role="alert"
          aria-live="assertive"
          aria-label={`${alt} 알림`}
        >
          <div className="flex items-center">
            {/* 에러 아이콘 */}
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-8 w-8 rounded-full bg-red-100">
                <svg
                  className="h-5 w-5 text-red-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
            </div>

            <div className="ml-3 flex-1">
              <p className="text-sm font-medium text-red-800 mb-1">{message}</p>
            </div>
          </div>
        </div>
      ),
      {
        duration: 5000,
        position: 'top-center',
      },
    );
  }, []);
  //결제 api호출
  const fetchPayment = useCallback(
    async function fetchPayment() {
      //필수값 검증
      if (!token) {
        ErrorToast('로그인이 필요합니다.', '로그인 필요');
        return;
      }
      if (!productName) {
        ErrorToast('결제할 상품명이 올바르지 않습니다.', '상품명 오류');
        return;
      }
      if (!finalPayment) {
        ErrorToast('결제금액이 올바르지 않습니다.', '결제 금액 오류');
        return;
      }

      const response = await PortOne.requestPayment({
        storeId: `${process.env.NEXT_PUBLIC_PORTONE_STORE_ID}`,
        channelKey: `${process.env.NEXT_PUBLIC_PORTONE_CHANNEL_KEY}`,
        paymentId: `payment-${crypto.randomUUID()}`,
        orderName: `[나혼산] - ${productName}`,
        totalAmount: finalPayment,
        currency: 'CURRENCY_KRW',
        payMethod: 'EASY_PAY',
      });

      if (response?.code !== undefined) {
        // 결제 진행하다가 취소했을때 알럿창, 토스트로 변경예정
        return ErrorToast('사용자가 결제를 취소했습니다.', '사용자 결제취소');
      }

      const notified = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/orders`,
        {
          method: 'POST',
          body: JSON.stringify({ products: [productData] }),
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
            'Client-Id': 'febc13-final12-emjf',
          },
        },
      );

      console.log(response);
      console.log('노티파이드가뭔데', notified);
      if (notified.ok) {
        // true일때 결제가 완료 되었다 처리 해주면 될듯
        // 성공 토스트ui, 마이페이지로 페이지 이동
        SuccessToast('구매 완료 되었습니다.', '구매 완료');
        router.push('/my_page');
      }
    },
    [
      productData,
      token,
      finalPayment,
      productName,
      ErrorToast,
      SuccessToast,
      router,
    ],
  );
  // useEffect(() => {
  //   if (state && state.status === false) {
  //     alert(state.error);
  //   } else if (state && state.status === true) {
  //     alert('success!');
  //     // showSuccessToast();
  //     // triggerRefresh();
  //   }
  // }, [state]);

  return (
    <button
      disabled={!allChecked}
      type="button"
      onClick={fetchPayment}
      className={`box-border w-full h-[48px]  border-2 rounded-sm font-bold ${!allChecked ? 'bg-gray-150 text-gray-550 border-gray-150 cursor-not-allowed' : 'text-white bg-flame-250 border-flame-250 cursor-pointer'}`}
    >
      바로구매
    </button>
  );
}
