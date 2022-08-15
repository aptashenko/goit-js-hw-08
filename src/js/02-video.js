import Player from '@vimeo/player';

var throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

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

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
