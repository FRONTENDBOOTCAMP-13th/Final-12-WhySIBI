// app/(user)/my_page/page.tsx
import MyInfoView from '@/components/my_info/my_info_list';
import { GetUserInfo } from '@/data/actions/user';
import { getOrderList } from '@/data/actions/order';
import type { OrderItem } from '@/types/order';
import { cookies } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';

export default async function MyPage() {
  const cookieStore = await cookies();
  const userId = cookieStore.get('_id')?.value ?? '';
  const accessToken = cookieStore.get('accessToken')?.value ?? '';

  if (!userId) {
    return (
      <div className="font-logo text-3xl">
        <section className="h-72 flex flex-col justify-center items-center gap-3">
          <h3 className="font-bold text-2xl">로그인이 필요하다냥</h3>
          <Image
            src="/image/category_icon/furniture.svg"
            alt="로그인이 필요하다냥"
            width={150}
            height={150}
            className="opacity-20 mt-5 mb-2.5"
            aria-hidden="true"
          />
          <Link
            href="/login"
            className="box-border cursor-pointer bg-flame-250 w-[300px] h-[48px] text-white border-2 border-flame-250 rounded-sm font-bold flex items-center justify-center"
          >
            <span>로그인 하러 가기</span>
          </Link>
        </section>
      </div>
    );
  }

  // 사용자 정보 + 주문 목록(전체) 조회 — 주문목록 페이지와 동일한 API 사용
  const [userRes, orderRes] = await Promise.all([
    GetUserInfo(userId),
    getOrderList(accessToken),
  ]);

  if (userRes.ok !== 1) {
    return (
      <div className="font-logo text-3xl">
        <section className="h-72 flex flex-col justify-center items-center gap-3">
          <h3 className="font-bold text-2xl">로그인이 필요하다냥</h3>
          <Image
            src="/image/category_icon/furniture.svg"
            alt="로그인이 필요하다냥"
            width={150}
            height={150}
            className="opacity-20 mt-5 mb-2.5"
            aria-hidden="true"
          />
          <Link
            href="/login"
            className="box-border cursor-pointer bg-flame-250 w-[300px] h-[48px] text-white border-2 border-flame-250 rounded-sm font-bold flex items-center justify-center"
          >
            <span>로그인 하러 가기</span>
          </Link>
        </section>
      </div>
    );
  }

  const orders: OrderItem[] = orderRes?.ok === 1 ? orderRes.item : [];

  return (
    <MyInfoView
      MyInfo={userRes.item}
      orders={orders}           
      seeAllHref="/my_page/order_list" 
    />
  );
}
