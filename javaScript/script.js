///* 
//var fruits = "90";
//var Name = "Apple";
//var price = 300.25;
//var companyName = fruits + price
//var fruits = 50;
//var companyName = fruits + companyName
//*/
////var temp = null;
////var myNumber = 567; //number
////var myString = "iAmTheBest"; //string 
////var myArray = ["street689", "streetbob", "fatBoy"]; //Array
////var myObject = {nameOfBike:"Street79",ccOfBike:750}; //object
////
////var gretting = "";
////var highScore = 440;
////var myScore = "440";
////
////if(myScore < highScore){
////    gretting = "Opps you just missed the game"
////}else if(myScore===highScore){
////    gretting= "you just match the game"
////}else{
////    gretting = "Hurray! You just got the high score "
////
//
//
//
//var gretting ="";
//var highScore = 10;
//var myhScore = "340"; 
///*switch starts here
//switch (new Date().getDate()){
//    case 0:
//        gretting = "I don't move on Sunday";
//        break;
//    case 1:
//        gretting = "Monday: Go to work";
//        break;
//    case 2:
//        gretting = "Tuesday: Chill out with family";
//        break;
//    case 3:
//        gretting = "Wednesday: Focus on learning ";
//        break;
//    case 4:
//        gretting = "Thursday: Analyze the outcome";
//        break;
//    case 5:
//        gretting = "Friday: Last day of work";
//        break;
//    case 6:
//        gretting = "Saturday: Party Night";
//        break;
//    default:
//        gretting = "Hey Hey ! What you sending to me";
//        break;
//}
//
//console.log(new Date().getDay());
//*/
//
//var harley = ["street750","streetBOB","fatBoy","streetGlide","Iron883"];
//
////gretting += harley[0] +"<br>";
////gretting += harley[1]+"<br>";
////gretting += harley[2]+"<br>";
////gretting += harley[3]+"<br>";
////gretting += harley[4]+"<br>";
//
//var i; 
///* starting for loop
//for (i=0; i<harley.length; i++){
//    gretting += harley[i] + "<br>";
//}
//for (i in harley){
//    gretting += harley[i] + "<br>";
//}
//Ending for loop*/
//
////While loop 
////while (i <= 9){
////    gretting += "<br> The new number is " + i;
////    i++;
////} //End while loop
//
////starting do while loop
////do while loop
////do {
////    gretting += "<br> The new number is " + i;
////    i++;
////} while (i <= 9)
//
////for(i=0; i<15 ; i++){
////    if(i == 2){continue;}
////    gretting += "<br> Your new number is " + i;
////}
//
//// Starting Function from here 
//
////function multiflicationFunc(num1,num2,num3){
////    return num1+num2+num3
////}
////
////
////
////document.getElementById("test").innerHTML = multiflicationFunc(8,2,3);
//// 
//
//
//// Error 

function myError(){
    var msg, x;
    msg = document.getElementById("msg");
    msg.innerHTML = "";
    x = document.getElementById("some").value;
    try{
        if (x == "") throw "Please Choose a number";
        if (isNaN(x)) throw "Only number are allowed";
        if (x<4) throw "Choose a number greater than 3"
    } catch(err){
        msg.innerHTML = "Error is  " + err;
    } finally{
        document.getElementById("some").value = "";
    }
}













