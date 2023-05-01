
const textInput = document.querySelector('input#name-input');
const spanName = document.querySelector('span#name-output');

textInput.addEventListener('input', (event) => {
    spanName.textContent = event.target.value.trim();
});

