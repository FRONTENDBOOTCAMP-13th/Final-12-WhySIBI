'use client';

import OrderPurchaseButton from '@/app/order/Order_purchase_button';
import { useState } from 'react';

export default function CorderCheck({ cartList }) {
  // 체크박스 상태관리
  const [checkboxStates, setCheckboxStates] = useState({
    agreement: false,
    payment: false,
    learn: false,
  });

  const allIndividualChecked =
    checkboxStates.agreement && checkboxStates.payment && checkboxStates.learn;

  // 체크박스 상태 변경 함수
  const handleCheckboxChange = (name: string) => {
    setCheckboxStates(prev => ({
      ...prev,
      [name]: !prev[name as keyof typeof prev],
    }));
  };

  const handleAllCheckChange = () => {
    if (allIndividualChecked) {
      // 모두 체크된 상태 -> 모두 해제
      setCheckboxStates({ agreement: false, payment: false, learn: false });
    } else {
      // 일부만 체크된 상태 -> 모두 체크
      setCheckboxStates({ agreement: true, payment: true, learn: true });
    }
  };

  return (
    <>
      <fieldset>
        <div className="pt-5">
          <input
            type="checkbox"
            name="agreement"
            id="agreement"
            checked={checkboxStates.agreement}
            onChange={() => handleCheckboxChange('agreement')}
            required
            className="mr-2"
          />
          <label htmlFor="agreement">
            주문 내용을 확인했으며, 결제에 동의합니다.
          </label>
        </div>
        <div className="pt-1 pb-1">
          <input
            type="checkbox"
            name="payment"
            id="payment"
            checked={checkboxStates.payment}
            onChange={() => handleCheckboxChange('payment')}
            required
            className="mr-2"
          />
          <label htmlFor="payment">
            결제가 진행된후 24시간 안에 해당계좌로 다시 입금됩니다.
          </label>
        </div>
        <div className="pb-1">
          <input
            type="checkbox"
            name="learn"
            id="learn"
            checked={checkboxStates.learn}
            onChange={() => handleCheckboxChange('learn')}
            required
            className="mr-2"
          />
          <label htmlFor="learn">
            본 사이트는 학습용으로 제작된 사이트 입니다.
          </label>
        </div>

        <div className="pb-5">
          <input
            type="checkbox"
            name="allcheck"
            id="allcheck"
            checked={allIndividualChecked}
            onChange={handleAllCheckChange}
            className="mr-2"
          />
          <label htmlFor="allcheck">모두 체크</label>
        </div>
      </fieldset>

      {
        // <OrderPurchaseButton
        //   checkboxStates={checkboxStates}
        //   productData={cartList}
        //   finalPayment={finalPayment}
        //   productName={productDetail?.item.name}
        // />
      }
    </>
  );
}
