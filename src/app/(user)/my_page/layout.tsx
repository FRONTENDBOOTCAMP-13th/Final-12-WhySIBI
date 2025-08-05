import MyPageMenuList from '@/components/my_page_menu_list/my_page_menu_list';

export default function MyPage({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="max-w-[1280px]  mx-auto my-0 ">
      <div className="w-full bg-white ">
        <main className="xl:min-w-[1280px] lg:w-[95%] md:w-[95%] w-[90%] mx-auto block md:grid md:grid-cols-7  xl:pt-32 xl:pb-32 lg:pt-28 lg:pb-28 md:pt-24 md:pb-24 pt-20 pb-20">
          <aside className="col-start-1">
            <MyPageMenuList />
          </aside>
          <section className="col-start-2 col-end-8 pt-12 xl:pl-14 xl:pt-0 lg:pl-12 lg:pt-0 md:pl-10 md:pt-0 pl-8 border-t-2 md:border-l-2 md:border-t-0 border-button-color-opaque-25">
            <h3 className="xl:ml-9 lg:ml-7 md:ml-5 ml-3 font-logo xl:text-5xl lg:text-4xl md:text-3xl text-2xl text-button-color">
              MY PAGE
            </h3>
            {children}
          </section>
        </main>
      </div>
    </div>
  );
}
