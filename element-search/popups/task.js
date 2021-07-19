"use strict";
const modalMain = document.getElementById('modal_main');
const modalSuccess = document.getElementById('modal_success');
const modalClose = document.getElementsByClassName('modal__close');
// Показ окна при загрузке страницы
modalMain.classList.add('modal_active');
// Открвтие дополнительног окна и закрытие главного
modalClose[1].onclick = function () {
  modalMain.classList.remove('modal_active');
  modalSuccess.classList.add('modal_active');
}
// Закрытие главного окна
modalClose[0].onclick = () => {
  modalMain.classList.remove('modal_active');
}
// Закрытие дополнительного окна
modalClose[2].onclick = () => {
  modalSuccess.classList.remove('modal_active');
}