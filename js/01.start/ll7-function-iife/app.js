// Напишите IIFE-функцию, принимающую в качестве параметров 2 переменные и
// внутри отображающую в console.log сумму двух значений.
(function (num1, num2) {
    console.log(`1 Задание. ${num1 + num2}`);
})(3, 4);

// Напишите IIFE-функцию, принимающую строку и число. Внутри функции
// выведите в console.log строку, повторённую указанное количество раз.
(function (num, str) {
    let resultStr = ''
    for (let i = 0; i < num; i++) {
        resultStr += str;
    }
    console.log(`2 Задание. ${resultStr}`);
})(3, 'Hi!');

// Напишите IIFE-функцию, принимающую массив чисел и число. Внутри функции
// выведите в console.log количество чисел больше заданного.
(function (array, num) {
    const filterArray = array.filter(el => el > num);
    console.log(`3 Задание. Количество чисел = ${filterArray.length}. Сами числа = [${filterArray}]`);
})([1, 5, 10, 20, 30], 10);

// Напишите IIFE-функцию, принимающую массив чисел и отображающую их
// среднее значение.
(function (array) {
    const sumArray = array.reduce((sum, el) => sum + el);
    console.log(`4 Задание. Среднее значение = ${sumArray / array.length}`);
})([1, 5, 10, 20, 30]);

// Напишите IIFE-функцию, принимающую массив строк и число. Внутри выведите
// строки длиной больше указанного числа.
(function (array, num) {
    const filterArray = array.filter(el => el.length > num);
    console.log(`5 Задание. Строки длиной больше указанного числа = [${filterArray}]`);
})(['cat', 'dinosaur', 'elephant', 'dog'], 3);

// Напишите IIFE-функцию, принимающую объект с данными пользователя ({name,
// age}) и выводящую сообщение о его статусе возраста (старше 18).
(function (obj) {
    const result = obj.age >= 18 ? 'совершеннолетний' : 'несовершеннолетний';
    console.log(`6 Задание. Статус возраста: ${obj.name} - ${result}`);
})({
    name: "Лена",
    age: 22
});

// Напишите IIFE-функцию, принимающую массив строк и выводящую строки в
// обратном порядке используя цикл for.
(function (array) {
    let reverseArray = [];
    for (let i = array.length - 1; i >= 0; i--) {
        reverseArray.push(array[i]);
    }
    console.log(`7 Задание. Строки в обратном порядке = [${reverseArray}]`);
})(['один', 'два', 'три']);

// Напишите IIFE-функцию, принимающую массив чисел и выводящую сумму только
// положительных чисел.
(function (array) {
    const filterArray = array
        .filter(el => el > 0)
        .reduce((sum, el) => sum + el);
    console.log(`8 Задание. Сумма положительных чисел массива ${array} = ${filterArray}`);
})([3, -2, 5, 3, -1, 0, 4]);

// Напишите IIFE-функцию, принимающую двумерный массив и выводящую сумму
// всех его элементов.
(function (array) {
    let sum = 0;
    array.forEach(row => {
        row.forEach(cell => {
            sum += cell;
        });
    });
    console.log(`9 Задание. Сумма массива ${array} = ${sum}`);
})([[1, 2], [3, 4], [5, 6]]);
