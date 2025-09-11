export default function OrderModal() {
  return (
    <>
      <div>
        <p>배송 상태 수정</p>
        <form action="">
          <div>
            <label htmlFor="OS010">상품 준비중</label>
            <input type="radio" name="DeliveryState" id="OS010" value="OS010" />
            <label htmlFor="OS020">배송 준비중</label>
            <input type="radio" name="DeliveryState" id="OS020" value="OS020" />
            <label htmlFor="OS030">배송중</label>
            <input type="radio" name="DeliveryState" id="OS030" value="OS030" />
            <label htmlFor="OS035">배송 완료</label>
            <input type="radio" name="DeliveryState" id="OS035" value="OS035" />
          </div>
        </form>
      </div>
    </>
  );
}
