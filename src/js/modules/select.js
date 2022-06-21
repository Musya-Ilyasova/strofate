function select(slider1, slider2) {
  let select = document.querySelectorAll('.select');
  select.forEach((item) => {
    let wrapper = document.createElement('div')
    wrapper.classList.add('select__wrapper');
    item.appendChild(wrapper);
    item.addEventListener('click', function(e) {
      let choose = item.querySelector('.select__choose'),
      chooseIcon = choose.querySelector('.icon'),
      list = item.querySelector('.select-list');
      let target  = e.target;
      if(target.classList.value == 'select__choose') {
        choose.classList.add('open');
        list.classList.add('show');
        wrapper.style.display = 'block';
      } else if(target.classList.value == 'select__choose open' || target.classList.value == 'select__wrapper') {
        choose.classList.remove('open');
        list.classList.remove('show');
        wrapper.style.display = '';
      };
      if(target.classList.value == 'select-list-item') {
        choose.classList.remove('open');
        list.classList.remove('show');
        let icon = target.querySelector('.icon');
        let use = icon.querySelector('use').getAttribute('xlink:href');
        let data = target.dataset.select;
        changeValueSelect(icon, use, chooseIcon, choose, data);
        wrapper.style.display = '';
        if(item.getAttribute('id') == 'firstSlider') {
          slider1.slideTo(document.querySelector('[data-slider="'+item.getAttribute('id')+'"] [data-zodiac="'+ target.dataset.select +'"]').getAttribute('data-swiper-slide-index'));
        } else {
          slider2.slideTo(document.querySelector('[data-slider="'+item.getAttribute('id')+'"] [data-zodiac="'+ target.dataset.select +'"]').getAttribute('data-swiper-slide-index'));
        }
      }
    })
  })
};

function changeValueSelect(icon, use, chooseIcon, choose, data) {
  chooseIcon.classList = icon.classList;
  chooseIcon.querySelector('use').setAttribute('xlink:href', use);
  choose.querySelector('span').textContent = data;
  choose.dataset.select = data;
}