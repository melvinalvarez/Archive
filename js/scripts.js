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

//Reveal Project Title on Hover

var masonryTitle=$("#title-36days, #title-ApolloIllustrations");

    masonryTitle.hide();

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



//TO DO: fix this click
$("#twitter").hover(function(event) {
    $("#click-guide").css({top: event.clientY-20, left: event.clientX}).show();
}, function() {
    $("#click-guide").hide();
});

// Cursor Trail

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

$("#masonry-36days, #masonry-ApolloIllustrations, #masonry-ObliqueStrategies, #masonry-Nolfam, #masonry-dialpadSecurity, #masonry-ScottPilgrim, #masonry-DidTheRightThing, #masonry-FloodKit, #masonry-DialpadHighFive, #masonry-DoTheRightThing, #masonry-Flotus, #masonry-Dialpad90s, #masonry-darkroom, #masonry-supersecretbanana, #masonry-illustrations, #masonry-SANFRAN, #masonry-100DayProject, #masonry-DialpadIllustrations, #masonry-FluidAlphabet, #masonry-RacSpotting, #masonry-DoTheRightThing, #masonry-Warcycle ").hover(
    function() {
        $('.yellow-trail').css('background-color', myColors[i]);//yellow
        i = (i + 1) % myColors.length;
    }
);


//SIDEBAR

//Quote Generator


//WebVR AFrame voice-control 
//listen to iOS Update on WebkitSpeech