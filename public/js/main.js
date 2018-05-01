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

		$('.js #subscribe').waypoint(function() {
			$('.js #subscribe input[type="email"]').addClass( 'animated fadeInLeftBig show' );
			$('.js #subscribe input[type="submit"]').addClass( 'animated fadeInRightBig show' );
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


  	/*---------------------------------------------------- */
  	/* Mobile Menu
   ------------------------------------------------------ */
  	var toggle_button = $("<a>", {
                        id: "toggle-btn",
                        html : "Menu",
                        title: "Menu",
                        href : "#" }
                        );
  	var nav_wrap = $('nav#nav-wrap')
  	var nav = $("ul#nav");

  	/* id JS is enabled, remove the two a.mobile-btns
  	and dynamically prepend a.toggle-btn to #nav-wrap */
  	nav_wrap.find('a.mobile-btn').remove();
  	nav_wrap.prepend(toggle_button);

  	toggle_button.on("click", function(e) {
   	e.preventDefault();
    	nav.slideToggle("fast");
  	});

  	if (toggle_button.is(':visible')) nav.addClass('mobile');
  	$(window).resize(function(){
   	if (toggle_button.is(':visible')) nav.addClass('mobile');
    	else nav.removeClass('mobile');
  	});

  	$('ul#nav li a').on("click", function(){
   	if (nav.hasClass('mobile')) nav.fadeOut('fast');
  	});


  	/*----------------------------------------------------*/
  	/* FitText Settings
  	------------------------------------------------------ */
  	setTimeout(function() {

   	$('h1.responsive-headline').fitText(1.2, { minFontSize: '25px', maxFontSize: '40px' });

  	}, 100);


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

  	/*----------------------------------------------------*/
  	/* Flexslider
  	/*----------------------------------------------------*/
  	$('.flexslider').flexslider({
   	namespace: "flex-",
      controlsContainer: ".flex-container",
      animation: 'slide',
      controlNav: true,
      directionNav: false,
      smoothHeight: true,
      slideshowSpeed: 7000,
      animationSpeed: 600,
      randomize: false,
   });
})(jQuery);