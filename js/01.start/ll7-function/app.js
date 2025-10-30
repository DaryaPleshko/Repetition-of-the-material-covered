// Напишите функцию, которая принимает строку состоящую из нескольких слов. Каждое нечетное
// слово строки функция должна преобразовать в нижний регистр, все четные слова, соответственно,
// в верхний
const upperCase_nechetVal = (str) => {
    const array_str = str.split(' ');
    let update_str = '';
    for (let i = 0; i < array_str.length; i++) {
        i % 2 === 0 ? update_str += array_str[i].toLowerCase() : update_str += array_str[i].toUpperCase();
        if (i < array_str.length - 1) update_str += ' ';
    }
    return update_str;
}
console.log(`Задание 1. ${upperCase_nechetVal('happy new year')}`);

// Напишите функцию, которая принимает строку в маленьком регистре и возаращает строку, где
// каждое слово начинается с большого регистра
// hschool company -> Hschool Company
const upperCase_val = (str) => {
    const array_str = str.split(' ');
    let update_str = '';
    for (let i = 0; i < array_str.length; i++) {
        update_str += array_str[i].charAt(0).toUpperCase() + array_str[i].slice(1).toLowerCase();
        if (i < array_str.length - 1) update_str += ' ';
    }
    return update_str;
}
console.log(`Задание 2. ${upperCase_val('happy new year')}`);

// Напишите функцию, которая принимает статичный массив строк. Необходимо отфильтровать
// значения и оставить только те, где длина строк до 2 символов.
const filterArrayLength = (array) => {
    let update_array = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i].length <= 2) update_array.push(array[i]);
    }
    return update_array;
}
console.log(`Задание 3. ${filterArrayLength(['by', 'belarus', 'ru', 'germany', 'de'])}`);

// На входе массив. Необходимо создать функцию проверки на то что в массиве только числа.
// Функция возвращает true, если в массиве только числа и false в противном случае
const filterArrayNumber = (array) => array.every((el) => !isNaN(el));

console.log(`Задание 4. ${filterArrayNumber([1, 2, 3, 4, 'cf', 6])}`);

// На входе n – количество элементов массива. Далее производится заполнение массива с
// клавиатуры. Реализуйте 2 функции. Первая для формирования массива. Вторая для нахождения
// количества элементов массива
const n = prompt('Введите количество элементов массива');
const fillingAnArray = (n) => {
    let value = [];
    for (let i = 0; i < n; i++) {
        let input = prompt(`Введите значение ${i + 1} из ${n}`);
        value.push(input);
    }
    return value;
}
const arrayLength = (arr) => {
    return arr.length;
}
console.log(`Задание 5. Количество элементов: ${arrayLength(fillingAnArray(n))}`);

// На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве только числа. Вторая
// для получения суммы всех элементов массива. Если результат функции проверки – true, то
// вызывать новую функцию, возвращающую сумму всех элементов массива
const checkNumber = (array) => array.every((el) => !isNaN(el));
const reduceArray_sum = (array) => {
    if (checkNumber(array)) {
        return array.reduce((sum, el) => sum + el, 0);
    }
}
console.log(`Задание 6. ${reduceArray_sum([1, 2, 2, 4, 52, 5])}`);

// На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве только строки.
// Вторая для получения суммы всех строчных элементов массива. Если результат функции
// проверки – true, то вызывать новую функцию, возвращающую конкатенацию всех строчных
// элементов массива
const checkStr = (array) => array.every((el) => isNaN(el));
const konkatenatia_str = (array) => {
    if (checkStr(array)) {
        return array.join(' ');
    }
}
console.log(`Задание 7. ${konkatenatia_str(['hello', 'i', 'am', 'dev'])}`);

// На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве только числа. Вторая
// для получения массива с удвоенными значенями каждого элемента. Если результат функции
// проверки – true, то вызывать новую функцию, возвращающую массив с удвоенными элементами
const arrayDoubleVal = (array) => {
    if (checkNumber(array)) {
        return array.map((el) => el * 2);
    }
}
console.log(`Задание 8. ${arrayDoubleVal([1, 2, 2, 4, 52, 5])}`);

