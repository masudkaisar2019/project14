
function load() {
       var mydata = JSON.parse(data);
       alert(mydata.length);
       var show_data = document.getElementById("Existing_Task");
       for(var i = 0; i < mydata.length;i++){   
           
           show_data.innerHTML = show_data.innerHTML  + 
            "<tr class= 'inner' id = '+i+'>"+
                "<td>"+ mydata[i].name+"</td>"+"&nbsp &nbsp &nbsp &nbsp"+
               "<td>"+mydata[i].date+"</td>"+"&nbsp &nbsp &nbsp &nbsp"+
               "<td>"+mydata[i].assigned+"</td>"+
                "</tr>"+ "<br>"+"<br>";
            
    }
}


function post(){
    
    var task_name = document.getElementById("task_name").value;
    var task_date = document.getElementById("task_id").value;
    var task_assigned = document.getElementById("task_assigned").value;
    var newObject = {
        "name" : task_name,
        "date" : task_date,
        "assigned": task_assigned    
    };
    console.log(newObject.name);
    var show_output= document.getElementById("Existing_Task");
    for(var i = 0;i<newObject.length;i++){
        // document.body.innerHTML =document.body.innerHTML+ "<tr class='inner' id= '+i+'>"+
        // "<td>"+newObject[i].name+"</td>"+"&nbsp &nbsp &nbsp &nbsp"+
        // "<td>"+newObject[i].date+"</td>"+"&nbsp &nbsp &nbsp &nbsp"+
        // "<td>"+newObject[i].assigned+"</td>"+ "</tr>"+"<br>"+"<br>";
        var table_tr = document.createElement("tr");
        var td_name = document.createElement("td");
        var td_date= document.createElement("td");
        var td_assigned = document.createElement("td");
        td_name.textContent= myObject[i].name;
        td_date.textContent= myObject[i].date;
        td_assigned.textContent= myObject[i].assigned;
        table_tr.appendChild(td_name);
        table_tr.appendChild(td_date);
        table_tr.appendChild(td_assigned);
    
    }

}
