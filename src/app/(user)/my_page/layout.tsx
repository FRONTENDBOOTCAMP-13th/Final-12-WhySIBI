import MyPageMenuList from '@/components/my_page_menu_list/my_page_menu_list';

export default function MyPage({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className="w-full bg-white overflow-x-auto"
      style={{
        minWidth: '1280px',
        transform: 'scale(min(1, 100vw / 1280px))',
      }}
    >
      <main className="grid grid-cols-7 pt-32 pb-32 gap-0 min-w-0">
        <aside className="col-start-1 min-w-0">
          <MyPageMenuList />
        </aside>
        <section className="col-start-2 col-end-8 pl-14 border-l-2 border-button-color-opaque-25 min-w-0">
          <h3 className="ml-9 font-logo text-5xl text-button-color overflow-hidden">
            MY PAGE
          </h3>
          <div className="min-w-0">{children}</div>
        </section>
      </main>
    </div>
  );
}
