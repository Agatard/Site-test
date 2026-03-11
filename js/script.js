
/*Fonction swiper images */
document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".wrapper", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});