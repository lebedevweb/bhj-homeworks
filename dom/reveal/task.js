let reveal = document.querySelectorAll('.reveal');

for (let r of reveal) addEventListener('scroll', (e) => {
  let revealPos = r.getBoundingClientRect().top;
  if (revealPos < window.innerHeight && revealPos > 0) r.classList.add('reveal_active');
  else r.classList.remove('reveal_active')
});
