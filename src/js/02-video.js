import Player from '@vimeo/player';
import { throttle } from 'lodash';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onPlay = function (data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
};
player.on('timeupdate', throttle(onPlay, 1000));

const secondsItem = localStorage.getItem('videoplayer-current-time');
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
