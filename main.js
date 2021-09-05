$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 100 && scroll < 600) {
          $("#header").css("background" , "#0004", );
        }else if (scroll > 700){
          $("#header").css("background" , "#37517e", );
        }
  
        else{
            $("#header").css("background" , "#37517e");  	
        }
    })
  })




  