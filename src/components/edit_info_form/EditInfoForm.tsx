'use client';
import MyTheme from '@/components/my_theme/page';
import InputEdit from '@/components/Input/Input_edit';
import { EditUserInfo } from '@/data/actions/user';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useActionState, useEffect, useState } from 'react';
import { User } from '@/types';
interface EditInfoFormProp {
  user_id: string;
  token: string;
  MyInfo: User;
}

export default function EditInfoForm({
  user_id,
  token,
  MyInfo,
}: EditInfoFormProp) {
  //이미지 주소 추출
  const [imageSrc, setImageSrc] = useState('');
  const handleFilePath = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    const file = target.files?.[0];
    if (file) {
      setImageSrc(URL.createObjectURL(file));
    }
  };

  //생년월일 자동 생성
  const currentYear = new Date().getFullYear();
  const years = Array.from(
    { length: currentYear - 1950 },
    (_, i) => currentYear - i,
  );
  const month = Array.from({ length: 12 }, (_, i) => i + 1);
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  //취향 선택 컴포넌트 렌더링
  const [isClick, setIsClick] = useState(false);

  //회원정보 가져오기
  const [userInfo, setuserInfo] = useState<User | null>(null);
  useEffect(() => {
    const userData = async () => {
      try {
        if (MyInfo) {
          setuserInfo(MyInfo);
        }
      } catch (error) {
        console.error('상품 정보 로딩 실패:', error);
      }
    };
    userData();
  }, [MyInfo]);

  //회원정보 수정
  const [state, formAction, isLoading] = useActionState(EditUserInfo, null);
  const navigation = useRouter();
  useEffect(() => {
    if (state?.ok) {
      alert('회원 정보 수정이 완료되었습니다. 메인 페이지로 이동합니다.');
      navigation.replace('/');
    }
  }, [state, navigation]);

  return (
    <form
      action={formAction}
      className="col-start-2 col-end-4 mt-20 max-w-[46.25rem]"
    >
      <input type="hidden" name="token" value={token || ''} />
      <input type="hidden" name="user_id" value={user_id} />
      <div className={isClick ? 'hidden' : 'block'}>
        <div className="flex items-center gap-10">
          <Image
            src={
              imageSrc ||
              (userInfo?.image
                ? `/${userInfo.image}`
                : '/default-profile.png')
            }
            alt="프로필 사진"
            width={112}
            height={112}
            className="rounded-[100%] border-2 border-black w-28 h-28 mask-radial-at-center object-cover bg-gray-200"
          />
          <label
            htmlFor="attach"
            className="nahonsan-btn-3d-vanilla rounded-full font-basic font-bold bg-vanilla-300  p-2.5 cursor-pointer"
          >
            사진 추가하기
          </label>
          <input
            type="file"
            name="attach"
            id="attach"
            className="hidden"
            accept="image/*"
            onChange={handleFilePath}
          />
        </div>
        <InputEdit
          text={'아이디'}
          placeholder={userInfo?.email as string}
          idValue={'email'}
          inputType={'text'}
          defaultValue={userInfo?.email as string}
        />
        {state?.ok === 0 && state.errors?.email?.msg}
        <InputEdit
          text={'닉네임'}
          placeholder={userInfo?.nickname as string}
          idValue={'nickname'}
          inputType={'text'}
          defaultValue={userInfo?.nickname as string}
        />
        {state?.ok === 0 && state.errors?.nickname?.msg}
        <InputEdit
          text={'이름'}
          placeholder={userInfo?.name as string}
          idValue={'name'}
          inputType={'text'}
          defaultValue={userInfo?.name as string}
        />
        <InputEdit
          text={'변경 할 비밀번호'}
          placeholder={'비밀번호를 입력해주세요'}
          idValue={'password'}
          inputType={'password'}
        />
        {state?.ok === 0 && state.errors?.password?.msg}
        <InputEdit
          text={'휴대전화 번호'}
          placeholder={userInfo?.phone as string}
          idValue={'phone_number'}
          inputType={'text'}
          defaultValue={userInfo?.phone as string}
        />
        {state?.ok === 0 && state.errors?.phone?.msg}
        <div className="w-full font-basic mt-9">
          <p className=" font-bold pl-4 ">생년월일</p>
          <div className=" flex gap-4 h-10">
            <select
              name="birth_year"
              id="birth_year"
              className="font-basic block w-28 pl-4 border-2 outline-0  border-button-color-opaque-25 rounded-3xl  py-1  focus:border-button-color transition-all duration-200 ease-in"
              required
            >
              <option value="">연도 선택</option>
              {years.map(year => (
                <option key={year} value={year}>
                  {year}년
                </option>
              ))}
            </select>
            <select
              name="birth_month"
              id="birth_month"
              className="font-basic block w-28 pl-4 border-2 outline-0  border-button-color-opaque-25 rounded-3xl  py-1  focus:border-button-color transition-all duration-200 ease-in"
              required
            >
              <option value="">월 선택</option>
              {month.map(month => (
                <option key={month} value={month.toString().padStart(2, '0')}>
                  {month}월
                </option>
              ))}
            </select>
            <select
              name="birth_day"
              id="birth_day"
              className="font-basic block w-28 pl-4 border-2 outline-0  border-button-color-opaque-25 rounded-3xl  py-1  focus:border-button-color transition-all duration-200 ease-in"
              required
            >
              <option value="">일 선택</option>
              {days.map(day => (
                <option key={day} value={day.toString().padStart(2, '0')}>
                  {day}일
                </option>
              ))}
            </select>
          </div>
        </div>
        <select
          name="address_name"
          id="address_name"
          className="mt-9 mb-[-30px] font-basic block w-28 pl-4 border-2 outline-0  border-button-color-opaque-25 rounded-3xl  py-1  focus:border-button-color transition-all duration-200 ease-in"
          defaultValue="집"
          required
        >
          <option value="home">집</option>
          <option value="workSpace">직장</option>
        </select>
        <InputEdit
          text={'배송지'}
          placeholder={userInfo?.extra.addressBook[0].value as string}
          idValue={'address_value'}
          inputType={'text'}
          defaultValue={userInfo?.extra.addressBook[0].value as string}
        />
        <button
          type="button"
          className="block nahonsan-btn-3d-white border-button-color mx-auto rounded-radius-full mt-16 py-4 px-8 font-basic tracking-paragraph-default font-bold text-size-md"
          onClick={() => setIsClick(!isClick)}
        >
          취향 선택하기
        </button>
      </div>
      <div className={isClick ? 'block' : 'hidden'}>
        <MyTheme state={isClick} onClose={() => setIsClick(false)} />
      </div>
      {!isLoading && (
        <button
          type="submit"
          className={`nahonsan-btn-3d-sky border-button-color mx-auto rounded-radius-full mt-16 py-4 px-8 font-basic tracking-paragraph-default font-bold text-size-md ${
            isClick ? 'hidden' : 'block'
          }`}
        >
          수정 완료
        </button>
      )}
    </form>
  );
}
