export default function OrderModal() {
  return (
    <>
      <div className="w-2/4 mx-auto border-2 rounded-2xl p-6">
        <div className="flex justify-between mb-4">
          <p className="font-basic text-xl font-bold">배송 상태 수정</p>
          <button type="button">X</button>
        </div>
        <form action="">
          <div className="flex gap-4">
            <div>
              <label htmlFor="OS010">상품 준비중</label>
              <input
                type="radio"
                name="DeliveryState"
                id="OS010"
                value="OS010"
              />
            </div>
            <div>
              <label htmlFor="OS020">배송 준비중</label>
              <input
                type="radio"
                name="DeliveryState"
                id="OS020"
                value="OS020"
              />
            </div>
            <div>
              <label htmlFor="OS030">배송중</label>
              <input
                type="radio"
                name="DeliveryState"
                id="OS030"
                value="OS030"
              />
            </div>
            <div>
              <label htmlFor="OS035">배송 완료</label>
              <input
                type="radio"
                name="DeliveryState"
                id="OS035"
                value="OS035"
              />
            </div>
          </div>
          <button
            type="submit"
            className="block nahonsan-btn-3d-sky border-button-color rounded-radius-full mt-16 py-4 px-8 font-basic tracking-paragraph-default font-bold text-size-md"
          >
            수정 완료
          </button>
        </form>
      </div>
    </>
  );
}
