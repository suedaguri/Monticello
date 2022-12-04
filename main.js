$(function () {
    $(".js-slider").slick({
      fade: true,
      arrows: false,
      slidesToShow: 1,
      infinite: true,
      autoplay: true,
      speed: 800,
      dots: true,
      responsive: [
        {
          breakpoint: 1096,
          settings: {
            arrows: false,
            dots: false,
            slidesToShow: 1,
          },
        },
  
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            dots: false,
            slidesToShow: 1,
          },
        },
  
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            dots: false,
            slidesToShow: 1,
          },
        },
      ],
    });
  
  });
  