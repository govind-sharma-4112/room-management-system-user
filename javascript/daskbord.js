const daysTag = document.querySelector(".days"),
currentDate = document.querySelector(".current-date"),
prevNextIcon = document.querySelectorAll(".icons span");

let date = new Date(),
currYear = date.getFullYear(),
currMonth = date.getMonth();

const months = ["January", "February", "March", "April", "May", "June", "July",
"August", "September", "October", "November", "December"];

const renderCalendar = () => {
let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(),
lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(),
lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(),
lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();
let liTag = "";

for (let i = firstDayofMonth; i > 0; i--) {
liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
}

for (let i = 1; i <= lastDateofMonth; i++) { let isToday=i===date.getDate() && currMonth===new Date().getMonth() && currYear===new Date().getFullYear() ? "active" : "" ; liTag +=`<li class="${isToday}">${i}</li>`;
    }

    for (let i = lastDayofMonth; i < 6; i++) { liTag +=`<li class="inactive">${i - lastDayofMonth + 1}</li>`
        }
        currentDate.innerText = `${months[currMonth]} ${currYear}`;
        daysTag.innerHTML = liTag;
        }
        renderCalendar();

        prevNextIcon.forEach(icon => {
        icon.addEventListener("click", () => {
        currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;

        if(currMonth < 0 || currMonth> 11) {
            date = new Date(currYear, currMonth);
            currYear = date.getFullYear();
            currMonth = date.getMonth();
            } else {
            date = new Date();
            }
            renderCalendar();
            });
            });


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
                editBtn.style.display = 'none';
                editName.value = profileName.innerText;
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
                editForm.classList.add('hidden');
                editBtn.style.display = 'inline';
              });
            });
           



           var getMeeting = document.getElementById('values')

            async function getMeetings() {
              let res = await axios.get("http://localhost:8080/meeting/all");
            
              let data = res.data.data;
              console.log(data)
              // let dataString = JSON.stringify(data);

              // Store the data in local storage
              localStorage.setItem('myData', data);
              data.map((i) => {  
              
                var title = i.meeting_name;
                var start = i.start_time;
                var end = i.end_time;
               

              
                console.log(title)
                console.log(start)
                console.log(end)
                // getMeeting.innerText +=title
              });
            }
            getMeetings();
            
            
           