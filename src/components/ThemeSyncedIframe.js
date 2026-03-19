import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import {useColorMode} from '@docusaurus/theme-common';

export default function ThemeSyncedIframe({
  src,
  title,
  height = 860,
  messageType = 'theme-synced-iframe-theme',
}) {
  const iframeRef = React.useRef(null);
  const {colorMode} = useColorMode();
  const theme = colorMode === 'light' ? 'light' : 'dark';
  const iframeSrc = useBaseUrl(`${src}${src.includes('?') ? '&' : '?'}theme=${theme}`);

  const syncTheme = React.useCallback(() => {
    const frameWindow = iframeRef.current?.contentWindow;
    if (!frameWindow) {
      return;
    }

    frameWindow.postMessage(
      {
        type: messageType,
        theme,
      },
      window.location.origin,
    );
  }, [messageType, theme]);

  React.useEffect(() => {
    syncTheme();
    const timeoutId = window.setTimeout(syncTheme, 120);

    return () => window.clearTimeout(timeoutId);
  }, [syncTheme]);

  return (
    <iframe
      ref={iframeRef}
      src={iframeSrc}
      title={title}
      width="100%"
      height={height}
      style={{border: 'none', borderRadius: '8px', display: 'block'}}
      loading="lazy"
      onLoad={syncTheme}
    />
  );
}
