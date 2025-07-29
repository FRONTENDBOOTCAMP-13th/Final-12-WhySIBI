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
    <>
      <div className="text-center">
        <Title
          title="나혼산 BEST"
          subTitle={
            <>
              현재시각 <TimeStamp /> 실시간 인기상품 🔥🔥🔥
            </>
          }
        />

        {/* Top100 or 카테고리 베스트 */}
        <div className="flex justify-center mt-10 w-full mx-auto">
          <Link
            href="/shopping/best"
            className={`subcategory flex-1 font-bold text-xl py-3
                    ${top100 ? 'subcategory-active' : ''}
                    `}
          >
            TOP100
          </Link>
          <Link
            href={`/shopping/best/${mainCategoryId || categoryData[0].id}`}
            className={`subcategory flex-1 font-bold text-xl py-3
                    ${!top100 ? 'subcategory-active' : ''}
                    `}
          >
            카테고리 베스트
          </Link>
        </div>

        {/* 실시간 베스트 TOP100 */}
        <div></div>

        {/* Top100 이 아닐때만 서브카테고리 보여줌 */}
        {!top100 && (
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
                    className={`subsubcategory
                  ${activeCategory ? 'subsubcategory-active' : ''}
                  `}
                  >
                    {main.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </>
  );
}

export default ShoppingBestSection;
