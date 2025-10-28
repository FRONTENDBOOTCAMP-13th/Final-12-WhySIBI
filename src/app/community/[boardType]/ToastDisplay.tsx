'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import toast from 'react-hot-toast';

export default function ToastDisplay() {
  const searchParams = useSearchParams();
  const deleted = searchParams.get("deleted");

  useEffect(() => {
    if (deleted === "1") {
      toast.success("게시글이 삭제되었습니다.", { position: "top-center" });
    }
  }, [deleted]);

  return null;
}
