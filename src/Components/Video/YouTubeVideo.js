import React, { useEffect } from 'react';
import { inject, observer } from 'mobx-react';
import config from '../../config/api';

const cbPlayerReady = event => {
  event.target.playVideo();
};

let player;

const YouTubeVideo = ({ playingVideoId }) => {
  const videoIdValue = playingVideoId.get();

  const loadVideo = id => {
    player = new window.YT.Player(`player`, {
      videoId: videoIdValue,
      events: {
        onReady: cbPlayerReady,
      },
    });
  };
  useEffect(() => {
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = config.iFrame_api;

      window.onYouTubeIframeAPIReady = loadVideo;

      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    } else {
      player.loadVideoById(videoIdValue);
    }
  }, [videoIdValue]);

  return <div id={`player`} />;
};

export default YouTubeVideo;
