// initialize swiper
// offers area carousel
const locationSwiper = new Swiper(".locations-carousel", {
  spaceBetween: 16,

  // Navigation arrows
  navigation: {
    nextEl: ".offers-area .swiper-button-next",
    prevEl: ".offers-area .swiper-button-prev",
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      freeMode: false,
    },

    576: {
      slidesPerView: 2,
      freeMode: false,
    },
  },
});

// explore area carousel
const exploreLocationSwiper = new Swiper(".explore-carousel", {
  spaceBetween: 16,

  // Navigation arrows
  navigation: {
    nextEl: ".explore-area .swiper-button-next",
    prevEl: ".explore-area .swiper-button-prev",
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
    },

    576: {
      slidesPerView: 3,
    },

    768: {
      slidesPerView: 4,
    },

    991: {
      slidesPerView: 5,
    },

    1024: {
      slidesPerView: 6,
    },
  },
});

// property type carousel
const propertyTypeSwiper = new Swiper(".property-carousel", {
  spaceBetween: 16,

  // Navigation arrows
  navigation: {
    nextEl: ".property-area .swiper-button-next",
    prevEl: ".property-area .swiper-button-prev",
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
    },

    576: {
      slidesPerView: 2,
    },

    768: {
      slidesPerView: 3,
    },

    1024: {
      slidesPerView: 4,
    },
  },
});

// trip type carousel
const tripTypeCarousel = new Swiper(".trip-type-carousel", {
  spaceBetween: 16,

  // Navigation arrows
  navigation: {
    nextEl: ".trip-type-area .swiper-button-next",
    prevEl: ".trip-type-area .swiper-button-prev",
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
    },

    576: {
      slidesPerView: 3,
    },

    768: {
      slidesPerView: 4,
    },

    991: {
      slidesPerView: 5,
    },

    1024: {
      slidesPerView: 6,
    },
  },
});

// property type carousel
const topRatedSwiper = new Swiper(".top-rated-carousel", {
  spaceBetween: 16,

  // Navigation arrows
  navigation: {
    nextEl: ".top-rated-area .swiper-button-next",
    prevEl: ".top-rated-area .swiper-button-prev",
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
    },

    576: {
      slidesPerView: 2,
    },

    768: {
      slidesPerView: 3,
    },

    1024: {
      slidesPerView: 4,
    },
  },
});

const navBtn = $(".nav-btn");

// navigation active element

navBtn.on("click", function (event) {
  event.preventDefault();
  $(this).addClass("active");
  navBtn.not($(this)).removeClass("active");
});
