//var country ={ 
//    uk :1.39,
//    Bd :82.78,
//    Aus:64.60,
//    Nz :1.28,
//    India :64.89
//}
////console.dir(country);
////console.log(country.uk);
//
// 
////var dataInput = document.getElementById("input2").value;
////console.log(dataInput);
//
//function conversion(dataInput,count){
//    //console.log(country.uk);
//    //alert(dataInput);
//    //alert(count);
//    
//var usd = count*dataInput;
//    //console.log(usd);
//    alert(usd +"USD");
//    //document.getElementById("output").innerHTML = usd;
//    
//    //console.log(country.uk);
//    //console.log(data);
//}
//
//
//
function myDate(){
//alert("hello");
document.getElementById("demo").innerHTML= Date();
}

var curency =[
    { country: "Uk", Id :1.39},
    { country: "Bd", Id :0.012},
    { country: "Aus", Id :0.78},
    { country: "NZ", Id :0.73},
    { country: "India", Id :0.015},
]
//console.log(curency);

curency.push({country:"China", Id :0.013});
console.log(curency);
curency.forEach(function(item){
    //console.log(item.Id);
    var option = document.createElement("option");
//    console.log(option);
    option.value = item.Id;
    //console.log(option.value);
    option.innerHTML = item.country;
    selector.appendChild(option);
//    console.log(option);
})



//selector.onchange = function(){
//   alert(this.value);
//}

function convert(){
    //console.log(data);
    
    var data = document.getElementById("selector").value;
    console.log(data);
    var dataInput = document.getElementById("input2").value;
console.log(dataInput);
    var nameCountry = document.getElementsByTagName("OPTION").innerHTML;
    console.log(nameCountry);
   alert( data * dataInput+"USD"); 
}