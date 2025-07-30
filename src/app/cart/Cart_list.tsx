import Image from 'next/image';
import CartDeleteButton from './list_delete_button';
import { CartListProps } from '@/types/cart';

export default function CartList({
  id,
  color,
  size,
  name,
  img,
  price,
  quantity,
}: CartListProps) {
  return (
    <li className="flex gap-4 px-5 pt-6 pb-6 border-b-1 last:border-b-0">
      <input type="checkbox" id="check" className="w-5 h-5" />
      <label htmlFor="check" className="sr-only">
        선택
      </label>
      <Image
        src={`${process.env.NEXT_PUBLIC_API_URL}/${img}`}
        className="w-30 h-33 rounded-md"
        width={80}
        height={80}
        alt="상품사진"
      ></Image>
      <div className="flex-1">
        <h3 className="text-xl font-bold pb-2">{name}</h3>
        <p className="text-gray-550 text-sm pb-1">
          옵션 | {size} / {color}
        </p>
        <p className="text-gray-550 text-sm pb-3">배송 | 무료</p>
        <div className="text-xl font-bold text-right pb-3">
          {price.toLocaleString()}원
        </div>
        <div className="flex justify-end gap-6">
          <div className="border-2 rounded-3xl text-button-color w-24 h-9 font-bold flex justify-center items-center">
            <button className="flex-1 cursor-pointer">-</button>
            <span>{quantity}</span>
            <button className="flex-1 cursor-pointer">+</button>
          </div>

          <CartDeleteButton id={id} />
        </div>
      </div>
    </li>
  );
}
