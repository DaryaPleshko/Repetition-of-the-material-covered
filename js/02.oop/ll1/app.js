// Реализуйте класс Singer, который будет иметь следующие свойства: name, surname. Также класс
// должен иметь метод getAutograph, который будет выводить “{name} {surname), с наилучшими
// пожеланиями”.
class Singer {
    name
    surname
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    getAutograph() {
        return `${this.name} ${this.surname}, с наилучшими пожеланиями`
    }
}
const singer = new Singer('Dasha', 'Ivanova');
console.log(singer.getAutograph());

// Реализуйте класс Calculator, который будет хранить в себе 4 метода: сумма чисел, разность,
// произведение, частное. 2 числа передаются в класс, далее вызываеются соответствующие
// функции. Добавить проверки на ввод
class Calculator {
    valueA
    valueB
    constructor(a, b) {
        this.valueA = a;
        this.valueB = b;
    }
    isValid(a, b) {
        if (a < 0 || b < 0) return `Неверный ввод`;
        if (isNaN(a) || isNaN(b)) return `Неверный ввод`;
    }
    isSum() {
        this.isValid(this.valueA, this.valueB);
        return this.valueA + this.valueB;
    }
    isDifference() {
        this.isValid(this.valueA, this.valueB);
        return this.valueA - this.valueB;
    }
    isProduct() {
        this.isValid(this.valueA, this.valueB);
        return this.valueA * this.valueB;
    }
    isQuotient() {
        this.isValid(this.valueA, this.valueB);
        return this.valueA / this.valueB;
    }
}
const calculator = new Calculator(10, 5);
console.log(calculator.isSum());
console.log(calculator.isDifference());
console.log(calculator.isProduct());
console.log(calculator.isQuotient());

// Реализуйте класс WordString, который будет иметь следующие методы: метод reverseString,
// переворачивающий строку, метод upperFirst, возвращающий строку, где первая буква заглавная и
// метод upperEvery, который делает заглавной первую букву каждого слова этой строки.
class WordString {
    constructor(str = 'hello world') {
        this.str = str;
    }
    reverseString() {
        return this.str.split('').reverse().join('');
    }
    upperFirst() {
        return this.str.charAt(0).toUpperCase() + this.str.slice(1);
    }
    upperEvery() {
        return this.str
            .split(' ')
            .map(el => {
                if (!el) return '';
                return el.charAt(0).toUpperCase() + el.slice(1);
            })
            .join(' ');
    }
}

const wordString = new WordString();
console.log(wordString.reverseString());
console.log(wordString.upperFirst());
console.log(wordString.upperEvery());

// Реализуйте класс MathСalculation. В него передается число n – количество элементов массива. На
// основании числа формируется динамический массив из n элементов внутри класса. Создать
// функцию для подсчета всех четных чисел массива. Добавить проверки на ввод
class MathCalculation {
    constructor(n) {
        this.n = n;
        this.array = [];
    }

    createArray() {
        for (let i = 0; i < this.n; i++) {
            this.array.push(Math.floor(Math.random() * 100) + 1);
        }
        return this.array;
    }

    isValid(array) {
        if (!Array.isArray(array)) throw new Error('Переданный аргумент не является массивом');
        if (array.length === 0) throw new Error('Массив пуст');
        return true;
    }

    sumEvens() {
        try {
            this.isValid(this.array);
            const evenNumbers = this.array.filter(el => el % 2 === 0);
            if (evenNumbers.length === 0) return 0;
            return evenNumbers.reduce((sum, el) => sum + el, 0);
        } catch (error) {
            return error.message;
        }
    }
}

// Реализуйте класс Anagram (Анаграмма это слово или фраза , полученный путем замены букв
// исходного слова или фразы). Создать функцию для вывода ряда true, если слова являются
// анаграммами. Добавить проверки на ввод
class Anagram {
    constructor(a, b) {
        this.valueA = a;
        this.valueB = b;
    }

