'use client';
import TimeStamp from '@/components/basic_component/Time_stamp';
import Title from '@/components/Title';
import useMenuStore from '@/zustand/menuStore';
import Link from 'next/link';
import { useParams } from 'next/navigation';

function ShoppingBestSection() {
  const { mainCategoryId, subMenuData, handleMenuClick } = useMenuStore();
  const params = useParams();

  const categoryData = Object.values(
    subMenuData.shopping.items['카테고리'].items,
  );

  if (!categoryData) {
    console.log('카테고리 데이터 없음', mainCategoryId);
    return <div>메인 카테고리에 데이터가 없습니다.</div>;
  }

  const top100 = !params.mainCategoryId;

  return (
    <div className="text-center">
      <Title
        title="나혼산 BEST"
        subTitle={
          <>
            현재시각 <TimeStamp /> 실시간 인기상품 🔥🔥🔥
          </>
        }
      />

      <div>
        <Link href="/shopping/best">TOP100</Link>
      </div>

      <ul className="subcategory-container">
        {categoryData.map(main => {
          const activeCategory = mainCategoryId === main.id;
          return (
            <li key={main.id}>
              <Link
                href={`/shopping/best/${main.id}/`}
                onClick={() => {
                  handleMenuClick('shopping', main.id);
                }}
                className={`subcategory
                  ${activeCategory ? 'subcategory-active' : ''}
                  `}
              >
                {main.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ShoppingBestSection;