// На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве только числа. Вторая
// для получения только четных элементов массива. Если результат функции проверки – true, то
// вызывать новую функцию, возвращающую массив с четными элементами массива
const checkChetNum = (array) => {
    if (checkNumber(array)) {
        return array.filter((el) => el % 2 === 0);
    }
}
console.log(`Задание 9. ${checkChetNum([1, 2, 2, 4, 52, 5])}`);

// На входе число. Необходимо создать функцию, возвращающую факториал числа
// 4! = 1 * 2 * 3 * 4
const factorialNumber = (num) => {
    let result_factorial = 1;
    for (let i = 1; i <= num; i++) {
        result_factorial *= i;
    }
    return result_factorial;
};
console.log(`Задание 10. ${factorialNumber(3)}`);

// На входе строка. Необходимо создать функцию, возвращающую true, если это слово палиндром и
// false в противном случае
const palindromStr = (str) => {
    const lowerStr = str.toLowerCase();
    const reverseStr = lowerStr.split('').reverse().join('');
    return lowerStr === reverseStr;
};
console.log(`Задание 11. ${palindromStr('шалАш')}`);

// На входе строка. Необходимо создать функцию, возвращающую true, если это слово анаграмма и
// false в противном случае
const funcAnorgrama = (str1, str2) => str1.toLowerCase().split('').sort().join('') === str2.toLowerCase().split('').sort().join('');
console.log(`Задание 12. ${funcAnorgrama('стоп', 'пост')}`);

// На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве только числа. Вторая
// для поиска максимального значения в массиве. Если результат функции проверки – true, то
// вызывать новую функцию, возвращающую максимальное значение массива
const searchMaxNum = (array) => {
    if (checkNumber(array)) {
        let max = 0;
        array.forEach(el => el > max ? max = el : null);
        return max;
    }
}
console.log(`Задание 13. ${searchMaxNum([1, 2, 45, 4, 52, 23])}`);

// На входе n – количество элементов массива. Далее производится заполнение массива с
// клавиатуры. Реализуйте 3 функции. Первая для формирования массива. Вторая для проверки, что
// в массиве только числа. Третья для получения произведения всех элементов массива. Если
// результат функции проверки – true, то вызывать новую функцию, возвращающую произведение
// всех элементов массива
const productArray = (arr) => {
    if (checkNumber(arr)) {
        return arr.reduce((product, el) => product * el, 1);
    }
}
console.log(`Задание 14. Произведение элементов массива: ${productArray(fillingAnArray(n))}`);

// На входе n – количество элементов массива. Далее производится заполнение массива с
// клавиатуры. Реализуйте 3 функции. Первая для формирования массива. Вторая для проверки, что
// в массиве только числа. Третья для формирования массива из всех четных чисел, возведенных в
// квадрат. Если результат функции проверки – true, то вызывать новую функцию, возвращающую
// массив из всех четных чисел, возведенных в квадрат
const createArrayChetSqrt = (arr) => {
    if (checkNumber(arr)) {
        return arr
            .filter(el => el % 2 === 0)
            .map(el => el ** 2);
    }
}
console.log(`Задание 14. Массив из всех четных чисел, возведенных в квадрат: ${createArrayChetSqrt(fillingAnArray(n))}`);

// Написать функцию, принимающую в параметрах строку текста в маленьком регистре. Разбить
// строку на массив. Функция должна вернуть строку, где каждый элемент массива в чередование
// регистров toLowerCase, toUpperCase
const registerInterleaving = (str) => {
    const strToArr = str.toLowerCase().split('');
    const newArray = [];
    for (let i = 0; i < strToArr.length; i++) {
        i % 2 === 0 ? newArray.push(strToArr[i].toUpperCase()) : newArray.push(strToArr[i].toLowerCase());
    }
    return newArray.join('');
}
console.log(`Задание 15. Чередование регистров: ${registerInterleaving('Хохохоххохо')}`);

// Написать функцию, принимающую в параметрах дату в формат “xx/xx/xxxx”. Функция должна
// преобразовать строку в формат “xxxx-xx-xx”. 
const reverseDate = (date) => {
    return date.split('/').reverse().join('/');
}
console.log(`Задание 15. Чередование регистров: ${reverseDate('27/04/2004')}`);
