export default function ProductRegistrationForm() {
  return (
    <>
      <h2>테스트</h2>
      <form action="" className="flex flex-col">
        <input type="file" placeholder="상품사진" name="mainImages" />
        <input type="text" placeholder="상품제목" name="name" />
        <input type="text" placeholder="상품가격" name="price" />
        <input type="text" placeholder="할인율" name="sale" />
        <input type="text" placeholder="할인 가격" name="salePrice" readOnly />
        <input type="text" placeholder="수량" name="quantity" />
        <select name="tag" id="tag">
          <option value="">1</option>
        </select>
        <select name="" id="">
          사이즈 옵션의 갯수는?
          <option value="">1</option>
          <option value="">1</option>
        </select>
        <select name="" id="">
          컬러 옵션의 갯수는?
          <option value="">1</option>
          <option value="">1</option>
        </select>

        <div className="options-container">
          <div id="size-options" className="option-group">
            <h3>사이즈 옵션</h3>
            <div id="size-inputs" className="option-inputs">
              <div className="size-group flex">
                <div className="option-number">1</div>
                <input
                  type="text"
                  placeholder="사이즈 ${i} (예: S, M, L, XL)"
                ></input>
              </div>
            </div>
          </div>

          <div id="color-options" className="option-group">
            <h3>컬러 옵션</h3>
            <div id="color-inputs" className="option-inputs">
              <div className="color-group flex">
                <div className="option-number">1</div>
                <input
                  type="text"
                  placeholder="컬러 ${i} (예: 빨강, 파랑, 검정)"
                ></input>
              </div>
            </div>
          </div>
        </div>

        <input type="file" placeholder="상세 정보 이미지" />
        <input type="text" placeholder="상세 정보" name="content" />
      </form>
    </>
  );
}
