document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('login-form');
    
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      
      var emailInput = document.getElementById('login-username');
      var passwordInput = document.getElementById('login-password');
      
      var storedUserData = localStorage.getItem('userData');
      
      if (storedUserData) {
        var userData = JSON.parse(storedUserData);
        
        if (emailInput.value === userData.email && passwordInput.value === userData.password) {
          // Successful login
          alert('Login successful!');
          // Redirect to another page or perform other actions
        //   document.open('Profile.html');
        //   window.open('Profile.html');
            window.location.replace("/html/daskbord.html");

        } else {
          // Invalid credentials
          alert('Invalid email or password!');
        }
      } else {
        // User data not found
        alert('No user registered. Please register first.');
      }
      
      // Clear form fields
      emailInput.value = '';
      passwordInput.value = '';
    });
  });
  