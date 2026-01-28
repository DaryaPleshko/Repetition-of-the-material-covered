// Создай объект animal с полем eats: true. Создай объект rabbit и сделай так, чтобы он “наследовал” eats
// через прототип.
// → Проверь rabbit.eats.
const animal = { eats: true };
const rabbit = Object.create(animal);
console.log(rabbit.eats);

// Создай объект car с wheels: 4. Сделай объект tesla, унаследуй от car, и добавь ему свойство electric: true.
// → Проверь, что у tesla есть оба свойства.
const car = { wheels: 4 };
const tesla = Object.create(car);
tesla.electric = true;

console.log('tesla.wheels:', tesla.wheels);
console.log('tesla.electric:', tesla.electric);

// Нужно посчитать факториал числа n (произведение всех чисел от 1 до n).
// • В родительском классе реализуем через цикл.
// • В дочернем классе ту же задачу решаем через рекурсию.
// Для 5 = 5 * 4 * 3 * 2 * 1 = 120
// Родительский класс - реализация через цикл
class FactorialLoop {
    calculate(n: number): number {
        let result = 1;
        for (let i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }
}
class FactorialRecursive extends FactorialLoop {
    calculate(n: number): number {
        if (n === 0 || n === 1) return 1;
        return n * this.calculate(n - 1);
    }
}
const loop = new FactorialLoop();
console.log(`Факториал через цикл: 5! = ${loop.calculate(5)}`);
const recursive = new FactorialRecursive();
console.log(`Факториал через рекурсию: 5! = ${recursive.calculate(5)}`);

// Нужно найти сумму чисел от 1 до n.
// • В родителе используем цикл.
// • В дочернем классе используем рекурсию.
// Для 5 = 1 + 2 + 3 + 4 + 5 = 15
class SumNum {
    calculate(n: number): number {
        let result = 0;
        for (let i = 1; i <= n; i++) {
            result += i;
        }
        return result;
    }
}
class SumNumRecursive extends SumNum {
    calculate(n: number): number {
        if (n === 0) return 0;
        return n + this.calculate(n - 1);
    }
}
const sumNum = new SumNum();
console.log(`Сумма через цикл: = ${sumNum.calculate(5)}`);
const sumNumRecursive = new SumNumRecursive();
console.log(`Сумма через рекурсию: = ${sumNumRecursive.calculate(5)}`);

// Посчитать сумму чисел в массиве.
// • В родителе используем цикл.
// • В дочернем классе — рекурсию.
class SumNumArr {
    protected n: number[];
    constructor(n: number[]) {
        this.n = n;
    }
    calculate = (): number => this.n.reduce((sum, el) => sum + el, 0);
}
class SumNumArrRecursive extends SumNumArr {
    constructor(n: number[]) {
        super(n);
    };
    calculate = (): number => {
        const sumHelper = (index: number): number => {
            if (index >= this.n.length) return 0;
            return this.n[index] + sumHelper(index + 1);
        };
        return sumHelper(0);
    };
};
const sumNumArr = new SumNumArr([1, 2, 3, 4, 5, 6]);
console.log(`Сумма массива через цикл: = ${sumNumArr.calculate()}`);
const sumNumArrRecursive = new SumNumArrRecursive([1, 2, 3, 4, 5, 6]);
console.log(`Сумма массива через рекурсию: = ${sumNumArrRecursive.calculate()}`);

// Посчитать количество четных чисел в массиве.
// • В родителе используем цикл.
// • В дочернем классе рекурсию
class SumChetNum {
    protected n: number[];
    constructor(n: number[]) {
        this.n = n;
    }
    calculate = (): number => this.n.filter(num => num % 2 === 0).length;
}
class SumChetNumRecursive extends SumChetNum {
    constructor(n: number[]) {
        super(n);
    }
    calculate = (): number => {
        if (this.n.length === 0) return 0;
        const isEven = this.n[0] % 2 === 0 ? 1 : 0;
        return isEven + new SumChetNumRecursive(this.n.slice(1)).calculate();
    };
}
const sumChetNum = new SumChetNum([1, 2, 3, 4, 5, 6]);
console.log(`Сумма четных чисел массива через цикл: = ${sumChetNum.calculate()}`);
const sumChetNumRecursive = new SumChetNumRecursive([1, 2, 3, 4, 5, 6]);
console.log(`Сумма четных чисел массива через рекурсию: = ${sumChetNumRecursive.calculate()}`);
