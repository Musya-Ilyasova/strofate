function compatibilityResultLoad() {
  var xhr = new XMLHttpRequest();
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
  }
}

function zodiacItemAdd(results) {
  let zodiacItem = document.querySelectorAll('.results-zodiac-item');
  zodiacItem.forEach((item) => {
    let itemIcon = document.createElement('svg');
    itemIcon.classList.add('icon icon-gemini');
    let itemIconUse= document.createElement('use');
  })

} 

compatibilityResultLoad();