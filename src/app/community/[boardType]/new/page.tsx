import NewPost from "@/app/community/[boardType]/new/NewPost"
import { getProductList } from "@/data/actions/products.fetch";

interface NewPageProps {
  params: Promise<{
    boardType: string;
  }>;
}

export default async function NewPage({ params }: NewPageProps){
  const {boardType} = await params; 
  const res = await getProductList();
  const productList = res.item ?? [];

  return <NewPost boardType={boardType} productList={productList} ></NewPost>
}