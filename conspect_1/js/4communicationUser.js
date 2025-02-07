"use strict";

// alert('Hello'); // выводит сообщеение в баннере в верху браузера

// const result = confirm("Are you here?"); // почти то же самое, что alert, но с вариантами ответа (да и нет), в зависимости от ответа получаем bool значение
// console.log(result);

// const answer = prompt("Вам есть 18?", "18"); // модальное окно с возможностью ввода ответа; ("вопрос", "дефолтный ответ")
// console.log(typeof(answer)); // typeof выводит тип данных; string, строковое значение
// // вся информация, приходящая от пользователя будет всегда в виде строк, вне зависимости от способа получения


// typeof выводит тип данных
// const a = 10; 
// const b = "10";
// console.log(typeof(a)); // number
// console.log(typeof(b)); // string

// const answer1 = +prompt("Вам есть 18?", "18"); // если стоит + (унарный плюс) перед чем-то, то он преобюразует данные в число
// console.log(answer1 + 5);

const answers = [];

answers[0] = prompt('Как ваше имя?', '');
answers[1] = prompt('Как ваша фамилия?', '');
answers[2] = +prompt('Сколько вам лет', '');

console.log(answers); // получаем массив с введёнными данными ['Ksenya', 'Seryakova', 22]
console.log(typeof(answers)); // получаем тип данных: объект 
console.log(typeof(null)); // получаем тип данных: объект (признанная ошибка в js)
