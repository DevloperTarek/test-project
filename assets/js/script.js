(function ($) {
       "use strict";
       
       // preloader
       $(window).on('load',function(){
              $('#preloader').fadeOut(1000);
       })
       // meanmenu
       $('#mobile-menu').meanmenu({
              meanMenuContainer: '.mobile-menu',
              meanScreenWidth: "991"
       });
       
       // One Page Nav
       // var top_offset = $('.header-area').height() - 10;
       // $('.main-menu nav ul').onePageNav({
       // 	currentClass: 'active',
       // 	scrollOffset: top_offset,
       // });
       
       // toggle popup show
           $('#toggle-bar').on('click',()=>{
               // search_p.removeClass('active');
               $('.header-toggle-popup').addClass('active');
           })
       // toggle popup remore
           $('#close_toggle').on('click',()=>{
               // search_p.removeClass('active');
               $('.header-toggle-popup').removeClass('active');
           })
       // toggle popup show
       $(window).on('scroll', function () {
              var scroll = $(window).scrollTop();
              if (scroll < 10) {
                     $(".sticky-header").addClass('.active');
               console.log('true');
              } else {
                     $(".sticky-header").removeClass('.active');
               console.log('false');
              }
       });
       // search popup
       // $('#search_popup').
       $('.search_bar').on('click',()=>{
           // search_p.removeClass('active');
           $('.search_popup').addClass('active');
       })
       $('.close').on('click',()=>{
           search_p.removeClass('active');
       })
       
       
       
       // mainSlider
       function mainSlider() {
              var BasicSlider = $('.slider-active');
              BasicSlider.on('init', function (e, slick) {
                     var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
                     doAnimations($firstAnimatingElements);
              });
              BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
                     var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
                     doAnimations($animatingElements);
              });
              BasicSlider.slick({
                     autoplay: false,
                     autoplaySpeed: 10000,
                     dots: false,
                     fade: true,
                     arrows: false,
                     responsive: [
                            { breakpoint: 767, settings: { dots: false, arrows: false } }
                     ]
              });
       
              function doAnimations(elements) {
                     var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
                     elements.each(function () {
                            var $this = $(this);
                            var $animationDelay = $this.data('delay');
                            var $animationType = 'animated ' + $this.data('animation');
                            $this.css({
                                   'animation-delay': $animationDelay,
                                   '-webkit-animation-delay': $animationDelay
                            });
                            $this.addClass($animationType).one(animationEndEvents, function () {
                                   $this.removeClass($animationType);
                            });
                     });
              }
       }
       mainSlider();
       
       // owlCarousel
       $('.hero-area').owlCarousel({
           loop:true,
           margin:0,
           autoplay:true,
           autoplaySpeed:2000,
              items:1,
              navText:['<i class="fas fa-long-arrow-alt-right"></i>','<i class="fas fa-long-arrow-alt-left"></i>'],
           nav:true,
              dots:false,
           responsive:{
               0:{
                   items:1,
                   nav:false,
               },
               767:{
                   items:1
               },
               992:{
                   items:1
               }
           }
       })
       // customer area
       $('.team-wrapper-active').owlCarousel({
           loop:true,
           margin:20,
           autoplay:true,
           autoplaySpeed:3000,
              items:1,
              navText:['<i class="fas fa-angle-right"></i>','<i class="fas fa-angle-left"></i>'],
           nav:true,
              dots:true,
           responsive:{
               0:{
                   items:1,
                   nav:false,
                   dots:false,
                   margin:0
               },
               767:{
                   items:2
               },
               992:{
                   items:3
               }
           }
       })
       $('.brand-area-active').owlCarousel({
           loop:true,
           margin: 90,
           autoplay:true,
           autoplaySpeed:3000,
              items:4,
              navText:['<i class="fas fa-angle-right"></i>','<i class="fas fa-angle-left"></i>'],
           nav:false,
              dots:true,
           responsive:{
               0:{
                   items:1
               },
               767:{
                   items:3
               },
               992:{
                   items:4
               }
           }
       })
       $('.latest-wrapper-active').owlCarousel({
           loop:true,
           margin: 90,
           autoplay:true,
           autoplaySpeed:3000,
              items:3,
              navText:['<i class="fas fa-angle-right"></i>','<i class="fas fa-angle-left"></i>'],
           nav:false,
              dots:true,
           responsive:{
               0:{
                   items:1,
                   dots:false
               },
               767:{
                   items:2
               },
               992:{
                   items:3
               }
           }
       })
       // customer area
       $('.customer-wrapper-active').owlCarousel({
           loop:true,
           margin:0,
           autoplay:true,
           autoplaySpeed:3000,
              items:1,
              navText:['<i class="fas fa-angle-right"></i>','<i class="fas fa-angle-left"></i>'],
           nav:true,
              dots:false,
           responsive:{
               0:{
                   items:1
               },
               767:{
                   items:1
               },
               992:{
                   items:1
               }
           }
       })
       // service area
       $('.service_items').owlCarousel({
           loop:true,
           margin:30,
           autoplay:true,
           autoplaySpeed:3000,
              items:3,
              navText:['<i class="fas fa-long-arrow-alt-right"></i>','<i class="fas fa-long-arrow-alt-left"></i>'],
           nav:true,
              dots:false,
           responsive:{
               0:{
                   items:1
               },
               767:{
                   items:2
               },
               992:{
                   items:3
               }
           }
       })
       
       
       /* magnificPopup img view */
       $('.popup-image').magnificPopup({
              type: 'image',
              gallery: {
                enabled: true
              }
       });
       
       /* magnificPopup video view */
       $('.popup-video').magnificPopup({
              type: 'iframe'
       });
       
       
       // isotop
       $('.grid').imagesLoaded( function() {
              // init Isotope
              var $grid = $('.grid').isotope({
                itemSelector: '.grid-item',
                percentPosition: true,
                masonry: {
                     // use outer width of grid-sizer for columnWidth
                     columnWidth: '.grid-item',
                }
              });
       });
       
       // filter items on button click
       $('.portfolio-menu').on( 'click', 'button', function() {
         var filterValue = $(this).attr('data-filter');
         $grid.isotope({ filter: filterValue });
       });
       
       //for menu active class
       $('.portfolio-menu button').on('click', function(event) {
              $(this).siblings('.active').removeClass('active');
              $(this).addClass('active');
              event.preventDefault();
       });
       
       
       $('html, body').animate({
        scrollTop: $(".middle").offset().top
     }, 2000);
       
       // scrollToTop
       $.scrollUp({
              scrollName: 'scrollUp', // Element ID
              topDistance: '300', // Distance from top before showing element (px)
              topSpeed: 300, // Speed back to top (ms)
              animation: 'fade', // Fade, slide, none
              animationInSpeed: 200, // Animation in speed (ms)
              animationOutSpeed: 200, // Animation out speed (ms)
              scrollText:' <i class="fas fa-angle-up"></i>', // Text for element
              activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
       });
       
       // WOW active
       new WOW().init();
       
       
       })(jQuery);