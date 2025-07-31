import PostCardItem from "@/app/community/[boardType]/PostCard_Item";
import { getPosts } from "@/data/functions/post";
import { Post } from "@/types";

export default async function DetailOther({ _id }: {_id: number}){
  const res = await getPosts('showRoom');
  const currentId = Number(_id);

  // 동일한 ID 제외 후 상위 2개만 추출
  const filtered = res.ok
    ? res.item.filter((post) => post._id !== currentId)
    : [];
  const sliced = filtered.slice(0, 2);

  return(
        <div className="w-[600px] mt-15 pb-15 text-center border-b">
        <h2 className="font-bold text-xl">이런 인테리어는 어때요?</h2>
          {res.ok ? (
            <div className="flex flex-row font-variable justify-center items-center mt-7">
              {sliced.map((post: Post, index: number) => (
                <div key={post._id} className="scale-90">
                  <PostCardItem
                    post={post}
                    index={index}
                    boardType="showRoom"
                  />
                </div>
              ))}
            </div>
        ) : (
          <p className="text-center text-gray-500">{res.message}</p>
        )}
        </div>
      );
}