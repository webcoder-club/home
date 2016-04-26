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
    2. Equalizer
    3. Parallax header
    4. Newsletter
    5. Anchor smooth scroll
*/

/* ------------------------------------- */
/* 1. Loading / Opening ................ */
/* ------------------------------------- */

$(window).load(function(){
    "use strict";

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

/* ------------------------------------- */
/* 3. Parallax header .................. */
/* ------------------------------------- */

var onMobile = false;
        
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) { onMobile = true; }

if( ( onMobile === false ) ) {
    $(window).scroll( function() {

        var scroll = $(window).scrollTop(),
        fastScroll = - scroll/4;

        $('.parallax-div').css({ transform: "translate3d( 0, " + fastScroll + "px, 0) scale3d( 1, 1, 1 )" });

        var target = $('.parallax-div');
        var targetHeight = target.outerHeight();

        var scrollPercent = (targetHeight - window.scrollY) / targetHeight;
        if(scrollPercent >= 0){
            target.css('opacity', scrollPercent);
        }

    });
} else {}

$(document).ready(function(){
    "use strict";

    /* ------------------------------------- */
    /* 4. Newsletter ....................... */
    /* ------------------------------------- */

    $("#notifyMe").notifyMe();

    /* ------------------------------------- */
    /* 5. Anchor smooth scroll ............. */
    /* ------------------------------------- */

    var $root = $('html, body');
    $('a').click(function() {
        $root.animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 1200, 'easeInOutCubic');
        return false;
    });
});