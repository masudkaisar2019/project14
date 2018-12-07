//1. Have a paragraph. On click of a button, alert the text in the paragraph.
/*
function myAlert(){
    var x = document.getElementsByTagName("p")[0].innerHTML;
    alert(x);
}
*/

//----------------------------
//2. Have a paragraph. On click of a button, change the backgroundColor and text color of the paragraph.
/*   
function myFunc(){
     document.getElementsByTagName("p")[0].style.backgroundColor='blue';
        document.getElementsByTagName("p")[0].style.color='white';
        }      
*/
//---------------------------------------
//3. Have two text boxes. On click of a button, get the value from the first text box and assign that value to the second text box.
/*
function change(){
    var fistText = document.getElementById("first").value;
    document.getElementById("Second").value = fistText; 
}
*/

//--------------------------------------------
/*
4. Have an image.
a. On click of a button, replace the image with another image. 
b. On click of a button, hide the image
c. On click of a button, show the image
*/
/*
function changeImg(){
    document.getElementById("myImage").src= "images/comp2.jpg"
}
function hide(){
    document.getElementById("myImage").style.visibility= "hidden"
}
function show(){
    document.getElementById("myImage").style.visibility= "visible"
}
//--------------------------------------------------------------------------------
*/
/*5. Have an image and two buttons, PREV and NEXT. Have 10 images in an array. When you click on NEXT, the next picture should display and when you click on PREV, the previous image should displa*/
/*

var photo = new Array(9);

photo[0]= "images/comp1.jpg";
photo[1]= "images/comp2.jpg";
photo[2]= "images/comp3.jpg";
photo[3]= "images/comp4.jpeg";
photo[4]= "images/comp5.jpg";
photo[5]= "images/comp6.jpg";
photo[6]= "images/comp7.jpeg";
photo[7]= "images/comp8.jpeg";
photo[8]= "images/comp9.jpg";
//console.log(photo);

var startImg = 0;
var endImg = 9;

function prev(){
    var slide = document.getElementById("myImage");
    if(startImg>0){
        slide.src = photo[startImg-1];
        console.log(slide.src);
        startImg = startImg -1;
        
       }
    else{
        alert("This is first slide");
    }
}

function next(){
    var slide = document.getElementById("myImage");
    if(startImg<endImg){
       slide.src = photo[startImg+1];
        console.log(slide.src);
        startImg = startImg +1;
       }
    else{
        alert("This is first slide");
    }
}

*/
//----------------------------------------------------------------------------

















