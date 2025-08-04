import MyPageMenuList from '@/components/my_page_menu_list/my_page_menu_list';

export default function MyPage({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-w-[1280px]">
      <main className="bg-white grid grid-cols-7 pt-32 pb-32">
        <aside className="col-start-1">
          <MyPageMenuList />
        </aside>
        <section className="col-start-2 col-end-8 pl-14 border-l-2 border-button-color-opaque-25">
          <h3 className="ml-9 font-logo text-5xl text-button-color">MY PAGE</h3>
          {children}
        </section>
      </main>
    </div>
  );
}
