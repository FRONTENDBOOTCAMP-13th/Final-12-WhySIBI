'use client';
import { useState, useEffect, useRef, useMemo } from 'react';
import { createReply } from '@/data/actions/post';
import { useActionState } from 'react';
import useUserStore from '@/zustand/useUserStore';
import { PostReply, ApiRes } from '@/types';

interface CommentNewProps {
  _id: number;
  repliesCount: number;
  onAdd: (reply: PostReply) => void;
  boardType: string;
}

export default function CommentNew({
  _id,
  repliesCount,
  onAdd,
  boardType,
}: CommentNewProps) {
  const { user } = useUserStore();

  const [inputValue, setInputValue] = useState('');
  const [localError, setLocalError] = useState<string | null>(null);

  // 여러 멘션 관리(나열)
  const [mentionIds, setMentionIds] = useState<number[]>([]);
  const [mentionNames, setMentionNames] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  // 폼 액션
  const [, formAction, isLoading] = useActionState<
    ApiRes<PostReply, never> | null,
    FormData
  >(
    async (prevState, formData) => {
      const res = await createReply(prevState, formData);

      if (res.ok === 1 && res.item) {
        onAdd(res.item);
        setInputValue('');
        setMentionIds([]);
        setMentionNames([]);
        setLocalError(null);
      }

      if (res.ok === 0 && res.errors?.content?.msg) {
        setLocalError(res.errors.content.msg);
      }
      return res;
    },
    null,
  );

  // 멘션 추가/제거
  const addMention = (id: number, name: string) => {
    setMentionIds((arr) => (arr.includes(id) ? arr : [...arr, id]));
    setMentionNames((arr) => (arr.includes(name) ? arr : [...arr, name]));
  };
  const removeMentionAt = (idx: number) => {
    setMentionIds((arr) => arr.filter((_, i) => i !== idx));
    setMentionNames((arr) => arr.filter((_, i) => i !== idx));
  };

  // 멘션 선택: 더 이상 input에 @문자열 삽입하지 않음. 칩으로만 추가
  useEffect(() => {
    const handler = (e: Event) => {
      if (!user) return;
      const customEvent = e as CustomEvent<{ _id: number; name: string }>;
      if (!customEvent.detail) return;
      const { _id, name } = customEvent.detail;
      addMention(_id, name ?? '(알 수 없음)');
      inputRef.current?.focus();
    };
    window.addEventListener('mention-user', handler);
    return () => window.removeEventListener('mention-user', handler);
  }, [user]);

  // Backspace: 입력이 비어 있고 커서가 맨 앞일 때만 마지막 칩 삭제
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== 'Backspace') return;
    const el = inputRef.current;
    const isEmpty = inputValue.length === 0;
    const caretAtStart = el ? el.selectionStart === 0 && el.selectionEnd === 0 : false;
    if (isEmpty && caretAtStart && mentionIds.length > 0) {
      e.preventDefault();
      removeMentionAt(mentionIds.length - 1);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleFocus = () => {
    if (!user) {
      alert('로그인이 필요합니다.');
      inputRef.current?.blur();
      return;
    }
    setLocalError(null);
  };

  // 서버에 보낼 content 합성: "@닉1 @닉2 ... " + 입력본문
  const composedContent = useMemo(() => {
    const prefix = mentionNames.length
      ? mentionNames.map((n) => `@${n}`).join(' ') + ' '
      : '';
    // 앞 공백만 정리
    return (prefix + inputValue).replace(/^\s+/, '');
  }, [mentionNames, inputValue]);

  return (
    <div className="min-w-[15.625rem] max-w-[18.75rem] md:max-w-[600px] md:min-w-2xl">
      <h2 className="font-extrabold text-2xl mx-5 mt-10 mb-5">
        댓글 <span className="text-livealone-cal-poly-green">{repliesCount}</span>
      </h2>

      <div className="border-1 rounded-full min-h-14 px-4 py-2 flex items-center justify-between focus-within:outline-1">
        <form action={formAction} className="flex w-full items-center justify-between">
          {/* 히든 필드들 */}
          <input type="hidden" name="_id" value={_id} />
          <input type="hidden" name="accessToken" value={user?.token?.accessToken ?? ''} />
          <input type="hidden" name="type" value={boardType} />
          <input type="hidden" name="mentionIds" value={JSON.stringify(mentionIds)} />
          <input type="hidden" name="mentionNames" value={JSON.stringify(mentionNames)} />
          {/* ✅ 실제 전송될 댓글 내용 */}
          <input type="hidden" name="content" value={composedContent} />

          {/* 칩 + 입력 영역 */}
          <div className="flex-1 flex items-center flex-wrap gap-1">
            {/* 칩들 */}
            {mentionNames.map((name, idx) => (
              <span
                key={`${name}-${mentionIds[idx]}`}
                className="inline-flex items-center rounded-full bg-indigo-50 text-indigo-700 text-xs px-2 py-1"
              >
                @{name}
                <button
                  type="button"
                  className="ml-1 text-indigo-500 hover:text-indigo-700"
                  onClick={() => removeMentionAt(idx)}
                  aria-label="remove mention"
                >
                  ×
                </button>
              </span>
            ))}

            {/* 사용자가 실제로 타이핑하는 입력칸(전송은 hidden content로 함) */}
            <input
              id="comment-input"
              ref={inputRef}
              type="text"
              // name="content" ← ❌ 입력칸엔 name을 주지 않습니다(전송은 hidden으로)
              value={inputValue}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              onFocus={handleFocus}
              placeholder={mentionNames.length ? '메시지 입력...' : '댓글 달기...'}
              className="flex-1 min-w-[120px] outline-0 text-sm ml-2 bg-transparent"
            />
          </div>

          <button
            disabled={isLoading}
            type="submit"
            className="bg-columbia-blue-200 w-15 h-7 font-semibold border-1 rounded-full text-[12px] cursor-pointer ml-3 hover:bg-livealone-columbia-blue disabled:opacity-50"
          >
            {isLoading ? '저장중..' : '저장'}
          </button>
        </form>
      </div>

      {localError && <p className="ml-2 mt-1 text-sm text-red-500">{localError}</p>}
    </div>
  );
}
