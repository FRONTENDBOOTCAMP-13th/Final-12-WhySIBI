'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full">
      <div className="w-full overflow-hidden h-16 bg-vanilla-300"></div>

      {/* 데스크톱/태블릿 레이아웃 (768px 이상) */}
      <div className="max-w-[1280px] mx-auto">
        <div className="info_footer xl:min-w-[1280px] lg:w-[95%] md:w-[95%] w-[90%] px-10 mx-auto xl:py-14 lg:py-12 md:py-10 py-8 md:grid md:grid-cols-3 md:items-end hidden">
          <section className="footer_left">
            <Image
              src={'/image/logo/footer_logo.svg'}
              alt="나혼산 로고"
              width={150}
              height={110}
              className="xl:w-[150px] xl:h-[110px] lg:w-[130px] lg:h-auto md:w-[120px] md:h-auto"
            />
            <p className="text-[#767676] xl:text-[14px] lg:text-[13px] md:text-[12px] xl:mt-4 lg:mt-3 md:mt-2">
              팀명: 왜 시비조 | 팀원: 김연호 김하영 정유진 조현수
            </p>
            <p className="text-[#767676] xl:text-[14px] lg:text-[13px] md:text-[12px] xl:mt-2 lg:mt-1.5 md:mt-1 xl:leading-5 lg:leading-4 md:leading-4">
              본 사이트는 멋쟁이 사자처럼 부트캠프 프론트엔드 13기 파이널
              <br />
              프로젝트용으로 제작되었습니다 해당 사이트에서의 결제는 결제한
              다음날
              <br />
              00:00시에 반환됩니다. 해당 사이트에서 제공되는 이미지는
              예시용입니다
              <br />
            </p>
            <p className="text-[#767676] xl:text-[14px] lg:text-[13px] md:text-[12px] xl:mt-2 lg:mt-1.5 md:mt-1">
              운영시간: 평일 09:00 ~ 18:00
            </p>
          </section>

          <section className="footer_middle flex justify-center">
            <Image
              src={'/image/footer_cat.svg'}
              alt="나혼산 고양이 이미지"
              width={0}
              height={0}
              className="h-[20%] max-h-[140px] w-auto object-contain"
            />
          </section>

          <section className="footer_right text-right">
            <Link
              href={'/service'}
              className="font-logo xl:text-size-lg lg:text-base md:text-sm bg-button-color xl:pl-3.5 xl:pr-3.5 xl:pt-3 xl:pb-3 lg:pl-3 lg:pr-3 lg:pt-2.5 lg:pb-2.5 md:pl-2.5 md:pr-2.5 md:pt-2 md:pb-2 text-vanilla-300 rounded-full text-right inline-block"
            >
              고객센터 &gt;
            </Link>
            <p className="text-[#767676] xl:text-[14px] lg:text-[13px] md:text-[12px] xl:mt-7 lg:mt-6 md:mt-5 xl:leading-5 lg:leading-4 md:leading-4">
              전체 문의 상담 : 평일
              <br />
              토요일,일요일,공휴일 : 휴무
              <br />
              2025/07/08~2025/08/08 : 운영기간
            </p>
          </section>
        </div>

        {/* 모바일 레이아웃 (768px 미만) */}
        <div className="info_footer w-[90%] mx-auto py-8 md:hidden block">
          {/* 모바일에서는 세로 배치 */}
          <div className="text-center mb-6">
            <Image
              src={'/image/logo/footer_logo.svg'}
              alt="나혼산 로고"
              width={120}
              height={88}
              className="mx-auto"
            />
          </div>

          <div className="text-center mb-6">
            <Link
              href={'/service'}
              className="font-logo text-sm bg-button-color px-4 py-2 text-vanilla-300 rounded-full inline-block"
            >
              고객센터 &gt;
            </Link>
          </div>

          <div className="text-center space-y-3">
            <p className="text-[#767676] text-[12px]">
              팀명: 왜 시비조 | 팀원: 김연호 김하영 정유진 조현수
            </p>
            <p className="text-[#767676] text-[12px] leading-4">
              본 사이트는 멋쟁이 사자처럼 부트캠프 프론트엔드 13기 파이널
              프로젝트용으로 제작되었습니다 해당 사이트에서의 결제는 결제한
              다음날 00:00시에 반환됩니다. 해당 사이트에서 제공되는 이미지는
              예시용입니다
            </p>
            <p className="text-[#767676] text-[12px]">
              운영시간: 평일 09:00 ~ 18:00
            </p>
            <p className="text-[#767676] text-[12px] leading-4">
              전체 문의 상담 : 평일
              <br />
              토요일,일요일,공휴일 : 휴무
              <br />
              2025/07/08~2025/08/08 : 운영기간
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
