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


const addInnerPageClass = () => {
  const innerClass = document.querySelector(".js-innerPage");
  const wrapper = document.querySelector(".wrapper");

  if (innerClass) {
    wrapper.classList.add("inner-page");
  }
}

addInnerPageClass();


// const slider = new Swiper(".swiper", {
//   grabCursor: false,
//   loop: true,
//   spaceBetween: 12,
//   slidesPerView: 3,
//   freeMode: true,
//   allowTouchMove: false,
//   noSwiping: true,
//   speed: 20000,
//   freeModeMomentum: false,
//   autoplay: {
//     delay: 0,
//     disableOnInteraction: true,
//   },
//   breakpoints: {
//     992: {
//       slidesPerView: 4.33,
//       spaceBetween: 30
//     },
//   }
// });

const slider = new Swiper(".partners-slider", {
  grabCursor: false,
  loop: true,
  // spaceBetween: 0,
  // slidesPerView: 7,
  // freeMode: true,
  // allowTouchMove: false,
  // noSwiping: true,
  speed: 1000,
  // freeModeMomentum: false,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // noSwiping: true,
  // speed: 500,
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
    767: {
      slidesPerView: 6,
      spaceBetween: 30
    },
    575: {
      slidesPerView: 5,
      spaceBetween: 30
    },
    320: {
      slidesPerView: 3,
      spaceBetween: 30
    },
  }
});

if (document.querySelector('.videos')) {
  fsLightboxInstances["first-lightbox"].props.onOpen = function () {
    // console.log("The first lightbox has opened.");
  }
  fsLightboxInstances["second-lightbox"].props.onOpen = function () {
    // console.log("The second lightbox has opened.");
  }
}

const menuLinks = document.querySelectorAll(".nav-list__link");

menuLinks.forEach((menuLink) => {
  menuLink.addEventListener("click", function (e) {
    if (e.target.href.indexOf('/instructor') != -1) {
      e.preventDefault();
      window.open('/julius#instructorSection', '_self');
    }
  })
});


// $(document).ready(function () {

//   var isLoading = false;
//   $('.spinning-wheel').hide();

//   $(window).scroll(function () {
//     if ($(window).scrollTop() + $(window).height() >= $(document).height() - 300) {
//       var $next = $('a[rel=next]');
//       var url = $next.attr('href');

//       if (typeof url == 'undefined') {
//         return;
//       }

//       if (!isLoading) {
//         isLoading = true;
//         $('.spinning-wheel').show();
//         $.get(url, function (content) {
//           $('.item-cards').append(content);
//           $('.spinning-wheel').hide();
//           isLoading = false;
//         });
//         $next.parent().remove();
//       }
//     }
//   });

// });
const galleryLinks = document.querySelectorAll('.gallery__item');

const checkSrc = () => {

  galleryLinks.forEach((link) => {

    const src = link.getAttribute('href');
    link.getAttribute('src');
    if (!src) {
      // console.log('img src is empty');
      link.style.display = "none";
    } else {
      link.style.display = "block";
    }
  })
}

checkSrc();