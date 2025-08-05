// utils/toast.ts
import toast from 'react-hot-toast';

export const showSuccessToast = (message: string) => {
  toast.custom(
    t => (
      <div
        className={`${
          t.visible
            ? 'animate-in slide-in-from-bottom-full'
            : 'animate-out slide-out-to-bottom-full'
        } fixed bottom-4 left-1/2 -translate-x-1/2 z-50
        max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-green-200 p-4`}
      >
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center h-8 w-8 rounded-full bg-green-100">
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
          <p className="ml-3 text-sm font-medium text-gray-900">{message}</p>
        </div>
      </div>
    ),
    {
      duration: 4000,
      // position은 toast.custom에선 무시됨
    },
  );
};


// 실패 알림
export const showErrorToast = (message: string) => {
  toast.custom(t => (
    <div
      className={`${
        t.visible
          ? 'animate-in slide-in-from-bottom-full'
          : 'animate-out slide-out-to-bottom-full'
      } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-red-200 p-4`}
    >
      <div className="flex items-center">
        <div className="flex-shrink-0">
          <div className="flex items-center justify-center h-8 w-8 rounded-full bg-red-100">
            <svg
              className="h-5 w-5 text-red-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
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
        <p className="ml-3 text-sm font-medium text-gray-900">{message}</p>
      </div>
    </div>
  ), {
    duration: 4000,
    position: 'bottom-center',
  });
};
