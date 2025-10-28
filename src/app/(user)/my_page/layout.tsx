import MyPageMenuList from '@/components/my_page_menu_list/my_page_menu_list';
import Title from '@/components/Title';
import { cookies } from 'next/headers';

export default async function MyPage({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user_type = (await cookies()).get('type');
  return (
    <div className="max-w-[1280px]  mx-auto my-0 ">
      <div className="w-full bg-white ">
        <main className="xl:min-w-[1280px] lg:w-[95%] md:w-[95%] w-[90%] mx-auto block md:grid md:grid-cols-7 xl:pb-32 lg:pb-28 md:pb-24 pb-20">
          <div className="post-header col-start-2 col-end-8 flex md:flex-row justify-between gap-4">
            <div className="w-fit pt-12 xl:pl-14 lg:pt-16 xl:pt-20 lg:pl-12 md:pl-10 pl-8 pb-5">
              <Title title={"My Page"}/>
            </div>
          </div>
          <aside className="col-start-1">
            <MyPageMenuList userType={user_type?.value as string} />
          </aside>
          <section className="col-start-2 col-end-8 pt-12 xl:pl-14 xl:pt-0 lg:pl-12 lg:pt-0 md:pl-10 md:pt-0 pl-8 border-t-2 md:border-l-2 md:border-t-0 border-button-color-opaque-25">
            {children}
          </section>
        </main>
      </div>
    </div>
  );
}
