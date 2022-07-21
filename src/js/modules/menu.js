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
  let links = document.querySelectorAll('.header-profil-menu-item__link');
  links.forEach((link) => {
    link.classList.remove('active');
    let href = links.href;
    let local = document.location.pathname.substring(1, document.location.pathname.length-5);
    console.log(local);
    if(local.indexOf(href)) {
      link.classList.add('active');
    };
  })

}

menuLocation();


if(document.querySelector('header').classList.contains('header-profil')) {
  burgerToggle();
}
