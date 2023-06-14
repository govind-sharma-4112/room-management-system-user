// Retrieve the form element from the DOM
const form = document.getElementById('appoinment-form');

// Add event listener for form submission
form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the form from submitting

    // Retrieve the values from the form fields
    const title = document.getElementById('title-form').value;
    const startDate = document.getElementById('startDate-form').value;
    const startTime = document.getElementById('starton-form').value;
    const endTime = document.getElementById('endson-form').value;
    const description = document.getElementById('discription-form').value;
    const participant = document.getElementById('participant-form').value;

    // Create an object to store the form data
    const appointment = {
        title,
        startDate,
        startTime,
        endTime,
        description,
        participant
    };

    // Check if local storage is supported by the browser
    if (typeof Storage !== 'undefined') {
        // Retrieve existing appointments from local storage or initialize an empty array
        let appointments = JSON.parse(localStorage.getItem('appointments')) || [];

        // Add the new appointment to the array
        appointments.push(appointment);

        // Store the updated appointments array in local storage
        localStorage.setItem('appointments', JSON.stringify(appointments));

        // Clear the form fields
        form.reset();

        // Optionally, display a success message or perform other actions
        alert('Appointment created successfully!');
        window.location.replace("home.html");
    } else {
        // Local storage is not supported
        alert('Sorry, your browser does not support local storage.');
    }
});

