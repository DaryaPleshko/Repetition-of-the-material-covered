// // На входе пустой объект. Выполните следующие шаги:
// // • Добавьте свойство id со значением 1.
// // • Добавьте свойство name со значением "udemy".
// // • Измените значение свойства name на "hschool".
// // • Удалите свойство name из объекта.
// const object_null = {};
// object_null.id = 1;
// object_null.name = 'udemy';
// object_null.name = 'hschool';
// delete object_null.name;
// console.log(`1 задание. ${object_null}`);

// // На входе объект. Необходимо вывести все ключи, которые являются числами.
// const mix_object = { 3: 1, "5": "b", "name": "c", 1: 2, 2: 4 };
// for (let key in mix_object) {
//     !isNaN(key) ? console.log(`2 задание. ${key}:${mix_object[key]}`) : null;
// }

// // На входе объект. Необходимо вывести все значения, которые являются числами
// for (let key in mix_object) {
//     !isNaN(mix_object[key]) ? console.log(`3 задание. ${key}:${mix_object[key]}`) : null;
// }

// // На входе объект. Необходимо вывести все значения, которые являются четными числами.
// for (let key in mix_object) {
//     typeof mix_object[key] === 'number' && mix_object[key] % 2 === 0 ? console.log(`4 задание. ${key}:${mix_object[key]}`) : null;
// }

// // На входе объект. Необходимо сформировать массив из всех ключей, которые являются нечетными
// // числами.
// for (let key in mix_object) {
//     typeof mix_object[key] === 'number' && key % 2 !== 0 ? console.log(`5 задание. ${key}:${mix_object[key]}`) : null;
// }

// // На входе объект. Необходимо удвоить все значения, которые являются числами.
// for (let key in mix_object) {
//     !isNaN(mix_object[key]) ? console.log(`6 задание. ${key}:${mix_object[key] * 2}`) : null;
// }

// // На входе объект. Необходимо проверить, пустой ли объект. Если объект пустой, вернуть false, если
// // содержит хотя бы одну пару (ключ: значение), вернуть true.
// let isEmpty = true;
// for (let key in mix_object) {
//     isEmpty = false;
//     break;
// }
// console.log(`7 задание. ${!isEmpty}`);

// // На входе объект. Необходимо посчитать количество пар (ключ: значение) в объекте.
// let number_of_pairs = 0;
// for (let key in mix_object) {
//     number_of_pairs += 1;
// }
// console.log(`8 задание. Результат: ${number_of_pairs}`);

// // На входе объект. Необходимо посчитать количество пар (ключ: значение), где значение является
// // числом, и вывести это количество.
// let number_of_pairs_num = 0;
// for (let key in mix_object) {
//     !isNaN(mix_object[key]) ? number_of_pairs_num += 1 : null;
// }
// console.log(`9 задание. Результат: ${number_of_pairs_num}`);

// // На входе объект с ключами name, age, birthday, значения которых – пустые строки. Необходимо
// // считать данные с клавиатуры и заполнить объект соответствующими данными, добавив проверки
// // на ввод.
// const obj_null_value = {
//     name: '',
//     age: '',
//     birthday: ''
// };

// for (let key in obj_null_value) {
//     let isValid = false;

//     while (!isValid) {
//         let value = prompt(`Введите ${key}`);

//         switch (key) {
//             case 'name':
//             case 'birthday':
//                 if (value !== '' && isNaN(value)) {
//                     obj_null_value[key] = value;
//                     isValid = true;
//                 } else alert(`Ошибка: ${key} не может быть пустым или числом`);
//                 break;

//             case 'age':
//                 const ageNum = Number(value);
//                 if (!isNaN(ageNum) && ageNum > 0) {
//                     obj_null_value[key] = ageNum;
//                     isValid = true;
//                 } else alert('Ошибка: возраст должен быть числом от 1 до 150');
//                 break;
//         }
//     }
// }
// console.log('10 задание. Заполненный объект:', obj_null_value);

// // На входе пустой объект. Необходимо ввести с клавиатуры два числа, затем добавить в объект ключ
// // avg со значением среднего арифметического введенных чисел.
// const avg_obj = {};
// const value_one = +prompt(`Значение 1`);
// const value_two = +prompt(`Значение 2`);

// for (let key in avg_obj) {
//     avg_obj.avg = (value_one + value_two) / 2;
// }
// console.log('11 задание. Заполненный объект:', avg_obj);

// // На входе пустой объект и количество элементов массива n. Введите с клавиатуры n чисел,
// // сформируйте массив, а затем добавьте в объект ключ sum, значением которого будет сумма
// // элементов массива. 
// const sum_obj = {};
// const n = +prompt(`Значение n`);
// let array_to_sum = [];
// for (let i = 0; i < n; i++) {
//     array_to_sum.push(Math.floor(Math.random() * 10));
// }
// const res_sum = array_to_sum.reduce((sum, el) => sum + el, 0);
// sum_obj.sum = res_sum;
// console.log('12 задание. Заполненный объект массива:', sum_obj);

