var harley = {
    
    name : "Street750",
    color : "Black",
    
    grtBudgetForCustomStudff : function(){
        return("You need to lower budget"),
        console.log(this.color)
    },
    
    shoutOuts : [
        {kevin: "A cool bike monster with 750cc"},
        { sam: "Heavy bike with full power"},
    ]
};
harley.grtBudgetForCustomStudff();
//console.log(harley.shoutOuts[0].kevin);



document.getElementById("test1").innerHTML = harley.shoutOuts[1].sam;
document.getElementById("test").innerHTML = harley.shoutOuts[0].kevin;


