// Создайте класс Rectangle, который содержит свойства width и height, а также метод
// getArea(), который возвращает площадь прямоугольника (ширина * высота). Создайте
// экземпляр класса Rectangle и выведите его площадь.
class Rectangle {
    width: number;
    height: number;
    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }
    getArea(): number {
        return this.width * this.height;
    }
}
const rectangle = new Rectangle(20, 10);
console.log(rectangle.getArea());

// Создайте класс Calculator, который содержит методы add() (сложение), subtract() (вычитание),
// multiply() (умножение) и divide() (деление). Создайте экземпляр класса Calculator и
// выполните несколько операций.
class Calculator {
    value1: number;
    value2: number;
    constructor(value1: number, value2: number) {
        this.value1 = value1;
        this.value2 = value2;
    }
    add(): number {
        return this.value1 + this.value2;
    }
    subtract(): number {
        return this.value1 - this.value2;
    }
    multiply(): number {
        return this.value1 * this.value2;
    }
    divide(): number {
        return this.value1 / this.value2;
    }
}
const calculator = new Calculator(3, 4);
console.log(calculator.add());
console.log(calculator.subtract());
console.log(calculator.multiply());
console.log(calculator.divide());

// Создайте класс CircleR, который содержит свойство radius (радиус круга) и метод getArea()
// (вычисление площади круга). Создайте экземпляр класса CircleR и выведите площадь
// окружности. Площадь круга: π * r^2
class CircleR {
    radius: number;
    constructor(radius: number) {
        this.radius = radius;
    }
    getArea(): number {
        return 3.14 * (this.radius ** 2)
    }
}
const circleR = new CircleR(6);
console.log(circleR.getArea());

// Создайте класс Product, который содержит объект product (продукт) с полями и price (цена
// продукта), title (название продукта). Реализуйте метод displayProductInfo(), который выводит
// массив продуктов, где цена > 20. Создайте экземпляр класса Product и вызовите метод
// displayProductInfo().
interface Iproduct {
    price: number;
    title: string;
}
class Product {
    product: Iproduct[]
    constructor(product: Iproduct[]) {
        this.product = product;
    }
    displayProductInfo() {
        return this.product.filter(el => el.price > 20);
    }
}
const product = new Product([
    { price: 80, title: 'Молоко' },
    { price: 40, title: 'Конфеты' },
    { price: 50, title: 'Кефир' },
    { price: 10, title: 'Хлеб' }
]);
console.log(product.displayProductInfo());

// Создайте класс Library, который содержит список книг. Каждая книга представляет собой
// объект с такими свойствами, как title, author, year, genre. Класс должен содержать следующие
// методы:
// addBook(book) — добавление книги в библиотеку.
// removeBookByTitle(title) — удаление книги по названию.
// getBooksByAuthor(author) — получение всех книг, написанных определенным автором.
// getBooksByYear(year) — получение всех книг, выпущенных в определенный год.
// getBooksByGenre(genre) — получение всех книг в определенном жанре.
interface Ibook {
    title: string;
    author: string;
    year: number;
    genre: string;
}
class Library {
    books: Ibook[]
    constructor(books: Ibook[]) {
        this.books = books;
    }
    addBook(book: Ibook): Ibook[] | string {
        if (this.books.find(b => b.title.toLowerCase() === book.title.toLowerCase())) {
            return `Книга "${book.title}" автора ${book.author} уже существует в библиотеке`;
        }
        this.books.push(book);
        return this.books;
    }
    removeBookByTitle(title: string): Ibook[] {
        const initialLength = this.books.length;
        this.books = this.books.filter(book => book.title.toLowerCase() !== title.toLowerCase());

        if (initialLength > this.books.length) console.log(`Книга "${title}" удалена из библиотеки`);
        else console.log(`Книга "${title}" не найдена в библиотеке`);
        return this.books;
    }
    getBooksByAuthor(author: string): Ibook[] | Ibook {
        return this.books.filter(book => book.author.toLowerCase().includes(author.toLowerCase()));
    }
    getBooksByYear(year: number): Ibook[] | Ibook {
        return this.books.filter(book => book.year === year);
    }
    getBooksByGenre(genre: string): Ibook[] | Ibook {
        return this.books.filter(book => book.genre === genre);
    }
}
const library = new Library([
    {
        title: "Война и мир",
        author: "Лев Толстой",
        year: 1869,
        genre: "Роман"
    },
    {
        title: "Преступление и наказание",
        author: "Фёдор Достоевский",
        year: 1866,
        genre: "Психологический роман"
    },
    {
        title: "Мастер и Маргарита",
        author: "Михаил Булгаков",
        year: 1967,
        genre: "Фантастика"
    },
    {
        title: "Анна Каренина",
        author: "Лев Толстой",
        year: 1877,
        genre: "Роман"
    }
]);
console.log(library.addBook({
    title: "1984",
    author: "Джордж Оруэлл",
    year: 1949,
    genre: "Антиутопия"
}));
console.log(library.removeBookByTitle('Мастер и Маргарита'));
console.log(library.getBooksByAuthor('Лев Толстой'));
console.log(library.getBooksByYear(1866));
console.log(library.getBooksByGenre('Роман'));

