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


// Cursor Interactions
var box=$(".box");
var boxCenter=[box.offset().left+box.width()/2, box.offset().top+box.height()/2];

$(document).mousemove(function(e){    
    
	var angle = Math.atan2(e.pageX- boxCenter[0],- (e.pageY- boxCenter[1]) )*(270/Math.PI);	    
    
    box.css({ "-webkit-transform": 'rotate(' + angle + 'deg)'});    
    box.css({ '-moz-transform': 'rotate(' + angle + 'deg)'});
    box.css({ 'transform': 'rotate(' + angle + 'deg)'});
    
});


//SIDEBAR

//Quote Generator


//WebVR AFrame voice-control 
//listen to iOS Update on WebkitSpeech