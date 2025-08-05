'use client';

import { useEffect } from 'react';
import { showSuccessToast } from '@/utils/toast';

export default function ToastDisplay() {
  useEffect(() => {
    const msg = sessionStorage.getItem('post_success_toast');
    if (msg) {
      showSuccessToast(msg);
      sessionStorage.removeItem('post_success_toast');
    }
  }, []);


  return null;
}
