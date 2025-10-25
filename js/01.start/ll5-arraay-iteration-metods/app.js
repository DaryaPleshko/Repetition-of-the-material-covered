// На входе 5 значений, вводимых пользователем с клавиатуры,
// которые заполняют массив. Создать новый массив, содержащий только числа. Если длина нового
// массива равна 0, вывести 'Массив пуст’.
const mixed_array = [2, 'a', 4, 'b', 6];
const filter_mix_array = [];
for (let i = 0; i < mixed_array.length; i++) {
    mixed_array == '' ? console.log(`Массив пуст`) : null;
    !isNaN(mixed_array[i]) ? filter_mix_array.push(mixed_array[i]) : null;
}
console.log(`1 задание. Массив, содержащий только числа: [${filter_mix_array}]`);

// На входе 7 чисел, из которых первые 5 заполняют массив, а последние 2 определяют исключаемые
// значения. Создать массив из чисел, не равных двум исключаемым. Если длина нового массива
// равна 0, вывести 'Массив пуст'.
// Использовать метод filter
const num_array = [];
for (let i = 0; i < 7; i++) {
    let input = +prompt(`Введите число ${i + 1} из 7`);
    if (isNaN(input)) {
        console.log(`Ошибка: '${input}' не является числом. Попробуйте снова.`);
        i--;
        continue;
    }
    num_array.push(input);
}
let baseArray = num_array.slice(0, 5);
let excludeValues = num_array.slice(5, 7);

const arr_not_equal_excluded = baseArray.filter((el) => {
    return el !== excludeValues[0] && el !== excludeValues[1];
});
arr_not_equal_excluded.length === '' ? console.log('Массив пуст') : console.log(`2 задание. Массив: [${num_array}] без исчесляемых: [${arr_not_equal_excluded}]`);

// На входе n – количество элементов массива, затем пользователь вводит значения с клавиатуры.
// Вывести массив без дублирования используя метод forEach. После каждого введенного элемента проверять, что введено число.
const number_of_val = +prompt(`Введите число n – количество элементов массива`);
let array_user = [];
for (let i = 0; i < number_of_val; i++) {
    let input = +prompt(`Введите число ${i + 1} из ${number_of_val}`);
    if (isNaN(input)) {
        console.log(`Ошибка: '${input}' не является числом. Попробуйте снова.`);
        i--;
        continue;
    }
    array_user.push(input);
}
let array_not_repeat = [];
array_user.forEach((el) => {
    !array_not_repeat.includes(el) ? array_not_repeat.push(el) : null;
});
console.log(`3 задание. Массив ${array_user} без дублирования: [${array_not_repeat}]`);

// На входе n – количество элементов массива, затем пользователь заполняет массив с клавиатуры.
// Вывести произведение всех элементов массива. Добавить проверку на ввод только чисел.
// Использовать методы forEach или reduce.
const num_of_val_input = +prompt(`Введите число n – количество элементов массива`);
let arr_user_input = [];
for (let i = 0; i < num_of_val_input; i++) {
    let input = +prompt(`Введите число ${i + 1} из ${num_of_val_input}`);
    if (isNaN(input)) {
        console.log(`Ошибка: '${input}' не является числом. Попробуйте снова.`);
        i--;
        continue;
    }
    arr_user_input.push(input);
}
let product_of_numbers = 1;
arr_user_input.forEach((el) => {
    product_of_numbers *= el;
});
const res_product_num = arr_user_input.reduce((product, el) => {
    return product * el;
});
console.log(`4 задание. Массив ${arr_user_input}. Произведение forEach = ${product_of_numbers}, Произведение reduce = ${res_product_num}`);

// На входе n – количество элементов массива, затем пользователь заполняет массив с клавиатуры.
// Используя метод some, вывести true, если хотя бы один элемент массива является числом.
const value_input_num_of_arr = +prompt(`Введите число n – количество элементов массива`);
let value_input = [];
for (let i = 0; i < value_input_num_of_arr; i++) {
    let input = prompt(`Введите число ${i + 1} из ${value_input_num_of_arr}`);
    value_input.push(input);
}
const num_arr_some = value_input.some((el) => {
    return !isNaN(el) ? true : false;
});
console.log(`5 задание. Массив ${value_input}. вывести true, если хотя бы один элемент массива является числом = ${num_arr_some}`);

