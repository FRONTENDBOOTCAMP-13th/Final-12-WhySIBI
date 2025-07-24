import PostCard from '@/components/PostCard';
import Title from '@/components/Title';
import ButtonNew from '@/components/Button_new';
import DropdownTime from '@/components/Dropdown/Dropdown_time';

export interface ListPageProps {
  params: Promise<{
    boardType: string;
  }>;
}

export default async function PostCardPage({ params }: ListPageProps) {
  const { boardType } = await params;
  let boardTitle = '';
  let boardSub = '';
  switch (boardType) {
    case 'showRoom':
      boardTitle = '집들이🏠';
      boardSub = '우리집에 왜 왔니';
      break;
    case 'Talk':
      boardTitle = '자취 상담소💬';
      boardSub = '우리집 구해줘 홈즈';
      break;
    default:
      boardTitle = '커뮤니티';
      boardSub = '커뮤니티입니다.';
  }
  

  return (
    <div className="post-list-wrapper bg-white p-20">
      <div className="post-header flex justify-between pl-5 mb-10">
        <div className="title-wrapper flex items-center">
          <Title title={boardTitle} subTitle={boardSub}></Title>
        </div>
        <div className="button-wrapper flex items-center">
          <DropdownTime></DropdownTime>
          <ButtonNew boardType={boardType}></ButtonNew>
        </div>
      </div>
      <PostCard boardType={boardType}></PostCard>
    </div>
  );
}
