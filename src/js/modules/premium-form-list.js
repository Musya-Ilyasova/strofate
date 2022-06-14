function premiumListToggle() {
  let premiumList = document.querySelector('.premium-list');
  let premiumListItems = premiumList.querySelectorAll('.premium-list-item');
  
  premiumListHeight(premiumList, premiumListItems);
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

function premiumListHeight(premiumList, premiumListItems) {
  let sum;
  premiumListItems.forEach((item) => {
    let itemMargin =  Number(window.getComputedStyle(item, null).getPropertyValue("margin-bottom").replace("px",""));
    let heightText =  Number(item.querySelector('p').scrollHeight); 
    let heightHeader =   Number(item.querySelector('.premium-list-item__header').scrollHeight);

    sum += heightHeader + heightText + (premiumListItems.length - 1) * 40 + itemMargin;
    console.log(heightHeader + heightText + (premiumListItems.length - 1) * 40 + itemMargin);
  })
  // console.log(sum);
}

if(document.body.classList.contains('premium')) {
  premiumListToggle();
}