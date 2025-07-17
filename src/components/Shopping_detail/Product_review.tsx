import { ReactElement, useState } from 'react';

interface ProductReviewProps {
  stars: ReactElement[][];
}

export default function ProductReview({ stars }: ProductReviewProps) {
  const selectedStar = [...stars, '별점순'];
  const [active, setActive] = useState(true);
  const [selected, setSelected] = useState(selectedStar[5]);
  return (
    <section>
      <div>
        <h3>리뷰 876</h3>
        <span>추천순</span>
        <span>최근등록순</span>
        <span>사진리뷰</span>
        {/* <select name="" id="" className="custom-select">
          <option value="">별점순</option>
          <option value="" className="bg-blue-300">
            ⭐⭐⭐⭐⭐
          </option>
          <option value=""></option>
          <option value="">{stars[2]}</option>
          <option value="">{stars[3]}</option>
          <option value="">{stars[4]}</option>
        </select> */}

        <div className="selectBox cursor-pointer">
          <div
            onClick={() => {
              setActive(!active);
            }}
            className="selected w-[110px] flex items-center justify-between px-3 py-1 border-2 border-[#c7c7c7] rounded-md"
          >
            <div className="selected-value flex w-16">{selected}</div>
            <div className="w-[13px] h-[13px]">
              <svg
                className={`w-full h-full ${active ? 'scale-y-[-1] transition-all duration-100 ease-in' : ''}`}
                viewBox="0 0 30 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 26L0.27757 0.499999L29.7224 0.499996L15 26Z"
                  fill="#D9D9D9"
                />
              </svg>
            </div>
          </div>
          <ul
            className={`optionList absolute p-2 w-[110px] rounded-md bg-white  ${active ? '' : 'max-h-0 hidden'}`}
          >
            <li
              className="flex gap-[2px] hover:bg-livealone-columbia-blue"
              onClick={() => {
                setSelected(stars[0]);
                setActive(!active);
              }}
            >
              {stars[0]}
            </li>
            <li
              className="flex gap-[2px] hover:bg-livealone-columbia-blue"
              onClick={() => {
                setSelected(stars[1]);
                setActive(!active);
              }}
            >
              {stars[1]}
            </li>
            <li
              className="flex gap-[2px] hover:bg-livealone-columbia-blue"
              onClick={() => {
                setSelected(stars[2]);
                setActive(!active);
              }}
            >
              {stars[2]}
            </li>
            <li
              className="flex gap-[2px] hover:bg-livealone-columbia-blue"
              onClick={() => {
                setSelected(stars[3]);
                setActive(!active);
              }}
            >
              {stars[3]}
            </li>
            <li
              className="flex gap-[2px] hover:bg-livealone-columbia-blue"
              onClick={() => {
                setSelected(stars[4]);
                setActive(!active);
              }}
            >
              {stars[4]}
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
