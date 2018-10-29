/*-----------------------------------------------------------------------------------
/*
/* Main JS
/*
-----------------------------------------------------------------------------------*/

(function($) {

	/*---------------------------------------------------- */
  	/* Preloader
   	/*---------------------------------------------------- */
  	$(window).load(function() {

	   	// will first fade out the loading animation
    	$("#status").fadeOut("slow");

    	// will fade out the whole DIV that covers the website.
    	$("#preloader").delay(500).fadeOut("slow").remove();

    	$('.js #hero .hero-image img').addClass("animated fadeInUpBig");

		/*----------------------------------------------------*/
			/* Waypoints Animations
		------------------------------------------------------ */
		$('.js .design').waypoint(function() {
			$('.js .design .feature-media').addClass( 'animated pulse' );
		}, { offset: 'bottom-in-view' });

		$('.js .responsive').waypoint(function() {
			$('.js .responsive .feature-media').addClass( 'animated pulse' );
		}, { offset: 'bottom-in-view' });

		$('.js .cross-browser').waypoint(function() {
			$('.js .cross-browser .feature-media').addClass( 'animated pulse' );
		}, { offset: 'bottom-in-view' });

		$('.js .video').waypoint(function() {
			$('.js .video .feature-media').addClass( 'animated pulse' );
		}, { offset: 'bottom-in-view' });

		/*----------------------------------------------------*/
		/* Highlight the current section in the navigation bar
		------------------------------------------------------*/
		var sections = $("section");
		var navigation_links = $("#nav-wrap a");

		sections.waypoint({
			handler: function(direction) {
				var active_section = $(this.element);
				if (direction === "up") {
					active_section = active_section.prev();
				}
				var active_link = $('#nav-wrap a[href="#' + active_section.attr("id") + '"]');

				navigation_links.parent().removeClass("current");
				active_link.parent().addClass("current");
			},
			offset: '35%'
		});
  	})


  	/*----------------------------------------------------*/
  	/* Smooth Scrolling
  	------------------------------------------------------ */
  	$('.smoothscroll').on('click', function (e) {

	 	e.preventDefault();

   	var target = this.hash,
    	$target = $(target);

    	$('html, body').stop().animate({
       	'scrollTop': $target.offset().top
      }, 800, 'swing', function () {
      	window.location.hash = target;
      });

  	});
})(jQuery);