"use strict";
// Базовый класс хранит массив строк. Наследник добавляет метод filterLong(minLength) —
// возвращает строки длиной больше minLength.
class StringArray {
    constructor() {
        this.str = ['hello', 'world', 'TypeScript', 'JS', 'programming', 'a', 'ab', 'abc'];
    }
}
class FilteredStringArray extends StringArray {
    constructor() {
        super(...arguments);
        this.filterLong = (minLength) => this.str.filter(el => el.length > minLength);
    }
}
const filteredStringArray = new FilteredStringArray();
console.log(filteredStringArray.filterLong(4));
// Создать базовый класс NumberArray, который хранит массив чисел и предоставляет метод
// getArray() для его получения. Создать класс-наследник FilteredNumberArray, который добавляет
// свойство threshold и метод sumAboveThreshold() — возвращает сумму чисел из массива родителя,
// больших порога.
// [1, 2, 3, 4, 5], порог 3 → sumAboveThreshold() = 9
// [10, 20, 30], порог 15 → sumAboveThreshold() = 50
class NumberArray {
    constructor(array) {
        this.getArray = () => this.array;
        this.array = array;
    }
}
class FilteredNumberArray extends NumberArray {
    constructor(array, threshold) {
        super(array);
        this.threshold = threshold;
    }
    sumAboveThreshold() {
        return this.array
            .filter(el => el > this.threshold)
            .reduce((sum, el) => sum + el, 0);
    }
}
const filteredNumberArray = new FilteredNumberArray([1, 2, 3, 4, 5], 3);
console.log('Массив:', filteredNumberArray.getArray());
console.log('Порог:', filteredNumberArray.threshold);
console.log('Сумма чисел выше порога:', filteredNumberArray.sumAboveThreshold());
// Базовый класс StringProcessor с методом process(), который возвращает строку в верхнем регистре.
// Наследник ReversedStringProcessor переопределяет process() и возвращает перевёрнутую строку
// в большом регистре.
// "hello" → "HELLO" (родитель)
// "hello" → “OLLEH" (наследник)
class StringProcessor {
    constructor(str) {
        this.str = str;
    }
    process() {
        return this.str.toUpperCase();
    }
}
class ReversedStringProcessor extends StringProcessor {
    process() {
        return this.str.split('').reverse().join('').toUpperCase();
    }
}
const reversedStringProcessor = new ReversedStringProcessor('hello');
console.log(reversedStringProcessor.process());
class ObjectFilter {
    constructor(obj) {
        this.obj = obj;
    }
    filterKeys() {
        const result = [];
        for (const key in this.obj) {
            if (key.startsWith('a'))
                result.push(key);
        }
        return result;
    }
}
class FilteredObjectLength extends ObjectFilter {
    constructor(obj) {
        super(obj);
    }
    filterLongKeys() {
        const parentKeys = this.filterKeys();
        return parentKeys.filter(key => key.length > 3);
    }
}
const filteredObjectLength = new FilteredObjectLength({ age: 20, amount: 50, name: "Bob" });
console.log('Родительский метод:', filteredObjectLength.filterKeys());
console.log('Метод наследника:', filteredObjectLength.filterLongKeys());
// Базовый класс NumberFilter с методом filterEven() — возвращает только чётные числа. Наследник
// NumberFilterDivisible переопределяет метод и возвращает числа, делящиеся на заданное число n.
// [1, 2, 3, 4, 5], n=2 → [2, 4] (родитель)
class NumberFilter {
    constructor(array) {
        this.array = array;
    }
    filterEven() {
        return this.array.filter(el => el % 2 === 0);
    }
}
class NumberFilterDivisible extends NumberFilter {
    constructor(array, divisor) {
        super(array);
        this.divisor = divisor;
    }
    filterEven() {
        const evenNumbers = super.filterEven();
        return evenNumbers.filter(el => el % this.divisor === 0);
    }
}
const numberFilterDivisible = new NumberFilterDivisible([1, 2, 3, 4, 5, 6, 8], 2);
console.log(numberFilterDivisible.filterEven());
// Базовый класс хранит текст. Наследник добавляет метод getWordsStartingWith(letter) —
// возвращает слова, начинающиеся с указанной буквы.
// Базовый класс TextFilter с методом filterWords(text) — возвращает все слова, начинающиеся с
// заглавной буквы. Наследник LongWordFilter переопределяет метод и возвращает только слова
// длиной больше 5.
// "Hello World from TypeScript" → ["Hello", "World", "TypeScript"] (родитель)
// "Hello World from TypeScript" → ["TypeScript"] (наследник)
class TextFilter {
    constructor(text) {
        this.text = text;
    }
    filterWords() {
        const words = this.text.split(' ');
        return words.filter(word => word[0] === word[0].toUpperCase());
    }
}
class LongWordFilter extends TextFilter {
    constructor(text, minLength) {
        super(text);
        this.minLength = minLength;
    }
    filterWords() {
        const capitalizedWords = super.filterWords();
        return capitalizedWords.filter(word => word.length > this.minLength);
    }
}
const longWordFilter = new LongWordFilter('Hello World from TypeScript', 5);
console.log(longWordFilter.filterWords());
// Базовый класс ArrayUpper с методом toUpperCaseArray() — возвращает все строки в верхнем
// регистре. Наследник FilteredArrayUpper переопределяет метод и возвращает только строки
// длиной больше 3.
// [“a”, “ab”, “abc”, “abcd”] → [“A”, “AB”, “ABC”, “ABCD”] (родитель)
// [“a”, “ab”, “abc”, “abcd”] → [“ABCD”] (наследник)
class ArrayUpper {
    constructor(array) {
        this.array = array;
    }
    toUpperCaseArray() {
        return this.array.map(el => el.toUpperCase());
    }
}
class FilteredArrayUpper extends ArrayUpper {
    constructor(array, lengthStr) {
        super(array);
        this.lengthStr = lengthStr;
    }
    toUpperCaseArray() {
        const upperCaseRes = super.toUpperCaseArray();
        return upperCaseRes.filter(el => el.length > this.lengthStr);
    }
}
const filteredArrayUpper = new FilteredArrayUpper(['a', 'ab', 'abc', 'abcd'], 3);
console.log(filteredArrayUpper.toUpperCaseArray());
// Базовый класс Multiplier с методом multiplyByTwo() — умножает все числа массива на 2. Наследник
// CustomMultiplier переопределяет метод и возвращает все четные элементы массива.
class Multiplier {
    constructor(array) {
        this.array = array;
    }
    multiplyByTwo() {
        return this.array.filter(el => el % 2 === 0);
    }
}
class CustomMultiplier extends Multiplier {
    multiplyByTwo() {
        const multiplied = super.multiplyByTwo();
        return multiplied.map(el => el * 2);
    }
}
const customMultiplier = new CustomMultiplier([1, 2, 3, 4, 5, 6, 7, 8]);
console.log(customMultiplier.multiplyByTwo());
