if(document.querySelector('body').classList.contains('compatibility')) {
  var slider1 = new Swiper ('.first-slider', {
    loop: true,
    slidesPerView: 2.7,
    centeredSlides: true,
    spaceBetween: 30,
    on: {
      realIndexChange: function() {
        let index = this.realIndex; 
        let data = this.slides[index].dataset.zodiac;
        let slide = this.slides[index];
        let select = document.querySelector('#firstSlider');
        chengeSelect(select, data, slide, index);
      }
    }
  }); 
  var slider2 = new Swiper ('.second-slider', {
    loop: true,
    slidesPerView: 2.7,
    centeredSlides: true,
    spaceBetween: 30,
    on: {
      realIndexChange: function() {
        let index = this.realIndex;
        let data = this.slides[index].dataset.zodiac;
        let slide = this.slides[index];
        let select = document.querySelector('#secondSlider');
        chengeSelect(select, data, slide, index);
      }
    }
  });

  function chengeSelect(select, data, slide, index) {
    let icon = slide.querySelector('.compatibility-slider-item-img .icon');
    let use = icon.querySelector('use').getAttribute('xlink:href');
    let chooseIcon = select.querySelector('.select__choose .icon');
    let choose = select.querySelector('.select__choose');
    changeValueSelect(icon, use, chooseIcon, choose, data)
  }
  select(slider1, slider2);
}