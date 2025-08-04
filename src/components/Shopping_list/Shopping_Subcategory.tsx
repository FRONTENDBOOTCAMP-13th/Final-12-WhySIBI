'use client';

import useMenuStore from '@/zustand/menuStore';
import Link from 'next/link';

function ShoppingSubcategory() {
  const { mainCategoryId, subCategoryId, subMenuData, handleMenuClick } =
    useMenuStore();

  const categoryData =
    subMenuData.shopping.items['카테고리'].items[mainCategoryId];

  if (!categoryData) {
    console.log('카테고리 데이터 없음', mainCategoryId);
    return <div>메인 카테고리에 데이터가 없습니다.</div>;
  }

  if (!categoryData.subCategory?.length) {
    console.log('서브카테고리 없음', categoryData);
    return <div>서브 카테고리가 없습니다.</div>;
  }
  return (
    <div className="pb-20">
      <ul className="subcategory-container">
        {categoryData.subCategory.map(sub => {
          const activeCategory = subCategoryId === sub.id;
          return (
            <li key={sub.id}>
              <Link
                href={`/shopping/category/${mainCategoryId}/${sub.id}`}
                onClick={() => {
                  handleMenuClick('shopping', mainCategoryId, sub.id);
                }}
                className={`subcategory
                  ${activeCategory ? 'subcategory-active' : ''}
                  `}
              >
                {sub.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default ShoppingSubcategory;
