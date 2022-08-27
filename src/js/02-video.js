import Player from '@vimeo/player';
import { throttle } from 'lodash';

const STORAGE_KEY = 'videoplayer-current-time';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onPlay = function (data) {
  localStorage.setItem(STORAGE_KEY, data.seconds);
};
player.on('timeupdate', throttle(onPlay, 1000));

const secondsItem = localStorage.getItem(STORAGE_KEY);
if (secondsItem) {
  player
    .setCurrentTime(secondsItem)
    .then(function (seconds) {})
    .catch(function (error) {
      switch (error.name) {
        case 'Error':
          break;
        default:
          break;
      }
    });
}
