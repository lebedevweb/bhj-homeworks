const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.send();
xhr.onreadystatechange = function (){
  if (xhr.status != 200) return;
  if (xhr.readyState == 4) {
    response = JSON.parse(xhr.responseText);
    //console.log( response);

    const pollTitle = document.getElementById('poll__title');
    const pollAnswers = document.getElementById('poll__answers');

    pollTitle.textContent = response.data.title;
    let idAnswer = 0;
    response.data.answers.forEach((el) => {
      pollAnswers.innerHTML +=`<button class="poll__answer" data-id="${response.id},${idAnswer}">${el}</button>`;
      idAnswer++;
    });
  };
};

document.onclick = function(event) {
  let target = event.target;
  if (!target.classList.contains('poll__answer')) return;
  const id = target.dataset.id.split(',');

  const xhr = new XMLHttpRequest;
  xhr.open( 'POST', 'https://netology-slow-rest.herokuapp.com/poll.php' );xhr.setRequestHeader( 'Content-type', 'application/x-www-form-urlencoded' );
  xhr.send( `vote=${id[0]}&answer=${id[1]}` );

  xhr.onreadystatechange = function (){
    if (xhr.status != 200) return;
    if (xhr.readyState == 4) {
      response = JSON.parse(xhr.responseText);

      document.getElementById('poll__answers').innerHTML += `<h1>Статистика</h1><br>`;
      for (let i of response.stat){
        if (i.answer == target.textContent) {
          document.getElementById('poll__answers').innerHTML +=`<p>Ответ <b><i>${i.answer}</i></b> -  количество голосов <b><i>${i.votes}</i></b></p><br>`
        } else {
          document.getElementById('poll__answers').innerHTML +=`<p>Ответ <b>${i.answer}</b> -  количество голосов <b>${i.votes}</b></p><br>`
        };
      };
    };
  };
}
