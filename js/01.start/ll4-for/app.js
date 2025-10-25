// Используя цикл for отобразите числа от 0 до 100
for (let i = 0; i <= 100; i++) {
    console.log(`1 задание - ${i}`);
}

// Используя цикл for отобразите числа от 10 до 20
for (let i = 10; i <= 20; i++) {
    console.log(`2 задание - ${i}`);
}

// Используя цикл for отобразите числа кратные 3 в диапазоне от 10 до 20
for (let i = 10; i <= 20; i++) {
    i % 3 === 0 ? console.log(`3 задание - ${i}`) : null;
}

// На входе массив чисел [1, 2, 3, 4, 5, 6, 7, 8, 9] → Результат: Число 1, Число 2..
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < array.length; i++) {
    console.log(`4 задание - Число ${array[i]}`);
}

// Отобразите все четные элементы массива [1, 2, 3, 4, 5, 6, 7, 8, 9]
for (let i = 0; i < array.length; i++) {
    array[i] % 2 === 0 ? console.log(`5 задание - ${array[i]}`) : null;
}

// На входе массив [1, 'hi', 2, 'hello', 3]. Переберите все элементы массива циклом for. 
// Каждый элемент проверить на isNaN
const array_with_num_str = [1, 'hi', 2, 'hello', 3];
for (let i = 0; i < array_with_num_str.length; i++) {
    isNaN(array_with_num_str[i]) ? console.log(`6 задание - Строка ${array_with_num_str[i]}`) : console.log(`6 задание - Число ${array_with_num_str[i]}`);
}

// Пользователь вводит строку, представляющую число. Необходимо просуммировать все цифры в
// строке.
const str_value = '623';
let res_num = 0;
for (let i = 0; i < str_value.length; i++) {
    res_num += Number(str_value[i]);
}
console.log(`7 задание - ${res_num}`);

// Дан статичный массив чисел. Найдите произведение всех элементов массива с использованием
// цикла for.
let res_arr = 1;
for (let i = 0; i < array.length; i++) {
    res_arr *= array[i];
}
console.log(`8 задание - ${res_arr}`);

// Пользователь вводит число. Выведите все числа от 1 до введенного числа, которые кратны 3.
const num_value = 9;
let result = '';
for (let i = 1; i <= num_value; i++) {
    i % 3 === 0 ? result += (result ? ', ' : '') + i : null;
}
console.log(`9 задание - ${result}`);

// Дан статичный массив и число, вводимое пользователем. Проверьте с помощью цикла for и
// оператора if, есть ли это число в массиве. Если числа нет, то ничего не отображайте в консоль.
let res_num_in_arr = 0;
for (let i = 0; i < array.length; i++) {
    array[i] === num_value ? res_num_in_arr += 1 : null;
}
res_num_in_arr > 0 ? console.log(`10 задание - Число найдено`) : console.log(`10 задание - Число не найдено`);

// Найдите максимальное значение в статичном массиве, используя цикл for.
let res_arr_max = 0;
for (let i = 0; i < array.length; i++) {
    i === 1 ? res_arr_max += array[i] : null;
    array[i] > res_arr_max ? res_arr_max = array[i] : null;
}
console.log(`11 задание - max = ${res_arr_max}`);

// На входе число n – кол-во случайных элементов. Выведите n случайных целых чисел от 0 до 100,
// используя Math.random().
let res_random = ''
for (let i = 1; i <= num_value; i++) {
    res_random += Math.floor(Math.random() * 99) + ',';
}
console.log(`12 задание - ${res_random}`);

// Пользователь вводит строку и число n. Повторите строку n раз с помощью цикла for.
let res_repeat = ''
for (let i = 1; i <= num_value; i++) {
    res_repeat += str_value;
}
console.log(`13 задание - ${res_repeat}`);

// Выведите числа от 0 до 100 с помощью цикла for. Если число кратно 7, пропустите его и перейдите
// к следующей итерации.
for (let i = 0; i <= 100; i++) {
    if (i % 7 !== 0) console.log(`14 задание - ${i}`);
    else continue;
}

// Используя цикл for, выведите числа от 1 до 50. Если число одновременно кратно 2 и 3, пропустите
// его и перейдите к следующей итерации.
for (let i = 1; i <= 50; i++) {
    if (i % 2 !== 0 && i % 3 !== 0) console.log(`15 задание - ${i}`);
    else continue;
}

// Напишите цикл for, который выводит числа от 1 до 100. Если число одновременно кратно 7 и 9,
// прервите выполнение цикла.
for (let i = 1; i <= 100; i++) {
    if (i % 7 !== 0 && i % 9 !== 0) console.log(`16 задание - ${i}`);
    else break;
}

// Напишите цикл for, который выводит числа от 1 до 100. Если число кратно 4, но не кратно 8,
// пропустите его и перейдите к следующей итерации. Если число кратно 5 и 10 одновременно,
// остановите цикл полностью.
for (let i = 1; i <= 100; i++) {
    if (i % 4 === 0 && i % 8 !== 0) continue;
    else if (i % 5 === 0 && i % 10 === 0) break;
    else console.log(`17 задание - ${i}`)
}

