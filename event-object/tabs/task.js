let tabs = Array.from(document.querySelectorAll('.tab'));
let tabcontent = document.querySelectorAll('.tab__content');

for (let t of tabs) {
  t.addEventListener('click', (e) => {
    for (let t of tabs) t.classList.remove('tab_active');
    for (let t of tabcontent) t.classList.remove('tab__content_active');
    t.classList.add('tab_active');
    tabcontent[tabs.indexOf(t)].classList.add('tab__content_active');
  })
}
