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
// const filterNumbers = (): number[] => {
//     const values: (number | string)[] = [];
//     for (let i = 0; i < 5; i++) {
//         const input = prompt(`Значение ${i + 1}:`) || '';
//         const num = Number(input);
//         values.push(isNaN(num) ? input : num);
//     }
//     return values.filter((el): el is number => typeof el === 'number');
// };
// console.log("Числа:", filterNumbers());

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
const addExclamation = (arr: string[]) => {
    const result: string[] = [];
    arr.forEach((item) => result.push('!' + item));
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
interface Ibook {
    id: number,
    author: string,
    year: number,
    name: string
}
const searchAuthor = (array: Ibook[]): Ibook[] => array.filter(el => el.author === 'Булгаков');
console.log(searchAuthor([
    {
        id: 1,
        author: 'Булгаков',
        year: 1925,
        name: 'Собачье сердце'
    },
    {
        id: 2,
        author: 'Толстой',
        year: 1869,
        name: 'Война и мир'
    },
    {
        id: 3,
        author: 'Булгаков',
        year: 1929,
        name: 'Мастер и Маргарита'
    },
    {
        id: 4,
        author: 'Достоевский',
        year: 1866,
        name: 'Преступление и наказание'
    }]));

// Создайте массив объектов, представляющих книги, и отобразите книги где цена
// каждой > 350 (price – одно из полей объекта)
interface IbookPrice {
    id: number,
    author: string,
    year: number,
    name: string,
    price: number
}
const searchPriceBook = (array: IbookPrice[]): IbookPrice[] => array.filter(el => el.price > 350);
console.log(searchPriceBook([
    {
        id: 1,
        author: 'Булгаков',
        year: 1925,
        name: 'Собачье сердце',
        price: 250
    },
    {
        id: 2,
        author: 'Толстой',
        year: 1869,
        name: 'Война и мир',
        price: 450
    },
    {
        id: 3,
        author: 'Булгаков',
        year: 1929,
        name: 'Мастер и Маргарита',
        price: 525
    },
    {
        id: 4,
        author: 'Достоевский',
        year: 1866,
        name: 'Преступление и наказание',
        price: 550
    }]));

// Создайте массив объектов, представляющих книги, и найдите книгу с самым
// большим количеством страниц (count – одно из полей объекта)
interface IbookLength {
    id: number,
    author: string,
    year: number,
    name: string,
    price: number,
    length: number
}
const searchLengthBook = (array: IbookLength[]): IbookLength => array.reduce((maxBook, currentBook) => currentBook.length > maxBook.length ? currentBook : maxBook);
console.log(searchLengthBook([
    {
        id: 1,
        author: 'Булгаков',
        year: 1925,
        name: 'Собачье сердце',
        price: 250,
        length: 330
    },
    {
        id: 2,
        author: 'Толстой',
        year: 1869,
        name: 'Война и мир',
        price: 450,
        length: 1205
    },
    {
        id: 3,
        author: 'Булгаков',
        year: 1929,
        name: 'Мастер и Маргарита',
        price: 525,
        length: 986
    },
    {
        id: 4,
        author: 'Достоевский',
        year: 1866,
        name: 'Преступление и наказание',
        price: 550,
        length: 1200
    }]));

// Создайте массив объектов, представляющих сотрудников, с полями "имя" и
// "зарплата". Найдите среднюю зарплату всех сотрудников.
interface Iemployees {
    name: string,
    salary: number,
    profession: string,
    position: string
}
const averageSalary = (array: Iemployees[]): number => array.reduce((sum, el) => el.salary + sum, 0);
console.log(averageSalary([
    {
        name: 'Иван Петров',
        salary: 85000,
        profession: 'Разработчик',
        position: 'Middle'
    },
    {
        name: 'Анна Сидорова',
        salary: 120000,
        profession: 'Аналитик',
        position: 'Senior'
    },
    {
        name: 'Сергей Иванов',
        salary: 55000,
        profession: 'Тестировщик',
        position: 'Junior'
    },
    {
        name: 'Мария Козлова',
        salary: 95000,
        profession: 'Дизайнер',
        position: 'Middle'
    },
    {
        name: 'Алексей Смирнов',
        salary: 110000,
        profession: 'Менеджер проектов',
        position: 'Senior'
    }
]));

// Дан массив объектов с полями "название", "цена" и "количество". Найдите
// суммарную стоимостью всех товаров учитывая количество каждого.
// Итог = цена_1_товара * кол-во_1_товара + цена_2_товара * кол-во_2_товара + ...
interface Ishop {
    product: string,
    price: number,
    quantity: number
}
const shopSumProduct = (array: Ishop[]): number => {
return array.reduce((total, item) => total + (item.price * item.quantity), 0);
}
console.log(shopSumProduct([
    {
        product: 'Хлеб',
        price: 50,
        quantity: 10
    },
    {
        product: 'Молоко',
        price: 80,
        quantity: 5
    },
    {
        product: 'Яйца',
        price: 120,
        quantity: 2
    },
    {
        product: 'Сыр',
        price: 350,
        quantity: 3
    },
    {
        product: 'Кофе',
        price: 450,
        quantity: 1
    }
]));

