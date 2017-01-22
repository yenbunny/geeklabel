(function ($) {
  'use strict';
  
	$('.block-scroll').innerHeight($(window).height());
	
	/*-----------------------------
	 * Smooth Scroll
	 *----------------------------*/
		$(document).on('click', '.btn-scroll', function(event){
		    event.preventDefault();
		    $('html, body').animate({
		        scrollTop: $( $.attr(this, 'href') ).offset().top
		    }, 500);
		});
	
})(jQuery);