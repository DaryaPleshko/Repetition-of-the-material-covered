// Создайте класс Product, который будет иметь свойства name, price и quantity. Напишите метод
// getTotalCost(products), который принимает список продуктов и возвращает общую стоимость всех
// товаров в каталоге.
class Product {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
    getTotalCost() {
        return `Сумма товаров ${this.name} = ${this.price * this.quantity}`
    }
}
const product = new Product("Apple", 2, 5);
console.log(product.getTotalCost());

// Создайте класс Student, который будет содержать имя, возраст и массив оценок. Напишите метод
// getAverageGrade(), который возвращает средний балл студента.
class Student {
    constructor(name, age, assessments) {
        this.name = name;
        this.age = age;
        this.assessments = assessments;
    }
    getAverageGrade() {
        const sum = this.assessments.reduce((total, grade) => total + grade, 0);
        return `${this.name} ${this.age} имеет средний балл ${(sum / this.assessments.length).toFixed(1)}`
    }
}
const student = new Student("Alice", 20, [5, 4, 5, 3, 4]);
console.log(student.getAverageGrade());

// Создайте класс TwoSum, который будет принимать массив целых чисел nums и целое число target.
// Реализуйте метод findIndices(), который возвращает индексы двух чисел, сумма которых равна
// target. Гарантируется, что существует ровно одно решение, и вы не можете использовать один и
// тот же элемент дважды.
// Условия:
// • Массив nums содержит только целые числа.
// • Вы можете вернуть индексы в любом порядке.
// • Для каждого набора входных данных существует ровно одно решение.
// Входные: new TwoSum([2, 7, 11, 15], 9) → Результат: [0, 1]
// Объяснение: Поскольку nums[0] + nums[1] == 9, мы возвращаем [0, 1].
// Входные: new TwoSum([3, 2, 4], 6)→ Результат: [1, 2]
// Входные: new TwoSum([2, 3, 4], 6)→ Результат: [0, 2]
class TwoSum {
    constructor(arr, num) {
        this.nums = arr;
        this.target = num;
    }
    findIndices() {
        const numMap = {};
        for (let i = 0; i < this.nums.length; i++) {
            const complement = this.target - this.nums[i];
            if (numMap[complement] !== undefined) return [numMap[complement], i];
            numMap[this.nums[i]] = i;
        }
        return [];
    }
}
const twoSum = new TwoSum([2, 7, 11, 15], 9);
console.log(twoSum.findIndices());

// Создайте родительский класс Number, который будет хранить число. Затем создайте дочерний
// класс PalindromeChecker, который будет проверять, является ли это число палиндромом.
// Входные: new PalindromeChecker(-121) → Результат: false
// Входные: new PalindromeChecker(10) → Результат: false
// Входные: new PalindromeChecker(12321) → Результат: true
class Numbers {
    constructor(value) {
        this.value = value;
    }
}
class PalindromeChecker extends Numbers {
    isPalindrom() {
        if (this.value < 0) return false;
        const str = this.value.toString();
        return str === str.split('').reverse().join('');
    }
}
const palindromeChecker = new PalindromeChecker(131);
console.log(palindromeChecker.isPalindrom());

// Создайте родительский класс Number, который будет хранить статичное число. Затем создайте
// дочерний класс SquareRootCalculator, который будет содержать метод calculateSquareRoot(),
// вычисляющий квадратный корень этого числа без использования встроенной функции Math.sqrt().
// Входные: new SquareRootCalculator(16) → Результат: 4
// Входные: new SquareRootCalculator(25) → Результат: 5
// Входные: new SquareRootCalculator(1) → Результат: 1
class Number {
    constructor(value) {
        this.value = value;
    }
}
class SquareRootCalculators extends Number {
    constructor(value) {
        super(value)
    }
    calculateSquareRoot() {
        if (this.value < 0) return NaN;
        for (let i = 0; i <= this.value; i++) {
            if (i * i === this.value) return i;
            if (i * i > this.value) return i - 1;
        }
        return 0;
    }
}
const squareRootCalculators = new SquareRootCalculators(13);
console.log(squareRootCalculators.calculateSquareRoot());

// Создайте родительский класс NumberGenerator, который будет генерировать и возвращать
// случайное число с помощью метода generateNumber(). Затем создайте дочерний класс
// SquareRootCalculator, который переопределяет метод generateNumber() и находит квадратный
// корень этого числа 
class NumberGenerator {
    generateNumber() {
        return Math.floor(Math.random() * 100);
    }
}
class SquareRootCalculator extends NumberGenerator {
    generateNumber() {
        const number = super.generateNumber();
        return `${Math.sqrt(number)}`;
    }
}
const squareRootCalculator = new SquareRootCalculator();
console.log(squareRootCalculator.generateNumber());

// Создайте родительский класс NumberArrayGenerator, который будет генерировать массив чисел
// от 1 до 8 с помощью метода generateArray(). Затем создайте дочерний класс EvenNumberFilter,
// который переопределяет метод generateArray() и оставляет в массиве только чётные числа.
class NumberArrayGenerator {
    generateArray() {
        const array = [];
        for (let i = 1; i < 8; i++) {
            array.push(Math.floor(Math.random() * 100));
        }
        return array;
    }
}
class EvenNumberFilter extends NumberArrayGenerator {
    generateArray() {
        const resArr = super.generateArray();
        return resArr.filter(el => el % 2 === 0);
    }
}
const evenNumberFilter = new EvenNumberFilter();
console.log(evenNumberFilter.generateArray());

// Создайте родительский класс RandomNumberArrayGenerator, который будет генерировать массив
// случайных чисел с помощью метода generateArray(). Затем создайте дочерний класс MultipleFilter,
// который переопределяет метод generateArray() и оставляет в массиве только те числа, которые
// кратны 3 или 7.
class RandomNumberArrayGenerator {
    constructor(num) {
        this.num = num;
    }
    generateArray() {
        const array = [];
        for (let i = 0; i < this.num; i++) {
            array.push(Math.floor(Math.random() * 100));
        }
        return array;
    }
}
class MultipleFilter extends RandomNumberArrayGenerator {
    constructor(num) {
        super(num);
    }
    generateArray() {
        const resArr = super.generateArray();
        return resArr.filter(el => el % 3 === 0 || el % 7 === 0);
    }
}
const multipleFilter = new MultipleFilter(10);
console.log(multipleFilter.generateArray());

// Создайте родительский класс NumberProcessor, который будет содержать массив чисел [1, -1, -4, 3, 3,
// 5, 4, 4, 2, 2, 2] и метод processNumbers(), который оставляет в массиве только положительные числа.
// Затем создайте дочерний класс UniqueNumberProcessor, который переопределяет метод
// processNumbers() и удаляет дубликаты из массива.
class NumberProcessor {
    array = [1, -1, -4, 3, 3, 5, 4, 4, 2, 2, 2];
    processNumbers() {
        return this.array.filter(el => el > 0);
    }
}
class UniqueNumberProcessor extends NumberProcessor {
    processNumbers() {
        const positive = super.processNumbers();
        return positive.filter((item, index, array) => array.indexOf(item) === index);
    }
}
const uniqueProcessor = new UniqueNumberProcessor();
console.log(uniqueProcessor.processNumbers()); 