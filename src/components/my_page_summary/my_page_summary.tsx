'use client';

import Link from 'next/link';
import { ReceiptText, PencilLine, HelpCircle, TicketPercent, Bookmark, ChevronRight } from 'lucide-react';

/**
 * 마이페이지 메인 상단 요약 컴포넌트 (북마크 포함)
 */
export default function MyPageSummary({
  ordersCount = 0,
  reviewsCount = 0,
  inquiriesCount = 0,
  couponsCount = 0,
  bookmarksCount = 0,
  links = {
    orders: '/my_page/order_list',
    reviews: '/my_page/reviews',
    inquiries: '/my_page/my_inqury',
    coupons: '/my_page/coupons',
    bookmarks: '/my_page/bookmarks',
  },
  serviceHref = '/service',
}: {
  ordersCount?: number;
  reviewsCount?: number;
  inquiriesCount?: number;
  couponsCount?: number;
  bookmarksCount?: number;
  berryCount?: number;
  links?: Partial<Record<'orders'|'reviews'|'inquiries'|'coupons'|'bookmarks', string>>;
  serviceHref?: string;
  possibleSaving?: number;
}) {
  return (
    <section className="rounded-2xl border border-gray-200 bg-white p-4 sm:p-5 shadow-sm">
      {/* 상단 카드*/}
      <div className="grid grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4">
        <MetricCard href={links.orders!} icon={<ReceiptText className="h-5 w-5" aria-hidden />} label="주문내역" value={formatNumber(ordersCount)} />
        <MetricCard href={links.reviews!} icon={<PencilLine className="h-5 w-5" aria-hidden />} label="내리뷰" value={formatNumber(reviewsCount)} />
        <MetricCard href={links.inquiries!} icon={<HelpCircle className="h-5 w-5" aria-hidden />} label="문의내역" value={formatNumber(inquiriesCount)} />
        <MetricCard href={links.coupons!} icon={<TicketPercent className="h-5 w-5" aria-hidden />} label="쿠폰" value={`${formatNumber(couponsCount)}장`} />
        <MetricCard href={links.bookmarks!} icon={<Bookmark className="h-5 w-5" aria-hidden />} label="북마크&찜" value={formatNumber(bookmarksCount)} />
      </div>

      <div className="my-4 h-px w-full bg-gray-100" />

      {/* 하단 배너 */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-4">
          <div className="inline-flex items-center gap-2 justify-between rounded-xl px-3 py-2">
            <HelpCircle className="h-5 w-5" aria-hidden />
            <span className="text-sm text-gray-900">배송은 얼마나 걸리나요?</span>
          </div>

        <Link href={serviceHref} className="group inline-flex items-center justify-between rounded-xl px-3 py-2 hover:bg-gray-50">
          <div className="inline-flex items-center gap-2">
            <span className="text-sm text-gray-900">고객센터 바로가기</span>
          </div>
          <ChevronRight className="ml-2 h-4 w-4 text-gray-400 group-hover:text-gray-600" aria-hidden />
        </Link>
      </div>
    </section>
  );
}

function MetricCard({ href, icon, label, value }: { href: string; icon: React.ReactNode; label: string; value: string; }) {
  return (
    <Link href={href} className="group rounded-xl border border-gray-100 p-3 hover:bg-gray-50">
      <div className="flex flex-col items-center gap-1">
        {icon}
        <span className="text-[11px] sm:text-xs text-gray-500">{label}</span>
        <strong className="text-base sm:text-lg text-gray-900 tracking-tight">{value}</strong>
      </div>
    </Link>
  );
}

function formatNumber(n?: number) {
  return new Intl.NumberFormat('ko-KR').format(n ?? 0);
}