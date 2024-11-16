const form = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const email = emailInput.value;
  const password = passwordInput.value;

  // Basic validation (you can add more complex validation as needed)
  if (email === '' || password === '') {
    errorMessage.textContent = 'Please fill in all fields.';
    return;
  }

  // Here, you would typically send the form data to a server-side script
  // for authentication. For now, let's just log the values to the console:
  console.log('Email:', email);
  console.log('Password:', password);

  // Clear the form and display a success message (or handle errors)
  emailInput.value = '';
  passwordInput.value = '';
  errorMessage.textContent = 'Login successful!';
});


