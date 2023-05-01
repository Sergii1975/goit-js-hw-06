const inputEl = document.querySelector('input#font-size-control');
const spanEl = document.querySelector('#text');

inputEl.addEventListener('input', rangeHandle);
function rangeHandle(event) {
    spanEl.style.fontSize = event.target.value +'px'
};