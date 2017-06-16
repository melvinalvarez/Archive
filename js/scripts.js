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

//Scroll Toggles
//to do: refine toggles 
$(window).scroll(function() {
    
    var scroll = $(window).scrollTop();
    
    if (scroll >= 100) {$("#header-info-two").addClass("reveal");} 
    if (scroll >= 200) {$("#header-info-three").addClass("reveal");}
    if (scroll >= 300) {$("#header-info-four").addClass("reveal");}
    if (scroll >= 400) {$("#header-info-five").addClass("reveal");}
    if (scroll >= 500) {$("#header-info-six").addClass("reveal");}
});

//Project Views
// on click, change to specified bg color for project, hide masonry, and reveal project div

//36 Days of Type 04
//$( "#masonry-36days" ).click(function() {
    
//var projectInit = $("#masonry").css("display", "none");
    
//    $('body').css("background-color", "yellow");
//    //reveal hidden header elements
//    $("#header-info-two").addClass("reveal");
//    $("#header-info-three").addClass("reveal");
//    $("#header-info-four").addClass("reveal");
//    $("#header-info-five").addClass("reveal");
//    $("#header-info-six").addClass("reveal");
    
    //reveal project container
//    $("#project").addClass("reveal");
  
  //hide masonry 
//  $( "#masonry" ).animate({opacity: 0}, 500, function() {
  // changed display to none to avoid the scroll
//  });
  
  
//  setTimeout(function() {
 //       projectInit;
 //       }, 1000);
  //      console.log("SetTimeOut worked");
//});


//Dark Room
$("#masonry-darkroom").click(function() {

});


//SIDEBAR

//Quote Generator
