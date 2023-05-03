const elms = {
  contrEl: document.querySelector('#controls input'),
  btnCreateEl: document.querySelector('button[data-create]'),
  btnDestroyEl: document.querySelector('button[data-destroy]'),
  boxesEl: document.querySelector('#boxes'),
}

  function createBoxes(amount) {
  const boxes = []
  
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement('div');
    
    box.style.width = 30 + (10 * i) +'px';
    box.style.height = 30 + (10 * i) +'px';
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box) 
  }
    elms.boxesEl.append(...boxes);
}
    

  elms.btnCreateEl.addEventListener('click', () => {
  const amount = elms.contrEl.value;
  if(amount > 0) {
    createBoxes(amount);
  }
});

elms.btnDestroyEl.addEventListener('click', () => {
  elms.boxesEl.innerHTML = '';
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
