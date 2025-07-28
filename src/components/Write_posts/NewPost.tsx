'use client';
import { ButtonBack } from "../Button_back";
import RegistForm from "../../app/community/[boardType]/new/RegistForm";

interface Props {
  boardType: string;
}

export default function NewPost({ boardType }: Props){
  return(
    <div className="post-list-wrapper flex flex-col justify-center items-center bg-white p-20">
      <div className="w-[600px] mb-6">
        <ButtonBack />
      </div>
      <RegistForm boardType={boardType} />
    </div>
  )
}