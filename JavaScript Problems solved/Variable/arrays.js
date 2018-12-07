//1. Write a program to display 10 quotes (one after the other in sequence). Hint: use Arrays to store the quotes (sayings). Name the function as displayQuotes.

function displayQuote(){
    var str = ["one","two","three","four","five","six","seven","eight","nine","ten"];
    
    for(var i=0;i<str.length;i++){
        document.write(str[i]+"<br>");
    }

//2. Create a function that accepts a parameter which is of the type Array and alerts the length of the array as well as the elements one after the other starting from 4th element. Call this function from displayQuotes function that you created in Question 1.

//q.3 a. pop()
//  var newStr = str.pop();
//console.log(str);

//var anotherStr = str.length;
//    console.log(anotherStr);
//var str1 = str.reverse();
//    console.log(str1);
//    console.log(str[7]);
    var str3 = str.shift();
    console.log(str);
    console.log(str.length);
    var str4 = str.sort();
    console.log(str4);
    console.log(str);
    
}




displayQuote()

