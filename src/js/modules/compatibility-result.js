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
    compatibilityResultListAdd(results);
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
    let li = document.createElement('li');
    li.classList.add('results-list-item');
    let title = document.createElement('span');
    title.classList.add('results-list-item__title');
    title.textContent = resultsList[i]['name'];
    li.innerHTML = '<svg class="icon icon-'+resultsList[i]["icon"]+'"><use xlink:href="img/sprite/sprite.svg#'+ resultsList[i]["icon"]+ '"></use></svg>'
    li.appendChild(title);
    let value = document.createElement('span');
    value.classList.add('results-list-item__value');
    value.textContent = resultsList[i]['percent'] + '%';
    li.appendChild(value);
    let bar = document.createElement('div');
    bar.classList.add('results-list-item__bar');
    let barI = document.createElement('i');
    bar.appendChild(barI);
    barI.style.width = resultsList[i]['percent'] + '%';
    li.appendChild(bar);
    list.appendChild(li);
  }
}

function compatibilityResultListAdd(results) {
  let container = document.querySelector('.c-result .container');
  let resultsList = results[0]['compatibility-results'];
  for(let i = 0; i<=resultsList.length-1; i++) {
    let item = document.createElement('div');
    item.classList.add('c-result-item');
    let title = document.createElement('h2');
    title.classList.add('c-result-item__title');
    title.textContent = resultsList[i].title;
    let text = document.createElement('p');
    text.classList.add('c-result-item__text');
    text.textContent = resultsList[i].text;
    item.appendChild(title);
    item.appendChild(text);
    let hr = document.createElement('hr');
    container.appendChild(item);
    if(i !=resultsList.length-1) {
      hr.classList = "hr hr-sun";
      container.appendChild(hr);
    }
  }
}

if(body.classList.contains('compatibility-result')) {
  compatibilityResultLoad();
}

