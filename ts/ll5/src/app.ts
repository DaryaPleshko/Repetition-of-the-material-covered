// Базовый класс хранит массив строк. Наследник добавляет метод filterLong(minLength) —
// возвращает строки длиной больше minLength.
class StringArray {
    str: string[] = ['hello', 'world', 'TypeScript', 'JS', 'programming', 'a', 'ab', 'abc']
}
class FilteredStringArray extends StringArray {
    filterLong = (minLength: number): string[] => this.str.filter(el => el.length > minLength);
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
    protected array: number[];
    constructor(array: number[]) {
        this.array = array;
    }
    getArray = (): number[] => this.array;
}
class FilteredNumberArray extends NumberArray {
    threshold: number;
    constructor(array: number[], threshold: number) {
        super(array);
        this.threshold = threshold;
    }
    sumAboveThreshold(): number {
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
    protected str: string;
    constructor(str: string) {
        this.str = str;
    }
    process(): string {
        return this.str.toUpperCase();
    }
}
class ReversedStringProcessor extends StringProcessor {
    override process(): string {
        return this.str.split('').reverse().join('').toUpperCase();
    }
}
const reversedStringProcessor = new ReversedStringProcessor('hello');
console.log(reversedStringProcessor.process());

// Создать базовый класс ObjectFilter с методом filterKeys() — возвращает все ключи объекта,
// начинающиеся с буквы "a". Создать класс-наследник FilteredObjectLength с дополнительным
// методом filterLongKeys() — возвращает ключи из родителя, длина которых больше 3.
// { age: 20, amount: 50, name: "Bob" } → ["age", "amount"] (родитель)
// { age: 20, amount: 50, name: "Bob" } → ["amount"] (наследник)
interface iObjFilter {
    age: number, amount: number, name: string
}
class ObjectFilter {
    protected obj: iObjFilter;
    constructor(obj: iObjFilter) {
        this.obj = obj;
    }
    filterKeys(): string[] {
        const result: string[] = [];
        for (const key in this.obj) {
            if (key.startsWith('a')) result.push(key);
        }
        return result;
    }
}
class FilteredObjectLength extends ObjectFilter {
    constructor(obj: iObjFilter) {
        super(obj);
    }
    filterLongKeys(): string[] {
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
    array: number[]
    constructor(array: number[]) {
        this.array = array;
    }
    filterEven(): number[] {
        return this.array.filter(el => el % 2 === 0);
    }
}
class NumberFilterDivisible extends NumberFilter {
    divisor: number
    constructor(array: number[], divisor: number) {
        super(array);
        this.divisor = divisor;
    }
    override filterEven(): number[] {
        const evenNumbers = super.filterEven();
        return evenNumbers.filter(el => el % this.divisor === 0);
    }
}
const numberFilterDivisible = new NumberFilterDivisible([1, 2, 3, 4, 5, 6, 8], 2);
console.log(numberFilterDivisible.filterEven());

// Базовый класс TextFilter с методом filterWords(text) — возвращает все слова, начинающиеся с
// заглавной буквы. Наследник LongWordFilter переопределяет метод и возвращает только слова
// длиной больше 5.
// "Hello World from TypeScript" → ["Hello", "World", "TypeScript"] (родитель)
// "Hello World from TypeScript" → ["TypeScript"] (наследник)
class TextFilter {
    protected text: string;
    constructor(text: string) {
        this.text = text;
    }
    filterWords(): string[] {
        const words = this.text.split(' ');
        return words.filter(word => word[0] === word[0].toUpperCase());
    }
}
class LongWordFilter extends TextFilter {
    protected minLength: number;
    constructor(text: string, minLength: number) {
        super(text);
        this.minLength = minLength;
    }
    override filterWords(): string[] {
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
    protected array: string[];
    constructor(array: string[]) {
        this.array = array;
    }
    toUpperCaseArray(): string[] {
        return this.array.map(el => el.toUpperCase());
    }
}
class FilteredArrayUpper extends ArrayUpper {
    protected lengthStr: number;
    constructor(array: string[], lengthStr: number) {
        super(array);
        this.lengthStr = lengthStr;
    }
    override toUpperCaseArray(): string[] {
        const upperCaseRes = super.toUpperCaseArray();
        return upperCaseRes.filter(el => el.length > this.lengthStr);
    }
}
const filteredArrayUpper = new FilteredArrayUpper(['a', 'ab', 'abc', 'abcd'], 3);
console.log(filteredArrayUpper.toUpperCaseArray());

// Базовый класс Multiplier с методом multiplyByTwo() — умножает все числа массива на 2. Наследник
// CustomMultiplier переопределяет метод и возвращает все четные элементы массива.
class Multiplier {
    array: number[]
    constructor(array: number[]) {
        this.array = array;
    }
    multiplyByTwo(): number[] {
        return this.array.filter(el => el % 2 === 0);
    }
}
class CustomMultiplier extends Multiplier {
    override multiplyByTwo(): number[] {
        const multiplied = super.multiplyByTwo();
        return multiplied.map(el => el * 2);
    }
}
const customMultiplier = new CustomMultiplier([1, 2, 3, 4, 5, 6, 7, 8]);
console.log(customMultiplier.multiplyByTwo());
