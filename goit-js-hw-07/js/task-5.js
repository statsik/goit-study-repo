function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.body;
const btnChangeColor = document.querySelector(".change-color");
const spanColor = document.querySelector(".color");
btnChangeColor.addEventListener("click", onButtonDefChange);

function onButtonDefChange(event) {
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  spanColor.textContent = randomColor;
}


