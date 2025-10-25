// Найдите произведение элементов массива [2, 3, 4, 5].
const array_number = [1, 2, 3, 4, 5, 6];
let product_of_numbers = 1;
for (let i = 0; i < array_number.length; i++) {
    product_of_numbers *= array_number[i];
}
console.log(`1 задание. Произведение = ${product_of_numbers}`);

// Найдите сумму элементов массива [1, 2, 3, 4, 5].
let sum_of_numbers = 0;
for (let i = 0; i < array_number.length; i++) {
    sum_of_numbers += array_number[i];
}
console.log(`2 задание. Сумма = ${sum_of_numbers}`);

// Выведите все числа, кратные 3, из массива [2, 5, 9, 15, 0, 4].
let multiples = [];
for (let i = 0; i < array_number.length; i++) {
    array_number[i] % 3 === 0 ? multiples.push(array_number[i]) : null;
}
console.log(`3 задание. Числа, кратные 3 = ${multiples}`);

// Создайте два массива: Первый — пустой массив. Второй — массив со смешанными элементами:
// ["apple", 3, "orange", 2]. Пройдитесь по элементам второго массива и добавьте в первый только те
// элементы, которые являются числами.
const mixed_array = ["apple", 3, "orange", 2];
let new_mixed_array = [];

for (let i = 0; i < mixed_array.length; i++) {
    !isNaN(mixed_array[i]) ? new_mixed_array.push(mixed_array[i]) : null;
}
console.log(`4 задание. Элементы, которые являются числами = ${new_mixed_array}`);

// Выведите все числа, кратные 5 или 3, из массива [2, 5, 9, 15, 0, 4].
// Найдите сумму всех положительных элементов массива [-1, 2, 3, -4, 5].
let positive_num = [];
for (let i = 0; i < array_number.length; i++) {
    array_number[i] > 0 && (array_number[i] % 5 === 0 || array_number[i] % 3 === 0) ?
        positive_num.push(array_number[i]) : null;
}
console.log(`5 задание. Cумма всех положительных элементов, кратных 5 или 3, массива = ${positive_num}`);

// С помощью одного цикла for создайте массив из 10 чисел, введённых пользователем через prompt.
// Числа должны быть трёхзначными. Затем с помощью второго цикла пройдитесь по этому массиву
// и выведите в консоль только те числа, которые начинаются с цифры 1, 2 или 5.
let array_three_digit = [];
let new_array_three_digit = [];

for (let i = 0; i < 10; i++) {
    let val_user = +prompt('Введите число');
    val_user >= 100 && val_user < 1000 ? array_three_digit.push(val_user) : null;
}
for (let i = 0; i < array_three_digit.length; i++) {
    let numStr = array_three_digit[i].toString();
    let firstDigit = numStr[0];

    (firstDigit === '1' || firstDigit === '2' || firstDigit === '5') ? new_array_three_digit.push(array_three_digit[i]) : null;
}
console.log(`6 задание. ${new_array_three_digit}`);

// Повторите заданное предложение prompt указанное количество раз n - prompt. Используйте цикл
// for.
const value_user_prompt = prompt('Введите предложение');
const n = +prompt('Введите число');
let new_value_user_prompt = '';
for (let i = 0; i < n; i++) {
    new_value_user_prompt += `${value_user_prompt} `;
}
console.log(`7 задание. ${new_value_user_prompt}`);

// Сформируйте массив из 10 значений prompt. Создайте строку из элементов массива, разделённых
// дефисами.
let val_user_array = '';
for (let i = 0; i < 10; i++) {
    let val_user = +prompt('Введите число');
    i < 9 ? val_user_array += `-${val_user}` : val_user_array += `-${val_user}-`;
}
console.log(`8 задание. ${val_user_array}`);

// Выведите каждый элемент массива [1, 2, 2, 3, 4, 4, 3, 4, 5] без повторений.
const mix_array_num = [1, 2, 2, 3, 4, 4, 3, 4, 5].sort();
let mix_array_num_new = [];
let last_val = 0;
for (let i = 0; i < mix_array_num.length; i++) {
    if (mix_array_num[i] === 0) {
        last_val = mix_array_num[i]
        mix_array_num_new.push(mix_array_num[i]);
    }
    if (mix_array_num[i] > last_val) {
        last_val = mix_array_num[i]
        mix_array_num_new.push(mix_array_num[i]);
    }
}
console.log(`9 задание. Массив [1, 2, 2, 3, 4, 4, 3, 4, 5] без повторений = ${mix_array_num_new}`);

// Выведите числа от 1 до 50.
// Методы: Используйте циклы while.
let i = 1;
let while_array = [];
while (i <= 50) {
    while_array += `${i} `;
    i++
}
console.log(`10 задание. ${while_array}`);