// // На входе массив чисел. Необходимо сформировать объект, где ключ – это элемент массива, а
// // значение – true или false. Если число четное, то значение будет true, если нечетное – false.
// const array = [1, 2, 3, 4, 5, 6];
// const chet_nechet = {};
// for (let el of array) {
//     chet_nechet[el] = el % 2 === 0;
// }
// console.log('13 задание. Результат:', chet_nechet);

// // На входе массив чисел. Необходимо найти элемент, который повторяется наибольшее
// // количество раз. Если таких элементов несколько, можно вернуть любой из них.
// const arr_num = [1, 2, 3, 1, 2, 1].sort();
// let maxCount = 0;
// let maxElement = null;
// let currentCount = 1;
// for (let i = 0; i < arr_num.length; i++) {
//     if (i < arr_num.length && arr_num[i] === arr_num[i - 1]) {
//         currentCount++;
//     } else {
//         if (currentCount > maxCount) {
//             maxCount = currentCount;
//             maxElement = arr_num[0];
//         }
//         currentCount = 1;
//         arr_num[0] = arr_num[i];
//     }
// }
// console.log(`14 задание. Результат: ${maxElement} повторилось ${maxCount}`);

// Дан объект. С помощью Object.values() получите массив всех его значений и выведите его.
const obj_values = {
    id: 1,
    name: 'sasha',
    surname: 'ivanov',
    work: 'developer'
}
console.log(`15 задание. Результат: ${Object.values(obj_values)}`);

// Дан объект и переменная с названием одного из свойств. Используйте hasOwnProperty,
// чтобы проверить, существует ли это свойство в объекте.
const hasOwnProperty_val = 'work';
console.log(`16 задание. Результат: ${obj_values.hasOwnProperty(hasOwnProperty_val)}`);

// Дан объект с информацией о товарах (например, { product1: 10, product2: 5, product3: 8 }).
// Используя Object.values(), посчитайте общее количество товаров.
const product_obj = {
    product1: 10,
    product2: 20,
    product3: 5,
    product4: 1,
}
const arr_val_product = Object.values(product_obj);

const sum_product = arr_val_product.reduce((sum, el) => sum + el, 0);
console.log(`17 задание. Результат: ${sum_product}`);

// Дан объект с оценками студентов (например, { Анна: 95, Иван: 88, Мария: 92 }) и число n –
// минимальная оценка. С помощью Object.values() и filter() выберите оценки, которые выше n,
// и выведите их.
const grade_stud = {
    Анна: 95,
    Иван: 88,
    Мария: 92,
    Артем: 45,
    Катя: 38
}
const min_grade = 50;
const filter_grade = Object.values(grade_stud).filter((el) => el > min_grade);
console.log(`18 задание. Результат: ${filter_grade}`);

// Преобразуйте объект с данными о фруктах (например, { яблоко: 'красное', банан: 'желтый',
// апельсин: 'оранжевый' }) в массив пар [ключ, значение] с помощью Object.entries().
const fruits_obj = {
    яблоко: 'красное',
    банан: 'желтый',
    апельсин: 'оранжевый'
}
console.log(`19 задание. Результат: ${Object.entries(fruits_obj)}`);

// Дан объект и строка. Используя Object.keys(), проверьте, существует ли в объекте свойство с
// таким именем. Выведите true или false.
console.log(`20 задание. Результат: ${Object.keys(obj_values).includes(hasOwnProperty_val)}`);

// На вход подается число. Необходимо каждое значение возвести в степень индекса и
// вычислить сумму.
const num = String(12345);
let result_num_sqrt = 0;
for (let i = 0; i < num.length; i++) {
    result_num_sqrt += num[i] ** i;
}
console.log(`21 задание. Результат: ${result_num_sqrt}`);

// Даны два объекта. Создайте новый объект, включив в него только те свойства, которые есть в
// обоих исходных объектах. Используйте hasOwnProperty для проверки.
const obj_1 = {
    id: 1,
    name: 'dasha',
    gender: 'girl'
}
const obj_2 = {
    id: 2,
    name: 'sasha',
    work: 'dev'
}
const commonProperties = {};
for (let key in obj_1) {
    if (obj_2.hasOwnProperty(key)) commonProperties[key] = obj_1[key];
}
console.log('22 задание. Результат:', commonProperties);

// Есть объект с информацией о пользователе. С помощью деструктуризации получите имя и
// возраст, и выведите их.
const { id, name, surname, work } = obj_values;
console.log(`23 задание. Результат: ${work}`);

// Дан массив. Используя деструктуризацию, извлеките его первый и второй элементы, и
// выведите их.
const array = ['red', 'girl', 1];
const [apple, gender] = array;
console.log(`24 задание. Результат: ${apple}, ${gender}`);
