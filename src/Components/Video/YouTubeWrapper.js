import React from 'react';
import { inject, observer } from 'mobx-react';
import YouTubeVideo from './YouTubeVideo';

const YouTubeWrapper = inject('appStore')(
  observer(({ appStore }) => {
    const { playingVideoId } = appStore;

    return playingVideoId.get() ? (
      <YouTubeVideo playingVideoId={playingVideoId} />
    ) : null;
  }),
);

export default YouTubeWrapper;
