document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('login-form');
    
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      
      var emailInput = document.getElementById('login-username');
      var passwordInput = document.getElementById('login-password');
      
      var loginData = {
        email: emailInput.value,
        password: passwordInput.value
      };
      
      axios.post('http://localhost:8080/login', loginData)
        .then(function(response) {
          var responseData = response.data;
          if (responseData.success) {
            var empId = responseData.data[0].emp_id;

            localStorage.setItem('loggedInUserId', empId);

            // Successful login
            window.location.replace('/html/daskbord.html');
          } else {
            // Invalid credentials or user not found
            alert(responseData.message);
          }
        })
        .catch(function(error) {
          // Handle error
          console.error(error);
          alert('An error occurred during login. Please try again.');
        });
      
      // Clear form fields
      emailInput.value = '';
      passwordInput.value = '';
    });
  });
  