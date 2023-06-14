document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('register-form');
    
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      
      var usernameInput = document.getElementById('register-username');
      var emailInput = document.getElementById('register-email');
      var passwordInput = document.getElementById('register-password');
      var confirmPasswordInput = document.getElementById('register-confirm-password');
      
      var userData = {
        username: usernameInput.value,
        email: emailInput.value,
        password: passwordInput.value
      };
      
      // Save user data to local storage
      localStorage.setItem('userData', JSON.stringify(userData));
      
      // Clear form fields
      usernameInput.value = '';
      emailInput.value = '';
      passwordInput.value = '';
      confirmPasswordInput.value = '';
      
      // Display success message or redirect to another page
      alert('Registration successful! You can now login.');
      window.location.replace("/html/Index.html");
    });
  });
  