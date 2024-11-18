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
