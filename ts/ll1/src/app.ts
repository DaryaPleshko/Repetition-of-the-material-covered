// Напишите программу, которая проверяет, является ли число num2 квадратом числа num1.
// Выведите сообщение в консоль, указывающее результат проверки.
// Входные: num1 = 3, num2 = 9 → Результат: "9 является квадратом 3"
// Входные: num1 = 4, num2 = 20 → Результат: "20 не является квадратом 4"
const isSqrt = (num1: number, num2: number) => {
    return (Math.sqrt(num2) === num1) ? `${num2} является квадратом ${num1}` : `${num2} не является квадратом ${num1}`;
}
console.log(isSqrt(4, 20));

// Создайте две переменные, представляющие собой двузначные числа. Напишите программу,
// которая сравнивает сумму цифр каждого числа и выводит в консоль большее из двух чисел.
// Входные: num1 = 23, num2 = 56 → Результат: "56 имеет большую сумму цифр"
// Входные: num1 = 34, num2 = 25 → Результат: "Оба числа имеют одинаковую сумму цифр"
const sumOfDigits = (num1: number, num2: number) => {
    const sum1 = String(num1).split('').reduce((sum, digit) => sum + parseInt(digit), 0);
    const sum2 = String(num2).split('').reduce((sum, digit) => sum + parseInt(digit), 0);

    if (sum1 > sum2) return `${num1} имеет большую сумму цифр`;
    else if (sum2 > sum1) return `${num2} имеет большую сумму цифр`;
    else return "Оба числа имеют одинаковую сумму цифр";
}
console.log(sumOfDigits(67, 56));

// Напишите программу, которая принимает строку str и переставляет местами первый и последний
// символы строки. Выведите результат в консоль.
// Входные: str = "hello" → Результат: "oellh"
// Входные: str = "typescript" → Результат: “typescript"
const swapFirstAndLast = (str: string) => {
    const firstChar = str[0];
    const lastChar = str[str.length - 1];
    const middlePart = str.substring(1, str.length - 1);

    return lastChar + middlePart + firstChar;
}
console.log(swapFirstAndLast('hello'));

// Напишите программу, которая принимает две строки str1 и str2 и проверяет, содержат ли они
// одинаковые символы (не обязательно в том же порядке). Выведите результат в консоль.
// Входные: str1 = "abc", str2 = "cba" → Результат: "Строки содержат одинаковые символы"
// Входные: str1 = "abc", str2 = "def" → Результат: "Строки не содержат одинаковые символы"
const includeVal = (str1: string, str2: string) => {
    if (str1.length !== str2.length) return "Строки не содержат одинаковые символы";

    const sorted1 = str1.split('').sort().join('');
    const sorted2 = str2.split('').sort().join('');

    return (sorted1 === sorted2) ? "Строки содержат одинаковые символы" : "Строки не содержат одинаковые символы";
}
console.log(includeVal('abc', 'cba'));

// Создайте две переменные num1 и num2. Напишите программу, которая проверяет, является ли
// сумма этих чисел четной. Если да, выведите "Сумма четная", иначе "Сумма нечетная".
// Входные: num1 = 4, num2 = 6 → Результат: "Сумма четная"
// Входные: num1 = 7, num2 = 5 → Результат: "Сумма нечетная"
const isEven = (num1: number, num2: number) => ((num1 + num2) % 2 === 0) ? 'Сумма четная' : 'Сумма нечетная';
console.log(isEven(4, 7));

// Напишите программу, которая находит наибольший общий делитель (НОД) двух чисел num1 и
// num2.
// Входные: num1 = 15, num2 = 25 → Результат: "НОД: 5"
// Входные: num1 = 14, num2 = 28 → Результат: "НОД: 14"
const findGCDSimple = (num1: number, num2: number) => {
    const min = Math.min(num1, num2);

    let gcd = 1;
    for (let i = 2; i <= min; i++) {
        if (num1 % i === 0 && num2 % i === 0) gcd = i;
    }

    return `НОД: ${gcd}`;
};
console.log(findGCDSimple(15, 25));
console.log(findGCDSimple(14, 28));

// Напишите программу, которая проверяет, начинается ли строка str с гласной буквы. Гласными
// считаются: a, e, i, o, u. Выведите результат в консоль.
// Входные: str = "apple" → Результат: "Строка начинается с гласной"
// Входные: str = "banana" → Результат: "Строка не начинается с гласной"
const isFirstVowel = (str: string) => (/^[aeiou]/i.test(str)) ? "Строка начинается с гласной" : "Строка не начинается с гласной";
console.log(isFirstVowel('apple'));

// Напишите программу, которая проверяет, можно ли строку str разделить на две части таким
// образом, чтобы количество уникальных символов в обеих частях было одинаковым. Если
// возможно, выведите "Можно", иначе "Нельзя".
// Входные: str = "aabbcc" → Результат: "Можно"
// Входные: str = "abcabc" → Результат: "Нельзя"
const canSplitString = (str: string) => {
    if (str.length < 2) return "Нельзя";

    for (let i = 1; i < str.length; i++) {
        const leftPart = str.slice(0, i);
        const rightPart = str.slice(i);

        const leftUnique = new Set(leftPart);
        const rightUnique = new Set(rightPart);

        if (leftUnique.size === rightUnique.size) return `Можно (${leftPart}|${rightPart})`;
    }

    return "Нельзя";
};

console.log(canSplitString("aabbcc"));
console.log(canSplitString("abcabc"));

// Напишите программу, которая проверяет, можно ли заданное число num представить в виде
// произведения двух последовательных целых чисел. Если возможно, выведите эти числа, иначе
// выведите "Невозможно".
// Входные: num = 20 → Результат: "4 * 5 = 20"
// Входные: num = 42 → Результат: "6 * 7 = 42"
const checkConsecutiveProduct = (num: number) => {
    const discriminant = 1 + 4 * num;
    const sqrtDiscriminant = Math.sqrt(discriminant);

    if (Number.isInteger(sqrtDiscriminant)) {
        const x1 = (-1 + sqrtDiscriminant) / 2;
        const x2 = (-1 - sqrtDiscriminant) / 2;

        const x = Math.max(x1, x2);

        if (Number.isInteger(x)) return `${x} * ${x + 1} = ${num}`;
    }

};
console.log(checkConsecutiveProduct(20));

// Напишите программу, которая проверяет, можно ли из символов строки str составить палиндром,
// переставив их. Если возможно, выведите "Можно", иначе "Нельзя".
// Входные: str = "civic" → Результат: "Можно"
// Входные: str = "ivicc" → Результат: "Можно"
// Входные: str = "hello" → Результат: "Нельзя"
const isPalindrom = (str: string) => (str === str.split('').reverse().join('')) ? 'Можно' : 'Нельзя';
console.log(isPalindrom('civic'));