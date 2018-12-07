$(document).ready(function(){
    $('#myUL').hide();
    $('#img_tag').hide();

    $('#myInput').keyup(function () {
        var input, filter, ul, li, a, i;
        filter = $('#myInput').val().toUpperCase();
        li = $('li');

        if (filter != "") {
            $('#myUL').show();
            $('#img_tag').show();
        }

        for(var i = 0; i<li.length;i++){
            a = li[i].getElementsByTagName("a")[0];
            if (a.innerHTML.toUpperCase().indexOf(filter) > -1){
                li[i].style.display = "";
            }
            else{
                li[i].style.display = "none";
            }
        }

    });
        // clear all
           $('#img_tag').click(function () {
               document.getElementById("myInput").value = "";
               $('#img_tag').hide();
               $('#show_my_data_in_div').hide();

           })


});