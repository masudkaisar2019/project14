



var keylist = "abcdefghijklmnopqrstuvwxyz123456789!@#$%^&*";
var tmp='';

function generatepass(plength){
    var tmp = '';
    for(i=0; i<plength; i++){
        tmp += keylist.charAt(Math.floor(Math.random()*keylist.length))
    }
    return tmp;
}

function populatepass(enterlength){
    document.passGen.output.value = generatepass(enterlength);
}




