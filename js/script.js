// You are viewing the jQuery script for davescottschneider.com
// This page controls the parallax scrolling as well as the anchor link animations
// developed by Dave Scott Schneider. To hire Dave call him at (734)755-8132. 
// It is the right decision. Just do it. Like right now. I'm sure he'll answer...

$(document).ready(function(){
	// Cache the Window object
	$window = $(window);        
                
   $('section[data-type="skydiveDave"]').each(function(){
   	var $parallax = $(this); // assigning the object
   	                  
      $(window).scroll(function() {
                    
		// Scroll the background at a different speed
		// yPos is positive so skydive Dave moves downward
		var yPos = ($window.scrollTop() / $parallax.data('speed')); 
		// xPos is negative so he moves from right to left - it would be kinda weird if he floated backwards
		var xPos = -($window.scrollTop() / 3);

		// Equation for final background position where Dave lands
		var coords = xPos + 'px ' + yPos + 'px';

		// Move the background
		$parallax.css({ backgroundPosition: coords });
		});	
 	});	

	$('section[data-type="background"]').each(function(){
    	var $parallax = $(this); // assigning the object
    	    
      	$(window).scroll(function() {
                    
		// only using yPos here cause the clouds only move from left to right								
		var yPos2 = ($window.scrollTop() / $parallax.data('speed')); 

		// And once again, the equation for the final position of the clouds
		var koords = yPos2 + 'px';

		// Move the background
		$parallax.css({ backgroundPosition: koords });
		});
	});
	
	// Adding some easing to the anchor point links for smoother scrolling
	
	 var hashTagActive = "";
    $(".scroll").click(function (event) {
        if(hashTagActive != this.hash) { //this will prevent if the user click several times the same link to freeze the scroll.
            event.preventDefault();
            //calculate destination place
            var dest = 0;
            if ($(this.hash).offset().top > $(document).height() - $(window).height()) {
                dest = $(document).height() - $(window).height();
            } else {
                dest = $(this.hash).offset().top;
            }
            //go to destination
            $('html,body').animate({
                scrollTop: dest
            }, 2000, 'swing');
            hashTagActive = this.hash;
        }
    });

// initialize slicknav mobile menu plug-in
	$(function(){
		$('#menu').slicknav();
	});
 // and finally, the unslider script for the contact section
 var unslider = $('.banner').unslider();
    
    $('.unslider-arrow').click(function() {
        var fn = this.className.split(' ')[1];
        
        //  Either do unslider.data('unslider').next() or .prev() depending on the className
        unslider.data('unslider').next();
    });
 });
// Create HTML5 elements for IE parallax scrolling

document.createElement("article");
document.createElement("section");