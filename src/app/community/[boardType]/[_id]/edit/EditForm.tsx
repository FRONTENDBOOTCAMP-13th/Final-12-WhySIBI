'use client';

import { Post } from '@/types';
import { updatePost } from '@/data/actions/post';
import { useState, useEffect, useRef } from 'react';
import { useActionState } from 'react';
import { useRouter } from 'next/navigation';
import { CATEGORY_OPTIONS } from '@/utils/categoryOptions';
import useUserStore from '@/zustand/useUserStore';

import TitleInput from '@/components/Write_posts/Title_input';
import CategorySelect from '@/components/Write_posts/Category_select';
import ContentInput from '@/components/Write_posts/Content_input';
import ImageUploader from '@/components/Write_posts/Image_uploader';
import ButtonRounded from '@/components/Buttons/Button_rounded';

export default function EditForm({ post }: { post: Post }) {
  const router = useRouter();
  const { user } = useUserStore();
  const [state, formAction, isLoading] = useActionState(updatePost, null);
  const formRef = useRef<HTMLFormElement>(null);

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tag, setTag] = useState<{ [key: string]: string }>({});
  const [image, setImage] = useState<string[]>([]);

  const imageTitle = post.type === 'showRoom'
  ? '집을 자랑할 사진을 넣어주세요.'
  : post.type === 'talk'
  ? '나의 고민을 잘 나타낼 수 있는 사진을 골라주세요.'
  : '이미지를 업로드해주세요.';

  // 로그인 여부
  useEffect(() => {
    if (!user || !user.token?.accessToken) {
      alert('로그인 후 수정할 수 있습니다.');
      router.replace(`/login?redirect=${post.type}/${post._id}/edit`);
    }
  }, [user, post._id, post.type, router]);

  // 기존 post 값 가져와서 채워넣기
  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setContent(post.content);
      setImage(post.image ?? []);

      const tagObj: { [key: string]: string } = {};
      Object.values(post.tag ?? []).forEach((value: string) => {
        const matched = CATEGORY_OPTIONS.find(option =>
          option.tag.includes(value),
        );
        if (matched) {
          tagObj[matched.title] = value;
        }
      });
      setTag(tagObj);
    }
  }, [post]);

  const postPublish = () => {
    if (!title || !content) {
      alert('제목과 내용을 입력하세요!');
      return;
    }
    if (!user?.token?.accessToken) {
      alert('수정하려면 로그인해야 합니다.');
      return;
    }
    const isConfirmed = confirm('게시글을 수정하시겠습니까?');
    if (isConfirmed && formRef.current) {
      sessionStorage.setItem('post_success_toast', '게시글이 수정되었어요!');
      formRef.current.requestSubmit();
    }
  };

  return (
    <form ref={formRef} action={formAction}>
      <div className="w-[600px] px-12 py-8 rounded-3xl shadow outline-1 bg-linear-to-b from-vanilla-100 to-columbia-blue-100">
        <p className="font-variable text-lg font-bold mb-2">
          게시글을 수정해보세요.
        </p>
        <ul className="font-logo text-md">
          <li>
            † 집들이는 본인의 집을 자랑하는 공간입니다. 이외의 내용으로 글을
            작성할 시 반려될 수 있습니다.
          </li>
          <li>
            † 관리자가 승인한 글만 피드나 홈을 통해 노출되며, 선정 여부는 알림을
            통해 알려드립니다.
          </li>
          <li>
            † 불건전한 콘텐츠 작성이 확인될 경우, 즉시 삭제될 수 있습니다.
          </li>
        </ul>
      </div>

      {/* 입력 필드 */}
      <TitleInput value={title} onChange={setTitle} />
      <CategorySelect value={tag} onChange={setTag} />
      <ContentInput value={content} onChange={setContent} />
      <ImageUploader image={image} setImage={setImage} title={imageTitle}/>

      {/* Hidden Inputs */}
      <input type="hidden" name="_id" value={String(post._id)} />
      <input type="hidden" name="type" value={post.type} />
      <input type="hidden" name="title" value={title} />
      <input type="hidden" name="content" value={content} />
      <input type="hidden" name="image" value={JSON.stringify(image)} />
      <input
        type="hidden"
        name="tag"
        value={JSON.stringify(Object.values(tag))}
      />
      <input
        type="hidden"
        name="accessToken"
        value={user?.token?.accessToken ?? ''}
      />

      <div className="flex font-variable gap-7 mt-20">
        <ButtonRounded
          text="상품 태그"
          background="bg-vanilla-200"
          hover="hover:bg-vanilla-100"
        />
        <ButtonRounded
          text={isLoading ? '수정 중...' : '수정 완료'}
          background="bg-livealone-columbia-blue"
          animate="btn-gradient"
          event={postPublish}
        />
      </div>

      {state?.ok === 0 && <p className="text-red-500 mt-3">{state.message}</p>}
    </form>
  );
}
