


var walk = function(){
    return("He is able to walk")
}

var SuperHero = function(){
    var power, villian;
}

SuperHero.prototype.walk = walk;
peterParker = new SuperHero;
peterParker.power = "AirSwing";
peterParker.villian = "Green Goblin";
peterParker.walk();

console.log(peterParker.walk());
clark = new SuperHero;
clark.power = "fly";
clark.villian =" Lex Luthor"

console.log(clark.villian);

