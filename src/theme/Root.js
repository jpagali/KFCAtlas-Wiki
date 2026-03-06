import React from 'react';
import AtlasChat from '@site/src/components/AtlasChat';

// Root wraps the entire app — AtlasChat appears on every page
export default function Root({ children }) {
  return (
    <>
      {children}
      <AtlasChat />
    </>
  );
}
