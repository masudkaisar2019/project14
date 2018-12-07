//1. What is the result of “3”+5+6.
//var num1 = 3;
//var num2 = 5;
//var num3 = "6";
//document.write(num1+num2+num3);//86

//2. What is the result of  3+”5”+6
//var num1 = "3";
//var num2 = 5;
//var num3 = 6;
//document.write(num1+num2+num3);//356

//3. What is the result of  3+5+”6”
//var num1 = 3;
//var num2 = "5";
//var num3 = 6;
//document.write(num1+num2+num3);//356


//4. Write a program to return the length of a string "Pneumonoultramicroscopicsilicovolcanoconiosis"
//var num1 = "PneumonoultramicroscopicsilicovolcanoconIosis"
//document.write(num1.length); //45
//document.write(num1.toUpperCase());//PNEUMONOULTRAMICROSCOPICSILICOVOLCANOCONIOSIS
//document.write(num1.toLowerCase());//pneumonoultramicroscopicsilicovolcanoconiosis

//7. Consider the string “I like this product; I hate this product; This product is worth buying; I don’t agree with the above user”. Now break this whole string into pieces wherever you see “;”. Now print the broken down pieces one after the other in console.

//var fullLine = "I like this product; I hate this product; This product is worth buying; I don’t agree with the above user";
//var line1 = fullLine.slice(0,19); // one mathod
//
//console.log(line1);

//var newLine = fullLine.split(";"); // another mathod
//console.log(newLine);
//for (var i= 0; i<newLine.length; i++){
//    console.log(newLine[i]);        
//}

//var str = fullLine.replace(/;/g,"<br>"); // another mathod
//document.getElementById("text").innerHTML=str;
//document.write(str);


// 8.For the above question 4, return the number of time the letter "o" appears.

//var word = "pneumonoultramicroscopicsilicovolcanoconIosis"
//
//var newWord = word.match(/o/g);
//console.log(newWord.length);

//9. Write a program to replace a particular term in a sentence (you can come up with a sentence). Replace with the term "javascript".

//var str = "this is my first javaScript test";
//
//var newStr = str.replace("javaScript","python");
//console.log(newStr);

//10. Find the number of times the string "not" appears in this sentence - 
//a. " Javascript notation %^&* notes that structure rules and not context for nothing"
//b. Now, for the above problem 4, create an array with texts before and after "not" occurrences.

//var str = " Javascript notation %^&* notes that structure rules and not context for nothing ";
//
//var newStr= str.match(/not/g);
//console.log(newStr.length);
//
//var str = "Pneumonoultramicroscopicsilicovolcanoconiosis";

//11. There is a link: http://www.pro-tekconsulting.com/main/navigate/about&us/contactus/email/yourinfo.jsp
//a. Alert- ‘contact us’
//b. Alert- ‘your info’
//c. Have two text fields- Replace ‘navigate’ , ‘contact’ with whatever the user enters in the text field and hits ‘submit’
//d. Have 3 text fields- whatever you enter in those text fields should replace ‘prompt1’,’prompt2’and prompt3’.Then ‘alert’ that. After 3rd alert, the whole new link should come up.
//http://www.pro-tekconsulting.com/main/navigate/about&us/contactus/email/
//firstname=prompt1 &lastname=prompt&ph_no=prompt3”

//var str = "http://www.pro-tekconsulting.com/main/navigate/about&us/contactus/email/yourinfo.jsp";
//var newStr = str.split('/');
//console.log(newStr);
//var anotherStr = str.match(/contactus/g);
//alert(anotherStr);
//
//var newStr = str.match(/yourinfo/g);
//alert(newStr);

//var newStr = str.split('/');
//function callMe(){
//var x =document.getElementById('text1').value;
//var y =document.getElementById('text2').value;
//var str = "http://www.pro-tekconsulting.com/main/navigate/about&us/contactus/email/yourinfo.jsp";
//var newStr = str.replace("navigate",x);
//var newStr1 = newStr.replace("contactus",y);
//console.log(newStr1);
//document.write(newStr1);
//
//}

// passing the value one fild to another field
//function callMe(){
//var x=document.getElementById("text1").value ;
//var y=document.getElementById("text2").value ;
//var z=document.getElementById("text3").value ;
//document.getElementById("text1").value = z;
//document.getElementById("text2").value = x;
//document.getElementById("text3").value = y;
//}













