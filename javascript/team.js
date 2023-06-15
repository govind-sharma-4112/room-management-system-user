
    var teamMember =[
    {
        "sno":"1",
        "empid":"1",
        "employeename":"Vaibhav",
        "slot":"2:00PM"
    },
    {

            "sno":"2",
            "empid":"1",
            "employeename":"Vaibhav",
            "slot":"6:00PM"

        },


    ]
    buildTable(teamMember)
    function buildTable(data){
    var table = document.getElementById("mytable")
    for(var i=0;i<data.length;i++) {
    var row = `<tr>
                              <td>${data[i].sno}</td>
                              <td>${data[i].empid}</td>
                              <td>${data[i].employeename}</td>
                              <td>${data[i].slot}</td>
</tr>`
    table.innerHTML +=row
}
}

