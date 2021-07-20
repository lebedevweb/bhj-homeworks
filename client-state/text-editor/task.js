const text = document.getElementById('editor');
const clear = document.getElementById('clear');
const local = localStorage.getItem('myText');
text.value = local;

text.onkeyup = ((e) => {
  localStorage.setItem('myText', text.value);
});

clear.onclick = ((e) => {
  localStorage.removeItem('myText');
  text.value='';
});
