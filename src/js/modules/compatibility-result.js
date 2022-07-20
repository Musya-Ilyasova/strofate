function compatibilityResultLoad() {
  let xhr = new XMLHttpRequest();
  const resultsUrl = '/js/compatibility-result.json';
  xhr.open('GET', resultsUrl, false);
  xhr.send();
  if (xhr.status != 200) {
    // обработать ошибку
    alert( xhr.status + ': ' + xhr.statusText );
  } else {
    // вывести результат
    let results = JSON.parse(xhr.responseText);
    zodiacItemAdd(results);
    resultsListAdd(results);
  }
}

function zodiacItemAdd(results) {
  let zodiacItem = document.querySelectorAll('.results-zodiac-item');
  let i = 0;
  zodiacItem.forEach((item) => {
    let zodiacs = results[0]['zodiacs'][0];
    let itemIcon = item.querySelector('svg');
    itemIcon.classList = ('icon icon-'+ Object.keys(zodiacs)[i]);
    let itemIconUse= item.querySelector('use');
    itemIconUse.setAttribute('xlink:href', 'img/sprite/sprite.svg#'+ Object.keys(zodiacs)[i]);
    let itemTitle = document.createElement('span');
    itemTitle.classList.add('results-zodiac-item__title');
    itemTitle.textContent = Object.keys(zodiacs)[i];
    let itemSubtitle = document.createElement('span');
    itemSubtitle.classList.add('results-zodiac-item__subtitle');
    itemSubtitle.textContent = zodiacs[Object.keys(zodiacs)[i]];
    item.append(itemTitle);
    item.append(itemSubtitle);
    i++;
  });
};

function resultsListAdd(results) {
  let resultsList = results[0]['percentage-list'];
  let list = document.querySelector('.results-list');
  for(let i=0; i<=resultsList.length-1; i++) {

  }
}

compatibilityResultLoad();
