if(document.querySelector('body').classList.contains('compatibility')) {
  document.querySelectorAll('.compatibility-slider').forEach((s) => {
    let dataSlider = s.dataset.slider;
    let select = document.querySelector('[id="'+ dataSlider+'"]');
    let title = s.querySelector('.compatibility-slider__title');
    let slider = new Swiper (s.querySelector('.swiper'), {
      loop: true,
      slidesPerView: 2.7,
      centeredSlides: true,
      spaceBetween: 30,
      on: {
        slideChange: function() {
          let index = this.activeIndex;
          let slide = this.slides[index];
          // let slide = s.querySelector('.swiper-slide-active');
          // console.log(slide)
          title.textContent = slide.dataset.zodiac;
          changeSelect(select, slide);
        }
      },
      breakpoints: {
        '768': {
          slidesPerView: 1
        }
      }
    });
    selectItem(slider, select, title);
  });
}


function changeSelect(select, slide) {
  let icon = slide.querySelector('.compatibility-slider-item-img .icon');
  let data = slide.dataset.zodiac;
  let use = icon.querySelector('use').getAttribute('xlink:href');
  let chooseIcon = select.querySelector('.select__choose .icon');
  let choose = select.querySelector('.select__choose');
  changeValueSelect(icon, use, chooseIcon, choose, data, select);
}

