
const textInput = document.querySelector('input#name-input');
const spanName = document.querySelector('span#name-output');
const onInputChange = function (event) {
    if (event.currentTarget.value.trim() === '') {
        spanName.textContent = 'Anonymous'; 
    } else { spanName.textContent = event.currentTarget.value.trim() }
}
textInput.addEventListener('input', onInputChange);

