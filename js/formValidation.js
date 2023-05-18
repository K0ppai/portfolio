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

// const btn = document.getElementById('get-in-touch');

// form.addEventListener('submit', (e) => {
//   e.preventDefault();
// });
// btn.addEventListener('click', () => {
//   let email = document.getElementById('email');
//   let fullname = document.getElementById('name');
//   let textarea = document.getElementById('textarea');
//   email = email.value;
//   fullname = fullname.value;
//   textarea = textarea.value;
//   localStorage.setItem('name', fullname);
//   localStorage.setItem('email', email);
//   localStorage.setItem('message', textarea);
//   email.value = localStorage.getItem('email');
//   fullname.value = localStorage.getItem('name');
//   textarea.value = localStorage.getItem('message');

//   const inputData = {
//     inputName: 'fullname',
//     inputEmail: 'email',
//     inputText: 'textarea',
//   };
//   const strInput = JSON.stringify(inputData);
// });
// console.log(strInput);
// console.log(inputData)
// localStorage.removeItem('data');