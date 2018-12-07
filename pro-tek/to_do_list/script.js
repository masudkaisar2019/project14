function add(){
    var my_input= document.getElementById("my_to_input").value;
    document.getElementById("my_to_input").value = "";
    console.log(my_input);
    
    
    var button = document.createElement("button");
    button.setAttribute('onclick','removeMe(this)')
    var node = document.createTextNode("X");
    button.appendChild(node);
    
    
    document.getElementById("my_list").appendChild(button)
document.getElementById("mybutton").addEventListener('click',removeItem)
    
//    var make_li = document.createElement("li");
//    var removeButton = document.createElement("Button");
//    var xsymbol= document.createTextNode("<button id='mybutton'")
//     make_li.appendChild(xsymbol)
//    var textNode = document.createTextNode(my_input);
//   
//    
//    document.getElementById("my_list").appendChild(make_li);
//    document.getElementById("my_list").appendChild(removeButton);
//     document.getElementById("my_list").appendChild(make_li)
//    document.getElementById("my_to_input").addEventListener('click',removeItem)
    
    
}

function removeMe(item){
    var p = item.parentElemrnt;
    p.parentElement.removeChild(p);
    
    console.log(e);
    
}





