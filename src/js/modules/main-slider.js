const swiper = new Swiper('.page-slider', {
  loop: false,
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    640: {
      slidesPerView: 1,
      direction: 'vertical',
    }
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },

});