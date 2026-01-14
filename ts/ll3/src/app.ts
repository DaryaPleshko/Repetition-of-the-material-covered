interface Iarray {
    id: number,
    title: string,
    count: number,
    price: number
}
const array = [
    { id: 1, title: 'Часы', count: 10, price: 500 },
    { id: 2, title: 'Смартфон', count: 33, price: 1500 },
    { id: 3, title: 'Моноблок', count: 6, price: 2200 },
    { id: 4, title: 'Ноутбук', count: 13, price: 3000 },
    { id: 5, title: 'Планшет', count: 22, price: 2100 },
]
// У вас есть массив объектов вида приведенного в приложении. Необходимо
// вывести все товары, количество которых больше 10
const productCount = (array: Iarray[]): Iarray[] => array.filter(el => el.count > 10);
console.log(productCount(array));

// У вас есть массив объектов вида приведенного в приложении. Необходимо
// вывести все товары в обратном порядке
const reverseArray = (array: Iarray[]): Iarray[] => array.reverse()
console.log(reverseArray(array));

// У вас есть массив объектов вида приведенного в приложении. Необходимо
// вывести только те товары из положения, количество которых внутри массива
// кратно 3
const productCountThree = (array: Iarray[]): Iarray[] => array.filter(el => el.count % 3 === 0);
console.log(productCountThree(array));

// У вас есть массив объектов вида приведенного в приложении. Необходимо
// вывести итоговую стоимость на складе.
// Итоговая стоимость = количество * цена + ...
const totalCost = (array: Iarray[]): number => array.reduce((sum, el) => sum + (el.count * el.price), 0);
console.log(totalCost(array));

// У вас есть массив объектов вида приведенного в приложении. Необходимо
// вывести товар с максимальным прайсом
const maxArray = (array: Iarray[]): Iarray => array.reduce((max, el) => el.price > max.price ? el : max);
console.log(maxArray(array));

// У вас есть массив объектов вида приведенного в приложении. Необходимо
// вывести средний прайс среди всех продуктов
const averagePrice = (array: Iarray[]): number => {
    const total = array.reduce((sum, el) => sum + el.price, 0);
    return total / array.length;
}
console.log(averagePrice(array));

// У вас есть массив объектов вида приведенного в приложении. Необходимо
// вывести тот товар, где количество * прайс является наибольшим значением
const maxCountArray = (array: Iarray[]): Iarray => array.reduce((max, el) => el.count * el.price > max.count * max.price ? el : max);
console.log(maxCountArray(array));

// У вас есть массив строковых значений почт. Необходимо вывести значения
// массива без дубликатов. Добавить проверки на тип данных, почту
const getUniqueEmailsReduce = (emails: string[]): string[] | string => {
    if (!Array.isArray(emails)) return 'Ошибка: ожидается массив';
    return emails.reduce<string[]>((unique, email) => {
        if (typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.toLowerCase())) return unique;
        if (!unique.includes(email.toLowerCase())) unique.push(email.toLowerCase());
        return unique;
    }, []);
};
console.log(getUniqueEmailsReduce([
    'user@example.com',
    'USER@EXAMPLE.COM',
    'user@example.com',
    'another@test.ru',
    'invalid-email',
    'test@domain.com',
    '',
    'valid@email.com',
    'user@example.com'
]));

// Реализовать функцию f: при вызове f(2, 3) -> вернет 5, при вызове f(2)(3), тоже
// вернет 5. Использовать каррирование
type CurriedFunction = {
    (a: number, b: number): number;
    (a: number): (b: number) => number;
};
const f: CurriedFunction = (a: number, b?: number): any => {
    if (b !== undefined) return a + b;
    return (b: number) => a + b;
};
console.log(f(2, 3)); 
console.log(f(2)(3));  

