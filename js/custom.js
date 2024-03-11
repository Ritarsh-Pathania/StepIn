/*--- Tooltip Initialization ----*/
jQuery(document).ready(function(){
    jQuery('[data-toggle="tooltip"]').tooltip();
    toggleNav();
  });

  /*--- Popover Initialization ----*/
  $(document).ready(function(){
    $('[data-toggle="popover"]').popover();
  });


  /*--- WOW Initialization ----*/
  new WOW().init();


/*---- Owl Carousel start--------*/
// $(document).ready(function(){
//   $(".owl-carousel").owlCarousel();
// });
// var owl = $('.owl-carousel');
// owl.owlCarousel({
//     items:4,
//     autoplay:true,
//     margin:10,
//     autoplayTimeout:5000,
//     loop:true,
//     nav:true,
//     dots:false,

//       responsive:{
//           0:{
//               items:1,
//               nav:false
//           },
//           600:{
//               items:1
//           },
//           1000:{
//               items:1
//         }
//       }
// });
/*---- Owl Carousel End--------*/

