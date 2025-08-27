import CartAddressInput from '../cart/Cart_address_input';
import OrderItem from './Order_item';

export default function OrderMain() {
  return (
    <section className="max-w-[1280px] mx-auto w-full flex flex-col justify-center">
      <CartAddressInput />
      <ul className="border-1 px-5 pt-3 rounded-2xl">
        <OrderItem />
      </ul>
    </section>
  );
}
