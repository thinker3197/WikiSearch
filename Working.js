function Search()
{
    
    var input=$("#search-input").val();

    $.get("https://en.wikipedia.org/wiki/"+input,function(data, status, script)
    {
        document.getElementById("wiki").style.width = "600px";
        document.getElementById('wiki').innerHTML = data;

    }).fail(function() {

        document.getElementById("wiki").style.height = "200px";
        $('.content').replaceWith($('<img src="Images/oops.png"></img>'));

    });

}

$(document).ready(function(){

    $("button").click(function()
    {

        Search();
        
    });

    var i = 0;

    $('#search-input').keypress(function(event){

        i = i + 1;

        if(i==1)
        {

            document.getElementById("wiki").style.height = "200px";
            $('<img src="Images/big-ajax-loader.gif"></img>').appendTo($("#wiki"));
        
        }

        var keycode = (event.keyCode ? event.keyCode : event.which);

        if(keycode == '13'){

            Search(); 
        }

    });

});

