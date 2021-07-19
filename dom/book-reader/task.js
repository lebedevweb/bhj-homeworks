let book = document.getElementById('book');

const classRemover = (prefix) => {
  const classes = book.className.split(" ").filter(c => !c.startsWith(prefix));
  book.className = classes.join(" ").trim();
}

const classChenger = (value, prefix) => {
  classRemover(prefix);
  book.classList.add(prefix + value);
}

const linksArray = Array.from(document.getElementsByTagName('a'));

linksArray.forEach((item) => {

  item.addEventListener('click', (e) => {

    e.preventDefault();

    const linkRound = () => {
      for (all of linksArray) all.classList.remove('font-size_active');
      item.classList.add('font-size_active')
    }

    const linkShadowText = () => {
      for (let i = 3; i < 6; ++i) linksArray[i].classList.remove('color_active');
      item.classList.add('color_active')

    };

    const linkShadowBg = () => {
      for (let i = 6; i <= 8; ++i) linksArray[i].classList.remove('color_active');
      item.classList.add('color_active')

    };

    let value;
    let prefix;

    if (item.dataset.hasOwnProperty('size')) {
      value = item.getAttribute('data-size');
      prefix = "book_fs-";
      linkRound();
    }

    if (item.dataset.hasOwnProperty('textColor')) {
      value = item.getAttribute('data-text-color');
      prefix = "book_color-";
      linkShadowText()
    }

    if (item.dataset.hasOwnProperty('bgColor')) {
      value = item.getAttribute('data-bg-color');
      prefix = "book_bg-";
      linkShadowBg();
    }

    if (value) classChenger(value, prefix);
    else {
      classRemover('book_fs-');
      linkRound();
    }
  })
})
