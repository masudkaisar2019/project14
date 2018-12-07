//1. What is the result of “3”+5+6.

console.log("3"+5+6);

//Ans: 356

//2. What is the result of  3+”5”+6

console.log(3+"5"+6);
//ans: 356

//3. What is the result of  3+5+”6”
console.log(3+5+"6");
//ans:86

// 4. Write a program to return the length of a string "Pneumonoultramicroscopicsilicovolcanoconiosis". 
var x = "Pneumonoultramicroscopicsilicovolcanoconiosis"
console.log(x.length);

//ans: 45

//5. Write a program to convert the above string to Upper case

var x = "Pneumonoultramicroscopicsilicovolcanoconiosis";
console.log(x.toUpperCase());
 
//6. Write a program to convert the above string to Lower case

var x= "Pneumonoultramicroscopicsilicovolcanoconiosis";
console.log(x.toLowerCase());

//7. Consider the string “I like this product; I hate this product; This product is worth buying; I don’t agree with the above user”. Now break this whole string into pieces wherever you see “;”. Now print the broken down pieces one after the other in console.

var str = "I like this product; I hate this product; This product is worth buying; I don’t agree with the above user"
console.log(str.split(";"));

//8. For the above question 4, return the number of time the letter "o" appears.

var myString = "Pneumonoultramicroscopicsilicovolcanoconiosis"
var counter=0;
for(var i=0;i<myString.length;i++){
    if(myString[i]=='o'){
            counter++;
    }
}
console.log(counter)
//9. Write a program to replace a particular term in a sentence (you can come up with a sentence). Replace with the term "javascript".

var myString = "I am a java developer";
var newString = myString.replace("java", "JavaScript") ;
console.log(newString);

//Find the number of times the string "not" appears in this sentence - 
//a. " Javascript notation %^&* notes that structure rules and not context for nothing"
//b. Now, for the above problem 4, create an array with texts before and after "not" occurrences.



// if else 
//1. Write a program to prompt the user for age. If age is less than or equal to (<=) 14, alert "Not Allowed". If age is greater than 14 and less than 65, alert "Regular Price". If age is equal to 50, alert "Special discount".

var myAge = prompt("PLease Enter your age ");

if(myAge<=14){
    alert("Not Allowed");
}
else if(myAge=50){
    alert("Special Price");
    }
else if(myAge>14 && myAge<65){
alert("regular price");
}

//2. Write a program to prompt the user for age. If age is equal to 14, alert "coupon 1".If age is equal to 21, alert "coupon 2".If age is equal to 30, alert "coupon 3".If age is equal to 50, alert "coupon 4". Else alert "No coupon".
 var myAge = prompt("PLease Enter your age:")
 if(myAge===14){
     alert("coupon 1");
 }
 else if(myAge==21){
    alert("coupon 2");
 }
 else if(myAge==30){
    alert("coupon 3");
 }
 else if(myAge==50){
    alert("coupon 4");
 }

 //3. Write a program to prompt the user to enter a day (like Monday, Tuesday, Wednesday, etc). Based on the value entered by the user, display a special dish. For example, if the user enters Monday then alert "Mondays, We serve Pasta". If the user enters Friday then alert "Fridays, we serve Tacos"
 
 var enterDay= prompt("Please enter a day");
 if(enterDay=="Monday"|| enterDay=="monday" || enterDay=="MONDAY"){
     alert("Monday! We serve Pasta");
 }
 else if (enterDay=="Tuesday"|| enterDay=="tuesday"|| enterDay=="TUESDAY" )
{
     alert("Tuesday! We sarve Taco  ");
 }
 else{
     alert("we Close");
 }

 //4. Write a program to prompt the user to enter a year (like 2011, 2012, 2010, etc). Based on the value entered, display the movie that won the Oscars for that year. Just write this for last 8 years. If he enters beyond last 8 years then alert the user to enter between 2003-2012.
var oscarYear = prompt("Please enter a Year you wanna see oscare");

if(oscarYear==2001){
    alert("A Beautiful Mind");
}
else if(oscarYear==2002){
    alert("Lots of the ring");
}
else if(oscarYear==2003){
    alert("Chicago");
}
else{
    alert("Please enter the year between 2001-2003");
}

//5. Write a program to prompt the user to enter the Grade of a student (like A+, A, A-, Betc). Based on the value entered, display terms like "Excellent", "Good Job", "Average" etc.

var grade = prompt("Please Enter Your grade")
if(grade== "A+"){
    alert("Excillent");
}
else if(grade== "A"){
 alert("Good Job");
}
else if(grade== "A-"){
alert("Average");
}
else{
    alert("Please Enter something like A A+ or A-")
}