// Выведите каждый элемент массива [1, 2, 3, 4, 5] в консоль.
// Методы: Используйте цикл for...of.
for (let el of array_number) {
    console.log(el);
}

// Найдите произведение элементов массива [2, 3, 4, 5].
// Методы: Используйте циклы while, for...of.
let for_of_product = 1;
let while_product = 1;
for (let el of array_number) {
    for_of_product *= el;
}
let s = 0;
while (s < array_number.length) {
    while_product *= array_number[s];
    s++
}
console.log(`12 задание. ${for_of_product}, ${while_product}`);

// Найдите сумму элементов массива [1, 2, 3, 4, 5].
// Методы: Используйте цикл for...of.
let sum_for_of = 0;
for (let el of array_number) {
    sum_for_of += el;
}
console.log(`13 задание. Найдите сумму элементов массива = ${sum_for_of}`);

// Выведите все числа, кратные 3, из массива [2, 5, 9, 15, 0, 4].
// Методы: Используйте цикл for...of.
// Входные: [2, 5, 9, 15, 0, 4] → Результат: [9, 15, 0]
let krat_for_of = [];
for (let el of array_number) {
    el % 3 === 0 ? krat_for_of.push(el) : null;
}
console.log(`14 задание. числа, кратные 3 = ${krat_for_of}`);

// Выведите все числа, кратные 5 или 3, из массива [2, 5, 9, 15, 0, 4].
// Найдите сумму всех положительных элементов массива [-1, 2, 3, -4, 5].
// Метод: Используйте цикл for...of.
const array_positive_negative = [-1, 2, -4, 5, 6, 8, 9, 10, -5, 20];
let krat_posit_negat_arr = [];
let sum_positive_arr = 0;
for (let el of array_positive_negative) {
    el % 5 === 0 || el % 3 === 0 ? krat_posit_negat_arr.push(el) : null;
    el > 0 ? sum_positive_arr += el : null;
}
console.log(`15 задание. Массив: [-1, 2, -4, 5, 6, 8, 9, 10, -5, 20]. 
Числа, кратные 5 или 3: ${krat_posit_negat_arr}; Сумма всех положительных элементов = ${sum_positive_arr}`);

// Выведите каждый элемент массива [1, 2, 2, 3, 4, 4, 3, 4, 5] без повторений.
// Методы: Используйте циклы for...of.
let last_val_arr = 0;
let new_array_el = [];
for (let el of mix_array_num) {
    if (el === 0) {
        last_val_arr = el;
        new_array_el.push(el);
    } else if (el > last_val_arr) {
        last_val_arr = el;
        new_array_el.push(el);
    }

}
console.log(`16 задание. Массив [1, 2, 2, 3, 4, 4, 3, 4, 5] без повторений = ${new_array_el}`);

// Сформируйте массив из 10 значений prompt. Выведите числа из массива, начинающиеся на 1, 2
// или 5.
let source_array = [];
let done_array = [];
for (let i = 0; i < 10; i++) {
    const val_user_pr = String(+prompt('ЧИСЛО ДЛЯ ПРОВЕРКИ НА НАЧАЛЬНУЮ ЦИФРУ')).split('');
    source_array.push(val_user_pr.join(''));
    val_user_pr[0] == 1 || val_user_pr[0] == 2 || val_user_pr[0] == 5 ? done_array.push(val_user_pr.join('')) : null;
}
console.log(`17 задание. Исходный массив ${source_array}, готовый массив ${done_array}`);

// Сформируйте массив из значений prompt. Создайте строку из элементов массива, разделённых
// дефисами.
const num_repeat = +prompt('Число повторений массива чисел');
let defis_arr = '';
for (let i = 0; i < num_repeat; i++) {
    let val_defis = +prompt('Значение массива чисел для дефиса');
    i == num_repeat - 1 ? defis_arr += `-${val_defis}-` : defis_arr += `-${val_defis}`;
}
console.log(`18 задание. Массив с дефисами: ${defis_arr} `);

// Вставьте двоеточие между двумя нечётными числами в числе.
// Метод: Работа с числом как с массивом, использование цикла for.
const num = 55639217;
const num_to_arr = String(num).split('');
let full_num = '';
for (let i = 0; i < num_to_arr.length; i++) {
    full_num += num_to_arr[i];

    if (i < num_to_arr.length - 1 &&
        num_to_arr[i] % 2 !== 0 &&
        num_to_arr[i + 1] % 2 !== 0) {
        full_num += ':';
    }
}
console.log(`19 задание. Двоеточие между двумя нечётными числами в числе 55639217: ${full_num} `);

// Найдите сумму чисел от 1 до 100.
// Методы: Используйте цикл while.
let val = 1;
let sum_val = 0;
while (val <= 100) {
    sum_val += val;
    val++
}
console.log(`20 задание. ${sum_val}`);

