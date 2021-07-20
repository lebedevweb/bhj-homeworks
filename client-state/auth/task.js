let signForm = document.getElementById('signin');
let signButton = document.getElementById('signin__btn');
let login = document.querySelector('[name="login"]');
let password = document.querySelector('[name="password"]');
let welcomeForm = document.getElementById('welcome');
let userId = document.getElementById('user_id')

if (localStorage.id === undefined) {
  signForm.classList.add('signin_active');
  signButton.addEventListener('click', signIn);
} else {
  welcomeForm.classList.add('welcome_active');
  userId.innerText = localStorage.id
}

function signIn(event) {
  let auth = new XMLHttpRequest();
  auth.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');
  let lp = new FormData();
  lp.append('login', login.value);
  lp.append('password', password.value);
  auth.send(lp);
  event.preventDefault();
  auth.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      confirmation(JSON.parse(auth.responseText));
    }
  }

}

function confirmation(response) {
  if (response.success) {
    let id = response.user_id;
    signForm.classList.remove('signin_active');
    welcomeForm.classList.add('welcome_active');
    localStorage.setItem('id', id);
    userId.innerText = id

  } else {
    alert('Неверный логин/пароль');
  }

}
