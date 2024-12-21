
// jquery start

$(document).ready(function(){

   // jQuery methods go here...
 
       
       // preloader
       $(window).on('load',function(){
              $('#preloader').fadeOut(1000);
       })
       // meanmenu
      //  $('#mobile-menu').meanmenu({
      //         meanMenuContainer: '.mobile-menu',
      //         meanScreenWidth: "991"
      //  });
       
       // One Page Nav
       // var top_offset = $('.header-area').height() - 10;
       // $('.main-menu nav ul').onePageNav({
       // 	currentClass: 'active',
       // 	scrollOffset: top_offset,
       // });
       
    //    // toggle popup show
    //        $('#toggle-bar').on('click',()=>{
    //            // search_p.removeClass('active');
    //            $('.header-toggle-popup').addClass('active');
    //        })
    //    // toggle popup remore
    //        $('#close_toggle').on('click',()=>{
    //            // search_p.removeClass('active');
    //            $('.header-toggle-popup').removeClass('active');
    //        })
       // toggle popup show
    //    $(window).on('scroll', function () {
    //           var scroll = $(window).scrollTop();
    //           if (scroll < 10) {
    //                  $(".sticky-header").addClass('.active');
    //            console.log('true');
    //           } else {
    //                  $(".sticky-header").removeClass('.active');
    //            console.log('false');
    //           }
    //    });
       // search popup
       // $('#search_popup').
    //    $('.search_bar').on('click',()=>{
    //        // search_p.removeClass('active');
    //        $('.search_popup').addClass('active');
    //    })
    //    $('.close').on('click',()=>{
    //        search_p.removeClass('active');
    //    })
       
       
       
       // mainSlider
    //    function mainSlider() {
    //           var BasicSlider = $('.slider-active');
    //           BasicSlider.on('init', function (e, slick) {
    //                  var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
    //                  doAnimations($firstAnimatingElements);
    //           });
    //           BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
    //                  var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
    //                  doAnimations($animatingElements);
    //           });
    //           BasicSlider.slick({
    //                  autoplay: false,
    //                  autoplaySpeed: 10000,
    //                  dots: false,
    //                  fade: true,
    //                  arrows: false,
    //                  responsive: [
    //                         { breakpoint: 767, settings: { dots: false, arrows: false } }
    //                  ]
    //           });
       
            //   function doAnimations(elements) {
            //          var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            //          elements.each(function () {
            //                 var $this = $(this);
            //                 var $animationDelay = $this.data('delay');
            //                 var $animationType = 'animated ' + $this.data('animation');
            //                 $this.css({
            //                        'animation-delay': $animationDelay,
            //                        '-webkit-animation-delay': $animationDelay
            //                 });
            //                 $this.addClass($animationType).one(animationEndEvents, function () {
            //                        $this.removeClass($animationType);
            //                 });
            //          });
            //   }
    //    }
    //    mainSlider();
       
       // owlCarousel
       $(".our_work_wrap").owlCarousel({
            loop:true,
            margin:20,
            nav: false,
            autoplayInfinite:true,
            autoplay:true,
            autoplaySpeed:1000,
            navText:['<i class="fas fa-long-arrow-alt-right"></i>','<i class="fas fa-long-arrow-alt-left"></i>'],
            responsive:{
               0:{
                   items:1,
               },
               767:{
                   items:2
               },
               992:{
                   items:3
               }
           }
       })
       
 // Scroll Up প্লাগিন চালু করুন
 $.scrollUp({
   scrollName: 'scrollUp', // বাটনের id
   scrollDistance: 300, // স্ক্রল করার পর বাটনটি প্রদর্শিত হবে
   scrollFrom: 'top', // স্ক্রল করবেন উপরের দিক থেকে
   scrollSpeed: 300, // বাটনটি কত দ্রুত স্ক্রল হবে
   easingType: 'linear', // এনিমেশন টাইপ
   animation: 'fade', // ফেড এনিমেশন
   animationSpeed: 200, // এনিমেশন স্পিড
   scrollText: '<i class="fas fa-angle-up"></i>', // বাটনে টেক্সট
   zIndex: 2147483647 // বাটনের z-index
});
  // Initialize map when window loads
  
       /* magnificPopup img view */
    //    $('.popup-image').magnificPopup({
    //           type: 'image',
    //           gallery: {
    //             enabled: true
    //           }
    //    });
       
       /* magnificPopup video view */
    //    $('.popup-video').magnificPopup({
    //           type: 'iframe'
    //    });
       
       
       // isotop
    //    $('.grid').imagesLoaded( function() {
    //           // init Isotope
    //           var $grid = $('.grid').isotope({
    //             itemSelector: '.grid-item',
    //             percentPosition: true,
    //             masonry: {
    //                  // use outer width of grid-sizer for columnWidth
    //                  columnWidth: '.grid-item',
    //             }
    //           });
    //    });
       
       // filter items on button click
    //    $('.portfolio-menu').on( 'click', 'button', function() {
    //      var filterValue = $(this).attr('data-filter');
    //      $grid.isotope({ filter: filterValue });
    //    });
       
       //for menu active class
    //    $('.portfolio-menu button').on('click', function(event) {
    //           $(this).siblings('.active').removeClass('active');
    //           $(this).addClass('active');
    //           event.preventDefault();
    //    });
       
       
    //    $('html, body').animate({
    //     scrollTop: $(".middle").offset().top
    //  }, 2000);
       
       // scrollToTop
      //  $.scrollUp({
      //         scrollName: 'scrollUp', // Element ID
      //         topDistance: '300', // Distance from top before showing element (px)
      //         topSpeed: 300, // Speed back to top (ms)
      //         animation: 'fade', // Fade, slide, none
      //         animationInSpeed: 200, // Animation in speed (ms)
      //         animationOutSpeed: 200, // Animation out speed (ms)
      //         scrollText:' <i class="fas fa-angle-up"></i>', // Text for element
      //         activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
      //  });
       
       // WOW active
       new WOW().init();
       
       
       });


