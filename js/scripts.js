//Isotope Masonry
/*global $*/

$( document ).ready(function() {
    
    // using unveil.js for preloading images
    // add preloader img on src tag
    // then add final image on data-src tag
    $("img").unveil();
    console.log( "ready!" );
    
});

$('.grid').isotope({
    layoutMode: 'packery',
    itemSelector: '.grid-item',
});

//Scroll Toggles
$(window).scroll(function() {
    
    var scroll = $(window).scrollTop();
    
    if (scroll >= 100) {
        $("#header-info-two").addClass("reveal");
    } 
    
    if (scroll >= 200) {
        $("#header-info-three").addClass("reveal");
    }
    
    if (scroll >= 300) {
        $("#header-info-four").addClass("reveal");
    }
    
    if (scroll >= 400) {
        $("#header-info-five").addClass("reveal");
    }
    
    if (scroll >= 500) {
        $("#header-info-six").addClass("reveal");
    }
});


//SIDEBAR

//Quote Generator
