'use client';

import { useEffect, useRef, useState } from 'react';
import OrderAddressItem from './Order_address_item';
import { AddressItem } from './Order_info';

export default function OrderAddressChangeButton({
  userAddressBook,
}: {
  userAddressBook: AddressItem[];
}) {
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
        <div className="bg-white w-120 h-165 p-10 rounded-md relative">
          <h3 className="font-bold mb-2 text-lg border-b-1 border-gray-350 pb-2">
            배송지 정보
          </h3>
          <button className="w-full h-10 rounded-sm font-medium cursor-pointer border-dashed border-2 border-gray-450 text-gray-450 hover:bg-gray-150">
            + 배송지 추가하기
          </button>
          {userAddressBook ? (
            <ul>
              {userAddressBook.map(item => {
                return (
                  <OrderAddressItem
                    key={item.id}
                    name={item.name}
                    value={item.value}
                    phone={item.phone}
                  />
                );
              })}
            </ul>
          ) : (
            ''
          )}
          <button className="h-10 rounded-sm font-medium cursor-pointer bg-flame-250 text-white absolute bottom-4 left-8 right-8 hover:bg-flame-400">
            변경하기
          </button>
        </div>
      </dialog>

      <button
        onClick={openModal}
        type="submit"
        className="border-2 rounded-3xl text-button-color w-24 h-9 font-bold hover:bg-black hover:text-white cursor-pointer"
      >
        배송지 변경
      </button>
    </>
  );
}
