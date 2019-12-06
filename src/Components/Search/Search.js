import React from 'react';
import SearchField from './SearchField';
import SearchResultList from './SearchResultList';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  wrapper: {
    position: 'relative',
  },
}));

const Search = () => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <SearchField />
      <SearchResultList />
    </div>
  );
};

export default Search;
