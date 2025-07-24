import ButtonQuestion from '../Buttons/Button_question';
import InquiryList from './Inquiry_list';

export default function ProductInquiry() {
  return (
    <section className="max-w-[1028px] mx-auto mt-12 ">
      <div
        className="flex justify-between border-b-2 pb-3 border-gray-450
      "
      >
        <h3 className="text-xl font-semibold text-gray-550">문의 876</h3>
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
        <InquiryList></InquiryList>
        <InquiryList></InquiryList>
        <InquiryList></InquiryList>
      </ul>
    </section>
  );
}
