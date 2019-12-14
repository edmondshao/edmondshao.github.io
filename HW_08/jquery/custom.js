// for the index page 
$(document).ready(function(){
    //button that fades in and out my profile picture
    $("#face_button").click(function(){
        $("#mainPrf").fadeTo("slow",.25);

    });
});

//for the picture gallery
$(document).ready(function(){
    //button that fades in and out each of the pictures in my gallery one by one 
    //slowy and not all at once
    $("#disapear_slow").click(function(){
        $("#tl").fadeToggle();
        $("#tr").fadeToggle("slow");
        $("#bl").fadeToggle(3000);
        $("#br").fadeToggle(4000);
    });
    

});

//For the about me section 
$(document).ready(function(){
    //makes sure to animate the nyu logo on the page
    $("#animate_nyu").click(function(){
        
        $("#nyu_logo").animate({left : "+=140"});
    });
});

//for the contact section
$(document).ready(function(){
    $("#info").hide();
    $("#show").click(function(){
        $("#info").show();
        
    });
    $("#hide").click(function(){
        $("#info").hide();
        
    });
    
})

