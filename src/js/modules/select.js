function selectItem(slider, select, title) {
  let wrapper = document.createElement('div')
  wrapper.classList.add('select__wrapper');
  select.appendChild(wrapper);
  select.addEventListener('click', function(e) {
    let choose = select.querySelector('.select__choose'),
    chooseIcon = choose.querySelector('.icon'),
    list = select.querySelector('.select-list');
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
      wrapper.style.display = '';
      title.textContent = data;
      console.log(title.textContent)

      slider.slideTo(document.querySelector('[data-slider="'+select.getAttribute('id')+'"] [data-zodiac="'+ data +'"]').getAttribute('data-swiper-slide-index'));
      // console.log(data);
      changeValueSelect(icon, use, chooseIcon, choose, data);
      console.log(target.dataset.select)
    }
  })
}

function changeValueSelect(icon, use, chooseIcon, choose, data) {
  chooseIcon.classList = icon.classList;
  chooseIcon.querySelector('use').setAttribute('xlink:href', use);
  choose.querySelector('span').textContent = data;
  choose.dataset.select = data;
  // changeValueRealSelect(data, select);
}


// function changeValueRealSelect(data, select) {
//   let realSelect = select.parentNode.querySelector('select');
//   console.log(realSelect)

// }
