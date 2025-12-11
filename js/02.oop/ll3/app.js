// Создайте класс Rectangle, который будет иметь свойства width и height. Напишите метод getArea(),
// который возвращает площадь прямоугольника.
// Входные: Rectangle(5, 10) → Результат: 50
// Входные: Rectangle(3, 7) → Результат: 21
// Входные: Rectangle(6, 9) → Результа т: 54
class Rectangle {
    width;
    height;
    constructor(a, b) {
        this.width = a;
        this.height = b;
        this.getArea();
    }

    getArea() {
        console.log(this.width * this.height);
    }
}
const rectangle = new Rectangle(5, 10);

// Создайте класс Student, который будет содержать имя, возраст и массив оценок. Напишите метод
// getAverageGrade(), который возвращает средний балл студента.
// Входные: Student("Alice", 20, [5, 4, 5, 3, 4]) → Результат: "Alice (20) имеет средний балл 4.2"
// Входные: Student("Bob", 22, [3, 2, 3, 4, 3]) → Результат: "Bob (22) имеет средний балл 3.0"
// Входные: Student("John", 19, [4, 4, 4, 5, 5]) → Результат: "John (19) имеет средний балл 4.4"
class Student {
    name;
    serialNum;
    marks;
    constructor(a, b, c) {
        this.name = a;
        this.serialNum = b;
        this.marks = c;

        this.getAverageGrade();
    }
    getAverageGrade() {
        console.log(`${this.name} (${this.serialNum}) имеет средний балл = ${(this.marks.reduce((sum, el) => sum + el, 0)) / this.marks.length}`);
    }
}
const student = new Student("Alice", 20, [5, 4, 5, 3, 4]);

// Создайте класс Car с параметрами make, model, year. Напишите метод getCarAge(currentYear),
// который возвращает возраст машины.
// Входные: Car("Toyota", "Camry", 2015) → Результат: Возраст машины: 9 лет
// Входные: Car("Honda", "Civic", 2020) → Результат: Возраст машины: 4 года
// Входные: Car("Ford", "Mustang", 1967) → Результат: Возраст машины: 57 лет
class Car {
    make;
    model;
    year;
    constructor(a, b, c) {
        this.make = a;
        this.model = b;
        this.year = c;

        this.getCarAge();
    }
    getCarAge() {
        console.log(`Возраст машины ${this.make} ${this.model}: ${2025 - this.year} лет`);
    }
}
const car = new Car("Toyota", "Camry", 2015);

// Создайте класс StringRepository, который имеет статичный массив words ["apple", "apricot", "lemon",
// "mango", "nectarine", "banana", "kiwi", "plum"]. Наследуйте от него класс FilteredWords, добавив метод
// getWordsByLength(length), который возвращает только те слова, длина которых равна заданному
// значению.
// Входные:
// const repo = new FilteredWords();
// repo.getWordsByLength(5);
// → Результат: ["apple", "lemon", "mango"]
class StringRepository {
    words = ["apple", "apricot", "lemon", "mango", "nectarine", "banana", "kiwi", "plum"];
}
class FilteredWords extends StringRepository {
    getWordsByLength(length) {
        return this.words.filter(el => el.length === length);
    }
}
const filteredWords = new FilteredWords();
console.log(filteredWords.getWordsByLength(5));

// Создайте класс NumberGenerator с методом generateNumbers(size), который возвращает массив
// чисел от 1 до size. Наследуйте от него класс EvenNumbers, добавив метод getEvenNumbers(size),
// который вызывает generateNumbers(size) и фильтрует только четные числа.
// Входные: new EvenNumbers().getEvenNumbers(6) → Результат: [2, 4, 6]
// Входные: new EvenNumbers().getEvenNumbers(10) → Результат: [2, 4, 6, 8, 10]
// Входные: new EvenNumbers().getEvenNumbers(3) → Результат: [2]
class NumberGenerator {
    generateNumbers(size) {
        const generate = [];
        for (let i = 1; i <= size; i++) {
            generate.push(i);
        }
        return generate;
    }
}
class EvenNumbers extends NumberGenerator {
    getEvenNumbers(size) {
        const numbers = this.generateNumbers(size);
        return numbers.filter(el => el % 2 === 0);
    }
}
const evenNumbers = new EvenNumbers();
console.log(evenNumbers.getEvenNumbers(8));