// На входе n – количество элементов массива, затем пользователь заполняет массив с клавиатуры.
// Используя метод every, вывести true, если все элементы массива являются числами, иначе false.
const val_num_ = +prompt(`Введите число n – количество элементов массива`);
let value_input_num_str = [];
for (let i = 0; i < val_num_; i++) {
    let input = prompt(`Введите число ${i + 1} из ${val_num_}`);
    value_input_num_str.push(input);
}
const num_arr_every = value_input_num_str.every((el) => {
    return !isNaN(el) ? true : false;
});
console.log(`6 задание. Массив ${value_input_num_str}. вывести true, если все элементы массива являются числами = ${num_arr_every}`);

// На входе n – количество элементов массива, затем пользователь заполняет массив с клавиатуры.
// Вывести сумму всех элементов массива. Добавить проверку на ввод только чисел. 
const val_of_sum_user = +prompt(`Введите число n – количество элементов массива`);
let val_of_sum = [];
for (let i = 0; i < val_of_sum_user; i++) {
    let input = +prompt(`Введите число ${i + 1} из ${val_of_sum_user}`);
    val_of_sum.push(input);
}
const sum_arr_reduce = val_of_sum.reduce((sum, el) => {
    return sum + el;
}, 0);
console.log(`7 задание. Массив ${val_of_sum}. Вывести сумму всех элементов массива = ${sum_arr_reduce}`);

// На входе n – количество элементов массива, затем пользователь заполняет массив с клавиатуры.
// Используя метод map, вывести массив строк, определяющих четность или нечетность чисел.
const n = +prompt(`Введите число n – количество элементов массива`);
let arr_chet_nechet = [];
for (let i = 0; i < n; i++) {
    let input = +prompt(`Введите число ${i + 1} из ${n}`);
    arr_chet_nechet.push(input);
}
const arr_chet_nechet_map = arr_chet_nechet.map((el) => {
    return el % 2 === 0 ? 'четное' : 'нечетное';
});
console.log(`8 задание. Массив ${arr_chet_nechet}. Вывести массив строк, определяющих четность или нечетность чисел = ${arr_chet_nechet_map}`);

// На входе n – количество элементов массива, затем пользователь заполняет массив с клавиатуры.
// Создать новый массив, содержащий только те строки, которые начинаются с символов a или h.
// Проверить ввод только текстовых значений. Использовать метод filter.
const num_val = +prompt(`Введите число n – количество элементов массива`);
let arr_mixed_str = [];
for (let i = 0; i < num_val; i++) {
    let input = prompt(`Введите строку ${i + 1} из ${num_val}`);
    if (!isNaN(input) || input.trim() === '') {
        console.log(`Ошибка: '${input}' не является строкой. Попробуйте снова.`);
        i--;
        continue;
    }
    arr_mixed_str.push(input);
}
const filteredArray = arr_mixed_str.filter(str => {
    const firstChar = str[0].toLowerCase();
    return firstChar === 'a' || firstChar === 'h';
});
console.log(`9 задание. Исходный массив: [${arr_mixed_str}]. Результат: [${filteredArray}]`);

// На входе n – количество элементов массива, затем пользователь заполняет массив arr с
// клавиатуры. В памяти также есть статичная переменная со значением "javascript". Создать новый
// массив из строк массива arr, которые включают значение переменной "javascript". Проверить ввод
// только текстовых значений. Использовать метод forEach.
const static_val = 'javascript';
let filtered_array_foreach = [];
arr_mixed_str.forEach((str) => str.includes(static_val) ? filtered_array_foreach.push(str) : null);
console.log(`10 задание. Исходный массив: [${arr_mixed_str}]. Результат: [${filtered_array_foreach}]`);

// На входе n – количество элементов массива, затем пользователь заполняет массив с клавиатуры.
// Создать новый массив, где каждый элемент преобразуется в строку вида #name. Использовать
// метод map.
const map_val_arr = arr_mixed_str.map((str) => `#${str}`);
console.log(`11 задание. Исходный массив: [${arr_mixed_str}]. Результат: [${map_val_arr}]`);

// На входе n – количество элементов массива, затем пользователь заполняет массив с клавиатуры.
// Значения могут быть строкового или числового типа данных. Составить два массива: один из строк,
// другой — из чисел. Использовать метод forEach.
let arrayNum = [];
let arrayStr = [];
mixed_array.forEach((str) => isNaN(str) ? arrayStr.push(str) : arrayNum.push(str));
console.log(`12 задание. Исходный массив: [${mixed_array}]. Результат: [${arrayNum}], [${arrayStr}]`);

// На входе n – количество элементов массива, затем пользователь заполняет массив с клавиатуры.
// Создать новый массив, где каждый элемент возведен в квадрат. Использовать метод map.
const map_sqrt = array_user.map((el) => el ** 2);
console.log(`13 задание. Исходный массив: [${array_user}]. Результат: [${map_sqrt}]`);
