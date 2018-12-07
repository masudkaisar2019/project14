


document.getElementById("myButton").addEventListener("click",add);

//add counter
var count = 0;

//focus on the input 
// function focusOnMyInput(){
//     var myCollection = document.getElementById("my_to_input").focus();   
// }

// Press Enter to Add ToDo

document.getElementById("my_to_input").addEventListener("keyup",function(event){
    event.preventDefault();
    if(event.keyCode === 13) {
        document.getElementById("myButton").click();

    }
});


 
function add(){
    
    var my_input = document.getElementById("my_to_input").value;
        document.getElementById("my_to_input").value = " ";
        console.log("I am test 1"+my_input);
    
    var my_list = document.createElement("li");
    var my_button = document.createElement("Button");
    var textNode = document.createTextNode(my_input);

    console.log("I am test 2" +textNode);

    my_list.appendChild(textNode);
    myDiv.appendChild(my_list);
    my_list.appendChild(my_button);
    my_button.addEventListener("click",removall);

    count = count+1;
    document.getElementById("counter").innerHTML = count;

    
    //LocalStorage 

    // if(typeof(Storage) !== "undefined"){

    //     //store
    //     localStorage.setItem("listItem",my_list);
    //     document.getElementById("myDiv")
    // }



//to remove ToDo

function removall(){
    my_list.removeChild(my_list.childNodes[0]);
    my_list.removeChild(my_button);
    myDiv.removeChild(my_list);
    count= count -1;
    document.getElementById("counter").innerHTML = count;


}
}


