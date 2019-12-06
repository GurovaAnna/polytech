import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import { inject, observer } from 'mobx-react';
import { get } from 'lodash';
const SearchResultItem = inject('appStore')(
  observer(({ appStore, video }) => {
    const { handlePlayBtnClick } = appStore;
    const { snippet } = video;
    const url = get(snippet, 'thumbnails.default.url');
    return (
      <>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt={snippet.title} src={url} variant="square" />
          </ListItemAvatar>
          <ListItemText>{snippet.title}</ListItemText>
          <IconButton color="primary" onClick={() => handlePlayBtnClick(video)}>
            <PlayArrowIcon />
          </IconButton>
        </ListItem>
        <Divider variant="inset" component="li" />
      </>
    );
  }),
);

export default SearchResultItem;
