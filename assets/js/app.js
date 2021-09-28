//
let overlay = document.querySelector(".header-overlay");
let navMenu = document.querySelector(".nav-menu");
let faBars = document.querySelector("#fa-bars");
faBars.addEventListener("click", () => {
  overlay.classList.toggle("active");
  faBars.classList.toggle("fa-times");
  navMenu.classList.toggle("active");
  document.body.classList.toggle("hidden");
});

//? fixed body onscroll
let headerTop = document.querySelector(".nav-main")
onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    headerTop.classList.add('fixed');
  } else {
    headerTop.classList.remove('fixed');
  }
}
//? Nice Select
$(document).ready(function () {
  $("select").niceSelect();
});

//? Swiper js 
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
//? Top Hiring Companies Logo Slider 
var swiper = new Swiper(".hiringCompaniesSwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    140: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    440: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
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
});
