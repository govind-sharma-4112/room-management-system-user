// var con = require("../connectDB");
// var connection = con.getConnection();
// connection.connect();
// var express = require("express");
// var axios = require("axios");

// var router = express.Router();
// router.get("/get/:fk_emp_id", (req, res) => {
//   try {
//     const empId = req.params.fk_emp_id;
//     const query = "SELECT * FROM Meetings WHERE fk_emp_id = ?";

//     connection.query(query, [empId], (error, data) => {
//       if (error) {
//         throw error;
//       } else {
//         return res.json({
//           data,
//           success: true,
//           message: "Team members retrieved successfully",
//         });
//       }
//     });
//   } catch (error) {
//     return res.json({
//       data: null,
//       success: false,
//       message: error.message,
//     });
//   }
// });

// module.exports = router;

// Retrieve emp_id from local storage or login API response
// var emp_id = localStorage.getItem("emp_id");

// console.log(emp_id);

// // Make API request using emp_id
// axios
//   .get(`http://localhost:8080/meetings/get/${emp_id}`)
//   .then(function (response) {
//     var responseData = response.data;

//     if (responseData.success) {
//       var teamMembers = responseData.data;
//       buildTable(teamMembers);
//     } else {
//       console.log(responseData.message);
//     }
//   })
//   .catch(function (error) {
//     console.error(error);
//   });

// function buildTable(data) {
//   var table = document.getElementById("mytable");
//   table.innerHTML = ""; // Clear existing table content

//   for (var i = 0; i < data.length; i++) {
//     var row = `
//       <tr>
//         <td>${data[i].meeting_id}</td>
//         <td>${data[i].meeting_name}</td>
//         <td>${data[i].start_time}</td>
//         <td>${data[i].end_time}</td>
//         <td>${data[i].meeting_status}</td>
//       </tr>`;
//     table.innerHTML += row;
//   }
// }
var loggedInUserId = localStorage.getItem('loggedInUserId');
console.log(loggedInUserId);
    // Make a GET request to fetch the profile data
    axios.get(`http://localhost:8080/meeting/get/${loggedInUserId}`)
    .then(function (response) {
  var responseData = response.data;
  console.log("User meeting Data: "+ response);

  if (responseData.success) {
    var teamMembers = responseData.data;
    buildTable(teamMembers);
  } else {
    console.log(responseData.message);
  }
})
.catch(function (error) {
  console.error(error);
});

function buildTable(data) {
var table = document.getElementById("mytable");
table.innerHTML = ""; // Clear existing table content

for (var i = 0; i < data.length; i++) {
  var row = `
    <tr>
      <td>${data[i].meeting_id}</td>
      <td>${data[i].meeting_name}</td>
      <td>${data[i].start_time}</td>
      <td>${data[i].end_time}</td>
      <td>${data[i].meeting_status}</td>
    </tr>`;
  table.innerHTML += row;
}
}
