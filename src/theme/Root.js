import React, { useEffect } from 'react';
import { useLocation } from '@docusaurus/router';
import AtlasChat from '@site/src/components/AtlasChat';

function ImageZoom() {
  const location = useLocation();

  useEffect(() => {
    // Create overlay once
    let overlay = document.getElementById('img-zoom-overlay');
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.id = 'img-zoom-overlay';
      const img = document.createElement('img');
      overlay.appendChild(img);
      document.body.appendChild(overlay);
      overlay.addEventListener('click', () => overlay.classList.remove('active'));
    }

    // Attach click handlers to all markdown images
    const handler = (e) => {
      const overlayEl = document.getElementById('img-zoom-overlay');
      overlayEl.querySelector('img').src = e.currentTarget.src;
      overlayEl.classList.add('active');
    };

    const attach = () => {
      document.querySelectorAll('.markdown img').forEach((img) => {
        img.removeEventListener('click', handler);
        img.addEventListener('click', handler);
      });
    };

    // Slight delay to let Docusaurus render the page content
    const t = setTimeout(attach, 300);
    return () => clearTimeout(t);
  }, [location.pathname]);

  return null;
}

// Root wraps the entire app — AtlasChat appears on every page
export default function Root({ children }) {
  return (
    <>
      {children}
      <ImageZoom />
      <AtlasChat />
    </>
  );
}
