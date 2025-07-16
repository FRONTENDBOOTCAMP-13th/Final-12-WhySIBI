import { ApiResPromise, FileUpload } from '@/types';

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const CLIENT_ID = process.env.NEXT_PUBLIC_WHY_SIBI_CLIENT_ID || '';
/**
 * 파일 업로드 함수
 * @param formData - 업로드할 파일이 담긴 FormData 객체
 * @returns 파일 업로드 결과를 반환하는 Promise
 * @description
 * 파일을 서버에 업로드하고, 업로드된 파일 정보를 반환합니다.
 */

export async function upLoadFile(formData: FormData,): ApiResPromise<FileUpload[]> {
  const fileForm = new FormData();
  fileForm.append('attach', formData.get('attach') as File);
  // API 서버에 파일 업로드 요청
  const res = await fetch(`${API_URL}/files`, {
    method: 'POST',
    headers: {
      'Client-Id': CLIENT_ID,
    },
    body: fileForm,
  });
  // 서버에서 반환된 JSON 결과 반환
  return res.json();
}
