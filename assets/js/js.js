const swiper = new Swiper('.mySwiper', {
    // Optional parameters
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // autoplay
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    // log for debug purposes 
    on: {
        init: function () {
        console.log('swiper initialized');
         },
    },
  });
  