// Дан массив, содержащий как числа, так и строки. Используя цикл for,
// переберите элементы массива.
//  Если элемент является строкой, пропустите его.
//  Если число меньше 10, выведите "Маленькое число".
//  Если число от 10 до 20, выведите "Среднее число".
//  Если число больше 20, выведите "Большое число".
for (let i = 0; i < array_with_num_str.length; i++) {
    if (isNaN(array_with_num_str[i])) continue;
    else if (array_with_num_str[i] < 10) console.log(`18 задание - Маленькое число ${i}`);
    else if (array_with_num_str[i] >= 10 && array_with_num_str[i] < 20) console.log(`18 задание - Среднее число ${i}`);
    else if (array_with_num_str[i] >= 20) console.log(`18 задание - Большое число ${i}`);
}

// Дан массив оценок (чисел от 1 до 5) [5, 4, 3, 5, 2, 4, 1, 3, 5, 2, 4]. Необходимо подсчитать, сколько раз 5
// встречается в массиве. Используйте цикл for для итерации по массиву и оператор switch для
// подсчета количества каждой оценки.
const integer_num = [5, 4, 3, 5, 2, 4, 1, 3, 5, 2, 4];
let val_one = 0;
let val_two = 0;
let val_three = 0;
let val_four = 0;
let val_five = 0;

for (let i = 0; i < integer_num.length; i++) {
    switch (integer_num[i]) {
        case 1:
            val_one += 1;
            break;
        case 2:
            val_two += 1;
            break;
        case 3:
            val_three += 1;
            break;
        case 4:
            val_four += 1;
            break;
        case 5:
            val_five += 1;
            break;

        default:
            console.log('Не верный ввод');
            break;
    }
}

console.log(`19 задание - ${integer_num}; 1-ц = ${val_one}, 2-к = ${val_two}, 3-к = ${val_three}, 4-к = ${val_four}, 5-к = ${val_five}`);

// Дан массив с названиями дней недели ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday",
// "Saturday", "Sunday"]. Вам нужно с помощью цикла for пройти по каждому элементу массива и с
// помощью конструкции switch определить, будний это день или выходной, а затем вывести
// соответствующую информацию на экран.
const days_of_the_week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
for (let i = 0; i < days_of_the_week.length; i++) {
    switch (days_of_the_week[i]) {
        case 'Monday':
        case 'Tuesday':
        case 'Wednesday':
        case 'Thursday':
        case 'Friday':
            console.log(`20 задание - ${days_of_the_week[i]} - Будний день`);
            break;
        case 'Saturday':
        case 'Sunday':
            console.log(`20 задание - ${days_of_the_week[i]} - Bыходной день`);
            break;

        default:
            console.log(`20 задание - ${days_of_the_week[i]} - Не верная запись`);
            break;
    }
}

// Дан статичный массив целых чисел. Напишите программу, которая с помощью цикла for и
// операторов if проверяет, сколько в массиве четных и нечетных чисел.
let chet_num = 0;
let ne_chet_num = 0;
for (let i = 0; i < integer_num.length; i++) {
    integer_num[i] % 2 === 0 ? chet_num += 1 : ne_chet_num += 1;
}
console.log(`21 задание - ${integer_num} = Четные: ${chet_num}, Нечетные:${ne_chet_num}`);

// Дана строка. Напишите программу, которая с помощью цикла for подсчитывает количество
// символов в строке без учета пробелов.
const string_val = 'Hello World';
let symbol_str = 0;
for (let i = 0; i < string_val.length; i++) {
    string_val[i] !== '' ? symbol_str += 1 : null;
}
console.log(`22 задание - ${string_val} = Количество символов: ${symbol_str}}`);

// Дан статичный массив чисел. Напишите программу, которая с помощью цикла for находит сумму
// всех чисел, кратных 3.
let sum_num = 0;
for (let i = 0; i < integer_num.length; i++) {
    integer_num[i] % 3 === 0 ? sum_num += integer_num[i] : null;
}
console.log(`23 задание - ${integer_num} = Сумма чисел, кратных 3: ${sum_num}}`);

// Дана строка. Напишите программу, которая с помощью цикла for подсчитывает количество
// гласных букв в строке. Гласные: a, e, i, o, u.
let number_of_vowels = 0;
for (let i = 0; i < string_val.length; i++) {
    const char_val = string_val[i].toLowerCase();
    if ('aeiou'.includes(char_val)) number_of_vowels += 1;
}
console.log(`24 задание - ${string_val} = Количество гласных: ${number_of_vowels}`);

// Дана строка. Напишите программу, которая с помощью цикла for подсчитывает количество
// согласных букв в строке. Согласные: b, c, d, f, g, h, j, k, l, m, n, p, q, r, s, t, v, w, x, y, z.
let number_of_consonants = 0;
for (let i = 0; i < string_val.length; i++) {
    const char = string_val[i].toLowerCase();
    if ('bcdfghjklmnpqrstvwxyz'.includes(char)) number_of_consonants += 1;
}
console.log(`25 задание - ${string_val} = Количество согласных: ${number_of_consonants}`);

// Дан статичный массив чисел. Напишите программу, которая с помощью цикла for и оператора
// continue подсчитывает сумму всех положительных чисел в массиве, пропуская отрицательные
// числа.
const arr_num = [1, -2, 3, -4, 5, -6];
let sum_num_polozhitel = 0;
for (let i = 0; i < arr_num.length; i++) {
    arr_num[i] > 0 ? sum_num_polozhitel += arr_num[i] : null;
}
console.log(`26 задание - ${arr_num} = Сумма положительных чисел: ${sum_num_polozhitel}`);
