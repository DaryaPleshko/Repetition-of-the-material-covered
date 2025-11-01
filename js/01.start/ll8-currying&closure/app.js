//ЗАМЫКАНИЕ
// Функция greetUser(name) должна возвращать функцию, которая приветствует
// пользователя по имени. 
function greetUser(name) {
    return function () {
        return `Привет, ${name}!`
    }
}
const greetAnna = greetUser('Анна');
console.log(greetAnna());

// Создай функцию makeMultiplier(x), которая возвращает функцию умножения на x.
function makeMultiplier(x) {
    return function (num) {
        return num * x;
    }
}
const productX = makeMultiplier(3);
console.log(productX(4));

// Создай функцию secretMessage(msg), которая возвращает другую функцию. При
// вызове она выводит msg.
function secretMessage(msg) {
    return function () {
        return `Секретный пароль: ${msg}`;
    }
}
const outputMSG = secretMessage('2345');
console.log(outputMSG());

// greaterThanX(x) возвращает функцию, которая проверяет, больше ли переданное
// значение x.
function greaterThanX(x) {
    return function (a) {
        return a > x;
    }
}
const isGrationThan = greaterThanX(5);
console.log(isGrationThan(13));

// Создай rememberNumber(n) — возвращает функцию, которая просто выводит в
// консоль это число при каждом вызове. 
function rememberNumber(n) {
    return function () {
        return n;
    }
}
const num = rememberNumber(24);
console.log(num());
console.log(num());
console.log(num());

//КАРРИРОВАНИЕ
// Создай функцию greet(greeting)(name), которая выводит строку вида: "Привет, Аня".
function greet(msg) {
    return function (name) {
        return `${msg}, ${name}`
    }
}
console.log(greet('Привет')('Аня'));

// Реализуй divideBy(x)(y), где x — делитель, y — делимое
function divideBy(x) {
    return function (y) {
        return y / x;
    }
}
console.log(divideBy(2)(6));

// Сделай функцию multiply(a)(b)(c), которая выводит результат a * b * c.
function multiply(a) {
    return (b) => {
        return (c) => {
            return a * b * c;
        }
    }
}
console.log(multiply(2)(3)(4));

// Создай greaterThan(x)(y), которая проверяет, больше ли y, чем x.
function greaterThan(x) {
    return (y) => {
        return y > x;
    }
}
console.log(greaterThan(4)(6));

// Создай функцию checkEven(label)(number), которая выводит label: true/false в
// зависимости от чётности числа.
function checkEven(label) {
    return (num) => {
        return `${label}: ${num % 2 == 0}`
    }
}
console.log(checkEven('Num')(3));

// Создай функцию isDivisibleBy(a)(b), которая проверяет, делится ли b на a без
// остатка.
function isDivisibleBy(a) {
    return (b) => {
        return b % a === 0
    }
}
console.log(isDivisibleBy(3)(43));

// Реализуй функцию inRange(min)(max)(value), которая выводит true, если значение
// попадает в диапазон.
function inRange(min) {
    return (max) => {
        return (value) => {
            return value > min && value < max;
        }
    }
}
console.log(inRange(2)(45)(5));

// Создай hasLength(n)(str) — она проверяет, имеет ли строка длину n.
function hasLength(n) {
    return (str) => {
        return str.length === n;
    }
}
console.log(hasLength(6)('HELLOY'));

// Сделай formatDate(separator)(day)(month)(year), которая собирает дату строкой.
function formatDate(separator) {
    return (day) => {
        return (month) => {
            return (year) => {
                return `${day}.${month}.${year}`
            }
        }
    }
}
console.log(formatDate()(27)(11)(2024));
