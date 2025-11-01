// Создайте объект с полями name и функцией
// greet, которая выводит: "Привет, я <name>". 
const person = {
    name: 'Sasha',
    greet() {
        return `Привет, я ${this.name}`;
    }
}
console.log(`1 Задание. ${person.greet()}`);

// Создайте объект с firstName, lastName и методом
// fullName, который выводит полное имя.
const user = {
    name: 'Sasha',
    surname: 'Popov',
    getInfo() {
        return `Привет, я ${this.name} ${this.surname}`;
    }
}
console.log(`2 Задание. ${user.getInfo()}`);

// Объект с orderId и status, метод printStatus, выводит: "Заказ <orderId>: <status>".
const order = {
    orderId: 2357,
    status: 'обрабатывается',
    printStatus() {
        return `Заказ ${this.orderId} ${this.status}`;
    }
}
console.log(`3 Задание. ${order.printStatus()}`);

// Объект с width, height и методом getArea, который выводит площадь.
const s = {
    width: 23,
    height: 15,
    searchS() {
        return `Площадь ${this.width * this.height}`;
    }
}
console.log(`4 Задание. ${s.searchS()}`);

// Объект user с role (admin / user) и методом checkAccess, который выводит разный
// текст в зависимости от роли.
const userRole = {
    user: 'Sasha',
    role: 'admin',
    checkAccess() {
        return this.role === 'admin' ? `${this.user}: полный доступ` : `${this.user}: ограниченный доступ`
    }
}
console.log(`5 Задание. ${userRole.checkAccess()}`);

// Объект с brand (Toyota), model (Corolla), year (2000), метод describeCar выводит
// информацию об авто.
// <brand> <model>, <year> года выпуска
const car = {
    brand: 'Toyota',
    model: 'Corolla',
    year: 2000,
    describeCar() {
        return `Бренд машины - ${this.brand}, модель - ${this.model} , год выпуска - ${this.year}`
    }
}
console.log(`6 Задание. ${car.describeCar()}`);

// Объект с полем N и методом sumToN, который выводит сумму чисел от 1 до N.
const calculator = {
    N: 10,
    sumToN() {
        let sum = 0;
        for (let i = 0; i <= this.N; i++) {
            sum += i;
        }
        return sum;
    }
}
console.log(`7 Задание. ${calculator.sumToN()}`);

// Объект с полем M и методом countEvens, который считает и выводит количество
// чётных чисел от 1 до M.
const counter = {
    M: 10,
    countToM() {
        let arrayEven = [];
        for (let i = 0; i <= this.M; i++) {
            i % 2 === 0 && i !== 0 ? arrayEven.push(i) : null;
        }
        return arrayEven;
    }
}
console.log(`8 Задание. [${counter.countToM()}]`);

//ПОВТОРЕНИЕ
// На входе n — число. Реализуйте 2 функции: pow() — возводит число в степень 2,
// printPow() — выводит результат.
const printPow = (array) => {
    return array.map(el => el ** 2);
}
const pow = (array) => {
    return array;
}
console.log(`9 Задание. [${printPow(pow([10, 2, 4, 5, 7]))}]`);

// На входе n — число. Реализуйте 2 функции: isEven() — возвращает true/false,
// printEvenCheck() — выводит, чётное ли число.
const isEven = (array) => {
    return array.filter(el => el % 2 === 0);
}
const printEvenCheck = (array) => {
    let newArr = []
    for (let el of array) {
        el % 2 === 0 ? newArr.push('чётное') : newArr.push('не чётное')
    }
    return newArr;
}
console.log(`10 Задание. [${printEvenCheck(isEven([10, 2, 4, 5, 7]))}]`);

// На входе n — число. Реализуйте 2 функции: factorial() — возвращает факториал
// числа, printFactorial() — выводит факториал.
const factorial = (factorial) => {
    let numFactorial = 1;
    for (let i = 1; i <= factorial; i++) {
        numFactorial *= i;
    }
    return numFactorial;
}
const printFactorial = (num) => {
    return num;
}
console.log(`11 Задание. ${printFactorial(factorial(4))}`);

// На входе str — строка. Реализуйте 2 функции: reverseStr() — возвращает
// перевёрнутую строку, printReversed() — выводит перевёрнутую строку.
const reverseStr = (str) => {
    return str.split('').reverse().join('');
}
const printReversed = (str) => {
    return str;
}
console.log(`12 Задание. ${printReversed(reverseStr('CAT'))}`);