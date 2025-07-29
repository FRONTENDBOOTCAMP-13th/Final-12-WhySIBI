import Image from 'next/image';
import Link from 'next/link';

export default function BestTalkInfo() {
  return (
    <div
      className="relative w-full max-w-[500px] rounded-2xl border-2 border-button-color-opaque-25 mx-auto group"
      style={{
        background: 'linear-gradient(180deg, #FFEEBC 0%, #D4E8F8 100%)',
      }}
    >
      {/* <Link href={`/commuity/talk/${_id}`} className="block w-full"> */}
      <Link href={``} className="block w-full">
        <div className="px-1">
          <section>
            <h3 className="text-gray-900 text-sm sm:text-base font-medium leading-tight whitespace-pre-line line-clamp-2">
              {/* {title} */}
              제목
            </h3>
            <p>내용</p>
          </section>
          <section className="relative max-w-[11.25rem] aspect-square rounded-radius-lg mb-3">
            <Image
              src={`/image/theme_image/desk_decor.png`}
              alt={``}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 280px, (max-width: 1024px) 250px, 220px"
            />
          </section>
          <section className="flex justify-between">
            <div>#에어컨</div>
            <div>
              <p>조회수</p>
            </div>
          </section>
        </div>
      </Link>
    </div>
  );
}
