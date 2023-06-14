// JavaScript code for the participants list page
const participantList = document.getElementById('participantList');
const searchInput = document.getElementById('searchInput');
const popup = document.getElementById('popup');
const overlay = document.getElementById('overlay');
let participants = [
    {
        name: "Aman Patel",
        email:"vaibhavlove6062@gmail.com"
    },
    {
        name: "Sourabh",
        email:"vaibhavlove6062@gmail.com"
    },
    {
        name: "Rajat",
        email:"vaibhavlove6062@gmail.com"
    },
    {
        name: "Sumit",
        email:"vaibhavlove6062@gmail.com"
    },

];

// Display participants
function displayParticipants(participants) {
    participantList.innerHTML = '';
    participants.forEach(participant => {
        const participantCard = document.createElement('li');
        participantCard.className = 'participant-card';
        participantCard.innerHTML = `
          <input type="checkbox" class="checkbox">
          <span class="participant-name">${participant.name}</span>
        `;
        participantCard.addEventListener('click', () => showPopup(participant));
        participantList.appendChild(participantCard);
    });
}

// Show pop-up with participant details
let users = []

function showPopup(participant) {

    users = participant.email;
    console.log(users)
    for(let i =0;i<users.length;i++){
        console.log(users[i])
    }
    document.getElementById('participantName').textContent = participant.name;
    popup.style.display = 'block';
    overlay.style.display = 'block';

}



// Close pop-up
function closePopup() {
    popup.style.display = 'none';
    overlay.style.display = 'none';
}

// Search participants
function searchParticipants() {
    const searchText = searchInput.value.trim();

    const filteredParticipants = participants.filter(participant =>
        participant.name.toLowerCase().includes(searchText)
    );
    displayParticipants(filteredParticipants);
}

// Event listener for search input
searchInput.addEventListener('input', searchParticipants);

// Initial display of participants
displayParticipants(participants);


// Retrieve the selected participants from local storage or initialize an empty array
let selectedParticipants = JSON.parse(localStorage.getItem('selectedParticipants')) || [];

// Function to handle the select button click
function handleSelectButton() {
    // Get the checkboxes for all participants
    const checkboxes = document.getElementsByClassName('checkbox');

    // Loop through the checkboxes and add the selected participants to the array
    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            const participant_name = checkboxes[i].nextSibling.textContent;
            console.log(participant_name);
            selectedParticipants.push(participant_name);
        }
    }

    // Store the updated selected participants array in local storage
    localStorage.setItem('selectedParticipants', JSON.stringify(selectedParticipants));

    // Redirect the user to the second page or perform any other desired action
    window.location.replace('appoinment.html');
}

// Event listener for the select button
const selectButton = document.querySelector('button[type="submit"]');
selectButton.addEventListener('click', handleSelectButton);

//smtp email submit
function sendMail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "username",
        Password : "password",
        To : 'them@website.com',
        From : "you@isp.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
        message => alert(message)
    );
}