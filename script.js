// const btn = form.querySelector('.sign_up_button'); 
document.addEventListener('input', function (e) {
   const inputEl = document.querySelectorAll('.form_control');
   Array.from(inputEl).forEach(elem => {
      const confirmPassword = document.querySelector('#confirn_password');
      const password = document.querySelector('#password');

      if (!elem.value) {
         console.log('Не введен пароль');
         elem.style.border = '1px solid red';
      } else if (confirmPassword.value !== password.value) {
         console.log('неверно');
         password.style.border = '1px solid red';
         confirmPassword.style.border = '1px solid red';
         return false;
      } else if (confirmPassword.value == password.value) {
         password.style.border = '1px solid green';
         confirmPassword.style.border = '1px solid green';
         return true;
      } else {
         password.value = '';
         confirmPassword.value = '';
      }
   });
});