//loop

//1. Write a program to print (in console) 1-30 numbers with a line break.

for(var i= 1;i<=30;i++){
 console.log(i);
}

//Write a program to print numbers 1-10 in reverse order (like 10,9,8,7,6,....1) with a line break.
for(var i=10;i>=1;i--){
console.log(i)
}

//3. Write a program to print numbers from 12 to 33 and also at the end print the sum of all these numbers.
var sum = 0;
for(var i = 12; i<=33;i++ ){
console.log(i);
sum = sum + i;
}
console.log("The total is: "+sum);

//4. Write a program to print (in console) 1-30 odd numbers with a line break

for(var i = 1; i<=30;i++){
    if((i%2)==1){
        console.log(i)
    }
}
//4. Write a program to print (in console) 1-30 even numbers with a line break

for(var i = 1; i<=30;i++){
    if((i%2)==0){
        console.log(i)
    }
}

//Write a program to print 1-100 prime numbers.



//For-Loop and if-else
 //1. Print numbers from 1 to 10 //for

 for(var i=1; i<=10;i++){
    console.log(i)
 }
//2. Print numbers from 10 to 1
for(vari = 10;i>=1;i--){
console.log(i);
}

//3. Print odd numbers from 1 to 50
for(var i= 1;i<=50;i++){
 if((i%2)==1){
    console.log(i);
 }
}

//4. Print even numbers from 1 to 100
for(var i=1;i<=100;i++){
    if((i%2)==0){
        console.log(i);
    }
}

//5. Numbers to be printed between 40 to 60

for(var i = 40;i<=60;i++){
    console.log(i);
}

//6. Numbers printed between 80 to 100


for(var i=80;i<=100;i++){
    console.log(i);
}

//7. If you enter ‘1’ – it should print numbers between 1 to 11 If you enter ‘2’- it should print numbers between 2 to 12
  
/*If you enter ‘3’- it should print numbers between 3 to 13 If you enter ‘4’-it should print numbers between 4 to 14 If you enter ‘5’-it should print numbers between 5 to 15
*/

var enterNumber = prompt("Please Enter a number");

if(enterNumber==1){
    for(var i= 1;i<=11;i++){ 
        console.log(i)
    } 
}
else if(enterNumber ==2){
    for(var i=2;i<=12;i++){
        console.log(i);
    }
}
else if(enterNumber==3){
    for(var i=3;i<=13;i++){
        console.log(i);
    }
}
else if(enterNumber==4){
    for(var i=4; i<=14;i++){
        console.log(i);
    }
}
else if(enterNumber==5){
    for(var i=5;i<=15;i++){
        console.log(i);
    }
}
else{
    alert("You should put number between 1-5 ")
}

/*
8. If the value is entered ‘123’, alert should be ‘One Two Three’ If the value is entered ‘124’, alert should be ‘One Two Four’
If the value is entered ‘125’, alert should be ‘One Two Five’
If the value is entered ‘126’, alert should be ‘One Two Six’
If the value is entered ‘127’, alert should be ‘One Two Seven’
 */

 var enterNumber = prompt("Please enter the number:");
if(enterNumber==123){
 alert("One Two Three");
}
else if(enterNumber==124){
    alert("One Two Four");
}
else if(enterNumber==125){
 alert("One Two Five");
}
else if(enterNumber==126){
 alert("One Two Six");
}
else if(enterNumber==127){
    alert("One Two Seven");
}

/*
9. If I enter ‘1’, alert should be ‘One’ If I enter ‘2’, alert should be ‘Two’
If I enter ‘3’, alert should be ‘Three’ If I enter ‘4’, alert should be ‘Four’
If I enter ‘5’, alert should be ‘Five’ Else, please enter a valid number.
 */
var myNumber = prompt("Please enter yoyr number");
if (myNumber==1){
    alert("One");
}
else if(myNumber==2){
    alert("Two");
}
else{
    alert("!Invalid")
}

/*
10. If I enter a number between 1 to 10, it should alert, the number is between ‘1 and 10’ If I enter a number between 11 to 20, it should alert, the number is between ‘11 and 20’ If I enter a number between 21 to 30, it should alert, the number is between ‘21 and 30’ If I enter a number between 31 to 40, it should alert, the number is between ‘31 and 40’ If I enter a number between 41 to 50, it should alert, the number is between ‘41 and 50’
 */
