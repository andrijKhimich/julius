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


// load latest video from youtube

// const loadVideo = (iframe) => {
//   const cid = "UCgJJY_sxYWgwwZYdhI-LCqg";
//   const channelURL = encodeURIComponent(`https://www.youtube.com/feeds/videos.xml?channel_id=${cid}`)
//   const reqURL = `https://api.rss2json.com/v1/api.json?rss_url=${channelURL}`;

//   fetch(reqURL)
//     .then(response => response.json())
//     .then(result => {
//       console.log(result)
//       const videoNumber = iframe.getAttribute('videoId')
//       const link = result.items[videoNumber].link;
//       const id = link.substr(link.indexOf("=") + 1);
//       iframe.setAttribute("src", `https://youtube.com/embed/${id}?controls=1&showinfo=0&autohide=1&autoplay=0`);
//     })
//     .catch(error => console.log('error', error));
// }

// const iframes = document.getElementsByClassName('latestVideoEmbed');
// for (let i = 0, len = iframes.length; i < len; i++) {
//   loadVideo(iframes[i]);
// }