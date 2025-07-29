export default function TalkCategory() {
  return (
    <div className="flex gap-5 mt-5">
      <button
        type="button"
        className="nahonsan-btn-3d-white border-[1px] border-button-color-opaque-25 rounded-full py-3 px-8  text-center"
      >
        전체
      </button>
      <button
        type="button"
        className="nahonsan-btn-3d-white border-[1px] border-button-color-opaque-25 rounded-full py-3 px-8 text-center"
      >
        홈스타일링
      </button>
      <button
        type="button"
        className="nahonsan-btn-3d-white border-[1px] border-button-color-opaque-25 rounded-full py-3 px-8 text-center"
      >
        상품 추천
      </button>
      <button
        type="button"
        className="nahonsan-btn-3d-white border-[1px] border-button-color-opaque-25 rounded-full py-3 px-8 text-center"
      >
        계약
      </button>
      <button
        type="button"
        className="nahonsan-btn-3d-white border-[1px] border-button-color-opaque-25 rounded-full py-3 px-8 text-center"
      >
        집안일
      </button>
    </div>
  );
}
