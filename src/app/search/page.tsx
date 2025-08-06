import ProductSearchList from '@/components/product_search/product_search_list';

export default function Search() {
  return (
    <>
      <div className="max-w-[1280px]  mx-auto my-0 ">
        <main className="bg-white p-20">
          <ProductSearchList />
        </main>
      </div>
    </>
  );
}
