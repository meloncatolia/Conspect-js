"use strict";

// const obj = new Object(); - Устаревшая форма создания объекта

const options = {
    name:'test', // ключ: 'значение',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() { // создание метода
        console.log("Test");
    }
};

options.makeTest();

const {border, bg} = options.colors; // структура, называемая деструктуризацией
console.log(border);

// console.log(Object.keys(options).length);

// console.log(options["colors"]["border"]); // старый метот деструктуризации

// delete options.name;

// console.log(options);

// let counter = 0;
// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//         counter++;
//     }
// }
// console.log(counter);