var enterNumber= prompt("Please enter your number");
if(enterNumber<=10){
    for(var i = 1;i<=10;i++){
        console.log(i);
    }
}
else if(enterNumber<=20){
    for(var i=11;i<=20;i++){
        console.log(i);
    }
}
else if(enterNumber<=30){
 for(var i=21;i<=30;i++){
    console.log(i);
 }
}
else if(enterNumber<=40){
    for(var i=31;i<=40;i++){
        console.log(i);
    }
}
else if(enterNumber<=50){
    for(var i=41;i<=50;i++)
    console.log(i);
}
else{
    alert("please enter valid number")
}

/* 11.If the number is less than 50 or greater than 200, alert the number is a valid number If the number is between 50 and 200, alert this is a good number.
Else, alert ‘It is an invalid number’. */
var enterNumber = prompt("Enter your number");
if(enterNumber>=50 && enterNumber <=200){
 alert("This is a good number");
}
else{
    alert("It is an invalid Number");
}

/*12. If I enter ‘One’, alert ‘1’ If I enter ‘Two’, alert ‘2’
If I enter ‘Three’, alert ‘3’ If I enter ‘Four’,alert ‘4’
If I enter ‘Five’, alert ‘5’
 */
var enterNumber= prompt("Enter your number");

if(enterNumber=="One"){
alert("1");
}
else if(enterNumber=="Two"){
    alert("2");
}
else if(enterNumber=="Three"){
    alert("3");
}
else if(enterNumber=="Four"){
    alert("4");
}
else if(enterNumber=="Five"){
    alert("5");
}
else{
    alert("Invalid");
}

/* 13. If I enter numbers Six to Ten, please enter a proper number. Anything else, please enter a valid number. */


/* 14. If I enter an even number, I want next 10 even numbers to be printed. If I enter an odd number, I want next 10 odd numbers to be printed.
*/
var x = prompt("Enter number")
var enterNumber = parseInt(x);


if(enterNumber %2===0){
//    console.log(enterNumber);
    for(var i=0;i<=9;i++){
//        console.log(i);
        enterNumber = enterNumber+2;
        console.log(enterNumber);
    }
}
else{
    for(var k=0;k<=9;k++){
        enterNumber = enterNumber+2;   ;
        console.log(enterNumber)
    }
}
/* 15. If I enter an even number, I want previous 5 even numbers to be printed. If I enter an odd number, I want previous 5 odd numbers to be printed.
 */
var x = prompt("Enter number")
var enterNumber = parseInt(x);


if(enterNumber %2===0){
//    console.log(enterNumber);
    for(var i=4;i<=8;i++){
//        console.log(i);
        enterNumber = enterNumber-2;
        console.log(enterNumber);
    }
}
else{
    for(var k=4;k<=8;k++){
        enterNumber = enterNumber-2;   ;
        console.log(enterNumber)
    }
}


//Arrays

/* 1. Write a program to display 10 quotes (one after the other in sequence). Hint: use Arrays to store the quotes (sayings). Name the function as displayQuotes.
 */
var fruits= ['Orange', 'Apple', 'Mango', 'Airplane', 'Kiwi','Orange', 'Apple', 'Mango', 'Airplane', 'Kiwi'];
for (var i=0; i<fruits.length; i++){
console.log(fruits[i]);
}

/* 2. Create a function that accepts a parameter which is of the type Array and alerts the length of the array as well as the elements one after the other starting from 4th element. Call this function from displayQuotes function that you created in Question 1.
 */

var fruits= ['Orange', 'Apple', 'Mango', 'Airplane', 'Kiwi','Orange', 'Apple', 'Mango', 'Airplane', 'Kiwi'];
for (var i=0; i<fruits.length; i++){
console.log(fruits[i]);
}

function myFruits(fruits){

    alert(fruits.length)
    for(i=3;i<= fruits.length;i++){
        console.log(fruits[i]);
    }
}
myFruits(fruits);
//3.
fruits.pop();
console.log(fruits);

//b.
console.log(fruits.length);
//c. 
fruits.reverse();
console.log(fruits);

//d.
var newFruits = fruits[7];
console.log(newFruits);
//e. 
fruits.shift();
console.log(fruits);
//f.
console.log(fruits.length);

//g. 
fruits.sort();
console.log(fruits);
//-----------------------------------------
//4. Prompt the user for appropriate values based on the operation that you are performing and then execute the following operations on the array:

var fruits = [];
var inputFruits = prompt("enter a fruits");
var fruits_1 = fruits.push(inputFruits);
console.log(fruits);

//--------------------------------------------