// Создайте класс NumberStats, который будет работать с массивом чисел. Класс должен
// содержать только метод:
// getMode() — находит и возвращает моду массива чисел (самое часто встречающееся число).
class NumberStats {
    array: number[];
    constructor(array: number[]) {
        this.array = [...array].sort((a, b) => a - b);
    }
    getMode() {
        let mode = this.array[0];
        let currentNum = this.array[0];
        let currentCount = 1;
        let maxCount = 1;

        for (let i = 1; i <= this.array.length; i++) {
            if (this.array[i] === currentNum) currentCount++;
            else {
                if (currentCount > maxCount) {
                    maxCount = currentCount;
                    mode = currentNum;
                }
                currentNum = this.array[i];
                currentCount = 1;
            }
        }
        return mode;
    }
}
const numberStats = new NumberStats([1, 3, 4, 4, 3, 2, 2, 3, 4, 4]);
console.log(numberStats.getMode());

// Создайте класс NumberOperations, который должен включать сам массив и методы для
// работы с массивом чисел:
// getMax() — возвращает максимальное число из массива.
// getMin() — возвращает минимальное число из массива.
// getSum() — вычисляет сумму всех чисел в массиве.
// getAverage() — вычисляет среднее значение чисел в массиве.
// getAboveAverage() — возвращает массив чисел, которые выше среднего значения.
// sortAscending() — сортирует массив по возрастанию.
// sortDescending() — сортирует массив по убыванию.
class NumberOperations {
    array: number[]
    constructor(array: number[]) {
        this.array = array;
    }
    getMax = (): number => this.array.sort().reverse()[0];
    getMin = (): number => this.array.sort()[0];
    getSum = (): number => this.array.reduce((sum, el) => sum + el, 0);
    getAverage = (): number => this.getSum() / this.array.length;
    getAboveAverage = (): number[] => this.array.filter(el => el > this.getAverage());
    sortAscending = (): number[] => this.array.sort();
    sortDescending = (): number[] => this.array.sort().reverse();
}
const numberOperations = new NumberOperations([1, 3, 4, 4, 3, 5, 2, 2, 3, 4, 4]);
console.log(numberOperations.getMax());
console.log(numberOperations.getMin());
console.log(numberOperations.getSum());
console.log(numberOperations.getAverage());
console.log(numberOperations.getAboveAverage());
console.log(numberOperations.sortAscending());
console.log(numberOperations.sortDescending());

// Создайте класс Sentence, который работает с предложением. Класс должен содержать один
// метод:
// getLongestWord() — находит и возвращает самое длинное слово в предложении.
class Sentence {
    sentence: string;
    constructor(sentence: string) {
        this.sentence = sentence;
    }
    getLongestWord(): string {
        const words = this.sentence.split(/\s+/);
        return words.reduce((longest, current) => current.length > longest.length ? current : longest, "");
    }
}
const sentence = new Sentence('Supercalifragilisticexpialidocious is a long word');
console.log(sentence.getLongestWord());

// Создайте класс ListFilter, который работает с массивом чисел. Класс должен содержать один
// метод:
// getEvenNumbers() — возвращает все четные числа из массива.
class ListFilter {
    array: number[]
    constructor(array: number[]) {
        this.array = array;
    }
    getEvenNumbers = () => this.array.filter(el => el % 2 === 0);
}
const listFilter = new ListFilter([1, 3, 4, 4, 3, 5, 2, 2, 3, 4, 4]);
console.log(listFilter.getEvenNumbers());

// Создайте класс PrimeNumberGenerator и метод generatePrimes(limit), который генерирует
// все простые числа до заданного предела.
// Входные данные: 10
// Выходные данные: [2, 3, 5, 7]
// Входные данные: 20
// Выходные данные: [2, 3, 5, 7, 11, 13, 17, 19]
// Просто́е число́— это натуральное число, большее единицы, имеющее ровно два натуральных
// делителя: 1 и само себя.
class PrimeNumberGenerator {
    generatePrimes(limit: number): number[] {
        const primes: number[] = [];
        for (let num = 2; num <= limit; num++) {
            let isPrime = true;
            for (let i = 2; i <= Math.sqrt(num); i++) {
                if (num % i === 0) {
                    isPrime = false;
                    break;
                }
            }
            if (isPrime) primes.push(num);
        }
        return primes;
    }
}
const primeNumberGenerator = new PrimeNumberGenerator();
console.log(primeNumberGenerator.generatePrimes(20));
