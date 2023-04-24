const toggleMenu = () => {
  const burger = document.querySelector(".js-burger");
  const menu = document.querySelector(".js-header-nav");
  const body = document.querySelector("body");
  burger.addEventListener("click", () => {
    if (!menu.classList.contains("active")) {
      menu.classList.add("active");
      burger.classList.add("active");
      body.classList.add("locked");
    } else {
      menu.classList.remove("active");
      burger.classList.remove("active");
      body.classList.remove("locked");
    }
  });
  window.addEventListener("resize", () => {
    if (window.innerWidth > 992) {
      menu.classList.remove("active");
      burger.classList.remove("active");
      body.classList.remove("locked");
    }
  })
}
toggleMenu();


const slider = new Swiper(".partners-slider", {
  grabCursor: true,
  loop: true,
  // spaceBetween: 60,
  // slidesPerView: 7,
  freeMode: false,
  allowTouchMove: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // noSwiping: true,
  speed: 500,
  // freeModeMomentum: false,
  // autoplay: {
  // delay: 0,
  // disableOnInteraction: true,
  // },
  breakpoints: {
    992: {
      slidesPerView: 7,
      spaceBetween: 60
    },
    320: {
      slidesPerView: 3,
      spaceBetween: 30
    },
  }
});