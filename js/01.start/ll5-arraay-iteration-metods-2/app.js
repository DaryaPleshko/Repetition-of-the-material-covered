// Пользователь вводит два массива чисел. Используя оператор spread, объедините эти два массива
// в один.
const first_array = [1, 2, 3];
const second_array = [4, 5, 6];
console.log(`1 задание. ${[...first_array, ...second_array]}`);

// Напишите функцию, которая принимает неограниченное количество аргументов (чисел) и
// возвращает их сумму. Используйте оператор rest для обработки аргументов.
function sumNum(...numbers) {
    return numbers.reduce((sum, current) => sum + current, 0);
}
console.log(`2 задание. ${sumNum(1, 2, 3)}`);

// Пользователь вводит массив чисел и одно дополнительное число. Используя оператор spread,
// создайте новый массив, в котором это число добавлено в начало массива.
const user_val = +prompt(`Введите 1 число`);
let num_array = [];
for (let i = 0; i < 3; i++) {
    let input = +prompt(`Введите число ${i + 1} из 3`);
    if (isNaN(input)) {
        console.log(`Ошибка: '${input}' не является числом. Попробуйте снова.`);
        i--;
        continue;
    }
    num_array.push(input);
}
console.log(`3 задание. ${[user_val, ...num_array]}`);

// Напишите функцию, которая принимает любое количество строковых аргументов и возвращает
// массив этих строк в верхнем регистре. Используйте оператор rest.
function strUpperCase(...str) {
    let toUprCase = [];
    str.forEach(el => toUprCase.push(el.toUpperCase()));
    return toUprCase;
}
console.log(`4 задание. ${strUpperCase('apple', 'banana', 'cherry')}`);

// На входе n – количество элементов массива, затем пользователь заполняет массив с клавиатуры.
// Используя метод reduce, найти произведение всех чисел в массиве.
const n = +prompt(`Введите n – количество элементов массива`);
let array_with_number = [];
for (let i = 0; i < n; i++) {
    let input = +prompt(`Введите число ${i + 1} из ${n}`);
    if (isNaN(input)) {
        console.log(`Ошибка: '${input}' не является числом. Попробуйте снова.`);
        i--;
        continue;
    }
    array_with_number.push(input);
}
const reduce_product_arr = array_with_number.reduce((sum, el) => sum * el, 1);
console.log(`5 задание. Произведение всех чисел в массиве ${reduce_product_arr}`);

// На входе n – количество элементов массива, затем пользователь заполняет массив с клавиатуры.
// Используя метод reduce, посчитать количество чисел в массиве.
let array_with_mix_val = [];
for (let i = 0; i < n; i++) {
    array_with_mix_val.push(prompt(`Введите число/слово ${i + 1} из ${n}`));
}
const reduce_count_num = array_with_mix_val.reduce((count, el) => {
    const num = Number(el);
    if (!isNaN(num)) return count + 1;
    return count;
}, 0);
console.log(`5 задание. Посчитать количество чисел в массиве ${reduce_count_num}`);

// На входе n – количество элементов массива, затем пользователь заполняет массив с клавиатуры.
// Используя метод reduce, объединить все строки в массиве в одну строку, разделенную запятыми.
let array_with_str = [];
for (let i = 0; i < n; i++) {
    let input = prompt(`Введите строку ${i + 1} из ${n}`);
    if (!isNaN(input)) {
        console.log(`Ошибка: '${input}' не является строкой. Попробуйте снова.`);
        i--;
        continue;
    }
    array_with_str.push(input);
}
const reduce_str_split = array_with_str.reduce((result, el, index) => {
    if (index === 0) return el;
    return `${result},${el}`;
}, '');
console.log(`6 задание. Oбъединить все строки в массиве ${reduce_str_split}`);

// На входе n – количество элементов массива, затем пользователь заполняет массив с клавиатуры.
// Используя метод reduce, найти максимальное число в массиве.
const reduce_max_arr = array_with_number.reduce((max, current) => {
    return current > max ? current : max;
}, 0);
console.log(`7 задание. Максимальное число в массиве ${reduce_max_arr}`);

// На входе n – количество элементов массива, затем пользователь заполняет массив с клавиатуры.
// Создать массив, в котором каждый элемент массива является произведением его индекса и
// значения. Использовать метод map.
const length_str_product = array_with_number.map((el, index) => el* index);
console.log(`8 задание. ${length_str_product}`);

// На входе n – количество элементов массива, затем пользователь заполняет массив с клавиатуры.
// Проверить, содержит ли массив только четные числа. Использовать метод every.
const every_chet_num = array_with_number.every((el) => el % 2 === 0 ? true : false);
console.log(`9 задание. Cодержит ли массив только четные числа - ${every_chet_num}`);

// На входе n – количество элементов массива, затем пользователь заполняет массив с клавиатуры.
// Проверить, содержит ли массив хотя бы одно положительное число. Использовать метод some.
const some_positive_num = array_with_number.some((el) => el > 0 ? true : false);
console.log(`10 задание. Cодержит ли массив хотя бы одно положительное число - ${some_positive_num}`);

// На входе n – количество элементов массива, затем пользователь заполняет массив с клавиатуры.
// Создать новый массив, состоящий из длин строк в исходном массиве. Использовать метод map.
const length_str = array_with_str.map((el) => el.length);
console.log(`11 задание. Создать новый массив, состоящий из длин строк в исходном массиве - ${length_str}`);

// На входе n – количество элементов массива, затем пользователь заполняет массив с клавиатуры.
// Вывести true, если все строки в массиве имеют длину более 3 символов. Использовать метод every.
const every_length_three = array_with_str.every((el) => el.length > 3 ? true : false);
console.log(`12 задание. Вывести true, если все строки в массиве имеют длину более 3 символов - ${every_length_three}`);

// На входе n – количество элементов массива, затем пользователь заполняет массив с клавиатуры.
// Создать новый массив, содержащий строки длиной менее 5 символов. Использовать метод filter.
const filter_arr = array_with_str.filter((el) => el.length < 5 ? el : null);
console.log(`13 задание. Создать новый массив, содержащий строки длиной менее 5 символов - ${filter_arr}`);

// На входе n – количество элементов массива, затем пользователь заполняет массив с клавиатуры.
// Использовать метод map для создания нового массива, где все строки преобразованы в верхний
// регистр.
const map_arr_upperCase = array_with_str.map((el) => el.toUpperCase());
console.log(`14 задание. Создать новый массив, где все строки преобразованы в верхний регистр. - ${map_arr_upperCase}`);

// На входе n – количество элементов массива, затем пользователь заполняет массив с клавиатуры.
// Использовать метод filter, чтобы создать новый массив, содержащий только элементы, которые
// являются положительными числами.
const filter_positive_num = array_with_number.filter((el) => el > 0 ? true : false);
console.log(`15 задание. Coздать массив, содержащий только положительными элементы - ${filter_positive_num}`);

// На входе n – количество элементов массива, затем пользователь заполняет массив с клавиатуры.
// Найти наименьшее число в массиве. Если в массиве нет чисел, вывести "Нет чисел". Использовать
// метод reduce.
const reduce_num_min = array_with_number.reduce((min, current) => {
    return current < min ? current : min;
}, array_with_number[0]);
console.log(`16 задание. Найти наименьшее число в массиве - ${reduce_num_min}`);
