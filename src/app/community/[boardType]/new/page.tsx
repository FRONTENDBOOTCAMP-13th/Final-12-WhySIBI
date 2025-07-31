import NewPost from "@/app/community/[boardType]/new/NewPost"

interface NewPageProps {
  params: Promise<{
    boardType: string;
  }>;
}

export default async function NewPage({ params }: NewPageProps){
  const {boardType} = await params; 
  return <NewPost boardType={boardType}></NewPost>
}