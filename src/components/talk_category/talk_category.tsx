'use client';
import useSearchStore from '@/zustand/searchStore';
import useSubjectStore from '@/zustand/subjectStore';

export default function TalkCategory() {
  const { activeSubject, handleMenuClick } = useSubjectStore();
  const { resetSearch } = useSearchStore();
  return (
    <div className="flex gap-5 mt-5">
      <button
        type="button"
        className={
          activeSubject === 'all'
            ? 'bg-columbia-blue-300 text-gray-800 border-[1px] border-button-color-opaque-25  rounded-full py-3 px-8 text-center'
            : 'nahonsan-btn-3d-white border-[1px] border-button-color-opaque-25 rounded-full py-3 px-8 text-center'
        }
        value={'all'}
        onClick={e => {
          handleMenuClick((e.target as HTMLButtonElement).value || '');
          resetSearch();
        }}
      >
        전체
      </button>
      <button
        type="button"
        className={
          activeSubject === '홈 스타일링'
            ? 'bg-columbia-blue-300 text-gray-800 border-[1px] border-button-color-opaque-25  rounded-full py-3 px-8 text-center'
            : 'nahonsan-btn-3d-white border-[1px] border-button-color-opaque-25 rounded-full py-3 px-8 text-center'
        }
        value={'홈 스타일링'}
        onClick={e => {
          handleMenuClick((e.target as HTMLButtonElement).value || '');
          resetSearch();
        }}
      >
        홈스타일링
      </button>
      <button
        type="button"
        className={
          activeSubject === '상품 추천'
            ? 'bg-columbia-blue-300 text-gray-800 border-[1px] border-button-color-opaque-25  rounded-full py-3 px-8 text-center'
            : 'nahonsan-btn-3d-white border-[1px] border-button-color-opaque-25 rounded-full py-3 px-8 text-center'
        }
        value={'상품 추천'}
        onClick={e => {
          handleMenuClick((e.target as HTMLButtonElement).value || '');
          resetSearch();
        }}
      >
        상품 추천
      </button>
      <button
        type="button"
        className={
          activeSubject === '계약'
            ? 'bg-columbia-blue-300 text-gray-800 border-[1px] border-button-color-opaque-25  rounded-full py-3 px-8 text-center'
            : 'nahonsan-btn-3d-white border-[1px] border-button-color-opaque-25 rounded-full py-3 px-8 text-center'
        }
        value={'계약'}
        onClick={e => {
          handleMenuClick((e.target as HTMLButtonElement).value || '');
          resetSearch();
        }}
      >
        계약
      </button>
      <button
        type="button"
        className={
          activeSubject === '집안일'
            ? 'bg-columbia-blue-300 text-gray-800 border-[1px] border-button-color-opaque-25  rounded-full py-3 px-8 text-center'
            : 'nahonsan-btn-3d-white border-[1px] border-button-color-opaque-25 rounded-full py-3 px-8 text-center'
        }
        value={'집안일'}
        onClick={e => {
          handleMenuClick((e.target as HTMLButtonElement).value || '');
          resetSearch();
        }}
      >
        집안일
      </button>
      <button
        type="button"
        className={
          activeSubject === '기타'
            ? 'bg-columbia-blue-300 text-gray-800 border-[1px] border-button-color-opaque-25  rounded-full py-3 px-8 text-center'
            : 'nahonsan-btn-3d-white border-[1px] border-button-color-opaque-25 rounded-full py-3 px-8 text-center'
        }
        value={'기타'}
        onClick={e => {
          handleMenuClick((e.target as HTMLButtonElement).value || '');
          resetSearch();
        }}
      >
        기타
      </button>
    </div>
  );
}
