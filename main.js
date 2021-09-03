$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 100) {
          $("#header").css("background" , "#0004", );
        }
  
        else{
            $("#header").css("background" , "#37517e");  	
        }
    })
  })