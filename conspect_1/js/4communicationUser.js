// 4. Простое общение с пользователем

"use strict";

// alert - выводит сообщение (модальное окно) в баннере в верху браузера
// alert('Hello');


// confirm - почти то же самое, что alert, но с вариантами ответа. В зависимости от ответа получаем bool (булиновое) значение
// const result = confirm("Are you here?");
// console.log(result);

// prompt - модальное окно с возможностью ввода ответа; ("вопрос", "дефолтный ответ (чаще всего нужно оставить пустым)")
// const answer = prompt("Вам есть 18?", "18");

// typeof - выводит тип данных; string - строковое значение
// console.log(typeof(answer)); 

// Вся информация, приходящая от пользователя будет всегда в виде строк, вне зависимости от способа получения.

// const a = 10; 
// const b = "10";
// console.log(typeof(a)); // number
// console.log(typeof(b)); // string

// Если стоит + (унарный плюс) перед чем-то, то он преобюразует данные в число
// const answer1 = +prompt("Вам есть 18?", "18");
// console.log(answer1 + 5);

const answers = [];

answers[0] = prompt('Как ваше имя?', '');
answers[1] = prompt('Как ваша фамилия?', '');
answers[2] = +prompt('Сколько вам лет', '');

console.log(answers); // получаем массив с введёнными данными ['Ksenya', 'Seryakova', 22]
console.log(typeof(answers)); // получаем тип данных: объект 
console.log(typeof(null)); // получаем тип данных: объект (признанная ошибка в js)
