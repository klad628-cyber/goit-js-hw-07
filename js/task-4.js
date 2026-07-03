const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', event => {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  const email = formData.get('email').trim();
  const password = formData.get('password').trim();

  if (email === '' || password === '') {
    alert('Please fill in all fields');
    return;
  }

  console.log({ email, password });
  event.currentTarget.reset();
});
