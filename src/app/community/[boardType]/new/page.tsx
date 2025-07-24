'use client';
import { ButtonBack } from "@/components/Button_back";
import RegistForm from "@/components/Write_posts/RegistForm";

export default function NewPost(){
  return(
    <>
<div className="post-list-wrapper flex flex-col justify-center items-center bg-white p-20">
      <div className="w-[600px] mb-6">
        <ButtonBack />
      </div>
      <RegistForm />
    </div>
    </>
  )
}