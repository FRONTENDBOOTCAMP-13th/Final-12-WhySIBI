import EditForm from "./EditForm";
import { getPost } from "@/data/functions/post";
import { ButtonBack } from "@/components/Button_back";

interface EditPageProps {
  params: Promise<{
    boardType: string;
    _id: string;
  }>;
}

export default async function EditPage({ params }: EditPageProps) {
  const { _id } = await params;

  const res = await getPost(Number(_id));

  return (
    <div className="post-list-wrapper flex flex-col justify-center items-center bg-white p-20">
      <div className="w-[600px] mb-6">
        <ButtonBack />
      </div>
      { res.ok === 0 ? (
        <p>{ res.message }</p>
      ) : (
        <section>
          <EditForm post={ res.item } />
        </section>
      )}
    </div>
  );
}