'use strict';
const slide = Array.from(document.querySelectorAll('.slider__arrow'));
const item = Array.from(document.querySelectorAll('.slider__item'));
const dots = Array.from(document.querySelectorAll('.slider__dot'));
let image = 0;
dots[0].classList.add('slider__dot_active')

slide.forEach((b) => {
  b.addEventListener('click', handler)
});

dots.forEach((b) => {
  b.addEventListener('click', clicker)
});

function remove(number){
  dots[number].classList.remove('slider__dot_active');
  item[number].classList.remove('slider__item_active');
}

function clicker(){
  remove(image);
  this.classList.add('slider__dot_active');
  image = dots.findIndex(it => it == this);
  item[image].classList.add('slider__item_active');
}

function handler(){
  remove(image);
  if (this.className == 'slider__arrow slider__arrow_next') {
    image += 1;
    if (image == item.length) {image = 0};
  }
  if (this.className == 'slider__arrow slider__arrow_prev') {
    image -=1;
    if (image == -1) {image = item.length-1};
  }
  dots[image].classList.add('slider__dot_active');
  item[image].classList.add('slider__item_active');
}
