let value = document.querySelector('.dropdown__value')
let list = document.querySelector('.dropdown__list');

value.onclick = () => {list.classList.add('dropdown__list_active')};

let choices = document.querySelectorAll('.dropdown__link');

for (let c of choices) {
  c.addEventListener('click', (e) => {
      e.preventDefault();
      value.textContent = c.textContent;
      list.classList.remove('dropdown__list_active');
    }
  )
}
