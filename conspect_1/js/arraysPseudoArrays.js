"use strict";

const arr = [2, 13, 26, 8, 10];
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
    return a - b;
}

// arr[99] = 0; // покажет 100 элементов в массиве через length, хотя на деле это не так
// console.log(arr.length); // свойство состоит из последнего индекса массива + 1
// console.log(arr);

// arr.forEach(function(item, i, arr) { // перебор массива (3 способ). первый аргумент - перебираемый элемент, второй - номер по порядку, третий - ссылка на перебираемый массив. нельзя использовать break и continue
//     console.log(`${i}: ${item} внутри массива ${arr}`) // 0: 2 внутри массива 2,3,6,8,10 и т.д.
// });


// arr.pop(); // убирает элемент из конца массива
// arr.push(11); // добавляет элемент в конец массива

// console.log(arr);

// for (let i = 0; i < arr.length; i++) { // перебор массива (1 способ). цикл будет работать до тех пор, пока не закончатся элементы внутри массива
//     console.log(arr[i]);
// }

// for (let value of arr) { // перебор массива (2 способ). можно использовать break и continue
//     console.log(value);
// }


const str = prompt("", "");
const products = str.split(", ");
products.sort(); // метод сортировки
console.log(products.join('; '));