"use strict";

let num = 50;

// while (num <= 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// }
// while (num < 55);

// должно состоять из трёх аргументов, но это не обязательно: dor (то, что будет в начале цикла; условие, при котором цикл остановит работу; шаг цикла (часто используется конструкция с инкриментом))
for (let i = 1; i < 10; i++) {
    if (i % 2 == 0) {
        // break; // прерывание цикла
        continue; // не прерывает цикл полностью, пропуская одну ненужную операцию
    }

    console.log(i);
}


// цикл в цикле и метки

for (let i = 0; i < 3; i++) {
    console.log(i);
    for (let j = 0; j < 3; j++) {
        console.log(j);
    }
}


// *
// **
// ***
// ****
// *****
// ******

let result = '';
const lenght = 7;

for (let i = 1; i < lenght; i++) {

    for (let j = 0; j < i; j++) {
        result += "*";
    }

    result += '\n';
}

console.log(result);


first: for (let i = 0; i < 3; i++) {
    console.log(`First level: ${i}`);
    for (let j = 0; j < 3; j++) {
        console.log(`Second level: ${j}`);
        for (let k = 0; k < 3; k++) {
            if (k === 2) continue first;
            console.log(`Third level: ${k}`);
        }
    }
}


// Задачи для практики.

// 1) При помощи цикла выведите числа от 5 до 10 в консоль. 5 и 10 включительно. Цикл можно использовать любой

let num1 = 5;
while (num1 <= 10) {
  console.log(num1);
  num1++;
}

// 2) При помощи цикла for вывести числа от 20 до 10 в консоль. В обратном порядке (20, 19, 18...). Когда цикл дойдет до числа 13 - остановить весь цикл

for (let i = 20; i >= 10; i--) {
    if (i == 13) {
        break;
    }
    console.log(i);
}

// 3) При помощи цикла for выведите чётные числа от 2 до 10 включительно
for (let i = 2; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

// 4) Перепишите цикл  for на вариант с while. Результат должен остаться точно таким же. Не создайте бесконечный цикл! Иначе браузер может зависнуть.

// Цикл, который нужно переписать:

//  for (let i = 2; i <= 16; i++) {
//      if (i % 2 === 0) {
//          continue;
//      } else {
//          console.log(i);
//      }
//  }

let i = 2;

while (i <= 16) {
    if (i % 2 == 0) {
        i++;
        continue;
    } else {
        console.log(i);
        i++;
    }
}

// 5) Заполните массив цифрами от 5 до 10 включительно. Помните, что элементы массива можно сформировать так же, как и обращаться к ним: arr[0]

const arrayOfNumbers = [];
let a = 0;
for (let i = 5; i <= 10; i++) {

    arrayOfNumbers[a] = i;
    a++;
}
console.log(arrayOfNumbers);