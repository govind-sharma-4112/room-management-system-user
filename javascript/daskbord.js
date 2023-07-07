const daysTag = document.querySelector(".days"),
  currentDate = document.querySelector(".current-date"),
  prevNextIcon = document.querySelectorAll(".icons span");

let date = new Date(),
  currYear = date.getFullYear(),
  currMonth = date.getMonth();

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const renderCalendar = () => {
  let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(),
    lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(),
    lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(),
    lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();
  let liTag = "";

  for (let i = firstDayofMonth; i > 0; i--) {
    liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
  }

  for (let i = 1; i <= lastDateofMonth; i++) {
    let isToday =
      i === date.getDate() &&
      currMonth === new Date().getMonth() &&
      currYear === new Date().getFullYear()
        ? "active"
        : "";
    liTag += `<li class="${isToday}">${i}</li>`;
  }

  for (let i = lastDayofMonth; i < 6; i++) {
    liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`;
  }
  currentDate.innerText = `${months[currMonth]} ${currYear}`;
  daysTag.innerHTML = liTag;
};
renderCalendar();

prevNextIcon.forEach((icon) => {
  icon.addEventListener("click", () => {
    currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;

    if (currMonth < 0 || currMonth > 11) {
      date = new Date(currYear, currMonth);
      currYear = date.getFullYear();
      currMonth = date.getMonth();
    } else {
      date = new Date();
    }
    renderCalendar();
  });
});



document.addEventListener("DOMContentLoaded", function () {
  var editBtn = document.getElementById("edit-btn");
  var saveBtn = document.getElementById("save-btn");
  var cancelBtn = document.getElementById("cancel-btn");
  var profileName = document.getElementById("name");
  var profileTitle = document.getElementById("title");
  var profileEmail = document.getElementById("email");
  var profileLocation = document.getElementById("location");
  var profileSkills = document.getElementById("skills");
  var editForm = document.getElementById("edit-form");
  var editName = document.getElementById("edit-name");
  var editTitle = document.getElementById("edit-title");
  var editEmail = document.getElementById("edit-email");
  var editLocation = document.getElementById("edit-location");
  var editSkills = document.getElementById("edit-skills");

  // Function to fetch profile data
 async function fetchProfileData() {
   
    var loggedInUserId = localStorage.getItem('loggedInUserId');

    // Make a GET request to fetch the profile data
 await axios.get(`http://10.0.0.13:8080/profile/get/${loggedInUserId}`)
      .then(function (response) {
        var data = response.data.data;

        // Populate the HTML elements with the retrieved profile data
        if (data) {
          profileName.innerText = data[0].name;
          profileTitle.innerText = data[0].position;
          profileEmail.innerText = data[0].email;
          profileLocation.innerText = data[0].password;
          profileSkills.innerText = data[0].skills;
        } else {
          console.log("User not found");
        }
      })
      .catch(function (error) {
        console.error(error);
      });
      
  }

  // Enable Edit Profile functionality
  editBtn.addEventListener("click", function () {
    profileName.style.display = "none";
    profileTitle.style.display = "none";
    profileEmail.style.display = "none";
    profileLocation.style.display = "none";
    profileSkills.style.display = "none";
    editForm.classList.remove("hidden");
    editBtn.style.display = "none";
    editName.value = profileName.innerText;
    editTitle.value = profileTitle.innerText;
    editEmail.value = profileEmail.innerText;
    editLocation.value = profileLocation.innerText;
    editSkills.value = profileSkills.innerText;
  });

  // Save edited profile
  saveBtn.addEventListener("click", async function () {

    var loggedInUserId = localStorage.getItem('loggedInUserId');

    var updatedProfile = {
      username: editName.value,
      password: editLocation.value,// Update the password if needed
      email: editEmail.value,
      position: editTitle.value,
      skills: editSkills.value
    };

    // Make a PUT request to update the profile
    await axios.put(`http://10.0.0.13:8080/profile/update/${loggedInUserId}`, updatedProfile)
      .then(function (response) {
        var responseData = response.data;
        if (responseData.success) {
        } else {
          // Profile update failed
          console.log(responseData.message);
        }
      })
      .catch(function (error) {
        console.error(error);
      });


    profileName.innerText = editName.value;
    profileTitle.innerText = editTitle.value;
    profileEmail.innerText = editEmail.value;
    profileLocation.innerText = editLocation.value;
    profileSkills.innerText = editSkills.value;
    profileName.style.display = "block";
    profileTitle.style.display = "block";
    profileEmail.style.display = "block";
    profileLocation.style.display = "block";
    profileSkills.style.display = "block";
    editForm.classList.add("hidden");
    editBtn.style.display = "inline";

    
  });

  // Cancel editing profile
  cancelBtn.addEventListener("click", function () {
    profileName.style.display = "block";
    profileTitle.style.display = "block";
    profileEmail.style.display = "block";
    profileLocation.style.display = "block";
    profileSkills.style.display = "block";
    editForm.classList.add("hidden");
    editBtn.style.display = "inline";
  });

  // Fetch the profile data on page load
  fetchProfileData();
});

