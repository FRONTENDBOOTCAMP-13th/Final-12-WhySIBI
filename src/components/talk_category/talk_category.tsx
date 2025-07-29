'use client';
import useSubjectStore from '@/zustand/subjectStore';

export default function TalkCategory() {
  const { handleMenuClick } = useSubjectStore();
  return (
    <div className="flex gap-5 mt-5">
      <button
        type="button"
        className="nahonsan-btn-3d-white border-[1px] border-button-color-opaque-25 rounded-full py-3 px-8  text-center"
        value={'all'}
        onClick={e =>
          handleMenuClick((e.target as HTMLButtonElement).value || '')
        }
      >
        전체
      </button>
      <button
        type="button"
        className="nahonsan-btn-3d-white border-[1px] border-button-color-opaque-25 rounded-full py-3 px-8 text-center"
        value={'홈 스타일링'}
        onClick={e =>
          handleMenuClick((e.target as HTMLButtonElement).value || '')
        }
      >
        홈스타일링
      </button>
      <button
        type="button"
        className="nahonsan-btn-3d-white border-[1px] border-button-color-opaque-25 rounded-full py-3 px-8 text-center"
        value={'상품 추천'}
        onClick={e =>
          handleMenuClick((e.target as HTMLButtonElement).value || '')
        }
      >
        상품 추천
      </button>
      <button
        type="button"
        className="nahonsan-btn-3d-white border-[1px] border-button-color-opaque-25 rounded-full py-3 px-8 text-center"
        value={'계약'}
        onClick={e =>
          handleMenuClick((e.target as HTMLButtonElement).value || '')
        }
      >
        계약
      </button>
      <button
        type="button"
        className="nahonsan-btn-3d-white border-[1px] border-button-color-opaque-25 rounded-full py-3 px-8 text-center"
        value={'집안일'}
        onClick={e =>
          handleMenuClick((e.target as HTMLButtonElement).value || '')
        }
      >
        집안일
      </button>
      <button
        type="button"
        className="nahonsan-btn-3d-white border-[1px] border-button-color-opaque-25 rounded-full py-3 px-8 text-center"
        value={'기타'}
        onClick={e =>
          handleMenuClick((e.target as HTMLButtonElement).value || '')
        }
      >
        기타
      </button>
    </div>
  );
}
