'use client';

import useMenuStore from '@/zustand/menuStore';
import Link from 'next/link';

function ShoppingSubcategory() {
  const { mainCategoryId, subCategoryId, subMenuData, handleMenuClick } =
    useMenuStore();

  const categoryData =
    subMenuData.shopping.items['카테고리'].items[mainCategoryId];

  return (
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
  );
}
export default ShoppingSubcategory;
