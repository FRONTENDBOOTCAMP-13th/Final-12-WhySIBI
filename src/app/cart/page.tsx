import CartMain from './Cart_main';

export default async function Cart() {
  return (
    <div className="max-w-[1280px] mx-auto my-0 flex px-3 justify-center ">
      <section className="bg-white md:min-w-[640px] lg:min-w-[1024px] xl:min-w-[1280px] pb-24">
        <div className="max-w-[1280px] mx-auto pt-12 pb-6">
          <h2 className="text-3xl font-bold mb-2">장바구니 🛒</h2>
        </div>

        <CartMain />
      </section>
    </div>
  );
}
