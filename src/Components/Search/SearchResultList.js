import React from 'react';
import SearchResultItem from './SearchResultItem';
import List from '@material-ui/core/List';
import { inject, observer } from 'mobx-react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  list: {
    position: 'absolute',
    top: 50,
    left: 0,
    width: '100%',
    backgroundColor: 'white',
  },
}));

const SearchResultList = inject('appStore')(
  observer(({ appStore }) => {
    const { videoList, isVisible } = appStore;
    const classes = useStyles();
    if (isVisible.get()) {
      const videos = videoList.get('videos').map(item => {
        return <SearchResultItem key={item.id.videoId} video={item} />;
      });
      return (
        <div>
          <List component="ul" className={classes.list}>
            {videos}
          </List>
        </div>
      );
    } else {
      return null;
    }
  }),
);

export default SearchResultList;
