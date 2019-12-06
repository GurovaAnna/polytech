import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import { makeStyles } from '@material-ui/core/styles';
import { inject, observer } from 'mobx-react';
import { get } from 'lodash';

const useStyles = makeStyles(theme => ({
  listItemAvatar: {
    cursor: 'pointer',
  },
}));

const HistoryItem = inject('appStore')(
  observer(({ appStore, video }) => {
    const { handleDeleteBtnClick, handlePlayBtnClick } = appStore;
    const classes = useStyles();
    const { snippet } = video;
    const url = get(snippet, 'thumbnails.default.url');
    return (
      <>
        <ListItem alignItems="flex-start">
          <ListItemAvatar
            onClick={() => handlePlayBtnClick(video)}
            className={classes.listItemAvatar}
          >
            <Avatar alt={snippet.title} src={url} variant="square" />
          </ListItemAvatar>

          <ListItemText>
            <Typography variant="body2">{video.date}</Typography>
          </ListItemText>
          <IconButton
            color="primary"
            onClick={() => handleDeleteBtnClick(video)}
          >
            <DeleteRoundedIcon />
          </IconButton>
        </ListItem>
        <Divider variant="inset" component="li" />
      </>
    );
  }),
);

export default HistoryItem;
