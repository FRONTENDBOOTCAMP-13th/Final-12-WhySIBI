type PagenationProps = {
  page: number; //현재페이지
  totalPage: number; //전체 페이지수
  onPageTurner: (page: number) => void; //현재페이지 넘기기
};

function Pagenation({ page, totalPage, onPageTurner }: PagenationProps) {
  return (
    <div className="flex items-center justify-center gap-3">
      {/* 맨 처음 << 버튼 */}
      <button
        className="w-7 h-7"
        onClick={() => {
          onPageTurner(1); //1페이지로
        }}
        disabled={page === 1} //1보다 작을 수 없음(비활성화)
      >
        <svg
          className="w-full h-full cursor-pointer"
          viewBox="0 0 70 70"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <rect
            x="70"
            y="70"
            width="70"
            height="70"
            transform="rotate(-180 70 70)"
            fill="url(#pattern0_109_680)"
          />
          <defs>
            <pattern
              id="pattern0_109_680"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use xlinkHref="#image0_109_680" transform="scale(0.03125)" />
            </pattern>
            <image
              id="image0_109_680"
              width="32"
              height="32"
              preserveAspectRatio="none"
              xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAVFJREFUWIXtk0FKAzEUhv+XcaGn0JUbxYLiBaYZeg2pFLF6nmIVe4+SN+lWBBdFqZfp5LlpUWonk3GalfOvAl/y/i+QAG3atPGEmS+ttRdlPM/zQ2Y+btKhfOUAXpxzr8aYwSafzWZHIrIAsMjz/GrnAkopt14S0XhTYrlcHgDYB5CIyPNfJUoF0jR9E5EBAAeAiGjMzMM1z7Ls8wdXIjJh5pu6AlS1wRjTJ6KnlawAuNdajzz8Vms93plAbIkggZgSwQKxJGoJxJCoLQAAzHwN4HFV4pRS52mazst4URSdXq/3sW1W6Tesk6IoXPWu7dmre8AY08f37YSI7rTW7z5ednug4SMkomG3230I5Y0EYpQHC8QqDxLYeNG/hlfxRgKxy70C0+n0NEmS+Wq4E5FBlmWTUB6aqm/oAMAzvIo3i7X2hJnPfNxa29l5cZs2/ypfmVT+TBgT7jEAAAAASUVORK5CYII="
            />
          </defs>
        </svg>
      </button>
      {/* 이전 < 버튼 */}
      <button
        className="w-7 h-7"
        onClick={() => {
          onPageTurner(page - 1); //현재 페이지에서 1 감소
        }}
        disabled={page === 1} //1보다 작을 수 없음(비활성화)
      >
        <svg
          className="w-full h-full cursor-pointer"
          viewBox="0 0 70 70"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <rect
            x="70"
            y="70"
            width="70"
            height="70"
            transform="rotate(-180 70 70)"
            fill="url(#pattern0_109_679)"
          />
          <defs>
            <pattern
              id="pattern0_109_679"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use xlinkHref="#image0_109_679" transform="scale(0.03125)" />
            </pattern>
            <image
              id="image0_109_679"
              width="32"
              height="32"
              preserveAspectRatio="none"
              xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAeFJREFUWIXtlL+LE0Ecxd/3JlkkIGIhWimxEjksxcTGHDtsjII/inQ2YqGV+Bfc4p9wha2dIIegIDmHnWGbVVJYioIIV4oiSWmOZPNsJniFxW6SS2NetfP4zvd9hp3vAGut9b9LihZaa0+TvDIej991Op2DZQFslKg1IvI6CIK01+udWjkAyZH/bARB0DfGXFgpQJ7ndwB89MvzSqkPzrmtlQG02+3veZ5fA/DGWydJGufcw0UACl/CmUiKtXZbRLYP2TtZlj2J43h65AAzOecekHwGoOqtV7Va7V6z2fy9EgAAsNZqALsATnirD+B2GIY/VgIAAMaYTaXUWwDnvLVP8obW+kuR/WXegX8qiqJPk8mkgb8TUheRPZKFDrcwAABUq9VARI4dsiZF9y4M4Jy7TLJPchMASH4D0BERHjlAkiR3SaYAzvjw95VKpRGG4deiPeYGsNY+FpFdADUf/nw4HG61Wq1fZfqUnoI0TSvT6XSH5CNvkeRTrXVctldpgCzLjo9Go5cArnvrgOR9rfWLecJLARhj6n7eL3rrJ8lbWuv+vOEAUClSFMfxhlLKAah763Oe5zejKNpfJBwodwlnc26VUleXEQ6U+AVJkpwVkUuDwWCv2+3mywhfa621AOAPTsO2Pty4P9YAAAAASUVORK5CYII="
            />
          </defs>
        </svg>
      </button>
      {/* 페이지 번호 */}
      <span className="flex justify-center items-center w-10 h-10 bg-gradient-to-r from-vanilla-300 to-columbia-blue-250 rounded-xl font-semibold ">
        {page}/{totalPage}
      </span>
      {/* 다음 > 버튼 */}
      <button
        className="w-7 h-7 "
        onClick={() => {
          onPageTurner(page + 1); //현재 페이지에서 1 증가
        }}
        disabled={page === totalPage} //총 페이지 수 보다 클 수 없음(비활성화)
      >
        <svg
          className="w-full h-full scale-x-[-1] cursor-pointer"
          viewBox="0 0 70 70"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <rect
            x="70"
            y="70"
            width="70"
            height="70"
            transform="rotate(-180 70 70)"
            fill="url(#pattern0_109_679)"
          />
          <defs>
            <pattern
              id="pattern0_109_679"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use xlinkHref="#image0_109_679" transform="scale(0.03125)" />
            </pattern>
            <image
              id="image0_109_679"
              width="32"
              height="32"
              preserveAspectRatio="none"
              xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAeFJREFUWIXtlL+LE0Ecxd/3JlkkIGIhWimxEjksxcTGHDtsjII/inQ2YqGV+Bfc4p9wha2dIIegIDmHnWGbVVJYioIIV4oiSWmOZPNsJniFxW6SS2NetfP4zvd9hp3vAGut9b9LihZaa0+TvDIej991Op2DZQFslKg1IvI6CIK01+udWjkAyZH/bARB0DfGXFgpQJ7ndwB89MvzSqkPzrmtlQG02+3veZ5fA/DGWydJGufcw0UACl/CmUiKtXZbRLYP2TtZlj2J43h65AAzOecekHwGoOqtV7Va7V6z2fy9EgAAsNZqALsATnirD+B2GIY/VgIAAMaYTaXUWwDnvLVP8obW+kuR/WXegX8qiqJPk8mkgb8TUheRPZKFDrcwAABUq9VARI4dsiZF9y4M4Jy7TLJPchMASH4D0BERHjlAkiR3SaYAzvjw95VKpRGG4deiPeYGsNY+FpFdADUf/nw4HG61Wq1fZfqUnoI0TSvT6XSH5CNvkeRTrXVctldpgCzLjo9Go5cArnvrgOR9rfWLecJLARhj6n7eL3rrJ8lbWuv+vOEAUClSFMfxhlLKAah763Oe5zejKNpfJBwodwlnc26VUleXEQ6U+AVJkpwVkUuDwWCv2+3mywhfa621AOAPTsO2Pty4P9YAAAAASUVORK5CYII="
            />
          </defs>
        </svg>
      </button>
      {/* 맨 끝 >> 버튼 */}
      <button
        className="w-7 h-7"
        onClick={() => {
          onPageTurner(totalPage); //맨 끝 페이지로
        }}
        disabled={page === totalPage} //총 페이지 수 보다 클 수 없음(비활성화)
      >
        <svg
          className="w-full h-full scale-x-[-1] cursor-pointer"
          viewBox="0 0 70 70"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <rect
            x="70"
            y="70"
            width="70"
            height="70"
            transform="rotate(-180 70 70)"
            fill="url(#pattern0_109_680)"
          />
          <defs>
            <pattern
              id="pattern0_109_680"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use xlinkHref="#image0_109_680" transform="scale(0.03125)" />
            </pattern>
            <image
              id="image0_109_680"
              width="32"
              height="32"
              preserveAspectRatio="none"
              xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAVFJREFUWIXtk0FKAzEUhv+XcaGn0JUbxYLiBaYZeg2pFLF6nmIVe4+SN+lWBBdFqZfp5LlpUWonk3GalfOvAl/y/i+QAG3atPGEmS+ttRdlPM/zQ2Y+btKhfOUAXpxzr8aYwSafzWZHIrIAsMjz/GrnAkopt14S0XhTYrlcHgDYB5CIyPNfJUoF0jR9E5EBAAeAiGjMzMM1z7Ls8wdXIjJh5pu6AlS1wRjTJ6KnlawAuNdajzz8Vms93plAbIkggZgSwQKxJGoJxJCoLQAAzHwN4HFV4pRS52mazst4URSdXq/3sW1W6Tesk6IoXPWu7dmre8AY08f37YSI7rTW7z5ednug4SMkomG3230I5Y0EYpQHC8QqDxLYeNG/hlfxRgKxy70C0+n0NEmS+Wq4E5FBlmWTUB6aqm/oAMAzvIo3i7X2hJnPfNxa29l5cZs2/ypfmVT+TBgT7jEAAAAASUVORK5CYII="
            />
          </defs>
        </svg>
      </button>
    </div>
  );
}

export default Pagenation;
