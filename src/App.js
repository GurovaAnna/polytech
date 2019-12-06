import React from 'react';
import { Provider } from 'mobx-react';
import stores from './store/stores';
import NavBar from './Components/NavBar/NavBar';
import Search from './Components/Search/Search';
import HistoryList from './Components/History/HistoryList';
import YouTubeWrapper from './Components/Video/YouTubeWrapper';
import Grid from '@material-ui/core/Grid';

function App() {
  return (
    <Provider {...stores}>
      <div className="App">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <NavBar />
          </Grid>
          <Grid item xs={12} sm={12} md={3}>
            <HistoryList />
          </Grid>
          <Grid item xs={12} sm={12} md={9}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={12} md={12}>
                <Search />
              </Grid>
              <Grid item xs={12} sm={12} md={12}>
                <YouTubeWrapper />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </Provider>
  );
}

export default App;
