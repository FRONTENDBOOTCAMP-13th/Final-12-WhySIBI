import { InquiryItem } from '@/types/shopping_detail';
import ButtonQuestion from '../Buttons/Button_question';
import { Inquiry_Detail } from './fetch/Inquiry_detail';
import InquiryList from './Inquiry_list';
import { Product_Detail } from './fetch/Product_detail';

// 문의 목록 타입
export type InquiryListType = InquiryItem[];

export default async function ProductInquiry({ id }: { id: string }) {
  const items: InquiryListType = await Inquiry_Detail('?type=qna');
  const { name } = await Product_Detail(id);

  //해당 페이지만 필터 해서 배열에 넣음
  const itemList: InquiryListType = items.filter(item => {
    return item.product_id === Number(id);
  });

  return (
    <section className="max-w-[1028px] mx-auto mt-12 pb-6 ">
      <div
        className="flex justify-between border-b-2 pb-3 border-gray-450
      "
      >
        <h3 className="text-xl font-semibold text-gray-550 pl-3 lg:pl-0">
          문의 {itemList.length}
        </h3>
        <div className=" w-[140px] text-center">
          <ButtonQuestion name={name} id={id} />
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
          return <InquiryList key={item._id} item={item}></InquiryList>;
        })}
      </ul>
    </section>
  );
}
