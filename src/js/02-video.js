import Player from '@vimeo/player';

var throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const VIDEO_PARAMS = localStorage.getItem('videoplayer-current-time');

function setToLocalStorage(e) {
    localStorage.setItem('videoplayer-current-time', e.seconds)
}

player.on('pause', setToLocalStorage);

player.on('timeupdate', throttle(setToLocalStorage, 1000))

player.getCurrentTime().then((resp) => {
    if (resp.seconds > 0) {
        setToLocalStorage(resp);
    }
})

if (VIDEO_PARAMS) {
    player.setCurrentTime(localStorage.getItem('videoplayer-current-time'))
}