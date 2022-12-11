const citytripLocations = [
  {
    img: "https://cf.bstatic.com/xdata/images/xphoto/300x240/140018331.jpg?k=5a3df4ef660a744468a05ae6c1e3e85f638c3662e546c2816a67e4975bc12169&o=",
    name: "Mumbai",
    distance: "14",
  },
  {
    img: "https://cf.bstatic.com/xdata/images/xphoto/300x240/140051620.jpg?k=34e9bb994a77e0d48bba9bea1b1561ba28e7491ee92924ab0b8996f27d5401b5&o=",
    name: "Navi Mumbai",
    distance: "17",
  },
  {
    img: "https://cf.bstatic.com/xdata/images/xphoto/300x240/140018162.jpg?k=b56277100459626c66be8e27db905d17ef2afed42ac97bcf6aa9070a59206016&o=",
    name: "Surat",
    distance: "232",
  },
  {
    img: "https://cf.bstatic.com/xdata/images/xphoto/300x240/140018349.jpg?k=8ab6c3981c3e3b11e3746c51dccec1d15b420f2cf8b458c130eb88f9a14c8121&o=",
    name: "Aurangabad",
    distance: "271",
  },
  {
    img: "https://cf.bstatic.com/xdata/images/xphoto/300x240/140018162.jpg?k=b56277100459626c66be8e27db905d17ef2afed42ac97bcf6aa9070a59206016&o=",
    name: "Ahmedabad",
    distance: "439",
  },
  {
    img: "https://cf.bstatic.com/xdata/images/xphoto/300x240/140018295.jpg?k=19d9daa9f85af645d2bfe993e8baf7311063a21ec02346195d7025b45a84c472&o=",
    name: "Dwarka",
    distance: "537",
  },
  {
    img: "https://cf.bstatic.com/xdata/images/xphoto/300x240/140018162.jpg?k=b56277100459626c66be8e27db905d17ef2afed42ac97bcf6aa9070a59206016&o=",
    name: "Hampi",
    distance: "555",
  },
  {
    img: "https://cf.bstatic.com/xdata/images/xphoto/300x240/140018349.jpg?k=8ab6c3981c3e3b11e3746c51dccec1d15b420f2cf8b458c130eb88f9a14c8121&o=",
    name: "Hospet",
    distance: "271",
  },
  {
    img: "https://cf.bstatic.com/xdata/images/xphoto/300x240/140018162.jpg?k=b56277100459626c66be8e27db905d17ef2afed42ac97bcf6aa9070a59206016&o=",
    name: "Bhuj",
    distance: "571",
  },
  {
    img: "https://cf.bstatic.com/xdata/images/xphoto/300x240/140018295.jpg?k=19d9daa9f85af645d2bfe993e8baf7311063a21ec02346195d7025b45a84c472&o=",
    name: "Hyderabad",
    distance: "515",
  },
];

// initialize swiper
// offers area carousel
// const locationSwiper = new Swiper(".locations-carousel",);
const locationsCarouselOptions = {
  spaceBetween: 16,

  // Navigation arrows
  navigation: {
    nextEl: ".offers-area .swiper-button-next",
    prevEl: ".offers-area .swiper-button-prev",
  },

  simulateTouch: false,

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
};

// explore area carousel
const exploreCarouselOptions = {
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
      simulateTouch: false,
    },

    1024: {
      simulateTouch: false,

      slidesPerView: 6,
    },
  },
};

// property type carousel
const propertyTypeSwiper = new Swiper(".property-carousel", {
  spaceBetween: 16,

  // Navigation arrows
  navigation: {
    nextEl: ".property-area .swiper-button-next",
    prevEl: ".property-area .swiper-button-prev",
  },

  simulateTouch: false,

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
      simulateTouch: false,

      slidesPerView: 4,
    },
  },
});

// trip type carousel
const tripCarouselOptions = {
  spaceBetween: 16,

  simulateTouch: false,

  navigation: {
    prevEl: null,
    nextEl: null,
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
      simulateTouch: false,
    },

    1024: {
      slidesPerView: 6,
      simulateTouch: false,
    },
  },
};
if ($(".city-trip-carousel-wrap").parent().hasClass("active")) {
  tripCarouselOptions.navigation.nextEl =
    ".city-trip-carousel-wrap .swiper-button-next";
  tripCarouselOptions.navigation.prevEl =
    ".city-trip-carousel-wrap .swiper-button-prev";
} else if ($(".beach-trip-carousel-wrap").parent().hasClass("active")) {
  tripCarouselOptions.navigation.nextEl =
    ".beach-trip-carousel-wrap .swiper-button-next";
  tripCarouselOptions.navigation.prevEl =
    ".beach-trip-carousel-wrap .swiper-button-prev";
} else if ($(".outdoor-trip-carousel-wrap").parent().hasClass("active")) {
  tripCarouselOptions.navigation.nextEl =
    ".outdoor-trip-carousel-wrap .swiper-button-next";
  tripCarouselOptions.navigation.prevEl =
    ".outdoor-trip-carousel-wrap .swiper-button-prev";
} else if ($(".romance-trip-carousel-wrap").parent().hasClass("active")) {
  tripCarouselOptions.navigation.nextEl =
    ".romance-trip-carousel-wrap .swiper-button-next";
  tripCarouselOptions.navigation.prevEl =
    ".romance-trip-carousel-wrap .swiper-button-prev";
}

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
      simulateTouch: false,
    },
  },
});

var cityTripCarouselTemplate;

citytripLocations.forEach((location) => {
  cityTripCarouselTemplate = `
    								<div class="swiper-slide">
									<div class="location">
										<div class="location-thumbnail mb-3">
											<img class="w-full aspect-4/3 md:aspect-square object-cover"
												src="${location.img}"
												alt="" />
										</div>
										<div class="location-meta flex flex-col items-start justify-content-start">
											<h6 class="location-name font-bold">${location.name}</h6>
											<span class="distance text-sm">${location.distance} km from Chennai</span>
										</div>
									</div>
								</div>
  `;

  $(".city-trip-carousel-wrap .swiper-wrapper").append(
    cityTripCarouselTemplate
  );
});

function makeActive(btn) {
  btn.parent().addClass("active");
  btn.parent().siblings().removeClass("active");

  btn
    .parents(".site-container")
    .find(btn.attr("data-bs-target"))
    .addClass("active");
  btn
    .parents(".site-container")
    .find(".tab-pane")
    .not(btn.attr("data-bs-target"))
    .removeClass("active");

  console.log(btn.attr("data-bs-target"));

}

const navBtn = $(".nav-btn");
const navTabBtn = $(".nav-tab-btn");

// navigation active element

navBtn.on("click", function (event) {
  event.preventDefault();
  makeActive($(this));
});

navTabBtn.on("click", function (event) {
  event.preventDefault();
  makeActive($(this));
});

function swiperInit(selector, options) {
  new Swiper(selector, options);
}

swiperInit(".offers-carousel", locationsCarouselOptions);
swiperInit(".explore-carousel", exploreCarouselOptions);

console.log(tripCarouselOptions);
swiperInit(".trip-carousel", tripCarouselOptions);
