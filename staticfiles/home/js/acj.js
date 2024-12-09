;(function () {
	
	'use strict';

    var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
			BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
			iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
			Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
			Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
			any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};

	var fullHeight = function() {

		if ( !isMobile.any() ) {
			$('.js-fullheight').css('height', $(window).height());
			$(window).resize(function(){
				$('.js-fullheight').css('height', $(window).height());
			});
		}

	};

	var sliderMain = function() {
		
        $('#school-hero .flexslider').flexslider({
          animation: "fade",
          slideshowSpeed: 5000,
          directionNav: true,
          start: function(){
              setTimeout(function(){
                  $('.slider-text').removeClass('animated fadeInUp');
                  $('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
              }, 500);
          },
          before: function(){
              setTimeout(function(){
                  $('.slider-text').removeClass('animated fadeInUp');
                  $('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
              }, 500);
          }

        });

  };

  var stickyFunction = function() {

      var h = $('.image-content').outerHeight();

      if ($(window).width() <= 992 ) {
          $("#sticky_item").trigger("sticky_kit:detach");
      } else {
          $('.sticky-parent').removeClass('stick-detach');
          $("#sticky_item").trigger("sticky_kit:detach");
          $("#sticky_item").trigger("sticky_kit:unstick");
      }

      $(window).resize(function(){
          var h = $('.image-content').outerHeight();
          $('.sticky-parent').css('height', h);


          if ($(window).width() <= 992 ) {
              $("#sticky_item").trigger("sticky_kit:detach");
          } else {
              $('.sticky-parent').removeClass('stick-detach');
              $("#sticky_item").trigger("sticky_kit:detach");
              $("#sticky_item").trigger("sticky_kit:unstick");

              $("#sticky_item").stick_in_parent();
          }
          

          

      });

      $('.sticky-parent').css('height', h);

      $("#sticky_item").stick_in_parent();

  };

  var owlCrouselFeatureSlide = function() {
      $('.owl-carousel').owlCarousel({
          animateOut: 'fadeOut',
         animateIn: 'fadeIn',
         autoplay: true,
         loop:true,
         margin:0,
         nav:true,
         dots: false,
         autoHeight: true,
         items: 1,
         navText: [
            "<i class='icon-arrow-left3 owl-direction'></i>",
            "<i class='icon-arrow-right3 owl-direction'></i>"
           ]
      })
  };

  // Document on load.
  $(function(){
      fullHeight();
      
      
      sliderMain();
      stickyFunction();
      owlCrouselFeatureSlide();
  });


}());