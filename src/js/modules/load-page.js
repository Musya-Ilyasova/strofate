function loadPage() {
  let header = document.querySelector('.header__container'),
      sections = document.querySelectorAll('section'),
      footer = document.querySelector('.footer'),
      main = document.querySelector('main');
  sections.forEach((item) => {
    item.style.opacity= "1";
  });
  header.style.opacity= "1";
  footer.style.opacity= "1";
  if(document.querySelector('.aside') != null) {
    document.querySelector('.aside').style.opacity="1";
    if(!body.classList.contains('compatibility') && window.innerWidth >= "768") {
      main.style.minHeight = document.querySelector('.aside__wrapper').scrollHeight + "px";
    };
  };
};

loadPage();