// Создайте класс SentenceRepository, который имеет массив строк sentences. Наследуйте от него
// класс LongestSentence, добавив метод getLongestSentence(), который возвращает самую длинную
// строку по количеству символов.
// Входные:
// const repo = new LongestSentence(["Hello world", "This is a longer sentence", "Short"]);
// repo.getLongestSentence();
// → Результат: "This is a longer sentence"
// Входные:
// const repo = new LongestSentence(["JavaScript is fun", "Coding", "Learning new things"]);
// repo.getLongestSentence();
// → Результат: " Learning new things"
class SentenceRepository {
    sentences;
    constructor(sentences) {
        this.sentences = sentences;
    }
}
class LongestSentence extends SentenceRepository {
    constructor(sentences) {
        super(sentences);
    }
    getLongestSentence(){
        return this.sentences
        .reduce((longest, current) => current.length > longest.length ? current : longest);
    }
}
const repo = new LongestSentence(["Hello world", "This is a longer sentence", "Short"]);
console.log(repo.getLongestSentence());

// Создайте класс Person с атрибутом name. Наследуйте от него класс Employee, добавив атрибуты
// position и monthly_salary. Реализуйте метод getAnnualSalary(), возвращающий годовую зарплату.
// Входные: Employee("Alice", "Developer", 5000) → Результат: 60000
// Входные: Employee("Bob", "Manager", 7000) → Результат: 84000
// Входные: Employee("Charlie", "Designer", 4000) → Результат: 48000
class Person {
    name;
    constructor(name) {
        this.name = name;
    }
}
class Employee extends Person {
    constructor(name, position, monthly_salary) {
        super(name);
        this.position = position;
        this.monthly_salary = monthly_salary;
    }
    getAnnualSalary() {
        return `Годовая зарплата работника ${this.name} по должности ${this.position} = ${this.monthly_salary * 12}`
    }
}
const employee = new Employee("Alice", "Developer", 5000);
console.log(employee.getAnnualSalary());

// Создайте класс Vehicle с атрибутом speed. На основе этого класса создайте класс Car, добавив
// атрибут brand и метод getInfo(), который выводит информацию о машине в формате "Brand:
// <brand>, Speed: <speed>".
// Входные: Car("Toyota", 120).getInfo() → Результат: "Brand: Toyota, Speed: 120"
// Входные: Car("Ford", 150).getInfo() → Результат: "Brand: Ford, Speed: 150"
// Входные: Car("BMW", 180).getInfo() → Результат: "Brand: BMW, Speed: 180«
class Vehicle {
    constructor(speed) {
        this.speed = speed;
        return this.speed;
    }
}
class CarM extends Vehicle {
    constructor(brand, speed) {
        super(speed);
        this.brand = brand;
    }
    getInfo() {
        return `Brand: ${this.brand}, Speed: ${this.speed}`
    }
}
const carm = new CarM("Toyota", 120);
console.log(carm.getInfo());

// Создайте класс DataGenerator с полем size и методом generateArray(), который возвращает массив
// чисел от 1 до size. Наследуйте от него класс SquareArray, добавив метод getSquareArray(), который
// вызывает generateArray() и возвращает массив, где каждый элемент возведен в квадрат.
// Входные: SquareArray(3).getSquareArray() → Результат: [1, 4, 9]
// Входные: SquareArray(5).getSquareArray() → Результат: [1, 4, 9, 16, 25]
// Входные: SquareArray(2).getSquareArray() → Результат: [1, 4]
class DataGenerator {
    size;
    constructor(a) {
        this.size = a;
    }
    generateArray() {
        const generate = [];
        for (let i = 1; i <= this.size; i++) {
            generate.push(i);
        }
        return generate;
    }
}
class SquareArray extends DataGenerator {
    getSquareArray() {
        const array = this.generateArray();
        return array.map(el => el ** 2);
    }
}
const squareArray = new SquareArray(5);
console.log(squareArray.getSquareArray());