    isValid(a, b) {
        if (a.length !== b.length) throw new Error('Неверный ввод');
        if (!isNaN(a) || !isNaN(b)) throw new Error('Неверный ввод');
        if (a.length === '' || b.length === '') throw new Error('Неверный ввод');
        return true;
    }
    isAnagram() {
        this.isValid(this.valueA, this.valueB);
        return this.valueA.split('').sort().join('') === this.valueB.split('').sort().join('');
    }
}
try {
    const anagram = new Anagram('кот', 'ток');
    console.log(anagram.isAnagram());
} catch (error) {
    console.error('Ошибка:', error.message);
}

// Реализуйте класс, который находит полное число метров по заданному числу сантиметров.
// Добавьте проверку на ввод только чисел.
// Входные: 345 → Результат: 3 метров
// Входные: 100 → Результат: 1 метр
// Входные: 99 → Результат: 0 метров
// Входные: 750 → Результат: 7 метров
// Входные: 10 → Результат: 0 метров
// Входные: hi → Результат: Вы ввели не число!
class Distance {
    constructor(a) {
        this.value = a;
    }

    toMeters() {
        if (typeof this.value !== 'number' || isNaN(this.value)) return `Результат: Вы ввели не число!`;
        const meters = Math.floor(this.value / 100);

        let word;
        if (meters === 1) word = 'метр';
        else if (meters >= 2 && meters <= 4) word = 'метра';
        else word = 'метров';

        return `Результат: ${meters} ${word}`;
    }
}
const distance = new Distance(345);
console.log(distance.toMeters());

// Пользователь вводит три числа: a, b и c. Напишите класс, которая определяет, является ли тройка
// чисел сторонами треугольника. Для этого следует проверить следующие условия:
// 1. Сумма двух сторон должна быть больше третьей стороны. (a + b > c, a + c > b, b + c > a)
// 2. Если это так, то далее определить, какой тип треугольника можно построить:
// • Если все три стороны равны, выведите Равносторонний треугольник.
// • Если две стороны равны, выведите Равнобедренный треугольник.
// • Если все три стороны разные, выведите Разносторонний треугольник.
// 3. Если треугольник не существует (условие не выполняется), выведите Треугольник не
// существует.
// Добавьте проверку на ввод только чисел.
// Входные: 5, 5, 5 → Результат: Равносторонний треугольник
// Входные: 3, 4, 5 → Результат: Разносторонний треугольник
// Входные: 6, 6, 10 → Результат: Равнобедренный треугольник
// Входные: 1, 2, 3 → Результат: Треугольник не существует
// Входные: 10, 15, 25 → Результат: Треугольник не существует
// Входные: 7, 7, 14 → Результат: Треугольник не существует
class Triangle {
    constructor(a, b, c) {
        this.sideA = a;
        this.sideB = b;
        this.sideC = c;
    }
    isTriangle() {
        if (this.sideA + this.sideB > this.sideC &&
            this.sideA + this.sideC > this.sideB &&
            this.sideB + this.sideC > this.sideA) {
            if (this.sideA === this.sideB && this.sideB === this.sideC) return `Треугольник равносторонний`;
            if (this.sideA === this.sideB || this.sideA === this.sideC || this.sideB === this.sideC) return `Треугольник равнобедренный`;
            return `Разносторонний треугольник`;
        } else return `Треугольник не существует`;
    }
}
const triangle = new Triangle(3, 4, 5);
console.log(triangle.isTriangle());

// Реализуйте класс Validator. У него будет метод isEmail параметром принимает строку и проверяет,
// является ли она корректным емейлом или нет. Если является - возвращает true, если не является -
// то false.
class Validator {
    isEmail(email) {
        return (/^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,6}$/i.test(email));
    }
}
const validator = new Validator();
console.log(validator.isEmail('katya.petrik2000@mail.ru'));

// Реализуйте класс для пересчета временного интервала, заданного в минутах, в величину,
// выраженную в часах и минутах.
// Входные: 150 минут → Результат: 2 часа 30 минут
// Входные: 240 минут → Результат: 4 часа 0 минут
class Time {
    constructor(a) {
        this.time = a;
    }
    isHour() {
        return `${Math.floor(this.time / 60)} часа ${this.time % 60} минут`
    }
}
const time = new Time(240);
console.log(time.isHour());
