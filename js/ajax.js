// $().load(
// URL - путь к серверу
// params - параметры для запроса
// callback)


//////// $.ajax( // - 1й способ вызова
// URL  - путь к серверу
// setting - настрокйи запроса)

// $.ajax(objecSettings) - 2й способ вызова
// $.get()
// $.post()

const jqFetch = $.ajax({
  url: `https://api.tvmaze.com/search/shows?q=${ text }`,
  // async - true/false - по умолчанию тру, если вам нужна синхронность тогда надо явно указать фолз
  // beforeSend - можно сделать префлайт запрос
  // complete - callback, который вызывается когда будет завершен запрос
  // contents - это объект JS, который говорит jQuery как обрабатывать данные с бэка
  // contentType - тип данных, которые отправляются на сервер, по умолчанию text/plain
  // context - контекст исполнения, - это то чему будет равен THIS внутри колбэков, которые передаются
  // data - данные в виде JS объекта, которые вы хотите отправить на бэк
  // dataType - тип данных, которые вы ожидаете от бэка (json, xml, script, text)
  // success - callback, который будет вызван в результате успешного ответа
  // error - callback, который будет вызван в результате ошибки запроса
  // headers - объект заголовков
  // method - GET/POST/DELETE/UPDATE/PUT...
  // statusCode - объект JS, который определяет колбэки, которые нужно запустить на определенный статус ответа
  // timeout - время, в млсек, в течение которого нужно ожидать ответ от бэка
  // url - URL - домен и путь к серверу (скрипту на сервере)
  // login - логин
  // password - пароль - для авторизованных запросов

})


//// GET запрос через ajax

$.ajax({
  url: `https://api.tvmaze.com/search/shows?q=batman`, // урл запроса (путь до скрипта на сервере)
  method: 'get', // метод запроса GET/POST/DELETE/UPDATE/PUT
  dataType: 'html', // Тип данных в ответе: xml, json, script, html
  // data: {q: 'batman'}, - это для GET необязательный параметр, если вы указываете параметры запроса непосредственно в URL
  success: (response) => {
    console.log('Response from server: ', response)
  },
  error: (jqErr, exception) => {
    console.log('Error: ', jqErr.status, jqErr.responseText, exception)
  }

})

// GET укороченная версия
$.get(`https://api.tvmaze.com/search/shows?q=batman`, {q: 'batman'}, function (response) { // второй параметр необязательный, если все передаем через УРЛ
  console.log('Response from server: ', response);
})


//// POST запрос через ajax

$.ajax({
  url: `https://api.tvmaze.com/search/shows`, // урл запроса (путь до скрипта на сервере)
  method: 'post', // метод запроса GET/POST/DELETE/UPDATE/PUT
  dataType: 'html', // Тип данных в ответе: xml, json, script, html
  data: {q: 'batman'}, // объект с параметрами запроса, т.е. данные которые уйдут на сервер
  success: (response) => {
    console.log('Response from server: ', response)
  },
  error: (jqErr, exception) => {
    console.log('Error: ', jqErr.status, jqErr.responseText, exception)
  }
})

// POST укороченная версия
$.post(`https://api.tvmaze.com/search/shows`, {q: 'batman'}, function (response) {
  console.log('Response from server: ', response);
})


//// $( __FORM_SELECTOR__ ).serialize() - метод, который возьмет данные из формы и создаст JS объект


////// как получить от бэка JSON

$.ajax({
  url: `https://api.tvmaze.com/search/shows`, // урл запроса (путь до скрипта на сервере)
  method: 'post', // метод запроса GET/POST/DELETE/UPDATE/PUT
  dataType: 'json', // Тип данных в ответе: xml, json, script, html
  data: {q: 'batman'}, // объект с параметрами запроса, т.е. данные которые уйдут на сервер
  success: (response) => {
    console.log('Response from server: ', response)
  },
  error: (jqErr, exception) => {
    console.log('Error: ', jqErr.status, jqErr.responseText, exception)
  }
})

/// короткая версия
$.getJSON(`https://api.tvmaze.com/search/shows`, (response) => {
  console.log('Response from server: ', response)
})


/// короткая версия для загрузки script
console.log('Начало')
$.getScript(`https://localhost:5000/js/utils.js`, (response) => { // используется для загрузки скриптов
  console.log('Середина')
  console.log('Response from server: ', response)
})

console.log('Конец')
///// результат:
// Начало
// Конец
// Середина


// КАК СДЕЛАТЬ ЗАГРУЗКУ СИНХРОННОЙ
console.log('Начало')
$.ajax({
  url: `https://api.tvmaze.com/search/shows`, // урл запроса (путь до скрипта на сервере)
  method: 'post', // метод запроса GET/POST/DELETE/UPDATE/PUT
  dataType: 'json', // Тип данных в ответе: xml, json, script, html
  async: false, // сделать запрос синхронным, т.е. процесс остановится и будет ждать результата от сервера
  data: {q: 'batman'}, // объект с параметрами запроса, т.е. данные которые уйдут на сервер
  success: (response) => {
    console.log('Середина')
    console.log('Response from server: ', response)
  },
  error: (jqErr, exception) => {
    console.log('Error: ', jqErr.status, jqErr.responseText, exception)
  }
})
console.log('Конец')

///// результат:
// Начало
// Середина
// Конец


//////////// КАК ДОБАВИТЬ ЗАГОЛОВКИ

$.ajax({
  url: `https://api.tvmaze.com/search/shows`, // урл запроса (путь до скрипта на сервере)
  method: 'post', // метод запроса GET/POST/DELETE/UPDATE/PUT
  dataType: 'json', // Тип данных в ответе: xml, json, script, html
  headers: {
    'Token': 'a7s5fa7s6d5f78a6s58d7f65as87d6',
    'accept': 'text/html',
    'sec-fetch-dest': 'document',
  },
  data: {q: 'batman'}, // объект с параметрами запроса, т.е. данные которые уйдут на сервер
  success: (response) => {
    console.log('Середина')
    console.log('Response from server: ', response)
  },
  error: (jqErr, exception) => {
    console.log('Error: ', jqErr.status, jqErr.responseText, exception)
  }
})
