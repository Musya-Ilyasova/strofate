function selectItem(select) {
  let wrapper = document.createElement('div')
  wrapper.classList.add('select__wrapper');
  select.appendChild(wrapper);
  select.addEventListener('click', function(e) {
    let choose = select.querySelector('.select__choose'),
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
    if(target.classList.contains('select-list-item')) {
      list.classList.remove('show');
      choose.classList.remove('open');
      wrapper.style.display = '';
    }
  }, true)
}
