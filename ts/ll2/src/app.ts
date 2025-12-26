// Создайте массив чисел и найдите сумму всех нечетных элементов в массиве.
const oddNumber = (array: number[]) => {
    return array
        .filter(el => el % 2 === 1)
        .reduce((sum, el) => sum + el, 0);
};
console.log(oddNumber([1, 2, 3, 4, 5, 6, 7, 8]));

// Создайте массив строк и выведите на экран все элементы, которые содержат
// букву 'a'.
const isFilterVowel = (array: string[]) => array.filter(el => el.includes('a'));
console.log(isFilterVowel(["apple", "banana", "cherry", "date", "grape", "kiwi", "orange"]));

// На входе динамичный массив чисел. Используя reduce выведите сумму чисел
// массива
const sumOfElinArr = (array: number[]) => array.reduce((sum, el) => sum + el, 0);
console.log(sumOfElinArr([1, 2, 3, 4, 5]));

// Создайте динамический массив строк. Используя Some выведите true в случае
// если хотя бы 1 элемент массива имеет длину > 5 символов.
const isBigLength = (array: string[]) => array.some(el => el.length >= 5);
console.log(isBigLength(['hi', 'hello', 'world']));

// Создайте массив чисел и найдите в нем все числа, которые делятся на 3 и не
// делятся на 2.
const isHunkyEl = (array: number[]) => array.filter(el => el % 2 === 0 || el % 3 === 0);
console.log(isHunkyEl([1, 2, 3, 4, 5, 6, 7, 8]));

// Создайте массив строк и объедините все элементы в одну строку без пробелов.
const concatenationOfStrings = (array: string[]) => {
    let str: string = '';
    for (let i = 0; i < array.length; i++) {
        str += array[i];
    }
    return str;
};
console.log(concatenationOfStrings(["apple", "banana", "cherry", "date"]));

// На входе 5 значений. Все эти значения пользователь вводит с клавиатуры и
// заполняет массив. Необходимо создать массив только из чисел.
const filterNumbers = (): number[] => {
    const values: (number | string)[] = [];
    for (let i = 0; i < 5; i++) {
        const input = prompt(`Значение ${i + 1}:`) || '';
        const num = Number(input);
        values.push(isNaN(num) ? input : num);
    }
    return values.filter((el): el is number => typeof el === 'number');
};
console.log("Числа:", filterNumbers());

// Создайте массив строк и проверьте, есть ли в нем хотя бы одно слово-палиндром.
const isPalindrom = (array: string[]) => array.some(el => el === el.split('').reverse().join(''));
console.log(isPalindrom(['lol', 'kot', 'шалаш', 'hello']));

// Создайте массив из чисел и строк и удалите из него все повторяющиеся
// элементы, оставив только уникальные значения.
const isUniqSort = (array: (number | string)[]) => {
    const uniqArray: (number | string)[] = [];
    const sortArray = array.sort();
    for (let i = 0; i < sortArray.length; i++) {
        if (sortArray[i] !== sortArray[i + 1]) uniqArray.push(sortArray[i]);
    }
    return uniqArray;
};
console.log(isUniqSort([1, 1, 3, 1, 'lolo', 6, 'lolo']));

// На входе динамичный массив строк. Используя every выведите true если все
// элементы массива соответствуют регулярному выражению почты
const isTrueEmail = (array: string[]) => array.every(el => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(el));
console.log(isTrueEmail(['jane23_@mail.ru', 'ketty.pl@mail.ru']));

// Создайте массив чисел и найдите сумму элементов, находящихся на нечетных
// позициях (индексах) массива.
const sumElIndexOdd = (array: number[]) => {
    const sortArray: number[] = []
    for (let i = 0; i < array.length; i++) {
        if (i % 2 === 1 || i === 0) sortArray.push(array[i]);
    }
    return sortArray;
};
console.log(sumElIndexOdd([1, 2, 3, 4, 5, 6, 7]));

// На входе динамичный массив чисел. Используя map выведите массив строк
// четности и нечетности, в соответствии со значением числа:
// [1, 2, 3, 4, 5, 6] -> [“нечет”, “чет”, “нечет”, “чет”, “нечет”, “чет”]
const numEvenOrNo = (array: number[]) => {
    const sortArray: string[] = []
    for (let i = 0; i < array.length; i++) {
        (array[i] % 2 === 0) ? sortArray.push('чет') : sortArray.push('нечет');
    }
    return sortArray;
};
console.log(numEvenOrNo([1, 2, 3, 4, 5, 6, 7]));

// На входе динамичный массив строк. Используя forEach создайте новый массив из
// элементов, каждое значение которого имеет вид !name
// [“hschool”, “company”] -> [“!hschool”, “!company”]
const addExclamation = (arr: string[])=> {
    const result: string[] = [];
    arr.forEach((item) =>  result.push('!' + item));
    return result;
};

console.log(addExclamation(["hschool", "company"])); 
console.log(addExclamation(["hello", "world", "test"]));

// Создайте массив чисел и определите, является ли он строго возрастающей
// последовательностью.
const isStrictlyIncreasing = (arr: number[]) => {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] <= arr[i - 1]) return false;
    }
    return true;
};

console.log(isStrictlyIncreasing([1, 2, 3, 4, 5]));      
console.log(isStrictlyIncreasing([1, 2, 2, 3, 4]));      

// Создайте массив объектов, представляющих книги, и найдите книгу где автор
// Булгаков (author – одно из полей объекта)

// Создайте массив объектов, представляющих книги, и отобразите книги где цена
// каждой > 50 (price – одно из полей объекта)

// Создайте массив объектов, представляющих книги, и найдите книгу с самым
// большим количеством страниц (count – одно из полей объекта)

// Напишите программу, которая находит и выводит длину наиболее длинного
// слова в заданной строке.

// Создайте массив объектов, представляющих сотрудников, с полями "имя" и
// "зарплата". Найдите среднюю зарплату всех сотрудников.

// Дан массив объектов с полями "название", "цена" и "количество". Найдите
// суммарную стоимостью всех товаров учитывая количество каждого.
// Итог = цена_1_товара * кол-во_1_товара + цена_2_товара * кол-во_2_товара + ...