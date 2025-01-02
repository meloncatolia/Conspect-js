"use strict";

let num = 20;

function showFirstMessage(text) {
    console.log(text);
    let num = 10;
    console.log(num);
}

showFirstMessage("Hello World!");
console.log(num);



function calc(a, b) {
    return (a + b);
}

console.log(calc(4, 3));
console.log(calc(5, 6));
console.log(calc(10, 6));



function ret() {
    let num = 50;

    //

    return num;
}

const anotherNum = ret();
console.log(anotherNum);


// FUNNCTION EXPRESSION
// Создаётся только тогда, когда доходит поток кода, можно вызвать только после объявления
const logger = function() {
    console.log("Hello!");
};

logger();



// СТРЕЛОЧНЫЕ ФУНКЦИИ
// () =>
// Не имеет своего контекста (this)
const calc1 = (a, b) => a + b;
// так же можно записать, как:
const calc2 = (a, b) => { return a + b };
// или как:
const calc3 = (a, b) => {
    console.log('1');
    return a + b;
}



// FUNCTION DECLARATION
// Создаётся до начала выполнения скрипта, можно вызывать перед объявлением
foo();

function foo() {
    // код
}



////////////////////////////////////////////////////////////////////////////////////////
// (д) Про аргументы функций

const usdCurr = 28;
const eurCurr = 32;

function convert(amount, curr) {
    console.log(curr * amount);
}

convert(500, eurCurr);
convert(500, usdCurr);



////////////////////////////////////////////////////////////////////////////////////////
// (д) Про важность return

const usdCurr1 = 28;
const discount = 0.9;

function convert1(amount, curr) {
    return curr * amount;
}

function promotion(result) {
    console.log(result * discount);
}

// promotion(convert1(500, usdCurr1));
const res = convert1(500, usdCurr);
promotion(res);


function test() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
        if (i === 3) return
    }
    console.log('Done');
}

test();


function doNothing() {};
console.log(doNothing() === undefined);



////////////////////////////////////////////////////////////////////////////////////////
// Практика по написанию кода: Задание на работу с функциями

// 1) Создайте функцию, которая будет на вход принимать 1 аргумент с именем человека и возвращать строку. 

// Пример: вызов функции sayHello('Антон') возвращает строку "Привет, Антон!". В решении вызывать функцию не нужно, программа сделает это за вас.

// P.S. возвращать - это использовать ключевое слово return. 

// P.S.S. Это классическая функция-модификатор, которых мы дальше по курсу будем создавать еще много в разных видах.

// 2) Создайте функцию, которая принимает в себя 1 аргумент в виде целого числа и возвращает массив из трех чисел: одно на 1 меньше, сам аргумент, и число на 1 больше.

// Пример: вызов функции returnNeighboringNumbers(5) возвращает массив в виде [4, 5, 6]. 

// 3) Создайте функцию, которая будет принимать в себя 2 аргумента, оба числа. Первое число - это база, второе число - это сколько раз нужно будет повторить это число в прогрессии. (Смотри пример ниже). Функция должна возвращать строку (или число в особых случаях, о которых ниже), где эти числа идут по порядку, разделенные тремя дефисами "---". После последнего числа их не должно быть. 

// Если второй аргумент не является числом, равен или меньше нуля - то возвращать просто первый аргумент. (Проверяем через оператор typeof)

// Примеры:

// Вызов функции getMathResult(5, 3) даст ответ 5---10---15

// Вызов функции getMathResult(3, 10) даст ответ 3---6---9---12---15---18---21---24---27---30

// Вызов функции getMathResult(10, 5) даст ответ 10---20---30---40---50

// Вызов функции getMathResult(10, '5') даст ответ 10

// Вызов функции getMathResult(10, 0) даст ответ 10

// Вызов функции getMathResult(20, -5) даст ответ 20


// Место для первой задачи
function sayHello(name) {
    return 'Привет, ' + name;
}

console.log(sayHello('Антон'));

// Место для второй задачи
function returnNeighboringNumbers(num) {
    return [num - 1, num, num + 1];
}

console.log(returnNeighboringNumbers(5));

// Место для третьей задачи
function getMathResult(first, second) {
    result = '';``
    line = '---';

    if(typeof(second) !== 'number' || second < 0) {
        return first;
    }

    for (let i = 1; i <= second; i++) {
        if(i < second) {
            result += first * i + line;
        } else {
            result += first * i;
        }
    }
    return result;
}

console.log(getMathResult(5, 3));