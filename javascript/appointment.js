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
  let final = [];
  let meeting_name = document.getElementById("title-form").value;
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
console.log(meeting_date)
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
  } catch (err) {
    console.log(err);
  }
}


