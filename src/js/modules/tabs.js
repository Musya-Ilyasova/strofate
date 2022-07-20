function toggleTabs() {
  let tabs = document.querySelector('.tabs');
  let links = document.querySelectorAll('.tabs-links__item');
  let content = document.querySelectorAll('.tabs-content__item');
  
  let contentH =[]
  for(let i=0; i<=content.length-1; i++) {
    contentH.push(content[i].scrollHeight);
  }
  let max = Math.max.apply(null, contentH);
  if(window.innerWidth>=768) {
    document.querySelector('.tabs-content').style.minHeight = max + 'px';
  }



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
if(body.classList.contains('horoscopes')) {
  toggleTabs();
}