"use strict";
// Создайте абстрактный класс Shape (Фигура) с абстрактным методом calculateArea()
// (вычислитьПлощадь). Затем создайте дочерний класс Rectangle (Прямоугольник), который
// наследует Shape и реализует метод calculateArea() для расчета площади прямоугольника.
// Формула для вычисления площади прямоугольника: S = длина * ширина
// Входные: Rectangle(5, 4) → Результат: 20
// Входные: Rectangle(10, 3) → Результат: 30
// Входные: Rectangle(7, 7) → Результат: 49
class Shape {
}
class Rectangle extends Shape {
    constructor(length, width) {
        super();
        this.calculateArea = () => this.length * this.width;
        this.length = length;
        this.width = width;
    }
}
const rectangle1 = new Rectangle(5, 4);
console.log(rectangle1.calculateArea());
// Создайте абстрактный класс Animal (Животное) с абстрактным методом makeSound() (издатьЗвук).
// Затем создайте два дочерних класса:
// • Dog
// • Cat
// Каждый из этих классов должен наследовать Animal и реализовывать метод makeSound(),
// возвращая соответствующий звук животного.
// Входные: Dog().makeSound() → Результат: "Гав-гав"
// Объяснение: Метод makeSound() для объекта класса Dog должен вернуть звук собаки.
// Входные: Cat().makeSound() → Результат: "Мяу"
// Объяснение: Метод makeSound() для объекта класса Cat должен вернуть звук кошки.
class Animal {
}
class Dog extends Animal {
    constructor() {
        super(...arguments);
        this.makeSound = () => 'Гав-гав';
    }
}
class Cat extends Animal {
    constructor() {
        super(...arguments);
        this.makeSound = () => 'Мяу';
    }
}
const dog = new Dog();
const cat = new Cat();
console.log(dog.makeSound());
console.log(cat.makeSound());
class Account {
    constructor(initialBalance) {
        this.getBalance = () => this._balance;
        this._balance = initialBalance;
    }
    get balance() {
        return this._balance;
    }
    deposit(amount) {
        if (amount <= 0)
            console.log(`Сумма пополнения должна быть положительной`);
        this._balance += amount;
        console.log(`Счет пополнен на ${amount}. Новый баланс: ${this._balance}`);
    }
    withdraw(amount) {
        if (amount <= 0)
            console.log(`Сумма снятия должна быть положительной`);
        if (amount > this._balance)
            console.log(`Недостаточно средств. Текущий баланс: ${this._balance}, запрошено: ${amount}`);
        this._balance -= amount;
        console.log(`Со счета снято ${amount}. Новый баланс: ${this._balance}`);
    }
}
const account = new Account(4000);
console.log("Начальный баланс:", account.getBalance());
console.log("Баланс через свойство:", account.balance);
account.deposit(1000);
console.log("После пополнения:", account.getBalance());
account.withdraw(2000);
console.log("После снятия:", account.getBalance());
account.withdraw(4000);
// Создайте абстрактный класс "Транспортное средство" (Vehicle), в котором будут два абстрактных
// метода: "завести" (start) и "остановить" (stop). Реализуйте два класса-наследника — "Автомобиль"
// (Car) и "Мотоцикл" (Motorcycle). Эти классы должны расширять класс "Транспортное средство" и
// реализовать методы "завести" и "остановить", чтобы они соответствовали поведению этих
// транспортных средств (например, через console.log).
// Входные:
// let car = new Car();
// car.start();
// → Результат: Car started
// Входные:
// let car = new Car();
// car.stop();
// → Результат: Car stopped
// Входные:
// let motorcycle = new Motorcycle();
// motorcycle.start();
// → Результат: Motorcycle started
// Входные:
// let motorcycle = new Motorcycle();
// motorcycle.stop();
// → Результат: Motorcycle stopped
class Vehicle {
}
class Car extends Vehicle {
    constructor() {
        super(...arguments);
        this.start = () => `Car started`;
        this.stop = () => `Car stopped`;
    }
}
class Motorcycle extends Vehicle {
    constructor() {
        super(...arguments);
        this.start = () => `Motorcycle started`;
        this.stop = () => `Motorcycle stopped`;
    }
}
const car = new Car();
console.log(car.start());
console.log(car.stop());
console.log(car.start());
const motorcycle = new Motorcycle();
console.log(motorcycle.start());
console.log(motorcycle.stop());
console.log(motorcycle.start());
class Fruit {
    constructor(fruits) {
        this.fruits = fruits;
    }
}
class Apple extends Fruit {
    constructor(fruits) {
        super(fruits);
    }
    getAppleInfo() {
        const apple = this.fruits.find(fruit => fruit.title.toLowerCase() === "яблоко");
        return apple || 'Яблока в корзине нет';
    }
}
const apple = new Apple([{ "id": 1, "title": "яблоко", "price": 50 },
    { "id": 2, "title": "банан", "price": 30 },
    { "id": 3, "title": "груша", "price": 45 }]);
