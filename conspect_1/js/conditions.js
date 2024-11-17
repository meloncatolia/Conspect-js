"use strict";

if (4 == 9) {
    console.log('Ok!');
} else {
    console.log('error!');
}

const num = 50

if (num < 49) {
    console.log('error!');
} else if (num > 100) {
    console.log('много');
} else {
    console.log('Ok!');
}

// что такое тернарный оператор?

(num === 50) ? console.log('Ok!') : console.log('error!');

// тернарный оператор - оператор, в работе каторого участвуют три аргумента

const num1 = 50

switch (num1) {
    case 49:
        console.log('неверно');
        break;
    case 100:
        console.log('неверно');
        break;
    case 50:
        console.log('верно');
        break;
    default:
        console.log('не в этот раз');
        break;
}
