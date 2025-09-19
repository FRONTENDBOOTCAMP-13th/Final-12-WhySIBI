'use client';
import { useSearchParams } from 'next/navigation';
import OrderPurchaseButton from './Order_purchase_button';
import { useCallback, useEffect, useState } from 'react';
import { ProductData, ProductResponse } from '@/types/puchase';
import useUserStore from '@/zustand/useUserStore';

export default function OrderReceipt() {
  const searchParams = useSearchParams();
  const [productData, setProductData] = useState<ProductData | null>(null);
  const [productDetail, setProductDetail] = useState<ProductResponse | null>(
    null,
  );

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

  const { user } = useUserStore();
  const token = user?.token?.accessToken;

  useEffect(() => {
    const productParam = searchParams.get('product');
    if (productParam) {
      const decodedProduct = JSON.parse(decodeURIComponent(productParam));
      setProductData(decodedProduct);
    }
  }, [searchParams]);

  const fetchProduct = useCallback(
    async function fetchProduct() {
      if (productData && token) {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/products/${productData?._id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
              'Client-Id': 'febc13-final12-emjf',
            },
          },
        );
        const data = await response.json();
        setProductDetail(data);
      }
    },
    [productData, token],
  );
  useEffect(() => {
    fetchProduct();
  }, [fetchProduct]);

  // let totalMoney;
  // let discountMoney;
  // let finalPayment;
  // if (productDetail?.item.price && productData) {
  //   totalMoney =
  //     productDetail?.item.extra.originalPrice * productData?.quantity;

  //   discountMoney =
  //     (productDetail?.item.extra.originalPrice - productDetail?.item.price) *
  //     productData?.quantity;

  //   finalPayment = totalMoney - discountMoney;
  // }

  let finalPayment;

  if (productDetail?.item.price && productData) {
    finalPayment = productDetail?.item.price * productData?.quantity;
  }
  console.log('여기는 무조건 있겠네', productDetail);
  return (
    <section className="border-2 px-5 py-6 ">
      <h3 className="font-semibold text-xl border-b-1 border-gray-150 pb-6">
        결제 금액
      </h3>
      <table className="border-b-1 border-gray-150 w-full">
        <caption className="sr-only">주문하려는 상품의 상세금액내역</caption>
        <tbody>
          <tr>
            <th className="font-medium pt-5 pb-2">총 상품 금액</th>
            <td className="pt-5 pb-2">{finalPayment?.toLocaleString()} 원</td>
          </tr>
          <tr>
            <th className="font-medium pb-2">배송비</th>
            <td className="pb-2">0 원</td>
          </tr>
          <tr>
            <th className="font-medium pb-2">할인금액</th>
            <td className="pb-2">-0 원</td>
          </tr>
          <tr>
            <th className="pb-5 font-bold">총 결제 금액</th>
            <td className="pb-5 font-bold">
              {finalPayment?.toLocaleString()} 원
            </td>
          </tr>
        </tbody>
      </table>
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
      <OrderPurchaseButton
        checkboxStates={checkboxStates}
        productData={productData}
        finalPayment={finalPayment}
        productName={productDetail?.item.name}
      />
    </section>
  );
}
