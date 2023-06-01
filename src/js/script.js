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
	});
};
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
			spaceBetween: 60,
		},
		767: {
			slidesPerView: 6,
			spaceBetween: 30,
		},
		575: {
			slidesPerView: 5,
			spaceBetween: 30,
		},
		320: {
			slidesPerView: 3,
			spaceBetween: 30,
		},
	},
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
//       const videoNumber = iframe.getAttribute('data-video')
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

// function findVideos() {
//   let videos = document.querySelectorAll('.video');

//   for (let i = 0; i < videos.length; i++) {
//       setupVideo(videos[i]);
//   }
// }

// function setupVideo(video) {
//   let link = video.querySelector('.video__link');
//   let media = video.querySelector('.video__media');
//   let button = video.querySelector('.video__button');
//   let id = parseMediaURL(media);

//   video.addEventListener('click', () => {
//       let iframe = createIframe(id);

//       link.remove();
//       button.remove();
//       video.appendChild(iframe);
//   });

//   link.removeAttribute('href');
//   video.classList.add('video--enabled');
// }

// function parseMediaURL(media) {
//   let regexp = /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/maxresdefault\.jpg/i;
//   let url = media.src;
//   let match = url.match(regexp);

//   return match[1];
// }

// function createIframe(id) {
//   let iframe = document.createElement('iframe');

//   iframe.setAttribute('allowfullscreen', '');
//   iframe.setAttribute('allow', 'autoplay');
//   iframe.setAttribute('src', generateURL(id));
//   iframe.classList.add('video__media');

//   return iframe;
// }

// function generateURL(id) {
//   let query = '?rel=0&showinfo=0&autoplay=1';

//   return 'https://www.youtube.com/embed/' + id + query;
// }

// findVideos();

var elem = document.querySelector(".gallery__row");
var msnry = new Masonry(elem, {
	// options
	itemSelector: ".gallery__col",
	columnWidth: 200,
	columnWidth: ".gallery__col",
	// gutter: 26,
});

// element argument can be a selector string
//   for an individual element
// var msnry = new Masonry( '.grid', {
//   // options
// });
