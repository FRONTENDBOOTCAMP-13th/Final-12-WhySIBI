'use client';
import Image from 'next/image';
import { Product } from '@/types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';
import 'swiper/css';

interface Props {
  productList: Product[];
  selected: Product[];
  setSelected: React.Dispatch<React.SetStateAction<Product[]>>;
  onClose: () => void;
}


export default function TagProductModal({ productList, selected, setSelected, onClose }: Props) {

  const toggleSelect = (product: Product) => {
    if (selected.find((p) => p._id === product._id)) {
      setSelected(selected.filter((p) => p._id !== product._id));
    } else {
      if (selected.length >= 8) {
        alert('최대 8개까지 선택할 수 있어요.');
        return;
      }
      setSelected([...selected, product]);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex justify-center items-center" onClick={onClose}>
      <div
        className="bg-white rounded-3xl w-[520px] p-8 flex flex-col relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 모달창 닫기 버튼 */}
        <button className="absolute top-4 right-4 text-gray-500" onClick={onClose}>
          ✕
        </button>

        <h2 className="text-lg font-bold mb-1">게시글과 관련된 상품을 태그해주세요.</h2>
        <p className="text-sm text-gray-500 mb-4">
          인테리어에 사용된 상품을 8개까지 태그해주세요.
        </p>

        {/* 상품 리스트 */}
        <div className="grid grid-cols-4 gap-3 overflow-y-auto h-[330px] mb-6">
          {productList.map((product) => {
            const isSelected = selected.find((p) => p._id === product._id);
            return (
              <div
                key={product._id}
                className={`relative w-25 h-25 bg-livealone-vanilla rounded-xl overflow-hidden border-2 cursor-pointer ${
                  isSelected ? 'border-livealone-cal-poly-green' : 'border-transparent'
                }`}
                onClick={() => toggleSelect(product)}
              >
                <Image
                src={product.mainImages[0].path}
                alt={product.name}
                width={80}
                height={80}
                className="rounded-xl object-cover w-25 h-25"
              />
              <div className="w-full h-full absolute bottom-0 bg-gradient-to-b from-transparent to-livealone-vanilla"></div>
              <div className="absolute z-10 bottom-0 w-full p-1 text-livealone-cal-poly-green bg-opacity-80 text-center text-xs">
                {product.name}
              </div>
                {isSelected && (
                  <div className="absolute inset-0 bg-white/50 flex justify-center items-center text-livealone-cal-poly-green text-3xl font-bold font-logo">
                    V
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* 선택된 상품 */}
        <h3 className="text-lg font-bold mb-4 ml-4">태그된 상품</h3>
        <Swiper slidesPerView="auto" spaceBetween={12} modules={[Scrollbar]} scrollbar={{ draggable: true }} className="flex w-[436px] relative h-30 items-center gap-4 mb-6 rounded-xl">
          {selected.map((product) => {
            return (
              <SwiperSlide key={product._id} className="group relative !w-25 !h-25 rounded-2xl overflow-hidden border">
              <Image
                src={product.mainImages[0].path}
                alt={product.name}
                fill
                className="object-cover rounded-2xl"
              />
              <div className="w-full h-full absolute bottom-0 bg-gradient-to-b from-transparent to-livealone-cal-poly-green"></div>
              <div className="absolute bottom-0 w-full p-1 bg-opacity-80 text-center text-white text-xs font-light">
                {product.name}
              </div>
              <Image
                src="/image/community_icon/closeIcon.svg"
                alt={`삭제 버튼`}
                width={20}
                height={20}
                onClick={() =>
                  setSelected(selected.filter((p) => p._id !== product._id))
                }
                className="absolute top-2 right-2 z-10 cursor-pointer 
                opacity-0 translate-y-1 transition-all duration-300 ease-out
                group-hover:opacity-100 group-hover:translate-y-0 active:opacity-50"
              />
            </SwiperSlide>
          );})}
        </Swiper>

        {/* 완료 버튼 */}
        <button
          className="mx-auto px-6 py-2 rounded-full border border-blue-500 text-blue-700 hover:bg-blue-50 font-semibold"
          onClick={() => {
            console.log('선택된 상품:', selected);
            onClose();
          }}
        >
          완료
        </button>
      </div>
    </div>
  );
}
