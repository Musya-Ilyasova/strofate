if(body.classList.contains('about')) {
  const swiperReviews = new Swiper('.reviews', {
    loop: true,
    slidesPerView: 1,
    maxBackfaceHiddenSlides: 5,
    centeredSlides: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.reviews-nav-next',
      prevEl: '.reviews-nav-prev',
    }
  });
}