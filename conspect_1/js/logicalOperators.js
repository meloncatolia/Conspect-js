// К логическим операторам относятся "или" (||), "и" (&&) и оператор отрицания "не" (!)

// const sushi = true;
// const wok = false;

// if (sushi && wok) {
//     console.log('Я сыта!');
// }

// console.log((sushi && wok));
// Результат логических операций - это bool значение

// В JS есть 5 сущностей. которые всегда будут false: 0, пустая строка, null, undefinde, NaN

const sushi = 2;
const wok = 1;
const onigiri = 4;

console.log(sushi === 2 && wok && onigiri)

console.log(1 && 0);
console.log(1 && 5);
console.log(null && 5);
console.log(0 && 'dgygse');

if (wok && sushi >= 3 || onigiri >= 3) {
    console.log('Все сыты!');
} else {
    console.log('Мы уходим!');
}

console.log(wok && sushi >= 3 || onigiri >= 3);

// Оператор "или" (&&) "запинается на лжи", т.е. останавливается при первом ложном значении и выдаёт его

const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;

if (hamburger === 3 &&  (cola === 2 || fries === 3) && nuggets) {
    console.log('Все довольны!');
} else {
    console.log('Мы уходим!');
}

console.log(hamburger === 3 && cola === 2 || fries === 3 && nuggets);



let johnRepior, alexReport, samReport, mariaReport = 'done';

console.log(johnRepior || alexReport || samReport || mariaReport);

console.log(!0);

// задачи для практики

// что выведет в консоль код?
console.log( NaN || 2 || undefined ); // 2

console.log( NaN && 2 && undefined ); // false; NaN

console.log( 1 && 2 && 3 ); // true; 2

console.log( !1 && 2 || !3 ); // false

console.log( 25 || null && !3 ); // true; 25

console.log( NaN || null || !3 || undefined || 5); // true; 5

console.log( NaN || null && !3 && undefined || 5); // true; 5

console.log( 5 === 5 && 3 > 1 || 5); // true


// выполнится ли условие?
const hamburger0 = 3;
const fries0 = 3;
const cola0 = 0;
const nuggets0 = 2;

if (hamburger0 === 3 && cola0 || fries0 === 3 && nuggets0) {
   console.log('Done!')
}
// ответ: да, выполнится, потому что: (гамбургеры 3/3 и колла (коллы нет) - false || картошка 3/3 и наггетсы 2/1 - true)


// выполнится ли условие?
let hamburger1;
const fries1 = NaN;
const cola1 = 0;
const nuggets1 = 2;

if (hamburger1 || cola1 || fries1 === 3 || nuggets1) {
   console.log('Done!')
}
// ответ: да, выполнится, потому что: (false || false || false || true) 


// выполнится ли услое?
let hamburger2;
const fries2 = NaN;
const cola2 = 0;
const nuggets2 = 2;

if (hamburger2 && cola2 || fries2 === 3 && nuggets2) {
   console.log('Done!')
}
// ответ: нет, не выполнится, потому что: (false && false || false && true) => (false || false)