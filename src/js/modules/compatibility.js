
if(body.classList.contains('compatibility')) {
  document.querySelectorAll('.compatibility-slider').forEach((s) => {
    let dataSlider = s.dataset.slider;
    let select = document.querySelector('[id="'+ dataSlider+'"]');
    let title = s.querySelector('.compatibility-slider__title');
    let el = select.querySelector('.select-list');
    let list = [];
    let items = s.querySelectorAll('.compatibility-slider-item');
    let realSelect = document.createElement('select');
    let nextArrow = s.querySelector('.compatibility-nav-next');
    let prevArrow = s.querySelector('.compatibility-nav-prev');
    realSelect.setAttribute('name', 'compatibility-zodiac-' + s.dataset.slider);
    for(let i=0; i<=items.length-1; i++) {
      let option = document.createElement('option');
      option.setAttribute('value', items[i].dataset.zodiac);
      option.textContent = items[i].dataset.zodiac;
      if(i==0) {
        option.setAttribute('selected', 'selected');
      };
      list.push(items[i].dataset.zodiac);
      realSelect.appendChild(option);
    }
    select.appendChild(realSelect);
    let slider = new Swiper (s.querySelector('.swiper'), {
      slidesPerView: 2.7,
      centeredSlides: true,
      spaceBetween: 30,
      normalizeSlideIndex: true,
      pagination: {
        el: el,
        clickable: true,
          renderBullet: function (index, className) {
            return '<li class="' + className + ' select-list-item"><svg class="icon icon-'+ (list[index]) +'"><use xlink:href="img/sprite/sprite.svg#'+ (list[index]) +'"></use></svg>' + (list[index]) + '</li>';
          },
      },
      navigation: {
        nextEl: nextArrow,
        prevEl: prevArrow,
      },
      on: {
        init: function () {
        },
        slideChange: function() {
          let index = this.realIndex;
          let slide = this.slides[index];
          title.textContent = slide.dataset.zodiac;
          changeSelect(select, slide, realSelect);
        }
      },
      breakpoints: {
        '768': {
          slidesPerView: 1
        }
      }
    });
    selectItem(select);
  });
}

function changeSelect(select, slide, realSelect) {
  let icon = slide.querySelector('.compatibility-slider-item-img .icon');
  let data = slide.dataset.zodiac;
  let use = icon.querySelector('use').getAttribute('xlink:href');
  let chooseIcon = select.querySelector('.select__choose .icon');
  let choose = select.querySelector('.select__choose');
  chooseIcon.classList = icon.classList;
  chooseIcon.querySelector('use').setAttribute('xlink:href', use);
  choose.querySelector('span').textContent = data;
  choose.dataset.select = data;
  changeValueRealSelect(data, realSelect);
}

function changeValueRealSelect(data, realSelect) {
  realSelect.querySelector('[selected]').removeAttribute("selected");
  realSelect.querySelector('[value="'+data+'"]').setAttribute('selected', 'selected');
}
