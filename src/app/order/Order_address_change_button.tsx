'use client';

import { useActionState, useEffect, useRef, useState } from 'react';
import OrderAddressItem from './Order_address_item';
import { AddressItem } from './Order_info';
import Script from 'next/script';
import { addAddressAction } from '@/data/actions/add_address_action';
import useUserStore from '@/zustand/useUserStore';
import useCartRefreshStore from '@/zustand/useCartRefreshStore';

export default function OrderAddressChangeButton({
  userAddressBook,
  delivery,
  handleDelivery,
  formatPhone,
  addAddressBook,
}: {
  userAddressBook: AddressItem[];
  delivery: AddressItem | undefined;
  handleDelivery: (number: number) => void;
  formatPhone: (string: string | undefined) => string | undefined;
}) {
  const { user } = useUserStore();
  const token = user?.token?.accessToken;
  const { triggerRefresh } = useCartRefreshStore();
  const [modal, setModal] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  //배송지 추가 화면보여주기 상태관리
  const [addAddress, setAddAddress] = useState(false);

  //이름 상태관리
  const [name, setName] = useState('');

  //전화번호 상태관리
  const [phone, setPhone] = useState('');
  console.log('어드레스북', userAddressBook);

  // 주소정보 상태관리
  const [addressForm, setAddressForm] = useState({
    zonecode: '',
    address: '',
    detailAddress: '',
  });

  //input에 넘겨줄 주소
  const address = addressForm.address + ' ' + addressForm.detailAddress;

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

  const handleAddressSearch = () => {
    if (!window.daum) {
      alert('주소 검색 서비스를 준비 중입니다. 잠시 후 다시 시도해주세요.');
      return;
    }

    new window.daum.Postcode({
      oncomplete: function (data) {
        const addr =
          data.userSelectedType === 'R' ? data.roadAddress : data.jibunAddress;

        setAddressForm(prev => ({
          ...prev,
          zonecode: data.zonecode,
          address: addr,
          detailAddress: '',
        }));

        setTimeout(() => {
          document.getElementById('detailAddress')?.focus();
        }, 100);
      },
    }).open();
  };

  // 초기 상태 정의
  const initialState: { status?: boolean; error: string } = {
    // status: false,
    error: '',
  };
  const [state, formAction, isPending] = useActionState(
    addAddressAction,
    initialState,
  );

  useEffect(() => {
    if (state && state.status === false) {
      alert(state.error);
    } else if (state && state.status === true) {
      addAddressBook({
        id: userAddressBook.length + 1,
        name: name,
        value: address,
        phone: phone,
      });
      setAddAddress(false);
    }
  }, [state, addAddressBook, address, name, phone, userAddressBook.length]);

  return (
    <>
      {/* 우편번호 찾기 api를 불러오기 위한 스크립트 */}
      <Script
        src="//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"
        strategy="lazyOnload"
      />
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
            <section className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="">이름</label>
                <input
                  value={name}
                  onChange={e => {
                    setName(e.target.value);
                  }}
                  placeholder="받는 분의 이름을 입력해주세요."
                  type="text"
                  className="border-1 rounded-sm py-1 px-2 border-gray-150 placeholder:text-gray-350"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="">휴대폰번호</label>
                <input
                  value={phone}
                  onChange={e => {
                    setPhone(e.target.value);
                  }}
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
                    value={addressForm.zonecode}
                    readOnly
                    className="border-1 flex-1 rounded-sm py-1 px-2 border-gray-150 placeholder:text-gray-350 bg-gray-50"
                  />
                  <button
                    type="button"
                    onClick={handleAddressSearch}
                    className="border-1 rounded-sm border-gray-150 py-1 px-2 text-sm cursor-pointer hover:bg-gray-100"
                  >
                    주소 찾기
                  </button>
                </div>
                <input
                  placeholder="주소"
                  type="text"
                  value={addressForm.address}
                  readOnly
                  className="border-1 rounded-sm py-1 px-2 border-gray-150 placeholder:text-gray-350 bg-gray-50"
                />
                <input
                  id="detailAddress"
                  placeholder="상세주소"
                  type="text"
                  value={addressForm.detailAddress}
                  onChange={e =>
                    setAddressForm(prev => ({
                      ...prev,
                      detailAddress: e.target.value,
                    }))
                  }
                  className="border-1 rounded-sm py-1 px-2 border-gray-150 placeholder:text-gray-350"
                />
              </div>

              <form action={formAction}>
                <input name="token" value={token || ''} hidden readOnly />
                <input name="id" value={user?._id || ''} hidden readOnly />
                <input name="name" value={name || ''} hidden readOnly />
                <input name="phone" value={phone || ''} hidden readOnly />
                <input name="address" value={address || ''} hidden readOnly />
                <input
                  name="addressBook"
                  value={JSON.stringify(userAddressBook)}
                  hidden
                  readOnly
                />
                <button
                  disabled={isPending}
                  className="h-10 rounded-sm font-medium cursor-pointer bg-flame-250 text-white absolute bottom-4 left-8 right-8 hover:bg-flame-400"
                  // onClick={closeModal}
                >
                  저장하기
                </button>
              </form>
            </section>
          </div>
        ) : (
          // 배송지 정보목록
          <div className="bg-white w-120 h-165 p-10 rounded-md relative flex flex-col">
            <h3 className="font-bold mb-2 text-lg border-b-1 border-gray-350 pb-2">
              배송지 정보
            </h3>
            <button
              className="h-10 rounded-sm font-medium cursor-pointer border-dashed border-2 border-gray-450 text-gray-450 hover:bg-gray-150"
              onClick={() => setAddAddress(!addAddress)}
            >
              + 배송지 추가하기
            </button>
            {userAddressBook ? (
              <ul className="overflow-auto flex-1 pb-4 ">
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
