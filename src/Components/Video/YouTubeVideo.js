import React, { useEffect } from 'react';
import config from '../../config/api';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  player: {
    [theme.breakpoints.down('sm')]: {
      width: 300,
      height: 200,
    },
  },
}));

const cbPlayerReady = event => {
  event.target.playVideo();
};

let player;

const YouTubeVideo = ({ playingVideoId }) => {
  const videoIdValue = playingVideoId.get();
  const classes = useStyles();
  const loadVideo = () => {
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
  });

  return <div id={`player`} className={classes.player} />;
};

export default YouTubeVideo;
