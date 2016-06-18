jQuery(document).ready(function($) {
	"use strict";


    var windowheight = jQuery(window).height();
    var windowwidth = jQuery(window).width();
    if(windowheight > 650)
    {
         $('.pattern').removeClass('height-resize');
    }

    if (windowwidth < 600) {
      $('#page-top').backstretch(["images/landing.jpg"],  {alignX: 'center'});
      $('#about').backstretch(["images/ceremonija_1-min.jpg"], {alignX: 'right'});
      $('#subscribe').backstretch(["images/krantas_3-min.jpg"],  {alignX: 'right'});
      $('#contact').backstretch(["images/kontaktai-min.jpg"],  {alignX: 'center'});
    } else {

      $('#page-top').backstretch(["images/landing.jpg"],  {alignX: 'center'});

      $('#about').backstretch([
         "images/ceremonija-min.jpg", 
        "images/ceremonija_1-min.jpg",
        "images/ceremonija_2-min.jpg",
          ],  {duration: 4000, fade: 1000, alignX: 'right'});

      $('#subscribe').backstretch([
        "images/krantas_1-min.jpg", 
        "images/krantas_2-min.jpg",
        "images/krantas_3-min.jpg",
        ],  {duration: 4000, fade: 1000, alignX: 'center'});
    
      $('#contact').backstretch([
        "images/kontaktai-min.jpg", 
        ],  {alignX: 'center'});
    }

	$('#time_countdown').countDown({  
        targetDate: {
            'day': 10,
            'month': 9,
            'year': 2016,
            'hour': 13,
            'min': 45,
            'sec': 0
        }, omitWeeks: true
	    });

	$('.next-section .go-to-about').click(function() {
    	$('html,body').animate({scrollTop:$('#about').offset().top}, 1000);
  	});
  	$('.next-section .go-to-subscribe').click(function() {
    	$('html,body').animate({scrollTop:$('#subscribe').offset().top}, 1000);
  	});
  	$('.next-section .go-to-contact').click(function() {
    	$('html,body').animate({scrollTop:$('#contact').offset().top}, 1000);
  	});
  	$('.next-section .go-to-page-top').click(function() {
    	$('html,body').animate({scrollTop:$('#page-top').offset().top}, 1000);
  	});
});

