let findChildCheckboxes = (el) => {
  return el.getElementsByClassName('interest__check');
}

let findPapa = (el)=> {
  return el.closest('.interest');
}

let setStatusChildren = (el)=> {
  let childCheckboxes = findChildCheckboxes(findPapa(el));
  if (childCheckboxes[0].checked) for (all of childCheckboxes) all.checked = true;
  else for (all of childCheckboxes) all.checked =  false;
}

let findChecked = (el) => {
  let arr = Array.from(findChildCheckboxes(el));
  arr.shift();
  for (let some of arr) if (some.checked) return true
}

let findUnChecked = (el) => {
  let arr = Array.from(findChildCheckboxes(el));
  arr.shift();
  for (let some of arr) if (!some.checked) return true
}

let setStatusParents = (el) => {
  let papa = findPapa(el);
  while (papa !== null) {
    papa.classList.remove('interest');
    let cuckold = findPapa(papa);
    papa.classList.add('interest')
    if (cuckold !== null) {
      papa = cuckold;
      let checkbox = papa.querySelector('.interest__check')
      if (findChecked(papa) && findUnChecked(papa)) {
        checkbox.indeterminate = true;
        checkbox.checked = false;
      }
      if (findChecked(papa) == undefined) {
        checkbox.indeterminate = false;
        checkbox.checked = false;
      }
      if (findUnChecked(papa) == undefined) {
        checkbox.indeterminate = false;
        checkbox.checked = true;
      }
    }
    else return;
  }
}

let checkboses = findChildCheckboxes(document);

for (let c of checkboses) {
  c.addEventListener('change', () => {
    setStatusChildren(c);
    setStatusParents(c);
  })
}
