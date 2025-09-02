'use client';
import ProductCategories, {
  ThemeOptions,
} from '@/components/optionArray/optionArray';
import { ProductRegistration } from '@/data/actions/seller';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useActionState, useEffect, useState } from 'react';
import RegistrationPreview from '../preview_modal/preview_modal';

export default function ProductRegistrationForm() {
  //이미지 미리보기
  const [imageSrc, setImageSrc] = useState('');
  // 상세이미지 미리보기
  const [detailImageSrc, setDetailImageSrc] = useState('');
  const imageSrchandleFilePath = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    const file = target.files?.[0];
    if (file) {
      setImageSrc(URL.createObjectURL(file));
    }
  };
  const detailImageSrchandleFilePath = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const target = e.target as HTMLInputElement;
    const file = target.files?.[0];
    if (file) {
      setDetailImageSrc(URL.createObjectURL(file));
    }
  };
  // 옵션 갯수 선택
  const [sizeOptionQuantity, setSizeOptionQuantity] = useState(0);
  const [colorOptionQuantity, setColorOptionQuantity] = useState(0);
  const [keywordCount, setKeywordCount] = useState(0);
  //가격과 할인율 상태 변화
  const [price, setPrice] = useState('');
  const [saleValue, setSaleValue] = useState('');

  const calculateDiscountedPrice = () => {
    const numPrice = parseFloat(price) || 0;
    const numSaleValue = parseFloat(saleValue) || 0;

    if (numPrice > 0 && numSaleValue >= 0 && numSaleValue <= 100) {
      const discount = (numPrice * numSaleValue) / 100;
      return Math.floor(numPrice - discount);
    }
    return 0;
  };
  const discountedPrice = calculateDiscountedPrice();

  const [previewState, setPreviewState] = useState(false);

  const [state, formAction] = useActionState(ProductRegistration, null);
  const router = useRouter();
  useEffect(() => {
    if (state?.ok) {
      const navigateAndRefresh = async () => {
        alert('상품 등록이 완료되었습니다. 등록 리스트 페이지로 이동합니다.');
        await router.push('/my_page'); // 이동 완료 기다림
        router.refresh(); // 새로고침
      };
      navigateAndRefresh();
    } else {
      console.log(state?.message);
      console.log(state?.errors);
    }
  }, [state, router]);

  return (
    <>
      <form
        action={formAction}
        className="relative flex flex-col gap-10 border-2 mt-6 md:mt-8 mx-4 md:mx-auto max-w-[46.25rem] rounded-2xl md:rounded-4xl border-button-color-opaque-25 px-6 py-12 md:px-12 lg:px-20 md:py-16 lg:py-24"
      >
        <div className="flex items-center gap-10">
          <Image
            src={imageSrc || ''}
            alt="상품 사진"
            width={112}
            height={112}
            className=" border-2 border-black w-28 h-28 mask-radial-at-center object-cover bg-gray-200"
          />
          <label
            htmlFor="attach"
            className="nahonsan-btn-3d-vanilla rounded-full font-basic font-bold bg-vanilla-300 p-2.5 cursor-pointer"
          >
            <strong>상품이미지</strong>
          </label>
          <input
            type="file"
            placeholder="상품사진"
            name="attach"
            id="attach"
            className="hidden"
            accept="image/*"
            onChange={imageSrchandleFilePath}
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
          <label htmlFor="originalPrice">
            <strong>상품 가격</strong>
          </label>
          <input
            type="text"
            placeholder="상품가격"
            name="originalPrice"
            id="originalPrice"
            value={price}
            onChange={e => setPrice(e.target.value)}
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
            value={saleValue}
            onChange={e => setSaleValue(e.target.value)}
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
            name="price"
            id="price"
            value={discountedPrice.toString()}
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
          <div className="w-full flex flex-col gap-4">
            <label htmlFor="keyword">
              <strong>제품 키워드</strong>
            </label>
            <button
              type="button"
              onClick={() => setKeywordCount(keywordCount + 1)}
              className="text-gray-400 w-fit ml-auto"
            >
              키워드 추가
            </button>
            {Array.from({ length: keywordCount }, (_, i) => (
              <input
                key={i}
                type="text"
                name="keyword"
                id="keyword"
                className="font-basic block w-full pl-4 border-2 outline-0  border-button-color-opaque-25 rounded-full h-16 py-4  focus:border-button-color transition-all duration-200 ease-in"
                placeholder="제품에 어울리는 키워드를 작성해주세요 (검색시 제품을 노출하려는 용도입니다.)"
              />
            ))}
          </div>
        </div>
        <div className="w-full">
          <p>제품 카테고리를 선택해주세요</p>
          <div className=" grid grid-cols-2 md:grid-cols-3 gap-10 max-h-60 overflow-y-scroll p-4 border border-gray-200 rounded-lg">
            {ProductCategories.map((category, i) => (
              <div key={i} className="w-full  flex items-center gap-3">
                <label
                  htmlFor={`category-${category.code}`}
                  className="flex items-center space-x-2 cursor-pointer hover:bg-gray-50 p-2 rounded"
                ></label>
                <input
                  type="checkbox"
                  id={`category-${category.code}`}
                  name="category"
                  value={category.code}
                  aria-label={`${category.value} 카테고리 선택`}
                  className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500 text-size-sm"
                />
                <span className="text-sm text-gray-700">{category.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <label htmlFor="tag">제품의 취향을 선택해주세요</label>
          <select name="tag" id="tag" aria-label="취향 선택">
            {ThemeOptions.map((tag, i) => (
              <option key={i} value={tag.value}>
                {tag.text}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="size_option_count"> 사이즈 옵션의 갯수는?</label>
          <select
            id="size_option_count"
            onChange={e => {
              setSizeOptionQuantity(parseInt(e.target.value));
            }}
          >
            <option value="1">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div>
          <label htmlFor="color_option_count">컬러 옵션의 갯수는?</label>
          <select
            id="color_option_count"
            onChange={e => {
              setColorOptionQuantity(parseInt(e.target.value));
            }}
          >
            <option value="1">0</option>
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
                  <div key={i} className="size-group flex flex-col ">
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
                  <div key={i} className="color-group flex flex-col ">
                    <div className="option-number">{i + 1}</div>
                    <input
                      type="text"
                      name="color"
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
            src={detailImageSrc || ''}
            alt="상품 상세 사진"
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
            onChange={detailImageSrchandleFilePath}
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
        <button
          type="button"
          className="ml-auto block nahonsan-btn-3d-white border-button-color rounded-radius-full mt-16 py-4 px-8 font-basic tracking-paragraph-default font-bold text-size-md"
          onClick={() => setPreviewState(true)}
        >
          미리보기
        </button>
        {previewState === true && (
          <RegistrationPreview onClose={() => setPreviewState(false)} />
        )}
      </form>
    </>
  );
}
