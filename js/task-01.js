
const items = document.querySelectorAll('ul#categories > li.item');
console.log(`Number of categories: ${items.length}`);
items.forEach.call(items, (element) => {
    const title = element.querySelector('h2').innerHTML;
    const itemsLength = element.querySelectorAll('li').length;
    console.log(`Category: ${title} 
     Elements: ${itemsLength}`);
});