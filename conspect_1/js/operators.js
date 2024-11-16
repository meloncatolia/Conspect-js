"use strict";

console.log('arr' + " - object"); // arr - object
console.log(4 + " - object"); // 4 - object
console.log(4 + +" - object"); // NaN
console.log(4 + +"5"); // 9

// чем отличается префиксная форма от постриксной формы?

let incr = 10,
    decr = 10;

incr++; // оператор инкримента, увеличение на единицу
decr--; // оператор декримента, уменьшение на единицу

console.log(incr); // (10 + 1) = 11
console.log(decr); // (10 - 1) = 9

// форма записи, когда мы ставим операторы перед значением, называется префиксной (прим.: ++incr)
// когда ставим после - постриксной (прим.: incr++)

// console.log(incr++);
// console.log(decr--);
// если использовать (incr++/decr++) сразу, то постриксная форма возвращает старое значение (10/10)
// если использовать (++incr/--decr) сразу, то префиксная форма прибавленный результат выведет в консоль (11/9)

console.log(5%2); // делит столько раз, на сколько возможно и в консоли выдаёт остаток