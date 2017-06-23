//Isotope Masonry
/*global $*/



$( document ).ready(function() {
    
    // using unveil.js for preloading images
    // add preloader img on src tag
    // then add final image on data-src tag
    $("img").unveil(200, function() {
        $(this).on('load', (function() {
        this.style.opacity = 1;
        })
        );
    });
    
    console.log( "ready!" );
    
});

$('.grid').isotope({
    layoutMode: 'packery',
    itemSelector: '.grid-item',
});

//Dark Room
$("#masonry-darkroom").click(function() {

});


//SIDEBAR

//Quote Generator
