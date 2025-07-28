'use client';

import { useEffect, useRef, useState } from 'react';

export default function ButtonQuestion({ name }: { name: string }) {
  const [modal, setModal] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const openModal = () => {
    if (dialogRef.current) {
      dialogRef.current.showModal();
      setModal(true);
    }
  };

  const closeModal = () => {
    if (dialogRef.current) {
      dialogRef.current.close();
      setModal(false);
    }
  };

  // 모달 열려있을때 배경이 스크롤 되지 않게
  useEffect(() => {
    if (modal) {
      // 모달이 열릴 때
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = 'hidden';

      // 클린업 함수, 모달이 닫힐 때 원래 상태로 복원
      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [modal]);

  return (
    <>
      {/* 모달입니다. 평소에는 보이지 않음 */}
      <dialog
        ref={dialogRef}
        className="backdrop:bg-black/50 p-0 m-0 border-0 bg-transparent max-w-none max-h-none w-full h-full open:flex justify-center items-center"
      >
        <form action="" className="bg-white w-150 h-170 p-10 rounded-md">
          <h3 className="text-xl font-bold pb-10">상품 문의하기</h3>
          <dl className="flex mb-12 border-b-1 pb-3">
            <dt className="font-bold w-20 text-start">상품</dt>
            <dd className="text-gray-550 font-bold">{name}</dd>
          </dl>
          <div className="flex mb-10">
            <label htmlFor="content" className="font-bold w-20 text-start">
              문의내용
            </label>
            <textarea
              name="content"
              id="content"
              className="flex-1 h-60 border-1 resize-none border-gray-350 rounded-md outline-0 px-3 py-1"
              placeholder="문의 내용을 입력하세요"
            ></textarea>
          </div>
          <small className="text-[10px] flex flex-col items-start gap-1 text-gray-550">
            <span>
              - 문의내용에 대한 답변은 &apos;마이페이지 &gt; 나의 쇼핑 &gt; 나의
              문의내역&apos; 또는 &apos;상품 상세페이지&apos;에서 확인
              가능합니다.
            </span>
            <span>
              - 배송, 결제, 교환/반품 문의는 고객센터로 문의 바랍니다.
            </span>
            <span>
              - 상품과 관련 없거나 부적합한 내용을 기재하시는 경우, 사전 고지
              없이 삭제 또는 차단될 수 있습니다.
            </span>
          </small>
          <div className="flex justify-center gap-3 mt-10">
            <button
              onClick={closeModal}
              type="button"
              className={`box-border cursor-pointer bg-white w-[196px] h-[48px] text-flame-250 border-2 border-flame-250 rounded-sm font-bold`}
            >
              취소하기
            </button>
            <button
              className={`box-border cursor-pointer bg-flame-250 w-[196px] h-[48px] text-white border-2 border-flame-250 rounded-sm font-bold`}
            >
              문의하기
            </button>
          </div>
        </form>
      </dialog>

      <button
        onClick={openModal}
        className={`cursor-pointer bg-flame-250 w-[100px] h-[35px] text-xs text-white rounded-sm `}
      >
        문의하기
      </button>
    </>
  );
}
