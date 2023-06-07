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

const addInnerPageClass = () => {
	const innerClass = document.querySelector(".js-innerPage");
	const wrapper = document.querySelector(".wrapper");

	if (innerClass) {
		wrapper.classList.add("inner-page");
	}
};

addInnerPageClass();

const partnersSlider = document.querySelector(".partners-slider");
if (partnersSlider) {
	const slider = new Swiper(partnersSlider, {
		grabCursor: false,
		loop: true,
		speed: 1000,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
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
}

// if (document.querySelector(".videos")) {
// 	// fsLightboxInstances["first-lightbox"].props.onOpen = function () {
// 	// 	// console.log("The first lightbox has opened.");
// 	// };
// 	// fsLightboxInstances["second-lightbox"].props.onOpen = function () {
// 	// 	// console.log("The second lightbox has opened.");
// 	// };
// }
// lightbox.option({
// 	resizeDuration: 200,
// 	wrapAround: true,
// 	maxWidth: 1200,
// 	positionFromTop: 100,
// });
const menuLinks = document.querySelectorAll(".nav-list__link");

menuLinks.forEach(menuLink => {
	menuLink.addEventListener("click", function (e) {
		if (e.target.href.indexOf("/instructor") != -1) {
			e.preventDefault();
			window.open("/julius#instructorSection", "_self");
		}
	});
});

const galleryLinks = document.querySelectorAll(".gallery__item");

const checkSrc = () => {
	galleryLinks.forEach(link => {
		const src = link.getAttribute("href");
		link.getAttribute("src");
		if (!src) {
			// console.log('img src is empty');
			link.style.display = "none";
		} else {
			link.style.display = "block";
		}
	});
};

// init Masonry
var grid = document.querySelector(".gallery__row");
if (grid) {
	var msnry = new Masonry(grid, {
		itemSelector: ".gallery__col",
		columnWidth: ".gallery__col",
		percentPosition: true,
	});

	imagesLoaded(grid).on("progress", function () {
		msnry.layout();
		const videos = document.querySelectorAll("video");
		videos.forEach(video => {
			video.removeAttribute("controls");
		});
		checkSrc();
	});
}

var gridHome = document.querySelector(".media__row");
if (gridHome) {
	var msnryHome = new Masonry(gridHome, {
		itemSelector: ".media__col",
		columnWidth: ".media__col",
		percentPosition: true,
	});

	imagesLoaded(gridHome).on("progress", function () {
		msnryHome.layout();
		const videos = document.querySelectorAll("video");
		if (videos) {
			videos.forEach(video => {
				video.removeAttribute("controls");
			});
		}

		checkSrc();
	});
}

// $(document).ready(function () {
// 	// $(".image-link").magnificPopup({type: "image"});
// 	$(".gallery__row").magnificPopup({
// 		delegate: "a",
// 		type: "image",
// 		tLoading: "Loading image #%curr%...",
// 		mainClass: "mfp-img-mobile",
// 		gallery: {
// 			enabled: true,
// 			navigateByImgClick: true,
// 			preload: [0, 1], // Will preload 0 - before current, and 1 after the current image
// 		},
// 		// image: {
// 		// 	tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
// 		// },
// 		callbacks: {
// 			elementParse: function (item) {
// 				// the class name
// 				if (item.el.context.className == "video-link") {
// 					item.type = "iframe";
// 				} else {
// 					item.type = "image";
// 				}
// 			},
// 		},
// 	});

// 	$(".media__row").magnificPopup({
// 		delegate: "a", // child items selector, by clicking on it popup will open
// 		type: "image",
// 		// other options
// 		gallery: {
// 			enabled: true,
// 			navigateByImgClick: true,
// 		},
// 		callbacks: {
// 			lazyLoad: function (item) {
// 				console.log(item); // Magnific Popup data object that should be loaded
// 			},
// 		},
// 		zoom: {
// 			enabled: true, // By default it's false, so don't forget to enable it

// 			duration: 300, // duration of the effect, in milliseconds
// 			easing: "ease-in-out", // CSS transition easing function

// 			// The "opener" function should return the element from which popup will be zoomed in
// 			// and to which popup will be scaled down
// 			// By defailt it looks for an image tag:
// 			opener: function (openerElement) {
// 				// openerElement is the element on which popup was initialized, in this case its <a> tag
// 				// you don't need to add "opener" option if this code matches your needs, it's defailt one.
// 				return openerElement.is("img")
// 					? openerElement
// 					: openerElement.find("img");
// 			},
// 		},
// 	});

// 	$(".videos").magnificPopup({
// 		delegate: "a", // child items selector, by clicking on it popup will open
// 		type: "iframe",
// 		// other options
// 		gallery: {
// 			enabled: true,
// 		},
// 		zoom: {
// 			enabled: true, // By default it's false, so don't forget to enable it

// 			duration: 300, // duration of the effect, in milliseconds
// 			easing: "ease-in-out", // CSS transition easing function

// 			// The "opener" function should return the element from which popup will be zoomed in
// 			// and to which popup will be scaled down
// 			// By defailt it looks for an image tag:
// 			opener: function (openerElement) {
// 				// openerElement is the element on which popup was initialized, in this case its <a> tag
// 				// you don't need to add "opener" option if this code matches your needs, it's defailt one.
// 				return openerElement.is("img")
// 					? openerElement
// 					: openerElement.find("img");
// 			},
// 		},
// 	});
// });
