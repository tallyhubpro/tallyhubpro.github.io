'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function FlashHtmlRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/flash');
  }, [router]);

  return (
    <div className="min-h-screen brand-gradient text-white flex items-center justify-center">
      <div className="text-center">
        <div className="text-6xl mb-4">⚡</div>
        <p className="text-xl">Redirecting to Flash page...</p>
      </div>
    </div>
  );
}
