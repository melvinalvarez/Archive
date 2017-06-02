//Scroll Toggles
$(window).scroll(function() {
    
    var scroll = $(window).scrollTop();
    
    if (scroll >= 150) {
        $("#header-info-two").addClass("reveal");
    } 
    
    if (scroll >= 300) {
        $("#header-info-three").addClass("reveal");
    }
    
    if (scroll >= 450) {
        $("#header-info-four").addClass("reveal");
    }
    
    if (scroll >= 600) {
        $("#header-info-five").addClass("reveal");
    }
});


//SIDEBAR

//Quote Generator
