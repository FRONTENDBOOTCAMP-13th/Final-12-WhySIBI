import ButtonQuestion from '../Buttons/Button_question';
import { Inquiry_Detail } from './fetch/Inquiry_detail';
import InquiryList from './Inquiry_list';

// 사용자 정보 타입
interface User {
  _id: number;
  name: string;
  image: string;
}
// 상품 정보 타입
interface Product {
  name: string;
}
// 메인 문의 타입
export interface InquiryItem {
  _id: number;
  type: 'qna';
  product_id: number;
  seller_id: number;
  views: number;
  user: User;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  product: Product;
  bookmarks: number;
  repliesCount: number;
}
// 문의 목록 타입
export type InquiryListType = InquiryItem[];

export default async function ProductInquiry({ id }: { id: string }) {
  const items: InquiryListType = await Inquiry_Detail('?type=qna');
  console.log('여기서부터 댓글임', items);

  //해당 페이지만 필터 해서 배열에 넣음
  const itemList = items.filter(item => {
    return item.product_id === Number(id);
  });

  console.log('필터되나?', itemList);

  return (
    <section className="max-w-[1028px] mx-auto mt-12 pb-6">
      <div
        className="flex justify-between border-b-2 pb-3 border-gray-450
      "
      >
        <h3 className="text-xl font-semibold text-gray-550">
          문의 {itemList.length}
        </h3>
        <div className=" w-[140px] text-center">
          <ButtonQuestion />
        </div>
      </div>

      <div className="flex border-b-2 p-5 border-gray-450 text-gray-550 font-bold">
        <div className="flex-1 text-center">제목</div>
        <div className="w-[150px] text-center">작성자</div>
        <div className=" w-[150px] text-center">작성일</div>
        <div className="w-[100px] text-center">답변상태</div>
        <div className="w-[13px] h-[13px]"></div>
      </div>

      <ul>
        {itemList.map(item => {
          // const content = reply[item._id]?.replies[0]?.content || null;
          return (
            <InquiryList
              key={item._id}
              item={item}
              // Content={content || null}
            ></InquiryList>
          );
        })}
      </ul>
    </section>
  );
}
