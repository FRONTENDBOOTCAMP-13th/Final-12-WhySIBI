'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { User } from '@/types';
import { OrderItem } from '@/types/order';
import OrderProductInfo from '@/components/order_list/order_info/order_info';
import Title from '@/components/Title';
import MyPageSummary from '../my_page_summary/my_page_summary';


interface MyInfoProp {
  MyInfo: User;
  orders?: OrderItem[];     
  seeAllHref?: string;
}

export default function MyInfoView({ MyInfo, orders = [], seeAllHref = '/order/list' }: MyInfoProp) {
  const [userInfo, setUserInfo] = useState<User | null>(null);

  const previewTuples = useMemo(() => {
  const list: Array<{ order: OrderItem; product: OrderItem['products'][number] }> = [];
    (orders ?? []).forEach(order => {
      (order.products ?? []).forEach(product => {
        list.push({ order, product });
      });
    });
    return list.slice(0, 2); 
  }, [orders]);

    const summaryCounts = useMemo(() => {
    const ex = (MyInfo as any)?.extra ?? {};
    return {
      ordersCount: orders?.length ?? 0,
      reviewsCount: ex.reviewCount ?? ex.reviewsCount ?? 0,
      inquiriesCount: ex.inquiryCount ?? ex.inquiriesCount ?? 0,
      couponsCount: ex.couponCount ?? (ex.coupons?.length ?? 0),
      bookmarksCount: ex.bookmarksCount ?? (ex.bookmarks?.length ?? 0),
    };
  }, [orders, MyInfo]);


  useEffect(() => {
    if (MyInfo) setUserInfo(MyInfo);
  }, [MyInfo]);

  if (!userInfo) {
    return (
      <div className="col-start-2 col-end-4 mt-20 max-w-[46.25rem]">
        <div className="animate-pulse space-y-4">
          <div className="h-8 w-40 rounded bg-gray-200" />
          <div className="h-48 w-full rounded-2xl bg-gray-100" />
          <div className="h-4 w-1/2 rounded bg-gray-100" />
          <div className="h-4 w-1/3 rounded bg-gray-100" />
        </div>
      </div>
    );
  }

  const avatar = userInfo.image || '/image/profile.png';
  const email = userInfo.email || '-';
  const nickname = userInfo.nickname || '-';
  const name = userInfo.name || '-';

  return (
    <>
      {/* 상단 프로필 카드 */}
      <section className="col-start-2 col-end-4 max-w-[46.25rem]">
        <div className="mt-6 rounded-2xl bg-white pb-5">
          <div className="flex items-center justify-between pb-10">
            <div className="flex items-center gap-5">
              <Image
                src={avatar}
                alt="프로필 사진"
                width={96}
                height={96}
                className="h-20 w-20 rounded-full border border-gray-200 object-cover bg-gray-100"
              />
              <div>
                <p className="text-xl font-semibold">{nickname !== '-' ? nickname : name}</p>
                <p className="text-sm text-gray-500">{email}</p>
              </div>
            </div>
            <div className="flex justify-end">
              <Link href="/my_page/edit_info" className="rounded-xl border px-4 py-2 text-sm font-medium hover:bg-gray-50">정보 수정</Link>
            </div>
          </div>
          <MyPageSummary
            ordersCount={summaryCounts.ordersCount}
            reviewsCount={summaryCounts.reviewsCount}
            inquiriesCount={summaryCounts.inquiriesCount}
            couponsCount={summaryCounts.couponsCount}
            bookmarksCount={summaryCounts.bookmarksCount}
          />
        </div>
      </section>

      {/* 주문 조회 미리보기 */}
      <section className="max-w-[46.25rem] pt-10 pb-10">
        <Title title="🛒 주문조회" />
        {previewTuples.length > 0 ? (
          <div className="mt-6">
            <ul className="flex flex-col flex-wrap xl:gap-16 lg:gap-12 md:gap-10 gap-8">
              {previewTuples.map(({ order, product }, i) => (
                <OrderProductInfo
                  key={`${order._id}-${String(product._id ?? 'noid')}-${i}`}
                  orderId={String(order._id)}
                  _id={product._id}
                  price={product.price}
                  name={product.name}
                  image={product.image}
                  state={order.state}
                />
              ))}
            </ul>

            {/* 더보기 */}
            <div className="mt-6 flex justify-end">
              <Link
                href={seeAllHref}
                className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm font-semibold hover:bg-gray-50"
              >
                더보기 <span aria-hidden>›</span>
              </Link>
            </div>
          </div>
        ) : (
          <div className="mt-4 rounded-xl border border-gray-200 p-6 text-sm text-gray-500">
            최근 구매내역이 없습니다.
          </div>
        )}
      </section>
    </>
  );
}
