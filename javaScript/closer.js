var counter = (function(){
    var addOne = 100;
    return function(){return addOne += 1;}
})();

console.log(counter());