//5.Create a Months Array (jan, feb, mar...etc) and repeat question 3 and 4. Once you implement these two arrays, use concat() method to add these arrays. Print each of the elements of this concatenated array one after the other - hint: use loops.

var months = ["Jan","Feb","mar","Apr","May","Jun","July","Aug","sept","Oct","Nov","dec"];
for(var i = 0;i<=months.length;i++){
    console.log(months);
}
//----------------------------
//6. Create an array with Monday, Tuesday,Wednesday,Thursday, Friday and Saturday and console.log individually.
/* var weeks = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
console.log(weeks[0]);*/

//-------------------
/* Ask for a prompt, if I enter ‘Monday’, in console display- Tuesday’,’Wednesday’,’Thursday’,’Friday’and ‘Saturday.
 If I enter ‘Tuesday’,in console display ’Wednesday’,’Thursday’,’Friday’and ‘Saturday’. If I enter ‘Wednesday’,in console display ’Thursday’,’Friday’and ‘Saturday’.
If I enter ‘Thursday’ , in console- ‘Friday’and ‘Saturday’.
If I enter ‘Friday’, in console- ‘Saturday’.
If I enter ‘Saturday,in console –‘Sunday’.
If I enter ‘Sunday’, in console- it is the last day of the week.
 */
// var input = prompt("Please enter the number");
// var myArray =["Mon","tue","wed","Thu","Fri","Sat","Sun"];
//     for(var i=0;i<=myArray.length;i++){
//         if(input = myArray[i]){
//             console.log(myArray);
//         };
//     }




//----------------------------------
//Create two arrays, for every match between the 2 arrays, display an alert ‘there is a match’.

var fruits1 = ["Apple","Banana","Orange"];
var fruits2 = ["Mango","Banana","Strawberry","Banana"];
for(var i= 0;i<fruits1.length;i++){
    console.log(i+"fruits1");
    for(var k= 0;k<fruits2.length;k++){
        console.log(k+"Fruits2");
        if(fruits1[i]==fruits2[k]){
            alert(fruits1[i]+ " matched at "+i+" position from array1 at " + k);
        }
    }
}

//----------------------------------------------
// Variable and Operator
//----------------------------------------------
//1.. Click button to calculate sum, multiply, modulus within one function only. Alert one after the othe
function myFunction(){
var first = 12;
var second = 6;
var third ;
console.log(first+ second);
console.log(first- second);
console.log(first* second);
console.log(first/ second);
}
//---------------------

//----------------------------------------------------
                            //DOM Assignment
//----------------------------------------------------
//1. Have a paragraph. On click of a button, alert the text in the paragraph.
/*
function myAlert(){
    var x = document.getElementsByTagName("p")[0].innerHTML;
    alert(x);
}
*/

//----------------------------------------------------
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
            //DOM and Events:
//----------------------------------------------------------------------

/*
1. Write a program to convert Fahrenheit temperature to Celsius. Here are the things that needs to be implemented as a part of this question:
a. Ask the input from the user for Fahrenheit using a text field
  
b. As soon as the user types in the Fahrenheit number in the text field, the result should display immediately in the div below
c. Hence, there should not be any submit button
d. Hint: Use onkeyup event. Formula is : C = (F - 32) * 5/9
e. Don't display the decimal values - but you should accept decimal values from the user
f. If the user enters any invalid values (strings) ) then you should make the input box border red and prompt user to enter correct values
*/
function myConversion(){
    let celsius = 0;
    let fahrenhite = document.getElementById("i_p").value;
        console.log(fahrenhite);
    
        celsius = (fahrenhite-32)*5/9
       document.getElementById("myDiv").value= Math.round(celsius);
    }

    /* 2. Have images, p tags, div tags and various other elements on the page. When the page loads, an alert saying "welcome to my blog" should pop up. */
    function myAlert(){
        alert("Welcome to my block!");
    }
    /* 3. Have several html tags on the page. Have an input button with id hideElems. When this button is clicked all the elements on the page should be hidden.
    4. Have an input button with id showElems. When this button is double clicked, all the elements on the page should be shown.  
    */
    function hide(){
        document.getElementById("clear").style.visibility = "hidden";
        
    }
    function show(){
        document.getElementById("clear").style.visibility = "visible";
    }

    //-------------------------------------------------------------------
/* 5. Have an input button with a id and
    a. when you mouseover this button, the <ul> elements on the page should be shown. 
    b. when you mouseout this button, the <ul> elements on the page should be hidden.
 */
function listHide(){
    document.getElementById("myList").style.visibility = "hidden";
}
function listShow(){
    document.getElementById("myList").style.visibility = "visible";
}
//-------------------------------------------------------

