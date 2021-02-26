let let nightButton = document.querySelector('.night-button');
let nightButtonPEl = document.querySelector('.night-button p');
let bodyEl = document.querySelector('body');
let mainEl = document.querySelector('main');
let bodyHeader = document.querySelector('body > header');
let footerEl = document.querySelector('footer');
let cards = document.querySelectorAll('.card');
let pEl = document.querySelectorAll('p');
let aEl = document.querySelectorAll('.grid a');
let navPEl = document.querySelectorAll('nav a div p');

const darkMode = function(event) {
  event.stopPropagation();
  if(nightButton.querySelector('p').textContent === "Light Mode On") {
    nightButton.style.backgroundColor = '#393e46';
    bodyEl.style.backgroundColor = '#364f6b';
    mainEl.style.backgroundColor = '#364f6b';

    cards.forEach((element) => element.style.backgroundColor = 'gray');
    pEl.forEach((element) => element.style.color = 'white');
    aEl.forEach((element) => element.style.color = 'white');
    navPEl.forEach((element) => element.style.color = 'black');

    bodyHeader.style.boxShadow = 'inset 0px 1px 15px 5px black';
    footerEl.style.boxShadow = 'inset 0px 1px 15px 5px black';

    nightButton.querySelector('p').textContent = "Dark Mode On";
  } else if(nightButton.querySelector('p').textContent === "Dark Mode On") {
    nightButton.style.backgroundColor = '#ffd369';
    bodyEl.style.backgroundColor = '#f6f6f6';
    mainEl.style.backgroundColor = '#f6f6f6';

    cards.forEach((element) => element.style.backgroundColor = '#d6e4f0');
    pEl.forEach((element) => element.style.color = 'blue');
    aEl.forEach((element) => element.style.color = 'white');
    navPEl.forEach((element) => element.style.color = 'blue');

    bodyHeader.style.boxShadow = 'inset 0px 1px 15px 5px white';
    footerEl.style.boxShadow = 'inset 0px 1px 15px 5px white';

    nightButton.querySelector('p').textContent = "Light Mode On";
  }
};

nightButtonPEl.addEventListener('click', darkMode)
nightButton.addEventListener('click', darkMode)
