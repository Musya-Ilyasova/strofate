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
};

function menuLocation() {
  let local = document.location.pathname.substring(1, document.location.pathname.length-5);
  let links = document.querySelectorAll('.header-profil-menu-item__link');
  if(document.querySelector(`.header-profil-menu-item__link[href*=${local}]`) != null) {
    document.querySelector(`.header-profil-menu-item__link[href*=${local}]`).classList.add('active')
  } else {
    document.querySelector('.header-profil-menu-item__link[href*=profil]').classList.add('active');
  }
}



if(document.querySelector('header').classList.contains('header-profil')) {
  burgerToggle();
  menuLocation();
}
