const form = document.getElementById('form');
form.addEventListener('submit', (n) => {
  const checkEmail = document.getElementById('email');
  const invalid = document.querySelector('.validate-email');
  n.preventDefault();
  if (checkEmail.value !== checkEmail.value.toLowerCase()) {
    invalid.innerText = 'Please use lowercase for correct email address format.';
    checkEmail.style.borderColor = 'red';
  } else {
    form.submit();
  }
});