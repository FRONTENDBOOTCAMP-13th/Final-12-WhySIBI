import OrderPurchaseButton from './Order_purchase_button';

export default function OrderReceipt() {
  return (
    <section className="border-2 px-5 py-6 ">
      <h3 className="font-semibold text-xl border-b-1 border-gray-150 pb-6">
        결제 금액
      </h3>
      <table className="border-b-2 w-full">
        <caption className="sr-only">주문하려는 상품의 상세금액내역</caption>
        <tbody>
          <tr>
            <th>총 상품 금액</th>
            <td>17,500원</td>
          </tr>
          <tr>
            <th>배송비</th>
            <td>0원</td>
          </tr>
          <tr>
            <th>할인금액</th>
            <td>0원</td>
          </tr>
          <tr>
            <th>총 결제 금액</th>
            <td>18210</td>
          </tr>
        </tbody>
      </table>
      <p>
        <div>
          <input type="checkbox" name="agreement" />
          <label htmlFor="agreement">
            주문 내용을 확인했으며, 결제에 동의합니다.
          </label>
        </div>
        <div>
          <input type="checkbox" name="payment" />
          <label htmlFor="payment">
            결제가 진행된후 24시간 안에 해당계좌로 다시 입금됩니다.
          </label>
        </div>
        <div>
          <input type="checkbox" name="learn" />
          <label htmlFor="learn">
            본 사이트는 학습용으로 제작된 사이트 입니다.
          </label>
        </div>
      </p>
      <OrderPurchaseButton />
    </section>
  );
}
