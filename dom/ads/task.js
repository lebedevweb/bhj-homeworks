let rotatorsArr = Array.from(document.querySelectorAll('.rotator__case'));

setInterval(() => {
  rotatorsArr[0].classList.remove('rotator__case_active');
  rotatorsArr.push(rotatorsArr[0]);
  rotatorsArr.shift();
  rotatorsArr[0].style.color = rotatorsArr[0].getAttribute('data-color');
  rotatorsArr[0].classList.add('rotator__case_active');
}, 1000);
