document.addEventListener('DOMContentLoaded', function() {
  var form = document.getElementById('register-form');
  
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    var usernameInput = document.getElementById('register-username');
    var emailInput = document.getElementById('register-email');
    var passwordInput = document.getElementById('register-password');
    var confirmPasswordInput = document.getElementById('register-confirm-password');
    
    var userData = {
      name: usernameInput.value,
      email: emailInput.value,
      password: passwordInput.value,
      position: 'Engineer'
    };
    
    axios.post('http://localhost:8080/register', userData)
      .then(function(response) {
        // Clear form fields
        usernameInput.value = '';
        emailInput.value = '';
        passwordInput.value = '';
        confirmPasswordInput.value = '';
        
        // Display success message or redirect to another page
        alert('Registration successful! You can now login.');
        window.location.replace('/html/Index.html');
      })
      .catch(function(error) {
        // Handle error
        console.error(error);
        alert('An error occurred during registration. Please try again.');
      });
  });
});

