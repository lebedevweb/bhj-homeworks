function boarding(data){
  const board = document.getElementsByClassName('item')[0];

  for (i in data){
    board.innerHTML +=`<div class="item__code">${data[i].CharCode}</div><div class="item__value">${data[i].Value}</div><div class="item__currency">руб.</div>`;
    const loader = document.getElementById('loader');//loader.classList.remove('loader_active');
  }
}

const local = JSON.parse(localStorage.getItem('id'));
if (local) boarding(local);

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');
xhr.send();
xhr.onreadystatechange = function (){
  if (xhr.status != 200) return;
  if (xhr.readyState == 4) {
    response = JSON.parse(xhr.responseText);
    localStorage.setItem('id', JSON.stringify(response.response.Valute));
    boarding(response.response.Valute)
    loader.classList.remove('loader_active');
  };
};
