'use client';
import { useState, useEffect } from 'react';
import { createReply } from '@/data/actions/post';
import { useActionState } from 'react';
import useUserStore from '@/zustand/useUserStore';
import { PostReply } from '@/types';
import { ApiRes } from '@/types';

interface CommentNewProps {
  _id: number;
  repliesCount: number;
  onAdd: (reply: PostReply) => void;
}

export default function CommentNew({
  _id,
  repliesCount,
  onAdd,
}: CommentNewProps) {
  const { user } = useUserStore();
  const [, formAction, isLoading] = useActionState< ApiRes<PostReply, never> | null, FormData >
  ( 
  async (
      prevState: ApiRes<PostReply, never> | null,
      formData: FormData,
    ): Promise<ApiRes<PostReply, never>> => {
      const res = await createReply(prevState, formData);

      if (res.ok === 1 && res.item) {
        onAdd(res.item);
        setInputValue('');
        setLocalError(null);
      }

      if (res.ok === 0 && res.errors?.content?.msg) {
        setLocalError(res.errors.content.msg);
      }

      return res;
    },
    null,
  );

  const [inputValue, setInputValue] = useState('');
  const [localError, setLocalError] = useState<string | null>(null);

  useEffect(() => {
    const handler = (e: Event) => {
      if (!user) return;
      const customEvent = e as CustomEvent<string>;
      if (typeof customEvent.detail === 'string') {
        const mentionTag = `@${customEvent.detail} `;
        const withoutOldMention = inputValue.replace(/^@\S+\s/, '');
        setInputValue(mentionTag + withoutOldMention);
      }
    };

    window.addEventListener('mention-user', handler);
    return () => window.removeEventListener('mention-user', handler);
  }, [user, inputValue]);

  // 태그 한번에 지우기
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const mentionRegex = /^@\S+\s/;
    if (e.key === 'Backspace' && mentionRegex.test(inputValue)) {
      setInputValue(inputValue.replace(mentionRegex, ''));
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleFocus = () => {
    if (!user) {
      alert('로그인이 필요합니다.');
      const input = document.getElementById(
        'comment-input',
      ) as HTMLInputElement;
      input?.blur();
      return;
    }
    setLocalError(null);
  };

  return (
    <div className="min-w-[15.625rem] max-w-[18.75rem] md:max-w-[600px] md:min-w-2xl">
      <h2 className="font-extrabold text-2xl mx-5 mt-10 mb-5">
        댓글{' '}
        <span className="text-livealone-cal-poly-green">{repliesCount}</span>
      </h2>
      <div className="border-1 rounded-full h-14 p-4 flex items-center justify-between focus-within:outline-1">
        <form
          action={formAction}
          className="flex w-full items-center justify-between"
        >
          <input type="hidden" name="_id" value={_id}></input>
          <input
            type="hidden"
            name="accessToken"
            value={user?.token?.accessToken ?? ''}
          />
          <div>
            <input
              id="comment-input"
              type="text"
              name="content"
              value={inputValue}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              onFocus={handleFocus}
              placeholder="댓글 달기..."
              className="w-full outline-0 text-sm ml-2"
            ></input>
            <p className="ml-2 mt-1 text-sm text-red-500">{localError}</p>
          </div>
          <button
            disabled={isLoading}
            type="submit"
            className="bg-columbia-blue-200 w-15 h-7 font-semibold border-1 rounded-full text-[12px] cursor-pointer ml-3 hover:bg-livealone-columbia-blue"
          >
            {isLoading ? '저장중..' : '저장'}
          </button>
        </form>
      </div>
    </div>
  );
}
