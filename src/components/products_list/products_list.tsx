import ProductInfo from '@/components/products_list/product_info/products_linfo';
import { getProductList } from '@/data/actions/products';
import type { ProductList, ProductListProps } from '@/types';
import { useEffect, useState } from 'react';

export default function ProductList() {
  //상품 리스트 불러오는 부분
  const [productList, setProductList] = useState<ProductListProps[] | null>(
    null,
  );
  useEffect(() => {
    const producListData = async () => {
      try {
        const res = await getProductList();
        if (res) {
          setProductList(res.item);
        }
      } catch (error) {
        console.error('상품 정보 로딩 실패:', error);
      }
    };

    producListData();
  }, []);

  return (
    <nav className="mt-20">
      <ul className="flex flex-col flex-wrap gap-16">
        {productList?.map(product => (
          <ProductInfo
            key={product._id}
            _id={product._id}
            price={product.price}
            name={product.name}
            mainImages={product.mainImages}
          />
        ))}
      </ul>
    </nav>
  );
}
