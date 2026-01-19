'use client';

import { useEffect } from 'react';

export default function FlashPage() {
  useEffect(() => {
    // Redirect to the flash.html file
    window.location.href = '/flash.html';
  }, []);

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      minHeight: '100vh',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <p>Redirecting to flash page...</p>
    </div>
  );
}
