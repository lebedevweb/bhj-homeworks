'use strict';
const menuLink = document.querySelectorAll('.menu__link');
const menuSub = document.querySelectorAll('.menu_sub');

for (let i = 0; i < menuLink.length; i++) {
  menuLink[i].onclick = function () {
    close();
    menuLink[i].closest("li").querySelector('.menu_sub').classList.toggle('menu_active');
    return false;
  }
}

const close = () => {
  if (menuSub.classList.contains('menu_active')) {
    menuSub.classList.remove('menu_active');
  }
}