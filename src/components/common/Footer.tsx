import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div className="font-logo">
        <p className="text-4xl">livealone</p>
      </div>
      <div className="info_footer grid grid-cols-3 items-end max-w-10/12 mx-auto  pt-20 ">
        <section className="footer_left">
          <Image
            src={'/image/logo/footer_logo.svg'}
            alt="나혼산 로고"
            width={150}
            height={110}
          />
          <p className="text-[#767676] text-[14px]">
            팀명: 왜 시비조 | 팀원: 김연호 김하영 정유진 조현수
          </p>
          <p className="text-[#767676] text-[14px]">
            본 사이트는 멋쟁이 사자처럼 부트캠프 프론트엔드 13기 파이널
            <br />
            프로젝트용으로 제작되었습니다 해당 사이트에서의 결제는 결제한 다음날
            <br />
            00:00시에 반환됩니다. 해당 사이트에서 제공되는 이미지는 예시용입니다
            <br />
          </p>
          <p className="text-[#767676] text-[14px]">
            운영시간: 평일 09:00 ~ 18:00
          </p>
        </section>
        <section className="footer_middle flex justify-center">
          <Image
            src={'/image/footer_cat.svg'}
            alt="나혼산 고양이 이미지"
            width={17}
            height={60}
          />
        </section>
        <section className="footer_right text-right">
          <Link
            href={''}
            className="font-logo text-size-lg bg-button-color pl-3.5 pr-3.5 pt-3 pb-3 text-vanilla-300 rounded-full text-right"
          >
            {' '}
            고객센터 &gt;{' '}
          </Link>
          <p className="text-[#767676] text-[14px] mt-7">
            전체 문의 상담 : 평일
            <br />
            토요일,일요일,공휴일 : 휴무
            <br />
            2025/07/08~2025/08/08 : 운영기간
          </p>
        </section>
      </div>
    </footer>
  );
}
