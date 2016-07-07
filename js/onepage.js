$(document).ready(function() {
    

    
    if (matchMedia) {
        var mq = window.matchMedia("(min-width: 700px)");
        mq.addListener(WidthChange);
        WidthChange(mq);
    }
    
    function WidthChange(mq) {

	if (mq.matches) {
		  var randomTag = Math.floor(Math.random() * $('.tagline').length);
        $('.tagline').hide().eq(randomTag).show();
	}
	else {
        $(".tagline").hide();
	}

}
    
    
    

    $(".box").click(function(){
        
        var link = $(this).attr("value");
        
      if ($("#third .left").is(":hidden") === true) {

            $("#third .left").fadeIn("slow", function(){
                $(".accomp").load("pages/" + link + ".html", function (){
                                $(".accomp").slideDown("slow");
                            });
            });
          
      } else {
            
            $(".accomp").slideUp("slow", function(){
                $(".accomp").load("pages/" + link + ".html", function (){
                    $(".accomp").slideDown("slow");
                });
            });
        
            }
        
        });

            
        
    
    $(".accomp").click(function(){
        var position = $(this).index();
        console.log(position);
    });
    
// Stores Visitors Name and changes page  
    
    $("form").submit(function( event){
        
    var firstName = $("#firstName").val();
    
    document.getElementById("fName").innerHTML = firstName;
        
            event.preventDefault();
            $( "#home" ).fadeOut("slow", function(){
                $( "#first" ).fadeIn("slow");
                $(".displayNav:eq(0)").removeClass("focus");
                    $(".displayNav:eq(1)").addClass("focus");

            });
        
    });
    

    
// Next Button Functionality
    
    $(".next").click(function(){
        
        var displayPosition = $(".display:visible").index();
        var position = displayPosition + 1;
        
        $(".display:visible").fadeOut(1000, function(){
            
            $(".display:eq("+ position + ")").fadeIn(1000);
            $(".displayNav:eq("+ displayPosition + ")").removeClass("focus");
            $(".displayNav:eq("+ position + ")").addClass("focus");
            });
        
    });
    
    
// Nav Navigation    
    

      $(".displayNav").click(function(){
       
        var navPosition = $(this).index();
        
            $(".focus").removeClass("focus");
        
         $(".display:visible").fadeOut(1000, function(){
            $(".display:eq("+ navPosition + ")").fadeIn(1000);
             $(".displayNav:eq("+ navPosition + ")").addClass("focus");
         });
        });


    
// Time for Contact Page
    
    function getNewTime () {    
        d = new Date();
        hours = d.getHours();
        mins = ("0" + d.getMinutes()).slice(-2);
        secs = ("0" + d.getSeconds()).slice(-2);
        day = ("0" + d.getDay()).slice(-2);
        month = ("0" + d.getMonth()).slice(-2);
        year = d.getFullYear();
        
   currentDate = hours + ":" + mins + ":" + secs;
    
}
        
function printTime() {  
    
    getNewTime();
    
    document.getElementById("time").innerHTML = currentDate;
}
        printTime();
        
        setInterval(printTime, 1000);
        
// slides nav down into view
    
    $("#menuButton").click(function(){
        $("nav ul").slideToggle(500);
        
    });
    
// Stores browser width and height
    
            w = window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth;

            h = window.innerHeight
        || document.documentElement.clientHeight
        || document.body.clientHeight;

// slides down to content if below 565px
    
    if (w <= 565) {
        
        
            $("nav li").click(function(){
                $("nav ul").slideUp(500, function(){
                    $("html, body").animate({scrollTop:100}, 1000);
                });
            });
        
            $(".box").click(function(){
                $("html, body").delay(1000).animate({scrollTop: $("#details").offset().top - 5});
            });
        
        $(".next").click(function(){
             $("html, body").animate({scrollTop:100}, 1000);
        });
        
    } else if (w > 565 && h < 800) {
            $("nav li").click(function(){
                $("html, body").animate({scrollTop:100}, 1000);
            });
        
    }

    

// Watches for resize of window and hides/shows nav accordingly

    $( window ).resize(function() {
        w = $(window).width();
        if (w > 565) {
            $("nav ul").show();
        }
        
        else if (w < 565) {
             $("nav ul").hide();
        } 
        
    });

    

});
                