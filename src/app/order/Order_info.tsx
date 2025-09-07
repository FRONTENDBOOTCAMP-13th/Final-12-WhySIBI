'use client';

import useUserStore from '@/zustand/useUserStore';
import OrderAddressChangeButton from './Order_address_change_button';

export default function OrderInfo() {
  //변경하기 버튼을 눌렀을때 주소input에 포커스 주기
  const { user } = useUserStore();

  // const [phoneNumber, setPhoneNumber] = useState({
  //   first: '',
  //   second: '',
  //   third: '',
  // });

  // const firstInputRef = useRef<HTMLInputElement | null>(null);
  // const secondInputRef = useRef<HTMLInputElement | null>(null);
  // const thirdInputRef = useRef<HTMLInputElement | null>(null);

  // const handleChange = (
  //   field: 'first' | 'second' | 'third',
  //   value: string,
  //   nextRef: React.RefObject<HTMLInputElement | null> | null,
  //   maxLength: number,
  // ) => {
  //   //숫자만 허용
  //   const numberValue = value.replace(/\D/g, '');

  //   //최대 길이 제한
  //   if (numberValue.length <= maxLength) {
  //     setPhoneNumber(prev => ({
  //       ...prev,
  //       [field]: numberValue,
  //     }));

  //     if (numberValue.length === maxLength && nextRef) {
  //       nextRef.current?.focus();
  //     }
  //   }
  // };

  // 백스페이스 시 이전 필드로 포커스 이동
  // const handleKeyDown = (
  //   e: React.KeyboardEvent<HTMLInputElement>,
  //   field: 'first' | 'second' | 'third',
  //   prevRef: React.RefObject<HTMLInputElement | null> | null,
  // ) => {
  //   if (e.key === 'Backspace' && phoneNumber[field] === '' && prevRef) {
  //     prevRef.current?.focus();
  //   }
  // };

  // 전화번호 포맷팅 함수
  const formatPhone = (phone: string | undefined) => {
    return phone?.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');
  };

  console.log('내 유전데', user);
  //랜더링 되고 난 후에 setAddress를 해줘야 input에 기본값이 설정되더라.. user데이터가 먼저 load되어야함
  // useEffect(() => {
  //   if (user?.extra.addressBook[0].value) {
  //     setAddress(user?.extra.addressBook[0].value);
  //   }

  //   if (user?.name) {
  //     setName(user.name);
  //   }
  // }, [user]);
  console.log(user);
  return (
    <section className="border-1 px-5 py-6 rounded-2xl">
      <div className=" border-b-1 pb-3 border-gray-150 flex items-center justify-between">
        <h3 className="text-xl font-extrabold">배송정보</h3>
        <OrderAddressChangeButton />
      </div>
      <tr className="flex items-center gap-4 mb-2 mt-3">
        <th className="text-lg font-basic">
          수령인<span className="text-red-500">*</span>
        </th>
        <td>{user?.name}</td>
      </tr>
      <tr className="flex items-center gap-4 mb-2">
        <th className="text-lg font-basic">
          배송지<span className="text-red-500">*</span>
        </th>
        <td>{user?.extra.addressBook[0].value}</td>
      </tr>
      <tr className="flex items-center gap-4 mb-4">
        <th className="text-lg font-basic">
          연락처<span className="text-red-500">*</span>
        </th>
        <td>{formatPhone(user?.phone)}</td>
        {/* <input
          ref={firstInputRef}
          value={phoneNumber.first}
          onChange={e =>
            handleChange('first', e.target.value, secondInputRef, 3)
          }
          onKeyDown={e => handleKeyDown(e, 'first', null)}
          maxLength={3}
          aria-label="전화번호 첫 번째 자리"
          className="w-16 px-3 py-1 border border-gray-300 rounded-md text-center"
          required
        />
        <span className="text-gray-500">-</span>
        <input
          ref={secondInputRef}
          value={phoneNumber.second}
          onChange={e =>
            handleChange('second', e.target.value, thirdInputRef, 4)
          }
          onKeyDown={e => handleKeyDown(e, 'second', firstInputRef)}
          maxLength={4}
          aria-label="전화번호 두 번째 자리"
          className="w-20 px-3 py-1 border border-gray-300 rounded-md text-center"
          required
        />
        <span className="text-gray-500">-</span>
        <input
          ref={thirdInputRef}
          type="text"
          value={phoneNumber.third}
          onChange={e => handleChange('third', e.target.value, null, 4)}
          onKeyDown={e => handleKeyDown(e, 'third', secondInputRef)}
          className="w-20 px-3 py-1 border border-gray-300 rounded-md text-center"
          maxLength={4}
          aria-label="전화번호 세 번째 자리"
          required
        /> */}
      </tr>
      <div className="bg-white font-variable w-[350px] h-[31px] rounded-sm text-size-sm border-1 border-[#c7c7c7] focus-within:outline-1 relative flex items-center">
        <label htmlFor="memo" className="sr-only">
          배송요청사항
        </label>
        <select
          name="memo"
          id="memo"
          className="w-full text-[#777777] font-semibold cursor-pointer outline-0 appearance-none text-center"
        >
          <option value="default">배송시 요청사항을 선택해 주세요</option>
          <option value="door">부재시 문앞에 놓아주세요.</option>
          <option value="security">부재시 경비실에 맡겨 주세요.</option>
          <option value="message">부재시 전화 또는 문자 주세요.</option>
          <option value="box">택배함에 넣어 주세요.</option>
          <option value="warn">파손위험상품입니다. 배송시 주의해주세요.</option>
          <option value="call">배송전에 연락주세요.</option>
        </select>
        <svg
          className="absolute right-3 pointer-events-none"
          width="13"
          height="13"
          viewBox="0 0 30 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 26L0.27757 0.499999L29.7224 0.499996L15 26Z"
            fill="#D9D9D9"
          />
        </svg>
      </div>
    </section>
  );
}
