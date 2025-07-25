'use client';
import { BookMarkItem } from '@/types/bookmark';
import { useEffect, useState } from 'react';
import GetBookMarkList from '@/data/actions/bookmark';
import { Swiper, SwiperSlide } from 'swiper/react';
import BookMarkInfo from '@/components/bookmark_list/bookmark_info/bookmark_info';
import BookMarkCard from '@/components/bookmark_list/bookmark_card/bookmark_card';
import SwiperCore from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import useUserStore from '@/zustand/useUserStore';
const slideData = [
  {
    id: 1,
    title: '영화 촬영지로도 쓰인\n감각적인 원룸 ✨',
    imageUrl: '/image/main_banner_image_1.png',
    contentUrl: '/',
  },
  {
    id: 2,
    title: '컬러와 패턴으로 완성한 1.5룸 🌿',
    imageUrl: '/image/main_banner_image_2.png',
    contentUrl: '/',
  },
  {
    id: 3,
    title: '침실은 무채색? 거실은 앤틱!\n취향따라 바뀌는 인테리어',
    imageUrl: '/image/main_banner_image_3.png',
    contentUrl: '/',
  },
  {
    id: 4,
    title: '채광 좋은 창가에 책상 꾸미는 방법',
    imageUrl: '/image/main_banner_image_4.png',
    contentUrl: '/',
  },
  {
    id: 5,
    title: '2층 침대 아래, 나만의 작은 아지트',
    imageUrl: '/image/main_banner_image_5.png',
    contentUrl: '/',
  },
  {
    id: 6,
    title: '시원한 블루 컬러로 가득한 🌊\n공간디자이너의 방',
    imageUrl: '/image/main_banner_image_6.png',
    contentUrl: '/',
  },
];
export default function BookMarkList() {
  SwiperCore.use([Navigation, Scrollbar, Pagination]);
  const [productList, setProductList] = useState<BookMarkItem | null>(null);
  const { user } = useUserStore();

  useEffect(() => {
    const getData = async () => {
      const res = await GetBookMarkList(
        'product',
        user?.token?.accessToken as string,
      );
      console.log(res);
      try {
        if (res.ok === 1) {
          setProductList(res.item[0]);
          console.log(res.item[0]);
        } else {
          console.log(res.message);
        }
      } catch (error) {
        console.error('상품 정보 로딩 실패:', error);
      }
    };
    getData();
  }, []);
  console.log(productList);
  return (
    <>
      <section className="mt-11 pb-16 border-b-[1px] border-button-color-opaque-25">
        <h4 className="font-logo text-4xl">북마크 목록</h4>
        <div className="bookmark-swiper  max-w-11/12 mx-auto">
          <Swiper
            loop={true}
            slidesPerView={3} // 기본값 유지
            spaceBetween={100}
            centeredSlides={true}
            navigation={true}
          >
            {slideData.map(slide => (
              <SwiperSlide key={slide.id} className="relative">
                <BookMarkCard
                  title={slide.title}
                  imageUrl={slide.imageUrl}
                  contentUrl={slide.contentUrl}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <section className="mt-24">
        <h4 className="font-logo text-4xl">찜 목록</h4>
        <div className="grid grid-cols-4 grid-rows-4 gap-16">
          {slideData.map(i => (
            <BookMarkInfo key={i} />
          ))}
        </div>
      </section>
    </>
  );
}
