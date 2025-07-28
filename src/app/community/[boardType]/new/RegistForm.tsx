'use client';

import { useState, useRef } from 'react';
import { useActionState } from 'react';
import { useRouter } from 'next/navigation';
import { createPost } from '@/data/actions/post';

import TitleInput from '../../../../components/Write_posts/Title_input';
import CategorySelect from '../../../../components/Write_posts/Category_select';
import ContentInput from '../../../../components/Write_posts/Content_input';
import ImageUploader from '../../../../components/Write_posts/Image_uploader';
import ButtonRounded from '../../../../components/Buttons/Button_rounded';

interface RegistFormProps {
  boardType: string;
}

export default function RegistForm({ boardType }: RegistFormProps) {
  const [state, formAction, isLoading] = useActionState(createPost, null);
  const router = useRouter();

  // 로컬 상태값
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tag, setTag] = useState<{ [key: string]: string }>({});
  const [image, setImage] = useState<string[]>([]);

  
  const formRef = useRef<HTMLFormElement>(null);

    const postPublish = () => {
    if (!title || !content) {
      alert("제목과 내용을 입력하세요!");
      return;
    }

    const isConfirmed = confirm("게시글을 등록하시겠습니까?");
      if (isConfirmed && formRef.current) {
      formRef.current.requestSubmit(); // 서버 액션과 함께 submit
      router.back();
    }
  };

  return (
    <form ref={formRef} action={formAction}>
      <div className="w-[600px] px-12 py-8 rounded-3xl shadow outline-1 bg-linear-to-b from-vanilla-100 to-columbia-blue-100">
        <p className="font-variable text-lg font-bold mb-2">집들이에 초대해주셔서 감사해요.</p>
        <ul className="font-logo text-md">
          <li>† 집들이는 본인의 집을 자랑하는 공간입니다. 이외의 내용으로 글을 작성할 시 반려될 수 있습니다.</li>
          <li>† 관리자가 승인한 글만 피드나 홈을 통해 노출되며, 선정 여부는 알림을 통해 알려드립니다.</li>
          <li>† 불건전한 콘텐츠 작성이 확인될 경우, 즉시 삭제될 수 있습니다.</li>
        </ul>
      </div>
      <TitleInput value={title} onChange={setTitle} />
      <CategorySelect value={tag} onChange={setTag} />
      <ContentInput value={content} onChange={setContent} />
      <ImageUploader image={image} setImage={setImage} />

      {/* 서버에 넘길 hidden input들 */}
      <input type="hidden" name="title" value={title} />
      <input type="hidden" name="content" value={content} />
      <input type="hidden" name="image" value={JSON.stringify(image)} />
      <input type="hidden" name="tag" value={JSON.stringify(Object.values(tag))} />
      <input type="hidden" name="type" value={boardType} /> {/* 게시판 구분용 */}

      <div className="flex font-variable gap-7 mt-20">
        <ButtonRounded text="상품 태그" background="bg-vanilla-200" hover="hover:bg-vanilla-100"></ButtonRounded>
        <ButtonRounded text={isLoading ? "등록 중..." : "발행신청"} background="bg-livealone-columbia-blue" animate="btn-gradient" event={postPublish}></ButtonRounded>
      </div>

      {state?.ok === 0 && (
        <p className="text-red-500 mt-3">{state.message}</p>
      )}
    </form>
  );
}
