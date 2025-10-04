import React, { useEffect, useRef } from 'react';

import 'lite-youtube-embed/src/lite-yt-embed.css';
const LiteYouTubeEmbed = ({ videoId, title, poster, noCookie = false }) => {
  const elementRef = useRef(null);
  useEffect(() => {
    import('lite-youtube-embed').then(() => {
      if (elementRef.current) {
        if (window.customElements && elementRef.current.upgradedCallback) {
          window.customElements.upgrade(elementRef.current);
        }
      }
    });
  }, []);
  const hostName = noCookie ? 'www.youtube-nocookie.com' : 'www.youtube.com';
  return (
    <lite-youtube
      ref={elementRef}
      videoid={videoId}
      playlabel={title || `Play: Video ${videoId}`}
      poster={poster || `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
      params=""
      host={hostName}
    ></lite-youtube>
  );
};
export default LiteYouTubeEmbed;