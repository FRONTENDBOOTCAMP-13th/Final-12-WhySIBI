import Image from 'next/image';
import ProductCard from '../product_card';
import LikeButton from './Like_button';
import DropdownSize from '../Dropdown/Dropdown_size';
import ButtonBasic from '../Buttons/Button_basic';

function ShoppingDetail() {
  const stars = [1, 2, 3, 4, 5];

  return (
    <main className="bg-white flex gap-24 justify-center min-w-[1280]">
      {/* 상품 사진 영역 */}
      <section className="bg-white min-w-[600px] min-h-[600px] overflow-hidden  flex justify-center items-center rounded-sm shadow-md">
        <Image
          src="/image/airconCleanKit.png"
          width={590}
          height={590}
          className="object-cover"
          alt="제품이미지"
        />
      </section>
      {/* 상품 정보 영역 */}
      <section className="min-w-[500]">
        <div className="flex items-center gap-28">
          <h3 className="text-2xl font-semibold mt-4">
            플로우 저상형 침대깔판
          </h3>
          <LikeButton isLiked={false} />
        </div>
        <div className="flex gap-2 items-center">
          <div className="flex gap-[1px]">
            {stars.map(star => (
              <Image
                className="inline"
                key={star}
                src="/image/starIcon.svg"
                alt="평점"
                width={16}
                height={16}
              />
            ))}
          </div>
          <span className="font-bold text-xl">4.9</span>
          <span className="text-[#777777] ">리뷰 855</span>
        </div>
        <div>
          <div className="pt-1">
            <strong className="text-flame-250 text-2xl">91%</strong>
            <s className="text-[#a7a7a7] text-xl ml-3">124,000,432원</s>
          </div>
          <div className="text-3xl font-black pt-2">
            124,000<span className="text-xl font-bold ml-2">원</span>
          </div>
          <div className="text-[#777777] font-bold w-[160px] flex justify-between pt-6 pb-3">
            <span>배송</span> <span>무료배송</span>
          </div>
        </div>
        <div className="w-[400px] border-y-1 border-[#eaeaea]">
          <div className="w-[400px] border-b-1 border-[#eaeaea] pt-5 pb-2">
            <div className="w-[340px] flex justify-between">
              <span className="w-[64px] text-center">사이즈</span>
              <DropdownSize content={'사이즈를 선택해 주세요'}></DropdownSize>
            </div>
            <div className="w-[340px] flex justify-between pt-3">
              <span className="w-[64px] text-center">색상</span>
              <DropdownSize content={'색상을 선택해주세요'}></DropdownSize>
            </div>
          </div>
          <div className="w-[340px] flex justify-between pt-3 pb-4">
            <span className="w-[64px] text-center">구매수량</span>
            <DropdownSize content={'수량을 선택해주세요'}></DropdownSize>
          </div>
        </div>
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
    </main>
  );
}

export default ShoppingDetail;
