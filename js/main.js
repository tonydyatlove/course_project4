$(function(){
    $('.top-slider').slick({
      arrows: false,
      dots: true,
      // autoplay: true,
      // fade: true
    });
    $('.review-items').slick({
      arrows: false,
      dots: true,
     // autoplay: true,
      slidesToShow: 4,
      slidesToScroll: 1
    });
  });

  Fancybox.bind("[data-fancybox]", {
    // Your custom options
  });