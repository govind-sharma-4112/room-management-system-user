const getValue = document.getElementById("chapter");
async function doGetRequest() {
  let res = await axios.get("http://localhost:8080/rooms/all");
  let data = res.data;
  data.data.map((i) => {
    var title = `<option>${i.room_name}</option>`;
    getValue.innerHTML += title;
  });
}
const result = document.getElementById("result");
getValue.onchange = () => {
  result.innertext = this.innerHTML;
};
doGetRequest();
async function meetingadded() {
  // e.preventDefault();
  console.log("hello there");
  let final = [];
  let meeting_name = document.getElementById("title-form").value;
  // console.log(typeof meeting_name)
  let meeting_date = document.getElementById("startDate-form").value;
  let start_time = document.getElementById("starton-form").value;
  let end_time = document.getElementById("endson-form").value;
  let meeting_status = "approved";
  let created_at = new Date();
  let updated_at;
  let updated_by;
  let is_active = 1;
  let fk_room_id = 1;
  let fk_emp_id = 1;
  console.log(meeting_date);
  // let room = docuement.getElementById('room-name').value
  try {
    let res = await axios.post("http://localhost:8080/meeting/add/", {
      meeting_name,
      start_time,
      end_time,
      meeting_date,
      meeting_status,
      fk_emp_id,
      fk_room_id,
      updated_at,
      updated_by,
      created_at,
      is_active,
    });
    console.log(res.data);
    const title = document.getElementById("title-form").value;
    const startDate = document.getElementById("startDate-form").value;
    const startTime = document.getElementById("starton-form").value;
    const endTime = document.getElementById("endson-form").value;
    const description = document.getElementById("discription-form").value;
    const participantList = document.getElementById("participant-form-list");
    // Get the participant names from the list
    const participants = [];
    for (let i = 0; i < participantList.children.length; i++) {
      participants.push(participantList.children[i].textContent);
    }
    // Create an object to store the form data
    const appointment = {
      title,
      startDate,
      startTime,
      endTime,
      description,
      participants,
    };
    // Check if local storage is supported by the browser
    if (typeof Storage !== "undefined") {
      // Retrieve existing appointments from local storage or initialize an empty array
      let appointments = JSON.parse(localStorage.getItem("appointments")) || [];
      // Add the new appointment to the array
      appointments.push(appointment);
      // Store the updated appointments array in local storage
      localStorage.setItem("appointments", JSON.stringify(appointments));
      

      //mail featuring
      let sendMailTo = [];
      const sendMailToEmails = ", ";
      let title = [];
      let sentitle = ",";
      let description = [];
      let SetDescription = ",";
      let startingTime = "";
      let startDate = "";
    

      appointments.map((i) => {
        startingTime = i.startTime;
        startDate = i.startDate;
        title.push(i.title);
        description.push(i.description);
        sendMailTo.push(i.participants);
      });
      const resultMail = sendMailTo.join(sendMailToEmails);
      const resultTitle = title.join(sentitle);
      let resultDescription = description.join(SetDescription);
      resultDescription =
        resultDescription +
        " Meeting starting time is " +
        startingTime +
        " meeting starting Date " +
        startDate;
      console.log(typeof resultMail);
      console.log(resultTitle);
      console.log(resultDescription);
      await Email.send({
        Host: "smtp.elasticemail.com",
        Username: "vaibhavkumawat009@gmail.com",
        Password: "2D399CD9A5ACEA3C425D4AFB1F211F174E2D",
        To: resultMail,
        From: "vaibhavkumawat009@gmail.com",
        Subject: resultTitle,
        Body: resultDescription,
      })
        .then((message) => alert(message))
        .catch(function (err) {
          console.log(err);
        });
    } else {
      // Local storage is not supported
      alert("Sorry, your browser does not support local storage.");
    }
    alert("Appointment created successfully!");
  } catch (err) {
    console.log(err);
  }

 
  window.location.replace('/html/daskbord.html')
}