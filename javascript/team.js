var loggedInUserId = localStorage.getItem('loggedInUserId');
console.log(loggedInUserId);
    // Make a GET request to fetch the profile data
    axios.get(`http://10.0.0.13:8080/meeting/get/${loggedInUserId}`)
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
