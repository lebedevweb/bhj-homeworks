'use strict';
const link = Array.from(document.querySelectorAll('.menu__link'));

function handler() {
  if (document.querySelector('.menu_active') != null && this.nextElementSibling == null) {
    document.querySelector('.menu_active').classList.remove('menu_active');
  }
  if (this.nextElementSibling != null) {
    this.nextElementSibling.classList.toggle('menu_active');
    event.preventDefault();
  }
}

link.forEach((b) => {
  b.addEventListener('click', handler)
});
