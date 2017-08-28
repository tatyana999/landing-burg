"use strict";
$('#ajaxbtn').on('click', function(){
    $.ajax({
        url: '/action2.php',
    }).done(function(data){
        var jsoned = JSON.parse(data);
        console.log(jsoned);
        jsoned.forEach(function(item, i, jsoned) {
            var tabledata = makeTable(item.id, item.name);
            $('#table').append(tabledata)
        });


});

    var age = 25; console.log(`I am ${age} years old`); // I am 25 years old    })
function makeTable(id, name) {
    return "<tr><td>"+id+"</td><td>"+name+"</td></tr>";
}

