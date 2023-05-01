const buttonEl = document.querySelector('button.change-color');
const spanEl = document.querySelector('span.color');

buttonEl.addEventListener('click', () => {
  document.body.style.backgroundColor = getRandomHexColor();
  spanEl.textContent = getRandomHexColor();
})

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

