// На входе значение. Необходимо его обработать. Если это число и оно не является четным,
// бросить исключение
const isEvenNum = (val) => {
    try {
        if (!isNaN(val) && val % 2 !== 0) throw new Error('Не верный ввод');
        return true;
    } catch (error) {
        console.log(error.message);
        return false;
    }
}
console.log(isEvenNum(4));

// На входе массив значений. Необходимо его обработать. Если в массиве есть хотя бы 1
// строка, бросить исключение.
const isNotStrToArr = (val) => {
    try {
        const everyVal = val.every(el => !isNaN(el));
        if (!everyVal) throw new Error('Не верный ввод');
        return true;
    } catch (error) {
        console.log(error.message);
        return false;
    }
}
console.log(isNotStrToArr([1, 2, 45]));

// Дан массив. Вывести те элементы массива, id которых – четное значение. Добавить
// проверки
const isEvenId = (array) => {
    try {
        if (!Array.isArray(array)) throw new Error("Входные данные не массив");
        const result = array.filter(el => {
            if (typeof el.id !== 'number') throw new Error("Элемент не имеет числового id");
            return el.id % 2 === 0;
        });
        return result;
    } catch (error) {
        console.log(error);
        return false;
    }
}
console.log(isEvenId([
    { "id": 1, "label": "JavaScript", "category": "programmingLanguages", "priority": 1 },
    { "id": 2, "label": "TypeScript", "category": "programmingLanguages", "priority": 1 },
    { "id": 3, "label": "SQL", "category": "programmingLanguages", "priority": 2 },
    { "id": 4, "label": "Java", "category": "programmingLanguages", "priority": 3 },
    { "id": 5, "label": "GO", "category": "programmingLanguages", "priority": 3 }
]));

// На вход подается число n – количество элементов массива. Необходимо заполнить массив
// случайными элементами в диапазоне 0<n< 100. Добавить проверки на ввод n.
const fillingAnArray = (n) => {
    try {
        if (isNaN(n) || n <= 0 || n >= 100) throw new Error('Неверный ввод: число должно быть >0 и <100');
        const arr = Array.from({ length: n }, () => Math.floor(Math.random() * 100));
        return arr;
    } catch (error) {
        console.log(error.message);
        return false;
    }
}
console.log(fillingAnArray(45));

// Реализуйте функцию, которая принимает число и возвращает возвенную в квадрат каждую
// цифру числа соединяя их. Добавить проверки на ввод числа
// 9119 -> 811181
const sqrtNum = (n) => {
    try {
        if (isNaN(n)) throw new Error('Неверный ввод');
        return String(n).split('').map(el => el ** 2).join('');
    } catch (error) {
        console.log(error.message);
        return false;
    }
}
console.log(sqrtNum(9119));

// Реализуйте функцию, которая принимает массив чисел и возвращает индекс наибольшего
// числа. Если таких чисел несколько, вернуть индекс первого найденного.
// Добавить проверки на ввод
// [1, 3, 7, 7, 5] -> 2
const maxNum = (array) => {
    try {
        if (!array.length) throw new Error('Неверный ввод');
        let maxValIndex = 0;
        for (let i = 1; i < array.length; i++) {
            if (array[i] > array[maxValIndex]) {
                maxValIndex = i;
            }
        }
        return maxValIndex;
    } catch (error) {
        console.log(error.message);
        return false;
    }
}
console.log(maxNum([-1, 2, -3, 4]));

// На вход подается массив чисел. Вернуть массив, в котором все отрицательные числа
// заменены на 0. Добавить проверку на ввод (все элементы массива должны быть числами).
// [-1, 2, -3, 4] -> [0, 2, 0, 4]
const replaceNum = (array) => {
    try {
        if (!array.length) throw new Error('Неверный ввод');
        let newArr = [];
        for (let i in array) {
            array[i] > 0 ? newArr.push(array[i]) : newArr.push(0)
        }
        return newArr;
    } catch (error) {
        console.log(error.message);
        return false;
    }
}
console.log(replaceNum([-1, 2, -3, 4]));
