'use client';

import { useEffect, useRef, useState } from 'react';

export default function ButtonQuestion() {
  const [modal, setModal] = useState(false);
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (modal) {
      dialog?.showModal();
    } else {
      dialog?.close();
    }
  }, [modal]);
  return (
    <>
      {modal && (
        <dialog
          ref={dialogRef}
          className="bg-black/50 w-screen h-screen max-w-none max-h-none"
          onClose={() => setModal(false)}
        >
          <section className="flex items-center justify-center w-full h-full bg-transparent">
            <h3>상품 문의하기</h3>
            <form className="bg-white w-1/2 h-2/3" action="">
              <div>
                <span>상품</span>
                <span>상품명</span>
              </div>
              <div>
                <label htmlFor="inquiry-content">문의내용</label>
                <textarea
                  name=""
                  id="inquiry-content"
                  placeholder="문의 내용을 입력하세요"
                ></textarea>
              </div>
            </form>
          </section>
        </dialog>
      )}

      <button
        onClick={() => setModal(!modal)}
        className={`cursor-pointer bg-flame-250 w-[100px] h-[35px] text-xs text-white rounded-sm `}
      >
        문의하기
      </button>
    </>
  );
}
