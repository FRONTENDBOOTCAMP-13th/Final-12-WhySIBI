'use client';

import { useEffect, useRef, useState } from 'react';
import OrderAddressItem from './Order_address_item';
import { AddressItem } from './Order_info';

export default function OrderAddressChangeButton({
  userAddressBook,
  delivery,
  handleDelivery,
  formatPhone,
}: {
  userAddressBook: AddressItem[];
  delivery: AddressItem | undefined;
  handleDelivery: (number: number) => void;
  formatPhone: (string: string | undefined) => string | undefined;
}) {
  const [modal, setModal] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  //배송지 추가 화면보여주기 상태관리
  const [addAddress, setAddAddress] = useState(false);

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

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  };

  return (
    <>
      {/* 모달입니다. 평소에는 보이지 않음 */}
      <dialog
        onKeyDown={handleKeyDown}
        ref={dialogRef}
        className="backdrop:bg-black/50 p-0 m-0 border-0 bg-transparent max-w-none max-h-none w-full h-full open:flex justify-center items-center"
      >
        {/* addAddress가 true일때는 배송지 추가 페이지 false일때는 배송지 정보 목록 */}
        {addAddress ? (
          // 배송지 추가 페이지
          <div className="bg-white w-120 h-165 p-10 rounded-md relative flex flex-col gap-4">
            <h3 className="font-bold mb-2 text-lg border-b-1 border-gray-350 pb-2">
              배송지 추가
            </h3>
            <form action="/" className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="">이름</label>
                <input
                  placeholder="받는 분의 이름을 입력해주세요."
                  type="text"
                  className="border-1 rounded-sm py-1 px-2 border-gray-150 placeholder:text-gray-350"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="">휴대폰번호</label>
                <input
                  placeholder="휴대폰번호를 입력해주세요."
                  type="text"
                  className="border-1 rounded-sm py-1 px-2 border-gray-150 placeholder:text-gray-350"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="">주소</label>
                <div className="flex gap-1">
                  <input
                    placeholder="우편번호"
                    type="text"
                    className="border-1 flex-1 rounded-sm py-1 px-2 border-gray-150 placeholder:text-gray-350"
                  />
                  <button className="border-1 rounded-sm border-gray-150 py-1 px-2 text-sm cursor-pointer">
                    주소 찾기
                  </button>
                </div>
                <input
                  placeholder="주소"
                  type="text"
                  className="border-1 rounded-sm py-1 px-2 border-gray-150 placeholder:text-gray-350"
                />
                <input
                  placeholder="상세주소"
                  type="text"
                  className="border-1 rounded-sm py-1 px-2 border-gray-150 placeholder:text-gray-350"
                />
              </div>

              <button
                className="h-10 rounded-sm font-medium cursor-pointer bg-flame-250 text-white absolute bottom-4 left-8 right-8 hover:bg-flame-400"
                onClick={closeModal}
              >
                변경완료
              </button>
            </form>
          </div>
        ) : (
          // 배송지 정보목록
          <div className="bg-white w-120 h-165 p-10 rounded-md relative">
            <h3 className="font-bold mb-2 text-lg border-b-1 border-gray-350 pb-2">
              배송지 정보
            </h3>
            <button
              className="w-full h-10 rounded-sm font-medium cursor-pointer border-dashed border-2 border-gray-450 text-gray-450 hover:bg-gray-150"
              onClick={() => setAddAddress(!addAddress)}
            >
              + 배송지 추가하기
            </button>
            {userAddressBook ? (
              <ul>
                {userAddressBook.map(item => {
                  return (
                    <OrderAddressItem
                      key={item.id}
                      id={item.id}
                      name={item.name}
                      value={item.value}
                      phone={item.phone}
                      delivery={delivery}
                      handleDelivery={handleDelivery}
                      formatPhone={formatPhone}
                    />
                  );
                })}
              </ul>
            ) : (
              ''
            )}
            <button
              className="h-10 rounded-sm font-medium cursor-pointer bg-flame-250 text-white absolute bottom-4 left-8 right-8 hover:bg-flame-400"
              onClick={closeModal}
            >
              변경완료
            </button>
          </div>
        )}
      </dialog>

      <button
        onClick={openModal}
        type="submit"
        className="border-2 border-gray-550 rounded-md text-button-color w-26 h-9 font-bold hover:bg-gray-150  cursor-pointer"
      >
        배송지 변경
      </button>
    </>
  );
}
