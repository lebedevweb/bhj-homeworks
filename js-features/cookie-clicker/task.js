'use strict';
let dateArr = [];

document.getElementById('cookie').onclick = function () {
  const clickerC = document.getElementById('clicker__counter'),
        clickerS = document.getElementById('clicker__speed');

  clickerC.textContent++;

  if (cookie.width === 200) {
    cookie.width = 300;
  } else {
    cookie.width = 200;
  }

  dateArr.push(new Date());
  // console.log(dateArr);

  if (dateArr.length < 2) {
    clickerS.textContent = 1;
  } else if (dateArr.length === 2) {
    clickerS.textContent = (1 / ((dateArr[1] - dateArr[0]) / 1000)).toFixed(2);
  } else if (dateArr.length > 2) {
    dateArr.shift();
    clickerS.textContent = (1 / ((dateArr[1] - dateArr[0]) / 1000)).toFixed(2);
  }
}