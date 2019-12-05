import endpoints from '../config/api';
import { observable, runInAction, action, computed } from 'mobx';
import { debounce, find, reject } from 'lodash';

export default class AppStore {
  name = observable.box('');
  playingVideoId = observable.box('');
  isLoading = observable.box(true);
  isVisible = observable.box(false);
  videoList = observable.map();
  historyList = observable.array();

  handleChange = action(e => {
    const {
      target: { value },
    } = e;
    this.name.set(value);
    if (value.length >= 3) {
      this.getVideoList(value);
    }
  });

  getVideoList = debounce(async query => {
    try {
      let resultData = await fetch(
        `${endpoints.endpoint}?eventType=${endpoints.eventType}&part=${endpoints.part}&type=${endpoints.type}&q=${query}&key=${endpoints.key}`,
        {
          method: 'GET',
        },
      );
      let res = await resultData.json();
      resultData = null;
      if (res.items.length !== 0) {
        runInAction(() => {
          this.isLoading.set(false);
          this.isVisible.set(true);
          this.videoList.set('videos', res.items);
        });
      } else {
        throw new Error('No videos');
      }
    } catch (error) {
      runInAction(() => {
        this.videoList.set('videos', []);
        this.isLoading.set(false);
        this.isVisible.set(false);
      });
    }
  }, 350);

  handlePlayBtnClick = action(video => {
    this.playingVideoId.set(video.id.videoId);
    const now = new Date();
    video.date = now.toLocaleString('en-US');
    this.historyList.push(video);
    this.handleLocalStorage(this.historyList);
    this.videoList.set('videos', []);
    this.name.set('');
  });

  handleDeleteBtnClick = action(video => {
    this.historyList.remove(video);
    this.handleLocalStorage(this.historyList);
  });

  getHistoryList = action(() => {
    const savedHistory = localStorage.getItem('historyList');
    savedHistory && this.historyList.push(...JSON.parse(savedHistory));
  });

  handleLocalStorage = val => {
    localStorage.setItem('historyList', JSON.stringify(val));
  };
}