/* 6. When page loads, write code to hide elements all the elements with ids "main_one", "main_two" and "main_three". */
function hideElement(){
    document.getElementById("main_one").style.visibility="hidden"
    // document.getElementById("main_two").style.visibility="hidden"
    // document.getElementById("main_three").style.visibility="hidden"
}
/* 7. Create 10 check boxes. When you click a button called "Select All" - all the check boxes should be unchecked. */
function myFunc(){
    var checkboxes = document.getElementsByName("clk");
    console.log(checkboxes);
    var button = document.getElementById("toggle");

    if(button.value == "select"){
        for(var i in checkboxes){
            console.log(i);
            checkboxes[i].checked = 'false';
        }
        button.value= 'deselect'
    }else{
        for(var i in checkboxes){
            checkboxes[i].checked='';
        }
        button.value='select';
    }
}


/*
10. Have two divs side by side - lets call them "Form Div" and "View Div".
a. The first div - "Form Div" should have a simple form with fields - first name, last name, gender, state (select box) and "Save" button.
b. The "View Div" should have a button called "EDIT" - but this button should be hidden by default.
c. When you click on the "Save" button, the user entered data should appear in the "View Div" - also the form input fields should be cleared out (should be empty).
d. The View Div should display form data in span tags or p tags or div tags but not as input tags. Also the "EDIT" button should now be visible.
e. When you click on the "EDIT" button, the form should be repopulated with the data so that you can make some changes and save again.

*/


document.getElementById("showField").style.visibility="hidden";

function saveData(){
    document.getElementById("showField").style.visibility="visible";

    let firstName =document.getElementById("collection").value;
    console.log(firstName);
    document.getElementById("collection").value = " ";
   //---------------------
    document.getElementById("fName").innerHTML = firstName; 
    
    let lastName= document.getElementById("collection1").value;
    console.log(lastName);
    document.getElementById("collection1").value= " ";
    document.getElementById("lName").innerHTML = lastName;
    
//-----------------------
    let radio = document.getElementById("myRadioMale").value;
    document.getElementById("myRadioMale").value = " ";
    document.getElementById("radioMale").innerHTML=radio;
//---------------------------
    
    let radio1 = document.getElementById("myRadioFemale").value;
    document.getElementById("myRadioFemale").value = " ";
    document.getElementById("radioFemale").innerHTML=radio1;

//------------------------------------
    let select = document.getElementById("selectState");
    let clicked = select.options[select.selectedIndex].text;
    console.log(clicked);
    document.getElementById("state").innerHTML= clicked;
    
    }


function showData(){
    document.getElementById("showField").style.visibility="hidden";
    
    
    document.getElementById("collection").value = document.getElementById("fName").innerHTML;
    
    //------------------------------------------
     document.getElementById("collection1").value= 
         document.getElementById("lName").innerHTML ;
    //-------------------------------------------
    document.getElementById("myRadioMale").value =
        document.getElementById("radioMale").innerHTML;
    //-------------------------------------------
    document.getElementById("myRadioFemale").value=
        document.getElementById("radioFemale").innerHTML;
    //------------------------------------
}


//function
/*
1. Here is the declaration of a function. Each parameter is a string. Function displayValue(param1, param2, param3){
Alert(“Parameter = ” + param1);
} window.displayValue(22,45,67);
  
Demonstrate all of the following in separate JavaScript file (each response should be in separate file):
a. How will you trigger the above method? Show at least 2 ways to call the function. b. How many parameters will you pass to the function above?
c. Alert the parameter values inside the function.
d. What happens if you pass only 2 parameters and try to alert all 3 parameters?
e. What happens if one of the passed parameter is re-declared inside the function with a keyword var.
f. What happens if you pass only 1 parameter and try to add all 3 parameters such as: g. Alert(param1 + “ “+ param2+ “ “+ param3);
*/
function displayValue(param1,param2,param3){
    alert("Parameter =" + param1);
    alert("parameter ="+param2);
    alert("Parameter ="+param3);
}
displayValue(22,45,67);
//use event

