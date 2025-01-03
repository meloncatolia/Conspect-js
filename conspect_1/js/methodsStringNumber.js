"use strict";

const str = "TeSt";
const arr = [1, 2, 4];

console.log(str.length); // где length - свойство, показывающее длину/кол-во символов
console.log(str[2]);

console.log(str.toUpperCase()); // делает капс
console.log(str.toLowerCase()); // делает строчный регистр

console.log(str);


let fruit = "Some fruit";

console.log(fruit.indexOf("fruit"));
console.log(fruit.indexOf("q"));


const logg = "Hello world!";
 
console.log(logg.slice(6, 11));
console.log(logg.slice(-6, -1));
console.log(logg.slice(6));

console.log(logg.substring(6, 11)); // не поддерживает отрицательные значения

console.log(logg.substr(6, 5)); // вторым значением записывается сколько символов нужно вырезать


const num = 12.2;
console.log(Math.round(num)); // округляет число


const test = "12.2px";
console.log(parseInt(test)); // делает из строки число, вырезая до первого найденного числа (в этом случае вырежет именно 12)
console.log(parseFloat(test)); // выведет полное число, даже если оно дробное (в этом случае 12.2)
