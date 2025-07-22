import { useRoomStore } from "@/zustand/roomStore";

export default function DetailOther(){
  const posts = useRoomStore((state) => state.posts);


    return(
      <div className="w-[600px] my-20 text-center">
        <h2 className="font-bold text-xl">이런 인테리어는 어때요?</h2>
      </div>
    );
}