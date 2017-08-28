$('#ajaxbtn').on('click', function(){
   var data = $('form').serializeArray();
    $.ajax({
        url: '/action.php',
        method: "POST",
        data: data
    }).done(function(data){
        console.log(data);
        $('#ajaxresult').html(data);
        $.notify("Hello World");
    })
});

