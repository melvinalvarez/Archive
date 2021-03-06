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

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("sidebar-backtotop").style.visibility = "visible";
    } else {
        document.getElementById("sidebar-backtotop").style.visibility = "hidden";
    }
}

// When the user clicks on the button, scroll to the top of the document
//function topFunction() {
//    document.body.scrollTop = 0; // For Chrome, Safari and Opera 
//    document.documentElement.scrollTop = 0; // For IE and Firefox
//}

$('#sidebar-backtotop').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
 });
//Experimental Cursor

$("#experimentalCursor").click(function() {
    
    // Cursor Interactions
    var box=$(".box");
    var boxCenter=[box.offset().left+box.width()/2, box.offset().top+box.height()/2];
    
    $(document).mousemove(function(e){    
        
    	var angle = Math.atan2(e.pageX- boxCenter[0],- (e.pageY- boxCenter[1]) )*(270/Math.PI);	    
        
        box.css({ "-webkit-transform": 'rotate(' + angle + 'deg)'});    
        box.css({ '-moz-transform': 'rotate(' + angle + 'deg)'});
        box.css({ 'transform': 'rotate(' + angle + 'deg)'});
        
    });

    (function($) {
    
        var baseCssClass = "cursor-trail",
            addPoint = function(pageX, pageY, cssClass, timeToGrow, timeToShrink, scale) {
                // Create a new point located at the mouse position
                var point = $("<div>", {
                    "class": cssClass,
                    css: {
                        left: pageX,
                        top: pageY
                    }
                }).appendTo('body');
    
                // now make the point grow, then shrink and finally disappear
                point
                    .transition({ scale: scale }, timeToGrow)
                    .transition({ scale: 1 }, timeToShrink, function() { point.remove(); });
            };
    
        $.fn.cursorTrail = function(options) {
            // assign defaul2s for those options not supplied
            options = $.extend({
                timeToGrow: 100,
                timeToShrink: 200,
                scale: 4,
                "class": ""
            }, options);
    
            // add the base css class all cursor trail points need.
            var actualCssClass = baseCssClass;
            if (options["class"]) {
                actualCssClass += " " + options["class"];
            }
    
            return this.bind("mousemove", function(ev) {
                addPoint(ev.pageX, ev.pageY, actualCssClass, options.timeToGrow, options.timeToShrink, options.scale);
            });
        };
    }(jQuery));
    
    // jQuery.transit has a bug in older IE versions, so switch to jQuery animate
    if (!$.support.transition) {
        $.fn.transition = $.fn.animate;
    }
    
    $("#container").cursorTrail({
        "class": "yellow-trail"
    });
    
    //Image Hover, Cursor trail Color changes
    
    var myColors = [
                '#FFD600', '#F416EB', '#07AF00' ,'#0085CF', '#FD4A4A', '#696969'
            ];
    var i = 0;
    
    $("#masonry-Bandsinyourbathroom, #masonry-Ethershift, #masonry-Kiosked, #masonry-Outclicks, #masonry-36days, #masonry-ApolloIllustrations, #masonry-ObliqueStrategies, #masonry-Nolfam, #masonry-dialpadSecurity, #masonry-ScottPilgrim, #masonry-DidTheRightThing, #masonry-FloodKit, #masonry-DialpadHighFive, #masonry-DoTheRightThing, #masonry-Flotus, #masonry-Dialpad90s, #masonry-DarkRoom, #masonry-SuperSecretBanana, #masonry-DialpadIllustrations, #masonry-SANFRAN, #masonry-100DayProject, #masonry-DialpadIllustrations, #masonry-FluidAlphabet, #masonry-RacSpotting, #masonry-RaulPlancarte, #masonry-Warcycle ").hover(
        function() {
            $('.yellow-trail').css('background-color', myColors[i]);//yellow
            i = (i + 1) % myColors.length;
        }
    ); 
    });
    
//Sidebar Toggles 

$("#sidebar-masonry").click(function() {
   $("#work-container").css("display","block");
   $("#list-container").css("display", "none");
   $("#sidebar-masonry").css("background-image", "url('https://storage.googleapis.com/melvin-images/assets/icon-masonry-active.svg')");
   $("#sidebar-list").css("background-image", "url('https://storage.googleapis.com/melvin-images/assets/icon-list.svg')");
});

