import React, { useEffect, useRef } from 'react';
import '../styles/YouTubePlayer.scss';

interface YouTubePlayerProps {
  videoId: string;
  autoplay?: boolean;
}

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

const YouTubePlayer: React.FC<YouTubePlayerProps> = ({ videoId, autoplay = true }) => {
  const playerRef = useRef<HTMLDivElement>(null);
  const playerInstanceRef = useRef<any>(null);

  useEffect(() => {
    // Load the YouTube API script if it's not already loaded
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

      window.onYouTubeIframeAPIReady = initPlayer;
    } else {
      initPlayer();
    }

    function initPlayer() {
      if (playerRef.current && window.YT) {
        playerInstanceRef.current = new window.YT.Player(playerRef.current, {
          videoId: videoId,
          playerVars: {
            autoplay: autoplay ? 1 : 0,
            controls: 1,
            modestbranding: 1,
            rel: 0,
            showinfo: 0
          },
          events: {
            onReady: onPlayerReady
          }
        });
      }
    }

    function onPlayerReady(event: any) {
      if (autoplay) {
        event.target.playVideo();
      }
    }

    return () => {
      if (playerInstanceRef.current) {
        playerInstanceRef.current.destroy();
      }
    };
  }, [videoId, autoplay]);

  return <div className="youtube-player-container">
    <div ref={playerRef} className="youtube-player"></div>
  </div>;
};

export default YouTubePlayer; 