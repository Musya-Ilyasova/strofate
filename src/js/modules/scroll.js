// let count = 0;
// let section = document.querySelectorAll('section');
// function scroll() {
//   window.addEventListener('scroll', sectionWheel)
// }
function sectionWheel(e) {
  console.log('kk')

  // if(e.deltaY>0) {
  //   section[count].classList.remove('active');
  //   count++
  //   console.log(count++)
  //   console.log(section.length)
  //   console.log(e.deltaY)
  //   if(count > section.length-1) {
  //     count = section.length-1
  //   };
  //   section[count].classList.add('active');
  // } else {
  //   section[count].classList.remove('active');
  //   count--
  //   if(count <= 0) {
  //     count = 0;
  //   };
  //   section[count].classList.add('active');
  //   // console.log(count);
  // }
}
// scroll();


const sections = [...document.getElementsByTagName('section')];
let currentSection = 0;

window.addEventListener('wheel', function(e) {
  e.preventDefault();

  (e.deltaY < 0) ? --currentSection: ++currentSection;

  if (currentSection < 0) currentSection = 0;
  else if (currentSection > (sections.length - 1)) currentSection = (sections.length - 1);

  scrollToSection(currentSection);
});

function scrollToSection(i) {
  document.getElementById(sections[i].id).scrollIntoView({
    behavior: 'smooth'
  });
}