//             //  google map

//  // Initialize the map
//  var map = L.map('map').setView([23.6850, 90.3563], 7);
//  map.on('click', function (e) {
//    alert(`আপনি ক্লিক করেছেন: ল্যাটিটিউড ${e.latlng.lat}, লংটিটিউড ${e.latlng.lng}`);
// });

 // Add OpenStreetMap tiles
//  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//  }).addTo(map);

//  // Add marker for Dhaka
//  L.marker([23.8103, 90.4125]).addTo(map)
//      .bindPopup("<b>ঢাকা</b><br>বাংলাদেশের রাজধানী.");
// L.circle([23.8103, 90.4125], {
//    color: 'red',
//    fillColor: '#f03',
//    fillOpacity: 0.5,
//    radius: 5000 // রেডিয়াস (মিটারে)
// }).addTo(map)
// //    .bindPopup("ঢাকা সার্কেল");

// fetch('bangladesh.json') // GeoJSON ফাইলের পাথ দিন
// .then(response => response.json())
// .then(data => {
//     L.geoJSON(data, {
//         // প্রতিটি পয়েন্টকে বৃত্ত হিসেবে রেন্ডার করার জন্য
//         pointToLayer: (feature, latlng) => {
//             return L.circle(latlng, {
//                 radius: 500, // রেডিয়াস মিটার এ
//                 color: '#000',
//                 size: 100, // বৃত্তের সীমানার রঙ
//                 fillColor: '#f03', // বৃত্তের ভেতরের রঙ
//                 fillOpacity: 0.5 // বৃত্তের ভেতরের স্বচ্ছতা
//             });
//         },
//         onEachFeature: (feature, layer) => {
//             // প্রতিটি ফিচারের জন্য পপআপ যোগ করুন
//             layer.bindPopup(`<b>${feature.properties.name_bn}</b>`);
//         }
//     }).addTo(map);
// });