/*

2. Here is the declaration of a function. functionsetValue(fName,lName,age){
}
functionsetCustInfo(name){
alert(“The last name is set as: ”+name);
}
functiondisplayCustInfo(name){
alert(“First Name is displayed as:”+name);
}
Demonstrate all of the following in separate JavaScript file (each response should be in separate file):
a. How would show the following output in alert boxes? i. The name is set as: Bruce
ii. Name is displayed as: Wayne
Show at least 2 ways to get the above output. (Hint: onclick and call inside js);
b. Inside this setValue method, how will you trigger setCustInfoand displayCustInfo methods?
c. What if the variable “name” is declared globally with a value? What will be the output look like?
d. In a separate JS file, try to declare the variable “name” locally with some value. What will be the output look like?
e. In a separate JS file, try NOT TO Pass the value to setCustInfo fromsetValue function - rather have the “name” variable globally with a value. What is the output?

*/

function setValue(fName,lName,age){


}
function setCustInfo(name){
alert(“The last name is set as: ”+name);
}
function displayCustInfo(name){
alert(“First Name is displayed as:”+name);
}
setCustInfo("masud");
displayCustInfo("Wayne")

/*
3. Here is the declaration of a function. functionsetValue(fName,lName,age){
}
functionsetCustInfo(name){
alert(“The name is set as: ”+name);
}
functiondisplayCustInfo(name,i){
alert(“Name is displayed as:”+name);
k = name + “ “+i;
return k;
}
Demonstrate all of the following in separate JavaScript file (each response should be in separate file):
a. How would show the following output in alert boxes (in same sequence)? i. The name is set as: Bruce
ii. Name is displayed as: Wayne
iii. Wayne 30
b. In Separate JS file: What happens if “lname” is declared as global variable with some value? What will the output look like?
c. In Separate JS file: How do you show the following output in alert boxes(in same order): i. The name is set as: 30
ii. Name is displayed as: Wayne
iii. Wayne Bruce
iv. Hello Bruce Wayne at 30
d. In Separate JS file: What happens if “k” is
i. declared locally with displayCustInfo method with a value
ii. declared globally below displayCustInfo method with a value.
iii. declared locally but set the value = “DATA VANISHED” just before the “return k” statement in displayCustInfo method?

*/

//a.
function setValue(fName,lName,age){
    alert("The Name is ser :"+fName+"\n"+"Name is displayed as:"+lName+ "\n"+lName+" "+age);
}
setValue("Bruce","Wayne",30);
//b.
let lName = "wayne";
function setValue(fName,lName,age){
    alert("The Name is ser :"+fName+"\n"+"Name is displayed as:"+lName+ "\n"+lName+" "+age);
}
setValue("Bruce","",30);
//lName already declared
//c
function setValue(fName,lName,age){
    alert("The Name is ser :"+fName+"\n"+"Name is displayed as:"+lName+ "\n"+lName+" "+age+"\n"+"Hello Bruce"+lName+" at "+age);
}
setValue("Bruce","Wayne",30);

/*
5. Create a function that would check the passenger age. Take the input from the user using the prompt command in your function – copy paste this statement
var age=prompt("Please enter your age");
a. If the passenger is 2 years or below then alert No charge.
b. If the passenger is above 2 years and below 14 then alert 10% discount c. If the passenger is above 14 and below 55 then alert Regular price
d. If the passenger is above 55 then 20% discount
*/
function myAge(){
    var age= prompt("Enter your age");
    
    console.log(age);
    
    var age1 = parseInt(age);
    console.log(age1);
    
    
    if(age1<=2){
       alert("No Charge");
    
       }
    else if(age1>2 && age<=14){
            alert("10% discount");
            }
    else if(age>14 && age<=55 ){
            alert("Regular Price");
            }
    else{
    alert("20% discount");
    }
}
//6. Prompt the user to enter a number and check if it is even or odd.
let input = prompt("enter the number");
let input1 = parseInt(input);
if((input1%2)==0){
    alert("the number is even");
}
else{
    alert("Odd number");
}
/*
7. Assume that you are developing an ATM machine, Prompt the user to enter amount he/she wants to withdraw.
a. Alert “Your amount is ready” if they enter a multiple of 20 else alert “Please enter multiples of 20”
b. Additionally, check if the user entered number of a string. If he did not enter a number then alert – Please enter valid number.
Hint: Use isNaN() method provided by Javascript.

*/
//a
let input = prompt("Please enter the amount you want to withdrow");
let inputAmpount = parseInt(input);
if((inputAmpount%20)==0){
    alert("Your Amount is ready");
}
else {
    alert("Please enter multiples of 20");
}
//b.
let input = prompt("Please enter the amount you want to withdrow");
let inputNumber = parseInt(input);
if(isNaN(inputNumber)){
alert("Please enter valid number")
}
else{
    alert("get the money");
}

//DOM Assignments Extra
//1. Create a button outside the div, onclick of the button some text should appear in the div.
function myFunc(){
    document.getElementById("myDiv").innerHTML = "Eid Mubarak";
}

