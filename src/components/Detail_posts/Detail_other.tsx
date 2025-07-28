import PostCardItem from "@/app/community/[boardType]/PostCard_Item";
import { getPosts } from "@/data/functions/post";
import { Post } from "@/types";

export default async function DetailOther({ _id }: {_id: number}){
const res = await getPosts('showRoom');

return(
      <div className="w-[600px] mt-10 mb-15 text-center">
      <h2 className="font-bold text-2xl">이런 인테리어는 어때요?</h2>
      {res.ok ? (
        <div className="flex flex-row font-variable justify-center items-center mt-7">
          {res.item
            .filter((post: Post) => post._id !== _id)
            .slice(0, 2)
            .map((post: Post, index: number) => (
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