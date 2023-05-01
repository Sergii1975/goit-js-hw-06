const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('ul#ingredients');
const elements = ingredients.map(ingredient => {
  const li = document.createElement('li');
    li.innerText = ingredient
    
    li.classList.add('item')
  return li;
});
 list.append(...elements)

// const list = document.querySelector('ul#ingredients');
// ingredients.forEach(item => {
//   const li = document.createElement('li');
//   li.innerText = item;
//   li.classList.add('item');
//   list.append(li);
// });