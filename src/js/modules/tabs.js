function toggleTabs() {
  let tabs = document.querySelector('.tabs');
  let links = document.querySelectorAll('.tabs-links__item');
  let content = document.querySelectorAll('.tabs-content__item');
  
  tabs.addEventListener('click', function(e) {
    let target = e.target;
    if(target.classList.contains('tabs-links__item')) {
      e.preventDefault();
      links.forEach((item) => item.classList.remove('active'));
      target.classList.add('active');
      let id = target.getAttribute('href').substring(1);
      content.forEach((item) => item.classList.remove('show'));
      document.querySelector('.tabs-content__item[id="'+id+'"]').classList.add('show');
      
    }
    


  });
}
toggleTabs()