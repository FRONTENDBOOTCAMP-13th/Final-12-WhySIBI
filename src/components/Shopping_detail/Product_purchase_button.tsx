'use client';

import { ProductButtonProps } from '@/types/shopping_detail';
import useUserStore from '@/zustand/useUserStore';
// import useUserStore from '@/zustand/useUserStore';
import { useRouter } from 'next/navigation';
import { useCallback, useMemo } from 'react';
import toast from 'react-hot-toast';

export default function ProductPurchaseButton({
  option,
  id,
}: ProductButtonProps) {
  const product = useMemo(
    () => ({
      _id: Number(id ?? '0'),
      quantity: option.quantity ?? 1,
      color: option.color ?? '',
      size: option.size ?? '',
    }),
    [id, option.quantity, option.color, option.size],
  );

  const { user } = useUserStore();
  const token = user?.token?.accessToken;
  const router = useRouter();
  console.log('옵션인데요', option);

  // 구매버튼 클릭시 토스트ui
  // const showSuccessToast = useCallback(() => {
  //   toast.custom(
  //     t => (
  //       <div
  //         className={`
  //         ${t.visible ? 'animate-in slide-in-from-bottom-full' : 'animate-out slide-out-to-bottom-full'}
  //         max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-gray-200 p-4
  //       `}
  //       >
  //         <div className="flex ">
  //           {/* 체크 아이콘 */}
  //           <div className="flex-shrink-0">
  //             <div className="flex items-center justify-center h-8 w-8 rounded-full bg-cal-poly-green-100">
  //               <svg
  //                 className="h-5 w-5 text-green-500"
  //                 fill="none"
  //                 viewBox="0 0 24 24"
  //                 stroke="currentColor"
  //               >
  //                 <path
  //                   strokeLinecap="round"
  //                   strokeLinejoin="round"
  //                   strokeWidth="2"
  //                   d="M5 13l4 4L19 7"
  //                 />
  //               </svg>
  //             </div>
  //           </div>

  //           <div className="ml-3 flex-1 flex items-center justify-between">
  //             <p className="text-sm font-medium text-gray-900 mb-1">
  //               구매완료!
  //             </p>

  //             {/* 버튼 */}
  //             <div className="flex gap-2">
  //               <button
  //                 onClick={() => {
  //                   toast.dismiss(t.id);
  //                   router.push('/my_page');
  //                 }}
  //                 className="
  //                   text-xs font-medium cursor-pointer border-b-1
  //                   text-cal-poly-green-200 border-b-cal-poly-green-200
  //               "
  //               >
  //                 구매목록 이동
  //               </button>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     ),
  //     {
  //       duration: 5000,
  //       position: 'bottom-center',
  //     },
  //   );
  // }, [router]);

  // 로그인 필요 토스트
  const showLoginErrorToast = useCallback(() => {
    toast.custom(
      t => (
        <div
          className={`
          ${t.visible ? 'animate-in slide-in-from-bottom-full' : 'animate-out slide-out-to-bottom-full'}
          max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-red-200 p-4 border-l-4 border-red-500
        `}
          role="alert"
          aria-live="assertive"
          aria-label="로그인 필요 알림"
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
              <p className="text-sm font-medium text-red-800 mb-1">
                로그인이 필요합니다.
              </p>
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

  // 옵션 선택 필요 토스트
  const showOptionErrorToast = useCallback((missingOptions: string[]) => {
    toast.custom(
      t => (
        <div
          className={`
          ${t.visible ? 'animate-in slide-in-from-bottom-full' : 'animate-out slide-out-to-bottom-full'}
          max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-red-200 p-4 border-l-4 border-red-500
        `}
          role="alert"
          aria-live="assertive"
          aria-label="옵션 선택 필요 알림"
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
              <p className="text-sm font-medium text-red-800 mb-1">
                {missingOptions.join(', ')}(을)를 선택해주세요
              </p>
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

  //옵션 선택 검증 하수
  const validateOptions = useCallback(() => {
    const missingOptions: string[] = [];
    //색상을 선택안했을때
    if (option.color === '') {
      missingOptions.push('색상');
    }

    //사이즈를 선택안했을때
    if (option.size === '') {
      missingOptions.push('사이즈');
    }

    return missingOptions;
  }, [option.color, option.size]);

  // useEffect(() => {
  //   if (state && typeof state.status === 'boolean') {
  //     if (state.status === false && token) {
  //       toast.error(state.error);
  //     } else if (!token) {
  //       showErrorToast(); //  토큰이 없을 때만
  //     } else if (state.status === true) {
  //       showSuccessToast();
  //     }
  //   }
  // }, [state, showSuccessToast, showErrorToast, token]);

  const handlePurchaseClick = useCallback(() => {
    // 로그인 확인
    if (!token) {
      showLoginErrorToast();
      return;
    }

    // 옵션 선택 확인
    const missingOptions = validateOptions();
    if (missingOptions.length > 0) {
      showOptionErrorToast(missingOptions);
      return;
    }

    // 모든 검증 통과시
    const productQuery = encodeURIComponent(JSON.stringify(product));
    router.push(`/order?product=${productQuery}`);
  }, [
    showLoginErrorToast,
    showOptionErrorToast,
    token,
    validateOptions,
    product,
    router,
  ]);

  return (
    <button
      className={`box-border cursor-pointer bg-flame-250 w-[196px] h-[48px] text-white border-2 border-flame-250 rounded-sm font-bold`}
      onClick={handlePurchaseClick}
    >
      바로구매
    </button>
  );
}
