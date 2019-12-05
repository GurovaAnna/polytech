import React from 'react';
import TextField from '@material-ui/core/TextField';
import { inject, observer } from 'mobx-react';

const SearchField = inject('appStore')(
  observer(({ appStore }) => {
    const { name, handleChange } = appStore;
    return (
      <TextField
        id="searchInput"
        label="Search video"
        value={name.get()}
        onChange={handleChange}
      />
    );
  }),
);

export default SearchField;