//2. enter data in a prompt to a text field

var myStr = prompt("Please enter a sentence");

document.getElementById("myPara").innerHTML= myStr;
 
//3. Have two text box on click a button get the value from 1st text box and assign this value to the 2nd text box.
//4. Have two text box, data move from 1st to 2nd text box and it would be disabled only.

function myFunc(){
    var myInputText= document.getElementById("myInput").value;
        document.getElementById("myInput").value = " ";
     document.getElementById("yourOutput").value=myInputText;
     console.log(myInputText);
}

//5. Create three text field and enter some data and move to 1-2,2-3,3-1

function myInputField(){
    document.getElementById("input2").value = document.getElementById("input1").value;
     document.getElementById("input3").value = document.getElementById("input2").value;
     document.getElementById("input3").value = document.getElementById("input1").value;
}

//  6. alert the source of the image 
var imageSource = document.getElementById("myImages").src ;
//7. click on a button of a image border to show up height, width & color and apply in a style
function myImagesSrc(){
    var imageSource = document.getElementById("myImages");
    //    alert(imageSource);
        var imgHeight = imageSource.clientHeight;
    //    alert( imgHeight);
        var imgWidth = imageSource .clientWidth;
        alert("the Image height is:"+imgHeight +"\n"+ "The Image Width is: "+imgWidth);
    }

   //8. I have a button outside a div some text to come up
function dhowText(){
    document.getElementById("myDiv").innerHTML= "Hey Eid Mubarak";
}
//9 and 10 try

//----------------------------------------------------------------
                       //Extra Assignments on DOM:
//----------------------------------------------------------------

/*
1. Create a drop down box. Should have one default . a. Make Invisible
b. Change Color
c. Make visible and Change color
d. Default
*/

function makeInvisible(){
    document.getElementById("Change").style.visibility = "hidden";
}
 
function changeColor(){
    document.getElementById("Change").style.background = "red";
}
function Visible(){
    document.getElementById("Change").style.visibility = "visible";
    document.getElementById("Change").style.background = "blue";
}
function defaultFunc(){
    document.getElementById("Change").style.visibility = "visible";
}
 //-------------------------------------------------------------
/*2. Create two text fields and a button.
Whatever is entered in first text field, the value should go to the second text field and the first text field, should remain blank , with no value.
*/
function changeValue(){
    var inputValue = document.getElementById("firstInput").value;
    console.log(inputValue);
    document.getElementById("secondInput").value= document.getElementById("firstInput").value;
    document.getElementById("firstInput").value = " ";
}
//------------------------------------------------------
//3. Create two radio buttons, the radio buttons should be checked.

/*
4. Create one div, one text field, one button.
If I enter ‘black’ in text field (div border should be black)
If I enter ‘red’ in text field (div border should be red)
If I enter ‘anything else’ (for eg: yellow or green) it should alert- “pleases enter a valid color”.
*/

function colorChange(){

    var inputTest = document.getElementById("myInput").value;
        document.getElementById("mydivColor").style.borderColor = inputTest;
        
        if(inputTest == "black"){
             document.getElementById("mydivColor").style.borderColor= "black";
           }
        else if(inputTest == "red"){
             document.getElementById("mydivColor").style.borderColor="red";
        }
        else{
            alert("pleases enter a valid color");
        }       
}
/*
5. Create two radio buttons, two text fields, 1 regular button.
If any value entered in first text field, first radio button should be highlighted, if any value entered in second text field, second radio button should be highlighted, if there is nothing entered, there should an alert, ‘please enter only in one text box’.
*/
function matchInput(){
    var input_1 ;
    var input_2;
    if(input_1 = document.getElementById("input_1").value){
       document.getElementById("radio_1").checked= true;
       }
    else if(input_2 = document.getElementById("input_2").value){
             document.getElementById("radio_2").checked= true;
            }
    else{
        alert("please enter only in one text box");
    }
}
/*
6. a. Do a form validation. Each invalid text field should come as ‘alert’. All input types which could not validate, should come in different ‘alerts’.
b. Only ‘1’ alert, it should show all input types which are not validated.
*/
var myImages = ["images/car1.jpg","images/car2.jpg","images/car3.jpg","images/car4.jpg","images/car6.jpg"];
var count = 0;
    
function myImagesSlide(){
       document.getElementById("myImageShow").src= myImages[count] ; 
        count++;
    if(count==myImages.length){
       count=0;
    }
 
}
/*

10. There should be ‘3text fields’,’2buttons’.
a. If you press the first button, it should appear in the div.
b.If you hit the second button, whatever you enter in the div,should come back to input field.

*/

