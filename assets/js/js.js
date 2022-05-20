
//swipper
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
  // show navigation
  const nav = document.querySelector("header .container nav");

const toggle = document.querySelectorAll(".toggle");

for (element of toggle) {
  element.addEventListener("click", () => {
    nav.classList.toggle("show");
  });
}

const links = document.querySelectorAll(
  "nav .menu li "
);
//.menu-item, nav .btn-primary, nav .menu-social li a

for (const link of links) {
  link.addEventListener("click", () => {
    nav.classList.remove("show");
  });
}