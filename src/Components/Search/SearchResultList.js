import React from 'react';
import SearchResultItem from './SearchResultItem';
import List from '@material-ui/core/List';
import { inject, observer } from 'mobx-react';

const SearchResultList = inject('appStore')(
  observer(({ appStore }) => {
    const { videoList, isVisible } = appStore;
    if (isVisible.get()) {
      const videos = videoList.get('videos').map(item => {
        return <SearchResultItem key={item.id.videoId} video={item} />;
      });
      return (
        <div>
          <List component="ul">{videos}</List>
        </div>
      );
    } else {
      return null;
    }
  }),
);

export default SearchResultList;
