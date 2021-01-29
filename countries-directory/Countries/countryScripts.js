//add text to display on click
let display = document.querySelector('.display');
let displays = document.querySelectorAll('.display > div')
let economyDisplay = document.querySelector('.economy-display');
let cultureDisplay = document.querySelector('.culture-display');
let demographicsDisplay = document.querySelector('.demographics-display');
let politicsDisplay = document.querySelector('.politics-display');
let graphsDisplay = document.querySelector('.graphs-display');
let options = document.querySelectorAll('header > div');


const largeDisplay = function (event) {
  if(event.target.querySelector('p').textContent === "Economy") {
    displays.forEach((el) => el.style.display = 'none');
    economyDisplay.style.display = 'flex';
  } else if(event.target.querySelector('p').textContent === "Culture / Demographics") {
    displays.forEach((el) => el.style.display = 'none');
    cultureDisplay.style.display = 'block';
  } else if(event.target.querySelector('p').textContent === "Immigration") {
    displays.forEach((el) => el.style.display = 'none');
    demographicsDisplay.style.display = 'block';
  } else if(event.target.querySelector('p').textContent === "Politics") {
    displays.forEach((el) => el.style.display = 'none');
    politicsDisplay.style.display = 'block';
  } else if(event.target.querySelector('p').textContent === "Images / Graphs") {
    displays.forEach((el) => el.style.display = 'none');
    graphsDisplay.style.display = 'block';
  }
};

options.forEach((element) => element.addEventListener("click", largeDisplay));
