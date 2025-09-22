import CorderMain from './Corder_main';

export default function CartOrder() {
  return (
    <main>
      <section className="bg-white md:min-w-[640px] lg:min-w-[1024px] xl:min-w-[1280px] pb-24 px-6">
        <div className="max-w-[1280px] mx-auto pt-12 pb-6">
          <h2 className="text-3xl font-bold mb-2">주문서 🧾</h2>
        </div>
        <CorderMain />
      </section>
    </main>
  );
}
