// Создайте класс User, содержащий свойства name и age. Задайте эти значения через конструктор.
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.isUser();
    }
    isUser() {
        console.log(`Я ${this.name}, мне ${this.age} лет`);
    }
}
const user = new User('Даша', 35);

// Создайте класс Book с полями title и author. Значения полей задайте через конструктор. Добавьте
// метод getInfo(), возвращающий строку: "Название: ..., Автор: ...".
class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
        this.getInfo();
    }
    getInfo() {
        console.log(`Название: ${this.title}, Автор: ${this.author}`);
    }
}
const book = new Book('Мертые души', 'Гоголь');

// Создайте класс Rectangle с полями width и height. Реализуйте метод area(), возвращающий
// площадь.
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.area();
    }
    area() {
        console.log(`Площадь = ${this.width * this.height}`);
    }
}
const rectangle = new Rectangle(180, 240);

// Создайте класс Product. Добавьте проверку в классе Product, чтобы цена не могла быть меньше
// нуля. Если значение некорректное — выбрасывайте ошибку throw new Error. Ошибку обработать
// через try catch.
class Product {
    constructor(value) {
        this.value = value;
        this.price();
    }
    price() {
        try {
            if (this.value < 0) throw new Error(`Цена меньше 0`);
            console.log(`Цена больше 0`);
        } catch (error) {
            console.log(error.message);
        }
    }
}
const product = new Product(1299);

// Создайте класс Movie с полями title, year и rating. Добавьте метод isPopular(), возвращающий true,
// если рейтинг выше 8. Вызовите метод из нескольких экземпляров классов с разными значениями
// rating.
class Movie {
    constructor(title, year, rating) {
        this.title = title;
        this.year = year;
        this.rating = rating;
        this.isPopular();
    }
    isPopular() {
        if (this.rating >= 8) console.log(`Название фильма: ${this.title}, год выпуска: ${this.year}, рейтинг: ${this.rating}`);
    }
}
const movie1 = new Movie('Harry Potter and the Prisoner of Azkaban', 2004, 8.4);
const movie2 = new Movie('Snatch ', 2000, 7.4);
const movie3 = new Movie('Valiant ', 2005, 6.3);

// Создайте класс Student с полями name и массивом оценок grades. Реализуйте метод
// getAverageGrade() для подсчёта среднего балла.
class Student {
    name;
    grades;
    constructor(name, grades) {
        this.name = name;
        this.grades = grades;
        this.getAverageGrade();
    }
    getAverageGrade() {
        console.log(`Средний балл - ${this.name} = ${this.grades.reduce((a, b) => (a + b)) / this.grades.length}`);
    }
}
const student = new Student('katya', [3, 4, 3, 5, 5, 3, 3, 4]);

// Создайте класс Library, принимающий массив книг (объекты с title и author). Добавьте метод
// findByAuthor(authorName), который возвращает все книги конкретного автора через filter().
// Массив:
// const books = [ { title: "Book One", author: "Author A" }, { title: "Book Two", author: "Author B" }, { title: "Book
// Three", author: "Author A" }, { title: "Book Four", author: "Author C" }, { title: "Book Five", author: "Author B" }, {
// title: "Book Six", author: "Author D" }, { title: "Book Seven", author: "Author A" }, { title: "Book Eight", author:
// "Author E" }, { title: "Book Nine", author: "Author C" }, { title: "Book Ten", author: "Author F" } ];
class Library {
    books;
    constructor(array) {
        this.books = array;
    }
    findByAuthor(authorName) {
        return this.books.filter(el => el.author === authorName)
    }
}
const library = new Library([{ title: "Book One", author: "Author A" },
{ title: "Book Two", author: "Author B" },
{ title: "Book Three", author: "Author A" },
{ title: "Book Four", author: "Author C" },
{ title: "Book Five", author: "Author B" },
{ title: "Book Six", author: "Author D" },
{ title: "Book Seven", author: "Author A" },
{ title: "Book Eight", author: "Author E" },
{ title: "Book Nine", author: "Author C" },
{ title: "Book Ten", author: "Author F" }
]);
console.log(library.findByAuthor("Author A"));

// Создайте класс Playlist, в который передаётся массив песен ({ title, duration }). Добавьте метод
// getShortSongs(), возвращающий песни короче 3 минут с помощью filter().
// Массив:
// const songs = [ { title: "Song A", duration: 2.5 }, { title: "Song B", duration: 3.2 }, { title: "Song C", duration: 2.8 }, {
// title: "Song D", duration: 4.0 }, { title: "Song E", duration: 1.9 }, { title: "Song F", duration: 2.2 }, { title: "Song G",
// duration: 3.5 }, { title: "Song H", duration: 2.7 }, { title: "Song I", duration: 5.1 }, { title: "Song J", duration: 2.4 } ];
class Playlist {
    songs;
    constructor(array) {
        this.songs = array;
        this.getShortSongs();
    }
    getShortSongs() {
        console.log(this.songs.filter(el => el.duration < 3));
    }
}
const playlist = new Playlist([
    { title: "Song A", duration: 2.5 },
    { title: "Song B", duration: 3.2 },
    { title: "Song C", duration: 2.8 },
    { title: "Song D", duration: 4.0 },
    { title: "Song E", duration: 1.9 },
    { title: "Song F", duration: 2.2 },
    { title: "Song G", duration: 3.5 },
    { title: "Song H", duration: 2.7 },
    { title: "Song I", duration: 5.1 },
    { title: "Song J", duration: 2.4 }
]);

// Создайте класс ShoppingCart с полем items (массив объектов { name, price }). Добавьте метод
// getTotalPrice(), который с помощью reduce() считает общую сумму товаров.
// Массив:
// const items = [ { name: "Apple", price: 1.2 }, { name: "Bread", price: 2.5 }, { name: "Milk", price: 1.8 }, { name:
// "Cheese", price: 3.0 }, { name: "Butter", price: 2.3 }, { name: "Eggs", price: 2.0 }, { name: "Orange", price: 1.5 }, {
// name: "Tomato", price: 1.7 }, { name: "Chicken", price: 5.5 }, { name: "Fish", price: 6.0 } ];
class ShoppingCart {
    items;
    constructor(array) {
        this.items = array;
    }

    getTotalPrice() {
        return this.items.reduce((sum, el) => sum + el.price, 0);
    }
}

const shoppingCart = new ShoppingCart([
    { name: "Apple", price: 1.2 },
    { name: "Bread", price: 2.5 },
    { name: "Milk", price: 1.8 },
    { name: "Cheese", price: 3.0 },
    { name: "Butter", price: 2.3 },
    { name: "Eggs", price: 2.0 },
    { name: "Orange", price: 1.5 },
    { name: "Tomato", price: 1.7 },
    { name: "Chicken", price: 5.5 },
    { name: "Fish", price: 6.0 }
]);
console.log("Total price:", shoppingCart.getTotalPrice());
