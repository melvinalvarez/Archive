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

//Project Views
// on click, change to specified bg color for project, hide masonry, and reveal project div
$( "#proj-36days" ).click(function() {
  $('body').css("background-color", "yellow");
  $( "#masonry" ).animate({
        opacity: 0,
        //height: "toggle"
  }, 500, function() {
    // changed display to none to avoid the scroll
  }).delay(100).css("display", "none");
});


//SIDEBAR

//Quote Generator
