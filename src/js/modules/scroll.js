const sections = [...document.getElementsByTagName('section')];
let currentSection = 0;
let main = document.querySelector('main');
var touchPos;

window.addEventListener('wheel', function(e) {
  e.stopPropagation;
  (e.deltaY < 0) ? --currentSection: ++currentSection;
  translatePage(currentSection);
});

document.onkeydown = checkKey;

function checkKey(e) {
  e = e || window.event;
  if (e.keyCode == '38') {
    --currentSection
  }
  else if (e.keyCode == '40') {
    ++currentSection
  }
  translatePage(currentSection);
}

main.ontouchstart = function(e){
  touchPos = e.changedTouches[0].clientY;
}

main.ontouchmove = function(e){
  
  let newTouchPos = e.changedTouches[0].clientY;
  if(newTouchPos > touchPos) {
    ++currentSection
  }
  if(newTouchPos < touchPos) {
    --currentSection
  }
  translatePage(currentSection);
}

function translatePage(i) {
  if (i < 0) i = 0;
  else if (i > (sections.length - 1)) i = (sections.length - 1);
  let translateY = - main.scrollHeight/3 * i;
  main.style.transform = 'translate3d(0px, ' + translateY + 'px, 0px)';
}


