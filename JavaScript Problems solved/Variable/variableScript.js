//q. 1. Click button to calculate sum, multiply, modulus within one function only. Alert one after the other.

//function result(){
//    num1 = 5;
//    num2 =4;
//    total= num1+num2;
//    alert("The sum is "+ total);
//    alert("The multiply is "+ num1*num2);
//    alert("The modulus is "+ num1%num2);
//}


//q.2  Click button to calculate sum, multiply, modulus with separate functions. Alert one after the other.
//var num1 = 5;
//var num2 = 7;
//var  total;
//var  total1;
//var  total2;
//total = num1+num2;
//total1= num1*num2;
//total2= num1/num2;
//function result(){
//    alert("the Sum is "+total)
//    console.log(total)
//}
//function result1(){
//    alert("the multiply is "+ total1)
//    console.log(total1)
//}
//function result2(){
//    alert("the modulus is "+ total2)
//    console.log(total2)
//}

//q.3  Click button to calculate which will capture return values from independent functions - sum, multiply, modulus
//var num1 = 4 ;
//var num2 = 6;
//
//function result(){ 
//
//    return document.write(num1+num2);    
//}
//function result1(){
//    return document.write(num1*num2);
//}
//function result2(){
//    return document.write(num2%num1);
//}

//q.4 What are global and local variables? Write a program to demonstrate global and local variables.

//local variable : Any variable declared within that function is only accessible from that function and any nested functions. 
//Global Variable :Any variable declared outside of a function belongs to the global scope, and is therefore accessible from anywhere in your code.

//var num1 = 5; //global variable
//var num2 = 7;
//function sum(){
  //  var total = num1 + num2; //local variable
    //document.write(total);
//}

// q.5 Have two global variables and two local variables and calculate sum, multiply, modulus.

//var num1 = 2;
//var num2 = 7;
//
//function sum(){
//    var num3 = 8;
//    var num4 = 4;
//    document.write(num1+num3*num4%num1);
//}


//q.6 Have 5 buttons with different functions. Use different operators that we discussed today.
//var num1 = 4;
//var num2= 7;
//
//function result(){
//    document.write(num1+num2);
//    
//}
//function result1(){
//    document.write(num2-num1);
//    
//}
//function result2(){
//    document.write(num1*num2);
//    
//}
//function result3(){
//    document.write(num2/num1);
//    
//}
//function result4(){
//    document.write(num1%num2);
//    
//}


//q.7 Have two global variables a and b.
//   a. Have a function add( ). Increment the value of a first and then calculate the sum of a and b.
//   b. Have a function sub( ). Decrement the value of a first and then alert a-b.
//   c. Have a function multiply( ). Give a local variable a=10 and then calculate the sum, subtract, divide, multiply and modulus.

//var a = 5;
//var b = 7;
//
//function add(){
//     a++;
//    document.write(a+b);
//}
//
//function sub(){
//    a--;
//    document.write(a-b);
//}
//
//function multiply(){
//    var a=10
//    document.write("Sum "+(a+b)+"<br> Sub "+(a-b)+"<br> Multiply  "+(a*b)+"<br> Divide "+(a/b)+"<br> Modulus "+ (a%3) );
//}


//q.8 Write a program to convert Fahrenheit temperature to Celsius. Formula is :  C = (F - 32) * 5/9

//function fToC(){
//
// var F=document.getElementById("temp").value ;
//    console.log(F);
// var C = (F-32)* 5/9;
//    document.write("The Calcius Temp is  "+C)
// }


//q.9 How would you show the following output in alert boxes.
//   a. The name is set as : Bruce
//   b. Name is displayed as : Wayne
//
//alert("The name is set as : Bruce");
//alert("Name is displayed as : Wayne");




