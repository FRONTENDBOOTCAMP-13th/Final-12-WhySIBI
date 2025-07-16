import Image from 'next/image';
import LikeButton from './Like_button';
import DropdownSize from '../Dropdown/Dropdown_size';
import ButtonBasic from '../Buttons/Button_basic';

interface ShoppingCardType {
  title: string;
  originalPrice: number;
  price: number;
}

function ShoppingCard({ title, originalPrice, price }: ShoppingCardType) {
  const stars = [1, 2, 3, 4, 5];
  return (
    <section className="min-w-[500]">
      <header className="flex items-center gap-28 justify-between">
        <h2 className="text-2xl font-semibold mt-4">{title}</h2>
        <LikeButton isLiked={false} />
      </header>

      {/* 평점, 리뷰 */}
      <p className="flex gap-2 items-center">
        {/* 나중에 db받아오면 사용 */}
        <span className="flex gap-[1px]">
          {stars.map(star => (
            <Image
              className="inline"
              key={star}
              src="/image/starIcon.svg"
              alt="평점"
              width={16}
              height={16}
              aria-hidden={true}
            />
          ))}
        </span>
        <span className="font-bold text-xl" aria-label="5점 만점에 4점">
          4.9
        </span>
        <span className="text-[#777777] ">리뷰 855</span>
      </p>

      {/* 가격정보 */}
      <section>
        <h3 className="sr-only">가격정보</h3>
        <p className="pt-1">
          <strong className="text-flame-250 text-2xl" aria-label="할인율">
            91%
          </strong>
          <s className="text-[#a7a7a7] text-xl ml-3" aria-label="정가">
            {originalPrice.toLocaleString()}원
          </s>
        </p>
        <p className="text-3xl font-black pt-2" aria-label="할인가">
          {price.toLocaleString()}
          <span className="text-xl font-bold ml-2">원</span>
        </p>
        <dl className="text-[#777777] font-bold w-[160px] flex justify-between pt-6 pb-3">
          <dt>배송</dt>
          <dd>무료배송</dd>
        </dl>
      </section>

      {/* 상품 옵션 선택 영역 */}
      {/* 나중에 셀렉박스 안에 들어올옵션 받아올 예정 */}
      <fieldset className="w-[400px] border-y-1 border-[#eaeaea]">
        <legend className="sr-only">상품 옵션 선택</legend>

        <div className="w-[400px] border-b-1 border-[#eaeaea] pt-5 pb-2">
          <div className="w-[340px] flex justify-between">
            <label htmlFor="size-select" className="w-[64px] text-center">
              사이즈
            </label>
            <DropdownSize
              id={'size-select'}
              content={'사이즈를 선택해 주세요'}
            ></DropdownSize>
          </div>
          <div className="w-[340px] flex justify-between pt-3">
            <label className="w-[64px] text-center">색상</label>
            <DropdownSize
              id={'color-select'}
              content={'색상을 선택해주세요'}
            ></DropdownSize>
          </div>
        </div>
        <div className="w-[340px] flex justify-between pt-3 pb-4">
          <label className="w-[64px] text-center">구매수량</label>
          <DropdownSize
            id={'quantity-select'}
            content={'수량을 선택해주세요'}
          ></DropdownSize>
        </div>
      </fieldset>

      {/* 구매 버튼 영역 */}
      <div className="pt-4 flex gap-3">
        <ButtonBasic
          text={'장바구니'}
          background={'white'}
          color={'flame-250'}
        ></ButtonBasic>
        <ButtonBasic
          text={'바로구매'}
          background={'flame-250'}
          color={'white'}
        ></ButtonBasic>
      </div>
    </section>
  );
}

export default ShoppingCard;
