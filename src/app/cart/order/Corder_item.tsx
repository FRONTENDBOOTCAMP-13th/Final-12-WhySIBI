import Image from 'next/image';

export default function CorderItem({ quantity, color, size, product }) {
  console.log('프덕', product);
  return (
    <li className="px-1 py-6 flex gap-6 border-b-1 border-gray-150">
      <Image
        src={product.image.path}
        className="w-40 h-40 rounded-md"
        width={80}
        height={80}
        alt={product.name}
      ></Image>

      <section className="flex flex-col gap-1.5">
        <h3 className="font-bold text-size-lg">{product.name}</h3>
        <p>
          옵션 |{' '}
          <strong>
            [color] {color} / [size] {size}
          </strong>
        </p>
        <p>
          수량 | <strong>{quantity}</strong>
        </p>
        <p>
          배송 | <strong>무료</strong>
        </p>

        <p>
          총 상품금액 |{' '}
          <strong>{(product.price * quantity).toLocaleString()}</strong>
        </p>
      </section>
    </li>
  );
}
