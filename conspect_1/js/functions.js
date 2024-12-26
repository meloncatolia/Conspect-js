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


