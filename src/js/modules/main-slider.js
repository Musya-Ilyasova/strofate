const swiper = new Swiper('.page-slider', {
  loop: false,
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    768: {
      slidesPerView: 1,
      direction: 'vertical',
      mousewheel: {
        invert: false,
        releaseOnEdges: true,
      },
      eventsTarget: 'section',
      forceToAxis: true,
    }
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },

});