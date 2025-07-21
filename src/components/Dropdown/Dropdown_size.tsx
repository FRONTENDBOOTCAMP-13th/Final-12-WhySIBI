'use client';

import { getProductInfo } from '@/data/actions/products';
import { Product } from '@/types';
import { ChangeEvent, useEffect, useState } from 'react';

export default function DropdownSize({
  onChange,
  id,
  content,
}: {
  id: string;
  content: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}) {
  const [data, setData] = useState<Product>();
  useEffect(() => {
    const getData = async () => {
      const option = await getProductInfo('1');
      // setData(option);
      // console.log('dd', option);
    };
    getData();
    console.log(data);
  }, []);

  return (
    <>
      <div className="bg-white  w-[250px] h-[31px] rounded-sm text-size-sm border-1 border-[#c7c7c7] focus-within:outline-1 relative flex items-center">
        <select
          onChange={onChange}
          name="sort"
          id={id}
          defaultValue="default"
          className="w-full text-[#777777] font-semibold cursor-pointer outline-0 appearance-none text-center"
        >
          <option value="default">{content}</option>
          <option value="latest">s</option>
          <option value="oldest">m</option>
        </select>
        <svg
          className="absolute right-3 pointer-events-none"
          width="13"
          height="13"
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
    </>
  );
}
