//
$(document).ready(function () {
  $("select").niceSelect();
});

//
let navMenu = document.querySelector(".nav-menu");
let faBars = document.querySelector("#fa-bars");
faBars.addEventListener("click", () => {
  faBars.classList.toggle("fa-times");
  navMenu.classList.toggle("active");
});

// ========================= Swiper js  -================================
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
// =============================== Top Hiring Companies Logo Slider =========================
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
