'use strict';
const dead = document.getElementById('dead');
const lost = document.getElementById('lost');
const getHole = index => document.getElementById(`hole${index}`);

for (let index = 1; index <= 9; index++) {
  getHole(index).onclick = function () {
    if (this.classList.contains('hole_has-mole')) {
      dead.textContent++;
      if (dead.textContent == 10) {
        dead.textContent = 0;
        lost.textContent = 0;
        alert("Вы победитель");
      }
    } else {
      lost.textContent++;
      if (lost.textContent == 5) {
        dead.textContent = 0;
        lost.textContent = 0;
        alert("Кроты одержали победу!");
      }
    }
  }
}
