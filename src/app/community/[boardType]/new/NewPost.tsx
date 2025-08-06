'use client';
import { ButtonBack } from "../../../../components/Button_back";
import RegistForm from "./RegistForm";
import { Product } from "@/types";

interface Props {
  boardType: string;
  productList: Product[];
}

export default function NewPost({ boardType, productList }: Props){
  return(
    <div className="post-list-wrapper flex flex-col justify-center items-center bg-white p-20">
      <div className="w-[400px] md:w-[600px] mb-6">
        <ButtonBack />
      </div>
      <RegistForm boardType={boardType} productList={productList} />
    </div>
  )
}