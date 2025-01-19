
const ServicesSlider = new Swiper(".seba__services__container", {
  loop: true,
  autoplay: {
    delay: 3000,
  },
  //   pagination: {
  //     el: '.swiper-pagination',
  //     clickable: true,
  //   },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
  navigation: {
    nextEl: ".servcies__next__btn",
    prevEl: ".services__prev__btn",
  },
});
