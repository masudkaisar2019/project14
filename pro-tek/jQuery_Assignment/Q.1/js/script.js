
// Question  number 1 & 2
//In HTML create a div with id #target. On button click, Change the background color of '#target' by using JQUERY.
//In HTML create a div with id #main. On button click, now add html inside of '#target' by using JQUERY.


// $(document).ready(function(){
//     $('button').click(function(){
//         $('#target').css('background-color','green')
//         $('#target').html("Hello I am new text");//question 2
//     });
// });

//------------------------------------------------------------------------------------------
 // Question 3 In HTML create a div with id #main and have <span> child inside the div. On button click, Now change the text in the span, a child of '# main’

// $(document).ready(function(){
//     $('button').click(function(){
//         $('#main').children().html("Hello Tasmia I love you");
//     });
// });

//------------------------------------------------------------------------------------------

//Question 4 :In HTML create 4 divs with class “.info”. On button double click, Change background color of the second '.target'.

// $(document).ready(function(){
//     $('button').click(function(){
//         $(".info").eq(1).css("background-color", "red");
//     });
// });


//------------------------------------------------------------------------------------------
//Question 5: Have several html tags on the page. Have an input button with id hideElems. When this button is clicked all the elements on the page should be hidden.
/*
$(document).ready(function(){
    $('button').click(function(){
        $('*').hide();
    });
});
*/
//------------------------------------------------------------------------------------------
// Question 5: Have two buttons "HIDE" and "SHOW"  and
//when you click HIDE button, the < ul > elements on the page should be hidden
//when you click SHOW button, the < ul > elements on the page should be shown
/*
$(document).ready(function(){
    $('#hide').click(function(){
        $('ul').hide();
    });
    $('#show').click(function () {
        $('ul').show();
    });
});
*/
/* Question no 7 : Have any number divs inside the <section> tag and then on click of a button, show the number of divs that are inside the section tag. [Show the number of children in alert]
*/
/*
    $(document).ready(function(){
        $('button').click(function(){
           var my_div = $('section').children('div').length;
           alert(my_div);
        });
    });
*/
//-----------------------------------------------------------------------
//Question no 8:  Inside the a div “#target”, have h1, h2,h3, h4 and h5 tags. Remove all children of '#target' but not h2.
/*
$(document).ready(function(){
    $('button').click(function(){
    //    $('h1').hide();
    //     $('h3').hide();
    //     $('h4').hide();
    //     $('h5').hide();
        $("h2").siblings().hide();
    });
});
*/
//-----------------------------------------------------------------------
// Question No 9 : Have a table with 7 rows and 5 columns. [Fill it with any data]. Now on click of a button, make the rows color alternating [Make odd rows to green and even rows to blue].
/*
$(document).ready(function(){
    $('button').click(function(){
        $('.even').css('background-color','blue');
        $('.odd').css('background-color', 'green');
    });
});
*/
//-------------------------------------------------------------------------------
// Question no 10 ;Create 5 check boxes. When you click a button called "Select All" - all the check boxes should be checked. When you click "Deselect All" - all the check boxes should be unchecked.
/*
$(document).ready(function(){
    $('#btn1').click(function () {
        $(".myCheckbox").prop('checked', false);
    });

    $('#btn2').click(function(){
        $(".myCheckbox").prop('checked',true);
    });
});
*/
//-------------------------------------------------------------------
 //Question no 11 ; Have a three select boxes (drop down boxes). When you click on button called VALIDATE then it should check if the select boxes are selected or NOT. If yes, then the TEXT that were selected in each of these select boxes should be added a Div.  Create this DIV dynamically.
 /*
 $(document).ready(function(){
    $('button').click(function(){
        
        $('select').change(function(){
            var x = $('.option').val();
            var x;
            // console.log(x);
            if (x !=""){
                // alert('You click ' + x);
                $("#main_div").append("<div>"+x+"</div>");
            }
            else{
                alert("Please Select one")
            }
            
        });
    });
 });
 */

 //----------------------------------------------------------------------
// Question No : 12
//On document ready,  turn every second paragraph in a block of text blue, but we want to ignore other elements such as images or divs, etc
/*
$(document).ready(function(){
    $('button').click(function(){
        $("div").children('p.second').css('color', 'blue');  
    });       
});
*/




