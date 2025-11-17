// Отобразите в строке через пробел числа от n до 10 по возрастанию используя рекурсию
function increase(n) {
    if (n > 10) return;
    console.log(n)
    increase(n + 1);
}
increase(0);

// Отобразите в строке через пробел четные числа от 5 до 0 по убыванию используя рекурсию
function decreaseEven(n) {
    if (n === 0) return '';
    return (n % 2 === 0 ? n + ' ' : '') + decreaseEven(n - 1);
}
console.log(decreaseEven(5).trim());

// На входе число n. Вычислите сумму натуральных чисел от 1 до n используя рекурсию
function naturalNum(n) {
    if (n === 1) return 1;
    return n + naturalNum(n - 1);
}
console.log(naturalNum(10));

// На входе число n = 2, step = 5. Возведите n в степень step используя рекурсию
function sqrt(n, step) {
    if (step === 0) return 1;
    return n * sqrt(n, step - 1);
}
console.log(sqrt(2, 5));

// На входе массив array. Посчитайте количество элементов массива используя рекурсию
function countLengthArr(array) {
    if (array.length === 0) return 0;
    return 1 + countLengthArr(array.slice(1));
}
console.log(countLengthArr([1, 2, 3, 4, 4, 43, 2, 5]));

// Вычислить факториал числа используя рекурсию
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1)
}
console.log(factorial(5));

// Вычислите сумму массива чисел статичного массива используя рекурсию
function sumArr(array) {
    if (array.length === 1) return array[0];
    return array[0] + sumArr(array.slice(1));
}
console.log(sumArr([1, 2, 3, 4, 4, 43, 2, 5]));

// Реализуйте поиск максимального числа статичного массива используя рекурсию
function maxNumOfArr(array) {
    if (array.length === 1) return array[0];
    return array[0] > maxNumOfArr(array.slice(1)) ? array[0] : maxNumOfArr(array.slice(1));
}
console.log(maxNumOfArr([1, 2, 3, 4, 4, 43, 2, 5]));

// На входе строка s. Проверьте, является ли строка палиндромом (читается одинаково в обе
// стороны), используя рекурсию.
function palindrom(str) {
    if (str.length <= 1) return true;
    if (str[0] !== str[str.length - 1]) return false;
    return palindrom(str.slice(1, -1));
}
console.log(palindrom('madam'));

// На входе целое число n. Найдите сумму цифр числа с использованием рекурсии.
function sumNum(n) {
    const str = String(n);
    if (str.length === 0) return 0;
    return Number(str[0]) + sumNum(str.slice(1));
}
console.log(sumNum(123));

// На входе вложенный список, например [1, [2, [3]], 4]. Вычислите сумму всех чисел в этом списке,
// используя рекурсию. (flat)
function nestedArray(array) {
    if (array.length === 0) return 0;
    if (Array.isArray(array[0])) {
        return nestedArray(array[0]) + nestedArray(array.slice(1)); 
    } else {
        return array[0] + nestedArray(array.slice(1));
    }
}
console.log(nestedArray([1, [2, [3, 4], 5], 6, [7]]));
