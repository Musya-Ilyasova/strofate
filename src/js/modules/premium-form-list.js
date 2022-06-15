function premiumListToggle() {
  let premiumList = document.querySelector('.premium-list');
  let premiumListItems = premiumList.querySelectorAll('.premium-list-item');
  
  premiumList.addEventListener('click', function(e){
    let target = e.target;
    if(target.classList.value == 'premium-list-item__header') {
      premiumListItems.forEach(item => item.classList.remove('active'));
      target.parentNode.classList.add('active')
    } else if(target.parentNode.classList.value == 'premium-list-item__header') {
      premiumListItems.forEach(item => item.classList.remove('active'));
      target.parentNode.parentNode.classList.add('active');
    }
  })
}

if(document.body.classList.contains('premium')) {
  premiumListToggle();
}