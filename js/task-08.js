const formEl = document.querySelector('.login-form');
const inputEl = document.querySelector('.login-form input');
const buttonEl = document.querySelector('.login-form button');

formEl.addEventListener('submit', handleSubmit);
function handleSubmit(event) {
    event.preventDefault();
  const {
    elements: { email, password }
  } = event.currentTarget;
    
    if (email.value === '' || password.value ==='') {
    return alert('Please fill in all the fields!');
    }
    console.log({ email, password});
  event.currentTarget.reset();

}

