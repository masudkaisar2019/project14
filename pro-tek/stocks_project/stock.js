var y=1;

function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        // console.log(this.responseText);
         var myData = JSON.parse(this.responseText);
        // console.log(myData);
        var display_data = document.getElementById("Display_my_Stock");
    
        for(var i =0;i<myData.length;i++){
            //console.log(myData[i])
            display_data.innerHTML = display_data.innerHTML +
             "<div class='inner' id = '+i+' style='border:2Px solid blue; float:left;height:200px;width:200px;' >"+
              "<span>"+myData[i].symbol+"</span>"+"<br>"+
              "<span>"+myData[i].lastTradePriceOnly+"</span>"+"<br>"+
              "<span>"+myData[i].change+"</span>"+"<br>"+
              "<span>"+myData[i].changeInPercent+"</span>"+"<br>"+
              "<button class='mybtn'> RemoveMe </button>"+
              "</div>";
             
    //stock color change 
                if(myData[i].change >=0){
                  // console.log(myData[i].change);
                  document.getElementsByTagName("div")[y].style.background = "green";
                  y= y+1;
               
                }
                else{
                  console.log(myData[i].change);
                  document.getElementsByTagName("div")[y].style.background = "red";
                  y= y+1;
               
                
                }
                
      
                $(document).ready(function(){
                    $(".mybtn").click(function(){
                      $(this).parent().remove();
                      y= y-1;
                    });

                });

        } //for loop end
       } // if statement end
  } //onreadystatechange function end
    xhttp.open("GET", "https://angular2-in-action-api.herokuapp.com/stocks/snapshot?symbols=aapl,goog,fb,tsla,tm,tmus", true);
    xhttp.send(); 

} // load() function end
 





//------------------------------------------------------------------------------------
//Add stock data by click a button 

//------------------------------------------------------------------------------------

 
 function addData(){
        var my_input_data= document.getElementById("my_input_data").value;
        
        //console.log(my_input_data);
        var my_link = "https://angular2-in-action-api.herokuapp.com/stocks/snapshot?symbols="
        //console.log(my_link);
        var my_output_link = my_link + my_input_data;
        console.log(my_output_link);
        document.getElementById("my_input_data").value="";
        var myRequest = new XMLHttpRequest();
        myRequest.onreadystatechange = function(){

          if (this.readyState == 4 && this.status == 200) {
            var my_output_json = JSON.parse(this.responseText);
            var display_my_input_data = document.getElementById("Display_my_input_stock");
            var display_data = document.getElementById("Display_my_Stock");


            for(var i=0;i<my_output_json.length;i++){

              // display_my_input_data.innerHTML = display_my_input_data.innerHTML +
              display_data.innerHTML = display_data.innerHTML + "<div class='inner' id = '+i+' style='border:2Px solid blue; float:left;height:200px;width:200px;' >"+
              // "<div clsaa='inner' id='+i+' style='border:2Px solid blue; float:left;'>"+
              "<span>"+my_output_json[i].symbol+"</span>"+"<br>"+
              "<span>"+my_output_json[i].lastTradePriceOnly+"</span>"+"<br>"+
              "<span> "+my_output_json[i].change+"</span>"+"<br>"+
              "<span>"+my_output_json[i].changeInPercent+"</span>"+"<br>"+
              "<button class='mybtn'> RemoveMe </button>"+

              "</div>"

      //stock color change 
              if(my_output_json[i].change >=0){

                console.log(my_output_json[i].change);
                document.getElementsByTagName("div")[y].style.background = "green";
                
                y= y+1;
                
                // console.log(k);
              }
              else{
                console.log(my_output_json[i].change);
                document.getElementsByTagName("div")[y].style.background = "red";
                y= y+1;
      
              }
      // Remove Button 
      $(document).ready(function(){
        $(".mybtn").click(function(){
          $(this).parent().remove();
          y= y-1;
        });

    });


          }
        }
      };
        myRequest.open("GET",my_output_link,true);
        myRequest.send();
 }