function showDiv(){
    document.getElementById("myDiv").style.visibility= "visible";
}

function filedInput(){
   var para_1 = document.getElementById("myPara_1").innerHTML;
    document.getElementById("Input_1").value=para_1;
    
    var para_2 = document.getElementById("myPara_2").innerHTML;
    document.getElementById("Input_2").value=para_2;
    
    var para_3 = document.getElementById("myPara_3").innerHTML;
    document.getElementById("Input_3").value=para_3;
//    console.log(para_1);
}

/*
11. Have one radio button and one checkbox. When the radio button is checked, display as ‘checked’ . When the ‘checkbox’ is checked , display as ‘checked’. Have one drop-down list . Whatever, you select in ‘drop-down’, should appear on the right side.

*/
function myRadioFunc(){
    if(document.getElementById("myRadio").checked=true){
       alert("checked");
       }  
}
function myCheckedFunc(){
    if(document.getElementById("myCheckbox").checked=true){
       alert("checked");
       }  
}

function myDropDown(){
    document.getElementById("myDropDown").style.float ="right";
}
/*
12. Create a form, 3text fields, 2 radio buttons, 1 checkbox and 1 drop down. This is at the hit of each key.
a. If you entering a number in the first text field, it should say ‘number’.
b. If you entering a character in the first text field, it should say ‘string’.
c. If you enter nothing, it should say ‘null’.
After the user enters the total word(for e.g: – a number or a character), then it should display as a ‘number’ or ‘string’. The moment you select a ‘radiobutton’, it should say ‘selected’.
The checkbox should show-
a. If the option is checked- display ‘checked’.
b. If the option is not checked- display ‘unchecked’.
When you hit on ‘submit’, it should alert ‘the form has been successfully submitted’.
*/

function firstAlert(){
    var input_one= document.getElementById("Input_1").value;
//    console.log(input_one);
    if(isNaN(input_one)){
       console.log("string")
       }
    else if(input_one==""){
        console.log("null");
    }
    else if(!isNaN(input_one)){
            console.log("Number");
            }
}

function myRadioClick(){
    if(document.getElementsByName("radio_1").checked= true){
        alert("selected");
       document.getElementById("check_box").checked = true
       }
}

function submit(){
    alert("the form has been successfully submitted");
}
/*
13. Create an image. When I go over the image, the description of the image should come up. (Define something at an ‘Alt level’ , on top of the image.
Create a text field, whatever I enter in the text field, the info should be displayed on the side of the image.

*/
function myImageDiscription(){
    document.getElementById("myPara").innerHTML = "This is a blue car";
    document.getElementById("myPara").style.marginTop= "-70px";
    document.getElementById("myPara").style.color= "red";
}
function myTextDisplay(){
    var input_text = document.getElementById("my_input").value;
    document.getElementById("myPara").innerHTML = input_text;
    document.getElementById("myPara").style.marginTop= "-70px";
    document.getElementById("myPara").style.float= "right";
    
    document.getElementById("myPara").style.color= "red";
    console.log(input_text);
}

//---------MATH & DATE:----------------
/*
    1. Write a program to convert Fahrenheit temperature to Celsius. Here are the things that needs to be implemented as a part of this question:
a. Ask the input from the user for Fahrenheit using a text field
b. As soon as the user types in the Fahrenheit number in the text field, the result should display immediately in the div below.
c. Hence, there should not be any submit button.
d. Hint: Use onkeyup event. Formula is : C = (F - 32) * 5/9
e. Don't display the decimal values - but you should accept decimal values from the user
f. If the user enters any invalid values (strings) then you should make the input box border red and prompt user to enter correct values.
*/
function conversion(){
    var input_Fahrenheit = document.getElementById("my_input").value;
     console.log(input_Fahrenheit);
     var celsius = (input_Fahrenheit - 32)* (5/9);
     document.getElementById("myResult").innerHTML=Math.round(celsius);
   if(isNaN(input_Fahrenheit)){
     document.getElementById("my_input").style.border= "5px solid red";
       var temp =prompt("please a num");
       document.getElementById("my_input").value=temp;
      document.getElementById("myResult").innerHTML=Math.round((temp- 32)* (5/9));
      }
 }
/*

2. Write a program to have a small food menu for a restaurant and on click of button "SHOW ME TODAY's SPECIAL" - display today's special dish. Use the date() method to get current day of the week (Mon, tues, wed...).
*/

























