
    var teamMember =[
    {
        "sno":"1",
        "empid":"1",
        "employeename":"vaibhav",
        "slot":"2:00PM"
    },
    {

        "sno":"2",
        "empid":"3",
        "employeename":"vani",
        "slot":"3:00PM"

    },
    {

        "sno":"3",
        "empid":"5",
        "employeename":"naman",
        "slot":"4:00PM"

    },


        {

            "sno":"4",
            "empid":"7",
            "employeename":"shiv",
            "slot":"6:00PM"

        },
        {
            "sno":"5",
            "empid":"9",
            "employeename":"sourabh",
            "slot":"9:00PM"
        }


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

