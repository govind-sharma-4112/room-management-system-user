document.addEventListener('DOMContentLoaded', function() {
    var editBtn = document.getElementById('edit-btn');
    var saveBtn = document.getElementById('save-btn');
    var cancelBtn = document.getElementById('cancel-btn');
    var profileName = document.getElementById('name');
    var profileTitle = document.getElementById('title');
    var profileEmail = document.getElementById('email');
    var profileLocation = document.getElementById('location');
    var profileSkills = document.getElementById('skills');
    var editForm = document.getElementById('edit-form');
    var editName = document.getElementById('edit-name');
    var editTitle = document.getElementById('edit-title');
    var editEmail = document.getElementById('edit-email');
    var editLocation = document.getElementById('edit-location');
    var editSkills = document.getElementById('edit-skills');
    
    // Enable Edit Profile functionality
    editBtn.addEventListener('click', function() {
      profileName.style.display = 'none';
      profileTitle.style.display = 'none';
      profileEmail.style.display = 'none';
      profileLocation.style.display = 'none';
      profileSkills.style.display = 'none';
      editForm.classList.remove('hidden');
      editName.value = profileName.innerText;
      editBtn.style.display = 'none';
      
      editTitle.value = profileTitle.innerText;
      editEmail.value = profileEmail.innerText;
      editLocation.value = profileLocation.innerText;
      editSkills.value = profileSkills.innerText;
    });
    
    // Save edited profile
    saveBtn.addEventListener('click', function() {
      profileName.innerText = editName.value;
      profileTitle.innerText = editTitle.value;
      profileEmail.innerText = editEmail.value;
      profileLocation.innerText = editLocation.value;
      profileSkills.innerText = editSkills.value;
      profileName.style.display = 'block';
      profileTitle.style.display = 'block';
      profileEmail.style.display = 'block';
      profileLocation.style.display = 'block';
      profileSkills.style.display = 'block';
      editForm.classList.add('hidden');
      editBtn.style.display = 'inline';
    });
    
    // Cancel editing profile
    cancelBtn.addEventListener('click', function() {
      profileName.style.display = 'block';
      profileTitle.style.display = 'block';
      profileEmail.style.display = 'block';
      profileLocation.style.display = 'block';
      profileSkills.style.display = 'block';
      editBtn.style.display = 'inline';
      editForm.classList.add('hidden');
    });
  });
  