import React, { useEffect } from 'react';
import HistoryItem from './HistoryItem';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import { inject, observer } from 'mobx-react';

const HistoryList = inject('appStore')(
  observer(({ appStore }) => {
    const { historyList, getHistoryList } = appStore;
    useEffect(() => {
      getHistoryList();
      const cleanup = () => {};
      return cleanup;
    }, [getHistoryList]);

    return (
      <List subheader={<ListSubheader component="div">History</ListSubheader>}>
        {historyList.map((item, index) => {
          return (
            <HistoryItem key={`${item.id.videoId}-${index}`} video={item} />
          );
        })}
      </List>
    );
  }),
);

export default HistoryList;
