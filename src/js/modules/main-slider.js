if(body.classList.contains('index')) {
  const swiper = new Swiper('.page-slider', {
    loop: false,
    slidesPerView: 1,
    spaceBetween: 10,
    mousewheel: {
      invert: false,
      releaseOnEdges: true,
    },
    forceToAxis: true,
    eventsTarget: 'section',
    breakpoints: {
      768: {
        slidesPerView: 1,
        direction: 'vertical',
      }
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
  });
}