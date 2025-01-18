// for home slider 
const homeSwiper = new Swiper("#seba__home__slider__container", {
    loop: true,
    autoplay: {
      delay: 3000,
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
    navigation: {
      nextEl: "#seba__home__slider__next__btn",
      prevEl: "#seba__home__slider__prev__btn",
    },
  });
  
// for recently view slider 
const recentlyViewSwiper = new Swiper("#seba__recenlty__view__slider__container", {
    loop: true,
    autoplay: {
      delay: 3000,
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
    navigation: {
      nextEl: "#seba__revently__view__slider__next__btn",
      prevEl: "#seba__recently__view__slider__prev__btn",
    },
  });
  