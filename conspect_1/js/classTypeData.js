"use strict";

let number = 4.6;

console.log(4/0); // Infinity
console.log('string' * 9); // NaN

const persone = "Alex";

const bool = true;

// console.log(something); // null

let und;
console.log(und); // undefined'

const obj = {
    name: "John",
    age: 25,
    isMarried: false
};

console.log(obj.name);

obj.pets = 'cat'; // если мы обращаемся к свойству объекта, которого не существует на момент создания объекта, то свойство создастся

console.log(obj.pets); // cat

//            0           1           2
let arr = ['plum.png', 'orange.jpg', 'apple.bmp'];
console.log(arr[1]);
// массив - частный случай объекта

const storeName = 'CyberBool';
const storeDescription = {
  budget: 10000,
  employees: ['Alice', 'Mina', 'John'],
  products: {
    potato: 100,
    tomato: 150
  },
  open: true
};