$("#sidebar-list").click(function() {
   $("#work-container").css("display","none");
   $("#list-container").css("display", "block");
   $("#sidebar-masonry").css("background-image", "url('https://storage.googleapis.com/melvin-images/assets/icon-masonry.svg')");
   $("#sidebar-list").css("background-image", "url('https://storage.googleapis.com/melvin-images/assets/icon-list-active.svg')");
});


//Reveal Project Title on Hover

var masonryTitle=$(".title-display");

    masonryTitle.hide();
    
$("#masonry-Bandsinyourbathroom").hover(function() {
    $("#title-Bandsinyourbathroom").show();
}, function() {
    $("#title-Bandsinyourbathroom").hide();   
});    

$("#masonry-Ethershift").hover(function() {
    $("#title-Ethershift").show();
}, function() {
    $("#title-Ethershift").hide();   
});
    
$("#masonry-Kiosked").hover(function() {
    $("#title-Kiosked").show();
}, function() {
    $("#title-Kiosked").hide();   
});

$("#masonry-Outclicks").hover(function() {
    $("#title-Outclicks").show();
}, function() {
    $("#title-Outclicks").hide();   
});

$("#masonry-Outclicks_Illustration").hover(function() {
    $("#title-Outclicks_Illustration").show();
}, function() {
    $("#title-Outclicks_Illustration").hide();   
});

$("#masonry-LensLoft").hover(function() {
    $("#title-LensLoft").show();
}, function() {
    $("#title-LensLoft").hide();   
});
   
$("#masonry-ConwayEcoFest").hover(function() {
    $("#title-ConwayEcoFest").show();
}, function() {
    $("#title-ConwayEcoFest").hide();   
});
    
$("#masonry-Ambi").hover(function() {
    $("#title-Ambi").show();
}, function() {
    $("#title-Ambi").hide();   
});

$("#masonry-TeePublicConvergence").hover(function() {
    $("#title-TeePublicConvergence").show();
}, function() {
    $("#title-TeePublicConvergence").hide();   
});

$("#masonry-Outclicks").hover(function() {
    $("#title-Outclicks").show();
}, function() {
    $("#title-Outclicks").hide();   
});

$("#masonry-36days").hover(function() {
    $("#title-36days").show();
}, function() {
    $("#title-36days").hide();   
});

$("#masonry-ApolloIllustrations").hover(function() {
    $("#title-ApolloIllustrations").show();
}, function() {
    $("#title-ApolloIllustrations").hide();   
});

$("#masonry-ObliqueStrategies").hover(function() {
    $("#title-ObliqueStrategies").show();
}, function() {
    $("#title-ObliqueStrategies").hide();   
});

$("#masonry-Nolfam").hover(function() {
    $("#title-Nolfam").show();
}, function() {
    $("#title-Nolfam").hide();   
});

$("#masonry-dialpadSecurity").hover(function() {
    $("#title-DialpadSecurity").show();
}, function() {
    $("#title-DialpadSecurity").hide();   
});

$("#masonry-ScottPilgrim").hover(function() {
    $("#title-ScottPilgrim").show();
}, function() {
    $("#title-ScottPilgrim").hide();   
});

$("#masonry-DidTheRightThing").hover(function() {
    $("#title-DidTheRightThing").show();
}, function() {
    $("#title-DidTheRightThing").hide();   
});

$("#masonry-FloodKit").hover(function() {
    $("#title-Floodkit").show();
}, function() {
    $("#title-Floodkit").hide();   
});

$("#masonry-DialpadHighFive").hover(function() {
    $("#title-DialpadHighFive").show();
}, function() {
    $("#title-DialpadHighFive").hide();   
});

$("#masonry-DoTheRightThing").hover(function() {
    $("#title-DoTheRightThing").show();
}, function() {
    $("#title-DoTheRightThing").hide();   
});

$("#masonry-Flotus").hover(function() {
    $("#title-Flotus").show();
}, function() {
    $("#title-Flotus").hide();   
});