console.log(apple.getAppleInfo());
class Validation {
    constructor(email, date, path) {
        this.isValidEmail = () => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email);
        this.isValidPath = () => /^\/[a-zA-Z0-9\/._-]*$/.test(this.path) || /^[a-zA-Z]:\\[\\\S|*\S]?.*$/.test(this.path);
        this.email = email;
        this.date = date;
        this.path = path;
    }
    isValidDate() {
        if (!/^\d{4}-\d{2}-\d{2}$/.test(this.date))
            return false;
        const dateObj = new Date(this.date);
        const year = dateObj.getFullYear();
        const month = dateObj.getMonth() + 1;
        const day = dateObj.getDate();
        const [inputYear, inputMonth, inputDay] = this.date.split('-').map(Number);
        return year === inputYear && month === inputMonth && day === inputDay && !isNaN(dateObj.getTime());
    }
}
console.log("=== Пример 1 ===");
const validation1 = new Validation('example@mail.com', '2023-09-10', '/usr/local/bin');
console.log("isValidEmail():", validation1.isValidEmail());
console.log("isValidDate():", validation1.isValidDate());
console.log("isValidPath():", validation1.isValidPath());
console.log("=== Пример 2 ===");
const validation2 = new Validation('invalid-email', '2023-02-29', 'relative/path');
console.log("isValidEmail():", validation2.isValidEmail());
console.log("isValidDate():", validation2.isValidDate());
console.log("isValidPath():", validation2.isValidPath());
// Создайте класс ArrayAnalyzer, который будет содержать массив чисел как поле класса,
// инициализируемое через конструктор. Реализуйте методы:
// • getAverage для вычисления среднего значения массива,
// • getMax для поиска максимального значения в массиве,
// • getMin для поиска минимального значения в массиве.
// Входные:
// let analyzer = new ArrayAnalyzer([1, 2, 3, 4, 5]);
// analyzer.getAverage();
// → Результат: 3
// Входные:
// let analyzer = new ArrayAnalyzer([10, 20, 5, 30, 15]);
// analyzer.getMax();
// → Результат: 30
// Входные:
// let analyzer = new ArrayAnalyzer([10, 20, 5,  30, 15]);
// analyzer.getMin();
// → Результат: 5
class ArrayAnalyzer {
    constructor(array) {
        this.getAverage = () => `Среднее число = ${(this.array.reduce((sum, el) => sum + el, 0)) / this.array.length}`;
        this.getMax = () => `Максимальное число = ${this.array.sort((a, b) => b - a)[0]}`;
        this.getMin = () => `Минимальное число = ${this.array.sort()[0]}`;
        this.array = array;
    }
}
const arrayAnalyzer = new ArrayAnalyzer([5, 2, 1, 42, 5, 55, 3]);
console.log(arrayAnalyzer.getAverage());
console.log(arrayAnalyzer.getMax());
console.log(arrayAnalyzer.getMin());
// Создайте класс StringManipulator, который будет иметь три метода:
// • reverseString(str) — разворачивает строку,
// • isPalindrome(str) — проверяет, является ли строка палиндромом,
// • countVowels(str) — подсчитывает количество гласных букв в строке
// Входные:
// let manipulator = new StringManipulator();
// manipulator.reverseString('hello');
// → Результат: 'olleh
// Входные:
// let manipulator = new StringManipulator();
// manipulator.isPalindrome('madam');
// → Результат: true
class StringManipulator {
    constructor() {
        this.reverseString = (str) => str.split('').reverse().join('');
        this.isPalindrome = (str) => (str.split('').reverse().join('') === str) ? true : false;
    }
    countVowels(str) {
        let count = 0;
        for (let char of str.toLowerCase()) {
            if ('aeiouаеёиоуыэюя'.includes(char))
                count++;
        }
        return count;
    }
}
const stringManipulator = new StringManipulator();
console.log(stringManipulator.reverseString('hello'));
console.log(stringManipulator.isPalindrome('madam'));
console.log(stringManipulator.countVowels('hello my dear friends'));
class Pwd {
    showPwd() {
        let pwdRandom = '';
        for (let i = 0; i < 8; i++) {
            pwdRandom += Math.floor(Math.random() * 10);
        }
        return pwdRandom;
    }
}
class Validation_ extends Pwd {
    showPwd() {
        const password = super.showPwd();
        console.log(`Сгенерированный пароль: ${password}`);
        return password;
    }
}
const pwd = new Pwd();
console.log("Пароль из Pwd:", pwd.showPwd());
const validation_ = new Validation_();
console.log("Пароль из Validation:", validation_.showPwd());
class University {
    constructor(students) {
        this.students = students;
    }
}
class UniversityStudent extends University {
    constructor(students) {
        super(students);
    }
    getStudentById(id) {
        const student = this.students.find(student => student.id === id);
        return student || null;
    }
}
class Student {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
const university = new UniversityStudent([
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
]);
console.log("Поиск студента с id=1:");
console.log(university.getStudentById(1));
console.log("Поиск студента с id=2:");
console.log(university.getStudentById(2));
console.log("Поиск несуществующего студента с id=4:");
console.log(university.getStudentById(4));
class Counter {
    constructor(count) {
        this.increment = () => this.count += 1;
        this.decrement = () => this.count -= 1;
        this.getCount = () => this.count;
        this.count = count;
    }
}
const counter = new Counter(3);
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.increment());
console.log(counter.getCount());
class QuoteGenerator {
    constructor() {
        this.quotes = [
            "The only limit to our realization of tomorrow is our doubts of today. — Franklin D. Roosevelt",
            "Life is 10% what happens to us and 90% how we react to it. — Charles R. Swindoll",
            "Success is not final, failure is not fatal: It is the courage to continue that counts. — Winston Churchill",
            "Believe you can and you're halfway there. — Theodore Roosevelt",
            "Do not watch the clock. Do what it does. Keep going. — Sam Levenson",
            "Keep your face always toward the sunshine—and shadows will fall behind you. — Walt Whitman",
            "It does not matter how slowly you go as long as you do not stop. — Confucius",
            "Your time is limited, don't waste it living someone else's life. — Steve Jobs",
            "The best way to predict the future is to create it. — Peter Drucker",
            "You miss 100% of the shots you don't take. — Wayne Gretzky"
        ];
    }
    getRandomQuote() {
        const randomIndex = Math.floor(Math.random() * this.quotes.length);
        return this.quotes[randomIndex];
    }
}
const quoteGenerator = new QuoteGenerator();
console.log(quoteGenerator.getRandomQuote());
class User {
    constructor(users) {
        this.users = users;
    }
}
class UserFilter extends User {
    constructor(users = []) {
        super(users);
        this.filterByAge = (min, max) => this.users.filter(user => user.age >= min && user.age <= max);
        this.filterByGender = (gender) => this.users.filter(user => user.gender === gender);
    }
}
const userFilter = new UserFilter([
    { name: 'John Doe', age: 25, gender: 'male' },
    { name: 'Jane Smith', age: 30, gender: 'female' },
    { name: 'Bob Johnson', age: 35, gender: 'male' },
    { name: 'Alice Brown', age: 28, gender: 'female' },
    { name: 'Charlie Wilson', age: 22, gender: 'male' },
    { name: 'Diana Prince', age: 40, gender: 'female' }
]);
console.log(userFilter.filterByAge(25, 30));
console.log(userFilter.filterByGender('male'));
