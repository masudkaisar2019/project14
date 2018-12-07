const testWrapper = document.querySelector(".test-wrapper").innerHTML;
var testArea = document.querySelector("#test-area");
var originText = document.querySelector("#origin-text p").innerHTML;
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");
error=0;

// Add leading zero to numbers 9 or below (purely for aesthetics):


// Run a standard minute/second/hundredths timer:
var hours = 0, minute= 0, second= 0, count=00, clock, displayClock;


function countDown(){	
	second = Math.floor(second/3600);
	minute = Math.floor(second*60);
	hours = Math.floor(minute*60);
	if (hours < 10) { hours = "0" + hours; }
	if (minute< 10) { minute = "0" + minute; }
	if (second< 10) { second  = "0" + second; }
	console.log(second);

	if(count >= 60 ){
		count = 0;
		minute++;
	
	}else{
		second= count++
		// console.log(second);

	}
	if(minute >= 60){
		minute = 0;
		hours++;
	}
	
// count++
// 	if(second>60){
// 		minute ++;
// 		secound = count;
// 	}
// 	else if(minute>60){
// 		hours++;
// 		minute= count;
// 	}
	
	clock=  hours+":"+minute+":"+second;
	document.getElementById("clock").innerHTML =clock;


//display per minute.
var my_text_length = document.getElementById("test-area").value.split(" ").length;

var my_word_per_min = my_text_length*(60/second);
document.getElementById("word_per_min").innerHTML = "Word per min: "+my_word_per_min ;


	
displayClock = setTimeout(countDown,1000);
	
this.matchText();

}


// Match the text entered with the provided text on the page:
function matchText(){
	var error=0;
	
	var test_text = originText.split(" ").join().length;
	var my_typing = document.getElementById("test-area").value.split(" ").join().length;
	// console.log(test_text);
	// console.log(my_typing);
	console.log(originText);

	if(test_text == my_typing ){
		clearInterval(displayClock);
	}

// count error
	
	var myString= document.getElementById("test-area").value.split(" ");
	// console.log(myString);
	var hasString = originText.split(" ");
	// console.log(hasString);
	// console.log(myString,hasString)
	for(var i=0; i<=hasString.length;i++ ){
		if(myString[i] == hasString[i]){
		error = error;

		document.getElementById("Error").innerHTML = "The Total Error: "+error;
	}else{
		error = error +1;
		//   console.log(error);
		document.getElementById("Error").innerHTML = "The Total Error: " + error;
	}

}

}


// Start the timer:

function startTimmer(){
	if(document.getElementById("test-area").value.length==1){
		// setTimeout(countDown,1000);
		this.countDown();
	}
}

// Reset everything:

// Event listeners for keyboard input and the reset button:

document.getElementById("reset").addEventListener('click',function(){
	document.getElementById("test-area").value= "";
	clearInterval(displayClock);
	var second = 0;
	var minute= 0;
	var hours= 0;
	if (hours < 10) { hours = "0" + hours; }
	if (minute< 10) { minute = "0" + minute; }
	if (second< 10) { second  = "0" + second; }

	clock=  hours+":"+minute+":"+second;
	document.getElementById("clock").innerHTML =clock;	
	clearInterval(displayClock);

})


function changeText(){
	var my_new_text = "I am new text";
	document.getElementsByTagName("p")[1].innerHTML = my_new_text;

}




