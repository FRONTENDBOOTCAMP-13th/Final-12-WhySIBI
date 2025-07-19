import ProductInfo from '@/components/products_list/product_info/products_linfo';

export default function ProductList() {
  return (
    <nav className="mt-20">
      <ul className="flex flex-col flex-wrap gap-16">
        <ProductInfo />
      </ul>
    </nav>
  );
}
