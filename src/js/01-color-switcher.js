function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

//const button = document.querySelector(".change-color");

//button.addEventListener("click", () => {
 // const body = document.querySelector("body");
 // body.style.background = getRandomHexColor();
//});

const buttonStart = document.querySelector('button[data-start]');
const buttonStop = document.querySelector('button[data-stop]');
const body = document.querySelector('body');
const color = document.querySelector('.color');

let time = null;

const backgroundColorSwitch = function () {
  body.style.backgroundColor = getRandomHexColor();
  body.style.color = getRandomHexColor();
  color.textContent = getRandomHexColor();
};

buttonStart.addEventListener('click', () => {
  time = setInterval(backgroundColorSwitch, 1000);
  buttonStart.disabled = true;
});


buttonStop.addEventListener('click', () => {
  clearInterval(time);
  buttonStart.disabled = false;
});