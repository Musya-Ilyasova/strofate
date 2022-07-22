function addParralaxMainBackground() {
  let planet1 = document.querySelector('.planet-1'),
      planet2 = document.querySelector('.planet-2'),
      planet3 = document.querySelector('.planet-3'),
      zodiacs = document.querySelector('.zodiacs');
  let img = document.querySelector('.main-background'),
      imgX = img.offsetLeft+(img.offsetWidth/2),
      imgY = img.offsetTop+(img.offsetHeight/2);

  window.addEventListener('mousemove', function(e) {
    let x = (e.clientX - imgX) / 100;
    let y = (e.clientY - imgY) / 100;
    planet1.style.transform =  `translate3d(${x}px, ${y}px, 0)`;
    planet2.style.transform = `translate3d(${x * 2}px, ${y * 2}px, 0)`;
    planet3.style.transform = `translate3d(${x * 3}px, ${y * 3}px, 0)`;
    zodiacs.style.transform = `translate3d(${x}px, ${y}px, 0)`;
  })
};

addParralaxMainBackground(); 