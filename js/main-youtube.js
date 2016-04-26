/*
* BUMP - Unique Coming Soon Template
* Build Date: April 2016
* Last Update: April 2016
* Author: Madeon08
* Copyright (C) 2016 Madeon08
* This is a premium product available exclusively here : http://themeforest.net/user/Madeon08/portfolio
*/

/*  TABLE OF CONTENTS
    ---------------------------
    1. Loading / Opening
    1.1. Parallax header
    2. Equalizer
    3. YouTube Expand/Reduce
    4. Tooltip
    5. Newsletter
    6. Anchor smooth scroll
*/

/* ------------------------------------- */
/* 1. Loading / Opening ................ */
/* ------------------------------------- */

$(document).ready(function($) {
    "use strict";

    var myPlayer = jQuery( "#bgndVideo" ).YTPlayer();

    $( "a.expand-player" ).click(function() {
        $( ".full-play" ).addClass( "display-none" );
        $( ".comp-play" ).removeClass( "display-none" );
    });

    $( "a.compress-player" ).click(function() {
        $( ".full-play" ).removeClass( "display-none" );
        $( ".comp-play" ).addClass( "display-none" );
    });

    var onMobile = false;
            
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) { onMobile = true; }
    if( ( onMobile === false ) ) {

        $(".player").mb_YTPlayer();

        myPlayer.on("YTPReady", function(){

            setTimeout(function(){

                $("#loading").addClass('animated-middle slideOutUp').removeClass('opacity-0');

            },1000);

            setTimeout(function(){

                setTimeout(function() {
                    $('.text-intro').each(function(i) {
                        (function(self) {
                            setTimeout(function() {
                                $(self).addClass('animated-middle fadeInUp').removeClass('opacity-0');
                            },(i*150)+150);
                            })(this);
                        });
                    }, 0);
                
            },1000);

        });

        /* ------------------------------------- */
        /* 1.1 Parallax header ................. */
        /* ------------------------------------- */

        $(window).scroll( function() {

            var scroll = $(window).scrollTop(),
            // slowScroll = - scroll/5.4,
            fastScroll = - scroll/4;

            // $('#firefly-anim').css({ transform: "translate3d( 0, " + slowScroll + "px, 0) scale3d( 1, 1, 1 )" });

            $('.parallax-div').css({ transform: "translate3d( 0, " + fastScroll + "px, 0) scale3d( 1, 1, 1 )" });

            var target = $('.parallax-div');
            var targetHeight = target.outerHeight();

            var scrollPercent = (targetHeight - window.scrollY) / targetHeight;
            if(scrollPercent >= 0){
                target.css('opacity', scrollPercent);
            }

        });

    } else {

        $(window).load(function(){
            "use strict";

            setTimeout(function(){

                $("#loading").addClass('animated-middle slideOutUp').removeClass('opacity-0');

            },1000);

            setTimeout(function(){

                $("#home").addClass('animated-middle fadeInUp').removeClass('opacity-0');

                $('body').vegas({
                    slides: [
                        { src: 'img/slide-1.jpg' },
                        { src: 'img/slide-2.jpg' },
                        { src: 'img/slide-3.jpg' },
                    ],

                    // Delay beetween slides in milliseconds.
                    delay: 5000,

                    // Chose your transition effect (See the documentation provided in your download pack)
                    transition: 'fade'
                });

            },800);

            setTimeout(function(){

                setTimeout(function() {
                    $('.text-intro').each(function(i) {
                        (function(self) {
                            setTimeout(function() {
                                $(self).addClass('animated-middle fadeInUp').removeClass('opacity-0');
                            },(i*150)+150);
                            })(this);
                        });
                    }, 0);
                
            },1000);

        });

        $("#player-nav").addClass("display-none").removeClass("");
    
    }

});

/* ------------------------------------- */
/* 2. Equalizer ........................ */
/* ------------------------------------- */

/* Thanks to CSS Tricks for pointing out this bit of jQuery
http://css-tricks.com/equal-height-blocks-in-rows/
It's been modified into a function called at page load and then each time the page is resized. One large modification was to remove the set height before each new calculation. */

equalheight = function(container){

var currentTallest = 0,
     currentRowStart = 0,
     rowDivs = new Array(),
     $el,
     topPosition = 0;
 $(container).each(function() {

   $el = $(this);
   $($el).height('auto')
   topPostion = $el.position().top;

   if (currentRowStart != topPostion) {
     for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
       rowDivs[currentDiv].height(currentTallest);
     }
     rowDivs.length = 0; // empty the array
     currentRowStart = topPostion;
     currentTallest = $el.height();
     rowDivs.push($el);
   } else {
     rowDivs.push($el);
     currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
  }
   for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
     rowDivs[currentDiv].height(currentTallest);
   }
 });
}

$(window).load(function() {
  equalheight('.equalizer');
});


$(window).resize(function(){
  equalheight('.equalizer');
});


$(document).ready(function(){
    "use strict";

    /* ------------------------------------- */
    /* 3. YouTube Expand/Reduce ............ */
    /* ------------------------------------- */

    $('.expand-player').on( "click", function() {
        $(".global-overlay").fadeOut();

        $('.text-intro').each(function(i) {
                (function(self) {
                    setTimeout(function() {
                        $(self).addClass('fadeOutDown').removeClass('fadeInUp');
                    },(i*150)+150);
                    })(this);
                });
        
    });

    $('.compress-player').on( "click", function() {
        $(".global-overlay").fadeIn();

        $('.text-intro').each(function(i) {
                (function(self) {
                    setTimeout(function() {
                        $(self).addClass('fadeInUp').removeClass('fadeOutDown');
                    },(i*150)+150);
                    })(this);
                });
        
    });

    /* ------------------------------------- */
    /* 4. Tooltip .......................... */
    /* ------------------------------------- */

    // Tooltips used on YouTube buttons
    if (window.matchMedia("(min-width: 1025px)").matches) { 
            
        $(function () { $("[data-toggle='tooltip']").tooltip(); });

    }

    /* ------------------------------------- */
    /* 5. Newsletter ........................ */
    /* ------------------------------------- */

    $("#notifyMe").notifyMe();

    /* ------------------------------------- */
    /* 6. Anchor smooth scroll ............. */
    /* ------------------------------------- */

    var $root = $('html, body');
    $('a').click(function() {
        $root.animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 1200, 'easeInOutCubic');
        return false;
    });
});