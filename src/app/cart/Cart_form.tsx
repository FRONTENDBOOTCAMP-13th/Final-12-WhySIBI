import CartList from './Cart_list';

export default function CartForm() {
  return (
    <form action="" className="flex justify-center gap-5">
      <section className="min-w-[630px] flex flex-col gap-6">
        <div className="border-1 px-5 py-3 rounded-2xl flex justify-between items-center">
          <div className="flex items-center gap-3">
            <input type="checkbox" id="allcheck" className="w-4 h-4" />
            <label htmlFor="allcheck" className="text-lg text-gray-550">
              모두 선택
            </label>
          </div>
          <button className="border-2 rounded-3xl text-button-color w-24 h-9 font-bold">
            선택삭제
          </button>
        </div>
        {/* 나중에 불러오면 map으로 처리 */}
        <ul className="flex flex-col border-1 px-5 pt-3 rounded-2xl">
          <CartList />
          <CartList />
        </ul>
      </section>
      <aside className="min-w-[630px] flex flex-col gap-6">
        <section className="border-1 px-5 py-6 rounded-2xl">
          <h3 className="text-xl font-extrabold border-b-1 pb-3 border-gray-150">
            배송지
          </h3>
          <p className="text-gray-550 pb-8 border-b-1 border-gray-150 mt-3">
            부산 동래구 사직로 55-32(사직야구장)
          </p>
          <div className="flex justify-center mt-6">
            <button className="border-2 rounded-3xl text-button-color w-24 h-9 font-bold">
              변경하기
            </button>
          </div>
        </section>
        <section className="border-1 px-5 py-6 rounded-2xl">
          <h3 className="text-xl font-extrabold border-b-1 pb-3 border-gray-150">
            결제금액
          </h3>
          <dl className="flex flex-col gap-5 pt-4 pb-6 border-b-1 border-gray-150">
            <div className="flex justify-between text-xl">
              <dt className="text-gray-550 ">총 상품금액</dt>
              <dd className="font-extrabold">123,000원</dd>
            </div>
            <div className="flex justify-between text-xl ">
              <dt className="text-gray-550">총 배송비</dt>
              <dd className="text-flame-250 font-extrabold">무료배송</dd>
            </div>
          </dl>

          <dl className="flex justify-between text-xl pt-6">
            <dt className="text-gray-550">결제예정금액</dt>
            <dd className="font-extrabold">123,000원</dd>
          </dl>
        </section>
        <button
          className={`box-border cursor-pointer bg-flame-250 w-full h-[48px] text-white border-2 border-flame-250 rounded-sm font-bold`}
        >
          총 123,000 구매하기
        </button>
      </aside>
    </form>
  );
}
