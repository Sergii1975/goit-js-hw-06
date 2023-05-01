const button_set = {
  sub: document.querySelector("[data-action='increment']"),
  add: document.querySelector("[data-action='decrement']"),
  span: document.querySelector('#value'),
  counterEl: document.querySelector('#counter '),
};
let counterValue = 0;
const increment = () => {
  counterValue += 1;

  button_set.span.textContent = counterValue;
};

const decrement = () => {
  counterValue -= 1;

  button_set.span.textContent = counterValue;
};
button_set.sub.addEventListener('click', increment);
button_set.add.addEventListener('click', decrement);