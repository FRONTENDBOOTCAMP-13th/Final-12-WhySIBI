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
      <ShoppingDetail></ShoppingDetail>
      {/* </div> */}
      <Footer></Footer>
    </>
  );
}
