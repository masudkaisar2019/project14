$(function(){ 
        $(".blink").typed({
      strings: ["Eter your ToDo", "Enter Your ToDo"],
      typeSpeed: 30
    });

});


var add = document.getElementById("add");
var removeall =document.getElementById("removeall");
var list = document.getElementById("list");



//remove all button

removeall.onclick= function(){
    list.innerHTML = '';
}

//adding new list element

add.onclick= function(){
    addlist(list);
    document.getElementById('userinput').value ="";
    document.getElementById('userinput').focus();
}

function addlist(targetUl){
    var inputText= document.getElementById('userinput').value;
    var li = document.createElement('li');
    var textNode = document.createTextNode(inputText + " ");
    var removeButton = document.createElement('button');
    
    if(inputText!= ''){
        removeButton.className = 'btn btn-xs btn-danger'
        removeButton.innerHTML = '&times';
        removeButton.setAttribute('onclick', 'removeMe(this)');
    
        li.appendChild(textNode);
        li.appendChild(removeButton);
        targetUl.appendChild(li);
    } else{
        alert("Please enter a todo");
    }
    
    
}

function removeMe(item){
    var p = item.parentElement;
    p.parentElement.removeChild(p);
}


















