(function($) {
	$(document).ready(function() {
		"use strict";
		
		// TOOLTIP
		$('[data-toggle="tooltip"]').tooltip()

		
		
		// HAMBURGER
		$('.menu-btn').on('click', function(e) {
		$(".menu-btn").toggleClass("active");
		$(".bars .bar").toggleClass("rotated");
		$(".navbar .navbar-nav").toggleClass("active");
		
		});
		
		
		// SANDWICH BUTTON
$('.sandwich-btn').on('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    $(this).toggleClass("open");
    $(".sandwich-menu").toggleClass("open");
    console.log('ham clicked', $(".sandwich-menu").hasClass("open"));
});

		// CLOSE MENU ON WINDOW RESIZE TO DESKTOP
		$(window).on('resize', function() {
			if ($(window).width() >= 992) {
				$('.sandwich-btn').removeClass("open");
				$(".sandwich-menu").removeClass("open");
			}
			// Close any open dropdowns when resizing
			$('.header .navbar .nav-menu li .dropdown').removeClass('open');
		});

		
		// SEARCH
		$('.search-btn').on('click', function(e) {
			$(".search-box").addClass("open")
			});
		
		
		$('.close-btn').on('click', function(e) {
			$(".search-box").removeClass("open")
			});
		
		
		// SANDWICH MENU TREE
		$('.sandwich-menu .nav-menu li > a').on('click', function(e) {
			var $dropdown = $(this).parent().children('.dropdown');
			if ($dropdown.length > 0) {
				e.preventDefault();
				$dropdown.slideToggle(300);
				$(this).parent().siblings().children('.dropdown').slideUp(300);
			}
		});

		// DATA BACKGROUND IMAGE
		var pageSection = $(".bg-image");
		pageSection.each(function(indx){
			if ($(this).attr("data-background")){
				$(this).css("background-image", "url(" + $(this).data("background") + ")");
			}
		});


		// DATA BACKGROUND COLOR
			var pageSection = $(".bg-color");
			pageSection.each(function(indx){
				if ($(this).attr("data-background")){
					$(this).css("background-color", $(this).data("background"));
				}
			});
		
		
// DROPDOWN
// DROPDOWN
$('.header .navbar .nav-menu > li > a').on('click', function(e) {
    var $dropdown = $(this).siblings('.dropdown');
    if ($dropdown.length > 0) {
        e.preventDefault();
        e.stopPropagation();
        var isOpen = $dropdown.hasClass('open');
        $('.header .navbar .nav-menu .dropdown').removeClass('open');
        if (!isOpen) {
            $dropdown.addClass('open');
        }
    }
});

$(document).on('click', function(e) {
    if (!$(e.target).closest('.header .navbar .nav-menu').length) {
        $('.header .navbar .nav-menu .dropdown').removeClass('open');
    }
});

		
		// Handle nested dropdowns
		$('.header .navbar .nav-menu li .dropdown li a').on('click', function(e) {
			if ($(window).width() <= 767) {
				var $this = $(this);
				var $nestedDropdown = $this.parent().children('.dropdown');
				
				if ($nestedDropdown.length > 0) {
					e.preventDefault();
					e.stopPropagation();
					
					// Close other nested dropdowns at the same level
					$this.parent().siblings().find('.dropdown').removeClass('open');
					
					// Toggle this nested dropdown
					$nestedDropdown.toggleClass('open');
				}
			}
		});
		
		
		
		// SIDE TREE MENU
		$('.solutions .sidebar ul li a').on('click', function(e) {
	  	$(this).parent().children('.solutions .sidebar ul li ul').slideToggle(300);
        return true;
	  	});
		
		
		
		// GO TO TOP
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('.scrollup').fadeIn();
			} else {
				$('.scrollup').fadeOut();
			}
    	});

    	$('.scrollup').on('click', function(e) {
			$("html, body").animate({
				scrollTop: 0
			}, 600);
			return false;
    	});
	
		

		});
		// END JQUERY
		
		
		// COUNTER 
		if (!document.getElementById("counter")) {
		} 
		else {
		
		var lastWasLower = false;
			$(document).scroll(function(){
			
			var p = $( "#counter" );
			var position = p.position();
			var position2 = position.top;
		
			if ($(document).scrollTop() > position2-300){
			if (!lastWasLower)
				$('#1').html('1700');
				$('#2').html('88');
				$('#3').html('96');
				$('#4').html('94329');
		
			lastWasLower = true;
				} else {
			lastWasLower = false;
			}
			});		
		};

		// WOW ANIMATION 
		wow = new WOW(
      	{
       		animateClass: 'animated',
        	offset:       50
      	}
    	);
    	wow.init();
	
	
		// SLIDER
		var menu = [];
		jQuery('.swiper-slide').each( function(index){
			menu.push( jQuery(this).find('.slide-inner').attr("data-text") );
		});
		var interleaveOffset = 0.5;
		var swiperOptions = {
			loop: true,
			speed: 1000,
			parallax: true,
				autoplay: {
				delay: 3500,
				disableOnInteraction: false,
			  },
			grabCursor: true,
			watchSlidesProgress: true,
			pagination: {
			  el: '.swiper-custom-pagination',
					clickable: true,
					renderBullet: function (index, className) {
				  return '<span class="' + className + '">' + (menu[index]) + '</span>';
				},
			},
			on: {
			progress: function() {
			  var swiper = this;
			  for (var i = 0; i < swiper.slides.length; i++) {
				var slideProgress = swiper.slides[i].progress;
				var innerOffset = swiper.width * interleaveOffset;
				var innerTranslate = slideProgress * innerOffset;
				swiper.slides[i].querySelector(".slide-inner").style.transform =
				  "translate3d(" + innerTranslate + "px, 0, 0)";
			  }      
			},
			touchStart: function() {
			  var swiper = this;
			  for (var i = 0; i < swiper.slides.length; i++) {
				swiper.slides[i].style.transition = "";
			  }
			},
			setTransition: function(speed) {
			  var swiper = this;
			  for (var i = 0; i < swiper.slides.length; i++) {
				swiper.slides[i].style.transition = speed + "ms";
				swiper.slides[i].querySelector(".slide-inner").style.transition =
				  speed + "ms";
			  }
			}
		  }
		};

		var swiper = new Swiper(".swiper-container", swiperOptions);


	
			// CAROUSEL
			var swiper2 = new Swiper('.swiper-carousel', {
				slidesPerView: 3,
				loop: true,
				autoplay: {
				delay: 2500,
				disableOnInteraction: false,
			},
				spaceBetween: 14,
			   // Navigation arrows
				navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
				breakpoints: {
						1024: {
						  slidesPerView: 3,
						  spaceBetween: 14,
						},
						768: {
						  slidesPerView: 2,
						  spaceBetween: 14,
						},
						640: {
						  slidesPerView: 1,
						  spaceBetween: 14,
						},
						320: {
						  slidesPerView: 1,
						  spaceBetween: 0,
						}
					  }
			});

		// TESTIMONIALS 
		var swiper3 = new Swiper('.swiper-testimonials', {
		  	slidesPerView: 1,
		  	spaceBetween: 0,
			loop: true,
			autoplay: {
        	delay: 2500,
        	disableOnInteraction: false,
      	},
		   // Navigation arrows
	  	navigation: {
		  nextEl: '.swiper-button-next',
		  prevEl: '.swiper-button-prev',
		}
		});
	
	
	
		// MASONRY
		var $container = $('.masonry').imagesLoaded( function() {
			$container.isotope({
			  itemSelector: '.masonry li',
			  layoutMode: 'masonry'
			});
    	});
	
	
	
		
	
		// ISOTOPE FILTER
			var $container = $('.masonry');
			$container.isotope({
			filter: '*',
			animationOptions: {
			duration: 750,
			easing: 'linear',
			queue: false
			}
			});

			$('.showcase-filter li a').on('click', function(e) {
			$('.showcase-filter li a.current').removeClass('current');
			$(this).addClass('current');

			var selector = $(this).attr('data-filter');
			$container.isotope({
				filter: selector,
				animationOptions: {
				duration: 750,
				easing: 'linear',
				queue: false
				}
			});
			return false;
			}); 



		
// SCROLL HIDE / SHOW HEADER
var lastScrollTop = 0;
$(window).on('scroll', function() {
    var currentScroll = $(this).scrollTop();
    if (currentScroll > 100) {
        if (currentScroll > lastScrollTop) {
            $('.header').addClass('header-hidden');
        } else {
            $('.header').removeClass('header-hidden');
        }
    } else {
        $('.header').removeClass('header-hidden');
    }
    lastScrollTop = currentScroll;
});		
})(jQuery);