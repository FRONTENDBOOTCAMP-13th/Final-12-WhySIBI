// 데이터 검증 실패 메세지
export interface ServerValidationError {
  type: string;
  value: string;
  msg: string;
  location: string;
}

export type ServerValidationErrors<E> = Partial<
  Record<keyof E, ServerValidationError>
>;

// API 서버의 응답
export type ApiRes<T, E = never> =
  | { ok: 1; item: T }
  | { ok: 0; message: string; errors?: ServerValidationErrors<E> };

// 서버 함수에서 반환할 타입(Promise를 반환해야 함)
export type ApiResPromise<T> = Promise<ApiRes<T>>;
