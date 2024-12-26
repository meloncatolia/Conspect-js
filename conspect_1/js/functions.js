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