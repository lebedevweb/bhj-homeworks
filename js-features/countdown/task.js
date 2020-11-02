'use strict';

// Часть 1
const timer = function () {
  const timerElement = document.getElementById('timer');
  timerElement.textContent -= 1;
  if (Number.parseInt(timerElement.textContent) === 0) {
    clearInterval(intervalTimer);
    alert('Вы победили в конкурсе!');
  }
}

const intervalTimer = setInterval(timer,1000);

// Часть 2
const countdown = function () {
  const timer = document.getElementById('countdown');
  let getTime = new Date(`Thu Jan 01 1970 ${timer.textContent} GMT+0000`).getTime();
  let newTime = getTime - 1000;
  let hour = Math.floor((newTime / (1000 * 60 * 60)) % 24);
  let min = Math.floor((newTime / 1000 / 60) % 60);
  let sec = Math.floor((newTime / 1000) % 60);

  if (sec === 0 && min === 0 && hour === 0) {
    clearInterval(countdownTimer);
    // location.assign('https://download.mozilla.org/?product=firefox-devedition-stub&os=win&lang=ru');
    download();
  }

  if (sec < 10) {sec = '0' + sec;}
  if (min < 10) {min = '0' + min;}
  if (hour < 10) {hour = '0' + hour;}

  timer.textContent = hour + ':' + min + ':' + sec;
}

const countdownTimer = setInterval(countdown,1000);

// Часть 3
function download() {
  let link = document.createElement('a');
  link.setAttribute('href', 'https://download.mozilla.org/?product=firefox-devedition-stub&os=win&lang=ru');
  link.setAttribute('download', 'Firefox Developer Edition');
  link.setAttribute('target', '_blank')
  link.click();
}