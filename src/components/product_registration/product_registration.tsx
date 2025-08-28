'use client';
import { MyPageMenuListProps } from '@/components/my_page_menu_list/my_page_menu_list';
import MyTheme from '@/components/my_theme/my_theme';
import Image from 'next/image';
import { useState } from 'react';

export default function ProductRegistrationForm({
  userType,
}: MyPageMenuListProps) {
  //이미지 미리보기
  const [imageSrc, setImageSrc] = useState('');
  const handleFilePath = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    const file = target.files?.[0];
    if (file) {
      setImageSrc(URL.createObjectURL(file));
    }
  };
  // 옵션 갯수 선택
  const [sizeOptionQuantity, setSizeOptionQuantity] = useState(0);
  const [colorOptionQuantity, setColorOptionQuantity] = useState(0);
  // 취향 선택 컴포넌트 렌더링
  const [isClick, setIsClick] = useState(false);
  return (
    <>
      <h2>테스트</h2>
      <form
        action=""
        className="flex flex-col gap-10 border-2 mt-6 md:mt-8 mx-4 md:mx-auto max-w-[46.25rem] rounded-2xl md:rounded-4xl border-button-color-opaque-25 px-6 py-12 md:px-12 lg:px-20 md:py-16 lg:py-24"
      >
        <div>
          <label htmlFor="mainImages">
            <strong>상품이미지</strong>
          </label>
          <input
            type="file"
            placeholder="상품사진"
            name="mainImages"
            id="mainImages"
          />
        </div>
        <div>
          <label htmlFor="name">
            <strong>상품 제목</strong>
          </label>
          <input
            type="text"
            placeholder="상품제목"
            name="name"
            id="name"
            className="font-basic block w-full pl-4 border-2 outline-0  border-button-color-opaque-25 rounded-full h-16 py-4  focus:border-button-color transition-all duration-200 ease-in"
          />
        </div>
        <div>
          <label htmlFor="price">
            <strong>상품 가격</strong>
          </label>
          <input
            type="text"
            placeholder="상품가격"
            name="price"
            id="price"
            className="font-basic block w-full pl-4 border-2 outline-0  border-button-color-opaque-25 rounded-full h-16 py-4  focus:border-button-color transition-all duration-200 ease-in"
          />
        </div>
        <div>
          <label htmlFor="sale">
            <strong>상품 할인률</strong>
          </label>
          <input
            type="text"
            placeholder="할인율"
            name="sale"
            id="sale"
            className="font-basic block w-full pl-4 border-2 outline-0  border-button-color-opaque-25 rounded-full h-16 py-4  focus:border-button-color transition-all duration-200 ease-in"
          />
        </div>
        <div>
          <label htmlFor="sale">
            <strong>상품 할인 적용 가격</strong>
          </label>
          <input
            type="text"
            placeholder="할인 가격"
            name="salePrice"
            id="salePrice"
            className="font-basic block w-full pl-4 border-2 outline-0  border-button-color-opaque-25 rounded-full h-16 py-4  focus:border-button-color transition-all duration-200 ease-in"
            readOnly
          />
        </div>
        <div>
          <label htmlFor="shippingFees">
            <strong>배송 비용</strong>
          </label>
          <input
            type="text"
            placeholder="배달비"
            name="shippingFees"
            value={'0'}
            className="font-basic block w-full pl-4 border-2 outline-0  border-button-color-opaque-25 rounded-full h-16 py-4  focus:border-button-color transition-all duration-200 ease-in"
          />
        </div>

        <div>
          <label htmlFor="quantity">
            <strong>판매 수량</strong>
          </label>
          <input
            type="text"
            placeholder="수량"
            name="quantity"
            id="quantity"
            className="font-basic block w-full pl-4 border-2 outline-0  border-button-color-opaque-25 rounded-full h-16 py-4  focus:border-button-color transition-all duration-200 ease-in"
          />
        </div>

        <div>
          <p>제품 테그를 선택해주세요</p>
          <select name="tag" id="tag">
            <option value="">1</option>
          </select>
        </div>

        <div>
          <button
            type="button"
            className="block nahonsan-btn-3d-white border-button-color mx-auto rounded-radius-full mt-16 py-4 px-8 font-basic tracking-paragraph-default font-bold text-size-md"
            onClick={() => setIsClick(!isClick)}
          >
            상품의 취향 선택하기
          </button>
          <div className={isClick ? 'block' : 'hidden'}>
            <MyTheme
              state={isClick}
              onClose={() => setIsClick(false)}
              userType={userType}
            />
          </div>
        </div>

        <div>
          <p> 사이즈 옵션의 갯수는?</p>
          <select
            name=""
            id=""
            onChange={e => {
              setSizeOptionQuantity(parseInt(e.target.value));
            }}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div>
          <p>컬러 옵션의 갯수는?</p>
          <select
            name=""
            id=""
            onChange={e => {
              setColorOptionQuantity(parseInt(e.target.value));
            }}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>

        <div className="options-container">
          <div id="size-options" className="option-group">
            <h3>
              <strong>사이즈 옵션</strong>
            </h3>
            {sizeOptionQuantity > 0 ? (
              <div id="size-inputs" className="option-inputs">
                {Array.from({ length: sizeOptionQuantity }, (_, i) => (
                  <div key={i} className="size-group flex">
                    <div className="option-number">{i + 1}</div>
                    <input
                      type="text"
                      placeholder={`사이즈 ${i + 1} (예: S, M, L, XL)`}
                      name="size"
                      className="font-basic block w-4/5 pl-4 border-2 outline-0  border-button-color-opaque-25 rounded-full h-16 py-4  focus:border-button-color transition-all duration-200 ease-in"
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div>
                <p>사이즈 옵션의 갯수를 선택해주세요</p>
              </div>
            )}
          </div>

          <div id="color-options" className="option-group">
            <h3>
              <strong>컬러 옵션</strong>
            </h3>
            {colorOptionQuantity > 0 ? (
              <div id="color-inputs" className="option-inputs">
                {Array.from({ length: colorOptionQuantity }, (_, i) => (
                  <div key={i} className="color-group flex">
                    <div className="option-number">{i + 1}</div>
                    <input
                      type="text"
                      name="size"
                      placeholder={`컬러 ${i + 1} (예: 빨강, 파랑, 검정)`}
                      className="font-basic block w-4/5 pl-4 border-2 outline-0  border-button-color-opaque-25 rounded-full h-16 py-4  focus:border-button-color transition-all duration-200 ease-in"
                    ></input>
                  </div>
                ))}
              </div>
            ) : (
              <div>
                <p>색상 옵션의 갯수를 선택해주세요</p>
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center gap-10 mb-8">
          <Image
            src={imageSrc || ''}
            alt="프로필 사진"
            width={112}
            height={112}
            className=" border-2 border-black w-28 h-28 mask-radial-at-center object-cover bg-gray-200"
          />
          <label
            htmlFor="contentImage"
            className="nahonsan-btn-3d-vanilla rounded-full font-basic font-bold bg-vanilla-300 p-2.5 cursor-pointer"
          >
            <strong>상세 정보 이미지</strong>
          </label>
          <input
            type="file"
            placeholder="상세 정보 이미지"
            id="contentImage"
            name="contentImage"
            className="hidden"
            accept="image/*"
            onChange={handleFilePath}
          />
        </div>
        <div className="flex flex-col md:flex-row gap-3 mt-9">
          <label htmlFor="content">
            <strong>상세 정보</strong>
          </label>
          <textarea
            placeholder="상세 정보"
            name="content"
            id="content"
            className="border-1 min-w-4/5 min-h-64 border-button-color-opaque-25 rounded-2xl p-4 resize-none"
          />
        </div>
        <button
          type="submit"
          className="block nahonsan-btn-3d-sky border-button-color mx-auto rounded-radius-full mt-16 py-4 px-8 font-basic tracking-paragraph-default font-bold text-size-md"
        >
          상품 등록 완료
        </button>
      </form>
    </>
  );
}
