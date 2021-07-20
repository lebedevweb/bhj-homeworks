function getCookie (text, name){
  let parts = text.split(";");
  for (let i of parts){
    let arr = i.split('=');
    if (arr[0].indexOf(name) != -1) return arr[1];
  };
};

const modal = document.getElementById('subscribe-modal');
const close = document.getElementsByClassName('modal__close')[0];
timerId = setTimeout(function(){modal.classList.add('modal_active')},2000);

const local = getCookie(document.cookie,'modalWin');
if (local == '1'){
  clearTimeout(timerId);
}

close.onclick = function(e){
  modal.classList.remove('modal_active');
  document.cookie = 'modalWin = 1';
}
