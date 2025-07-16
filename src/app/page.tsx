import MainBannerSlider from '@/components/main_banner_slider';
import MainProductSlider from '@/components/main_product_slider';
import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import ShoppingDetail from '@/components/Shopping_detail/Shopping_detail';
export default function Home() {
  return (
    <>
      {/* <Header />
    <main>
      <h1>배너</h1>
      <MainBannerSlider />
      <h1>나혼산 BEST 상품</h1>
      <MainProductSlider />
    </main>
    <Footer /> */}
      <Header></Header>
      {/* <div className=" bg-white  my-0 mx-auto"> */}
      <ShoppingDetail
        title={'플로우 저상형 침대깔판'}
        originalPrice={1240000}
        price={124000}
        imageSrc={'/image/airconCleanKit.png'}
      ></ShoppingDetail>
      {/* </div> */}
      <Footer></Footer>
    </>
  );
}
