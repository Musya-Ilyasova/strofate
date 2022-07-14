function burgerToggle() {
  let burger = document.querySelector('.header-profil__burger');
  let menu = document.querySelector('.header-profil__nav')
  burger.addEventListener('click', function(e) {
    e.preventDefault();
    if(burger.classList.contains('close')) {
      burger.classList.remove('close');
      menu.classList.remove('show')
      body.style.overflow="";
    } else {
      menu.classList.add('show')
      burger.classList.add('close');
      body.style.overflow="hidden";
    }
  })
  
}

if(document.querySelector('header').classList.contains('header-profil')) {
  burgerToggle();
}