$("#masonry-Dialpad90s").hover(function() {
    $("#title-Dialpad90s").show();
}, function() {
    $("#title-Dialpad90s").hide();   
});

$("#masonry-DarkRoom").hover(function() {
    $("#title-DarkRoom").show();
}, function() {
    $("#title-DarkRoom").hide();   
});

$("#masonry-SuperSecretBanana").hover(function() {
    $("#title-SuperSecretBanana").show();
}, function() {
    $("#title-SuperSecretBanana").hide();   
});

$("#masonry-IconIllustrations").hover(function() {
    $("#title-IconIllustrations").show();
}, function() {
    $("#title-IconIllustrations").hide();   
});

$("#masonry-SANFRAN").hover(function() {
    $("#title-SANFRAN").show();
}, function() {
    $("#title-SANFRAN").hide();   
});

$("#masonry-100DayProject").hover(function() {
    $("#title-100DayProject").show();
}, function() {
    $("#title-100DayProject").hide();   
});

$("#masonry-DialpadIllustrations").hover(function() {
    $("#title-DialpadIllustrations").show();
}, function() {
    $("#title-DialpadIllustrations").hide();   
});

$("#masonry-FluidAlphabet").hover(function() {
    $("#title-FluidAlphabet").show();
}, function() {
    $("#title-FluidAlphabet").hide();   
});

$("#masonry-RacSpotting").hover(function() {
    $("#title-RacSpotting").show();
}, function() {
    $("#title-RacSpotting").hide();   
});

$("#masonry-RaulPlancarte").hover(function() {
    $("#title-RaulPlancarte").show();
}, function() {
    $("#title-RaulPlancarte").hide();   
});

$("#masonry-Warcycle").hover(function() {
    $("#title-Warcycle").show();
}, function() {
    $("#title-Warcycle").hide();   
});

// Hover alert for changing to experimental cursor instead of link
$("#experimentalCursor").hover(function(event) {
    $("#click-guide").css({top: event.clientY-50, left: event.clientX}).show();
}, function() {
    $("#click-guide").hide();
});

$("#experimentalCursor").click(function(event) {
   document.body.style.cursor = 'none';
});

// Pop up for now

$("#menu-line-shop").hover(function(event) {
    $("#shop-guide").css({top: event.clientY-50, left: event.clientX}).show();
}, function() {
    $("#shop-guide").hide();
});

$("#sidebar-flickity").hover(function(event) {
    $("#disabled-popup").css({top: event.clientY-20, left: event.clientX-50}).show();
}, function() {
    $("#disabled-popup").hide();
});

$("#sidebar-vr").hover(function(event) {
    $("#disabled-popup").css({top: event.clientY-20, left: event.clientX-50}).show();
}, function() {
    $("#disabled-popup").hide();
});

//About Page
//wip -- like counter

function modify_qty(val) {
    var qty = document.getElementById('qty').value;
    var new_qty = parseInt(qty,10) + val;
    
    if (new_qty < 0) {
        new_qty = 0;
    }
    
    document.getElementById('qty').value = new_qty;
    return new_qty;
}




//SIDEBAR

//Quote Generator


//Mobile Menu Interactions
// fixed with pure css
//$("#menu-container").click(function() {
    
//    if ( $(this).height() != 68)
//        $( this ).animate({ height: 68 }, 100 ),
//        $("#mobile-menu-expand").css("display", "none"),
//        $("#aboutSnippet-expand").css("display", "none");
//    else
//        $( this ).animate({ height: 240 }, 200 ),
//        $("#mobile-menu-expand").css("display", "block"),
//        $("#aboutSnippet-expand").css("display", "block");
        
//});


//disable work-links when menu is expanded
//$("#menu-container > a").click(function() {
//  event.stopImmediatePropagation(); 
//});

// Element on screen visibility

//function isScrolledIntoView(el) {
//    var elemTop = el.getBoundingClientRect().top;
//    var elemBottom = el.getBoundingClientRect().bottom;

//   var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
//    return isVisible;
//}

//WebVR AFrame voice-control 
//listen to iOS Update on WebkitSpeech