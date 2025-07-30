import CartMain from './Cart_main';

export default async function Cart() {
  return (
    <section className="bg-white min-w-[1280px] pb-24">
      <div className="w-[1280px] mx-auto pt-12 pb-6">
        <h2 className="text-3xl font-bold mb-2">장바구니 🛒</h2>
        {/* <p className="text-gray-550">총 2개 상품 담아주셨네요!</p> */}
      </div>

      <CartMain />
    </section>
  );
}
