// 2. Переменные и строгий режим.

"use strict"; // работа в обновленном режиме, где не работают некоторые старые стандарты js; совет - использовать всегда; прописывать строго в начале документа

a = 15; // если не напишем "use strict", то получим нормальный результат, но не должны получить
console.log(a);

let number = 5;
const leftBorderWidth = 1;

number = 10;
console.log(number);

const obj = {
    a: 50
}

obj.a = 10;

console.log(obj);

// прямых констант в js не бывает

console.log(name); // переменная существует только после того, как она была объявлена
var name = 'Ivan'; // устаревший вариант, не использовать; не будет получен конечный результат, будет undefined

{
    let result = 50;
}



///////////////////////////////////////////////////////////////
// 2.1. Правила и типы названия переменных.

const vehicleBodyWidth = 5000,
      vehicleBodyLength = 4000;

////

console.log("Ширина кузова втомобиля: " + vehicleBodyWidth + ', длина: ' + vehicleBodyLength);

// ['vruru', 'ecrvrev', 'vvuquegv'].map(a => )

// Request
// data
// response

// snake_case
// UPPER_SNAKE_CASE - капсом обозначаются константы
// Lebab-case
// PascalCase - используется для названия классов в JS

const COLOR_RED = '#F00'; // капсом обозначают константы



///////////////////////////////////////////////////////////////
// Практическое задание
// Создайте переменную, которая будет отображать имя пользователя. (Пользователь - user, имя - name). В неё поместите значение "John"
// На следующей строке создайте переменную, отображающую номер пользователя (номер - number). В неё поместите значение 25.
// Измените значение второй переменной с 25 на 24 на следующей строке.

// Ответ:
const userName = "John";
let userNumber = 25;
userNumber = 24;