'use client';

import useUserStore from '@/zustand/useUserStore';
import { useEffect, useRef, useState } from 'react';

export default function CartAddressInput() {
  //변경하기 버튼을 눌렀을때 주소input에 포커스 주기
  const { user } = useUserStore();
  const [address, setAddress] = useState('');
  const addressInput = useRef<HTMLInputElement>(null);
  //랜더링 되고 난 후에 setAddress를 해줘야 input에 기본값이 설정되더라.. user데이터가 먼저 load되어야함
  useEffect(() => {
    if (user?.extra.addressBook[0].value) {
      setAddress(user?.extra.addressBook[0].value);
    }
  }, [user]);
  return (
    <section className="border-1 px-5 py-6 rounded-2xl">
      <h3 className="text-xl font-extrabold border-b-1 pb-3 border-gray-150">
        배송지
      </h3>
      <input
        ref={addressInput}
        value={address}
        onChange={e => setAddress(e.target.value)}
        className="text-gray-550 pb-8 border-b-1 border-gray-150 mt-3 w-full"
      />
      <div className="flex justify-center mt-6">
        <button
          className="border-2 rounded-3xl text-button-color w-24 h-9 font-bold"
          onClick={() => {
            addressInput.current?.focus();
          }}
        >
          변경하기
        </button>
      </div>
    </section>
  );
}
