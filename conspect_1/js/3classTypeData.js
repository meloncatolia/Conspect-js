// 3. Классификация типов данных JS.

"use strict"; 

// ПРОСТЫЕ ТИПЫ (примитивы)

// 1. Числа 1, 2, 3 - мы не можем задать чило, которое будет больше, чем 2 в 53 степени; существуют значения infinity (получается путём деления на 0) и NaN (получается путём проведения операции, которая не подлежит математической логике):

let number = 4.6;

console.log(4/0); // Infinity
console.log('string' * 9); // NaN

// 2. Строки 'string', 'name' - набор данных, который можно описать словами (прим. имя или название), строки всегда записываются в кавычках (''/``/""):

const persone = "Alex";

// 3. Логический тип (boolean) - спецефический тип данных; 
// 4. true / false - спецефический тип данных; либо "да" (true), либо "нет" (false):

const bool = true;

// 5. null - чего-то просто не существует:

// console.log(something); // null

// 6. undefined - что-то существует, но отсутствует значение:

let und;
console.log(und); // undefined

// 7. Symbol
// 8. BigInt - тип данных, отображающий большие числа

/////////////////////////////

// ОБЪЕКТЫ (комплексные)

// Специальные объекты:
// 1. Массивы [] - частный случай объекта

//            0           1           2
let arr = ['plum.png', 'orange.jpg', 'apple.bmp'];
console.log(arr[1]); // в программировании нумерация начинается не с 1, а с 0

// 2. Функции function - 
// 3. Объект Даты - 
// 4. Регулярные выражения - 
// 5. Ошибки - 
// Обычные объекты: 


const obj = {
  name: "John", // ключ: "значение",
  age: 25,
  isMarried: false
};

// console.log(obj.name);
console.log(obj["name"]); // John


obj.pets = 'cat'; // если мы обращаемся к свойству объекта, которого не существует на момент создания объекта, то свойство создастся

console.log(obj.pets); // cat



///////////////////////////////////////////////////////////////
// 3.1 Разница между объектами и массивами и неочевидные синтаксические возможности

// Массив - это перечень информации по порядку, т.е. у каждой сущности есть свой номер по порядку (0, 1, 2 и т.д.). Частный случай объета, т.к. ключ всегда фиксирован.
// Объекты - это структура хранения данных в парном формате (клуч: значение).

// Пример объекта.
// const obj = {a: 1, b: 2}; 
const obj = {
  Anna: 500,
  'Alice': 800
};

// Пример массива.
const arrr = ['a', 'b', 'c']; 

arrr[10] = '3456';

console.log(arrr[10]);

console.log(arrr);

const arrrObj  = {
  0: 'a',
  b: 'b',
  2: 'c'
};
const a = 'a';

// console.log(arrr[2]);
// console.log(arrrObj.b);
// console.log(arrrObj[0]);

// arrrObj.a = '123';
arrrObj[a] = '123';

console.log(arrrObj['a']);
console.log(arrrObj.a);



///////////////////////////////////////////////////////////////
// Практическое задание
// 1) Создайте переменную с названием магазина (магазин - store, имя - name) и поместите в неё любое название на ваш выбор.
// 2) Создайте объект под названием storeDescription
// 3) Во внутрь этого объекта напрямую поместите свойство budget и укажите его как 10000. Напрямую - это сразу внутри фигурных скобок, мы его расширяем на месте
// 4) Во внутрь объекта storeDescription напрямую поместите свойство employees. Это должен быть массив, который содержит имена трех сотрудников на ваш выбор
// 5) Во внутрь объекта storeDescription напрямую поместите свойство products. Это должен быть тоже объект, который содержит два товара и их цену. То есть, нужно создать пару ключ-значение в виде товар: цена Данные на ваш выбор.
// 6) Во внутрь объекта storeDescription напрямую поместите свойство open. Тут можно контролировать: или магазин открыт, или закрыт, то есть логическое значение. Сделайте его открытым

// Ответ:
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
