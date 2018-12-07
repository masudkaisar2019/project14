


function atm(){
    var dollar = document.getElementById("amount").value;
    console.log(dollar);
    if(dollar%20==0 & dollar>0){
        alert("Your amount is ready");
    }
    else if(dollar=!NaN){
        alert("please enter valid number");
        document.getElementById("amount").value=" ";
        
    }
    else{
        alert("please enter multiples of 20");
    }
}