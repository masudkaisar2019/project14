$(document).ready(function () {
    $("#myInput").on("keyup", function () {
        $('#btn1').css('visibility', 'visible');
        var value = $(this).val().toLowerCase();
        $("#myTable tr").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});


//To add link in the table 
$(document).ready(function(){
    $('#btn1').click(function(){
        $('tr').eq(5).remove();
        $('#tr').css('visibility', 'visible');
        $('#myTable #tr td a').each(function(){
            $(this).attr("href",'http://www.pro-tekconsulting.com').html("Pro-Tec")
        });
       
    });
});
