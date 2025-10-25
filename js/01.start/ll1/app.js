// Даны переменные a = 10 и b = 3. Найдите остаток от деления a на b.
const value_A = 10;
const value_B = 3;

console.log(value_A % value_B);

// Пользователь вводит с клавиатуры два числа: основание степени и показатель степени.
// Необходимо возвести число в введенную степень.

const base = +prompt('введите основание степени');
const degree = +prompt('введите показатель степени');

console.log(base ** degree);

// Напишите программу, которая считывает длины двух катетов в прямоугольном треугольнике и
// выводит его площадь. Используйте формулу: S = 1/2 ∙ a ∙ b.


const katet_A = +prompt('введите основание A');
const katet_B = +prompt('введите основание B');

console.log((katet_A * katet_B) * 1 / 2);

// У известного американского писателя Рэя Бредбери есть роман «451 градус по Фаренгейту».
// Напишите скрипт, который определяет, какой температуре по шкале Цельсия соответствует
// указанное значение по шкале Фаренгейта. Используйте формулу: C = 5/9 ∙ (F - 32).

const F = +prompt('введите температуру по шкале Фаренгейта');

console.log(5 / 9 * (F - 32));

// Вы вводите 2 числа a и b. Вам необходимо решить пример (2(a-b)-4(b-a))/2

const a = +prompt('введите число A');
const b = +prompt('введите число B');

console.log((2 * (a - b) - 4 * (b - a)) / 2);

// Напишите программу, вычисляющую объем куба и площадь его полной поверхности, по
// введённому значению длины ребра. Используйте формулы: V = a^3, S = 6 ∙ a^2 (V = a^3, S = 6∙a^2).

const length = +prompt('введите значение длины ребра');

console.log(`V = ${length ** 3}`);
console.log(`S = ${6 * (length ** 2)}`);

// Даны числа 4, -2, 5, 19, -130, 0, 10. Найдите минимальное и максимальное число. Предварительно
// изучите модуль Math.

console.log(`min = ${Math.min(4, -2, 5, 19, -130, 0, 10)}`);
console.log(`max = ${Math.max(4, -2, 5, 19, -130, 0, 10)}`);

// Найдите квадратный корень из 245

console.log(`квадратный корень из 245 = ${Math.sqrt(245)}`);

// Округлите число до ближайшего целого

console.log(`Округление числа 4.7 до ближайшего целого = ${Math.round(4.7)}`);

// Получите абсолютное значение числа.

console.log(`Получите абсолютное значение числа -15 = ${Math.abs(-15)}`);

// Возведите число в степень. Используйте модуль Math.

console.log(`Возведите число 6 в степень = ${Math.pow(6, 2)}`);

// Получите случайное число в диапазоне от 0 до 1. Используйте модуль Math.

console.log(`Получите случайное число в диапазоне от 0 до 1 = ${Math.floor(Math.random() * 1)}`);

// Напишите программу, в которой вычисляется сумма, разность и произведение двух целых чисел,
// введенных с клавиатуры.

const integerA = +prompt('введите A');
const integerB = +prompt('введите B');

console.log(`сумма 2 целых чисел = ${integerA + integerB}`);
console.log(`разность 2 целых чисел = ${integerA - integerB}`);
console.log(`произведение 2 целых чисел = ${integerA * integerB}`);

// Пользователь вводит два числа. Проверьте, равны ли они.

const entrance_A = +prompt(`введите числo A`);
const entrance_B = +prompt(`введите числo B`);

if (entrance_A === entrance_B) console.log(`${entrance_A} = ${entrance_B}`);
else console.log(`${entrance_A} != ${entrance_B}`);

// Пользователь вводит два числа. Выведите большее из них.

if (entrance_A > entrance_B) console.log(`${entrance_A} > ${entrance_B}`);
else console.log(`${entrance_B} > ${entrance_A}`);

// Пользователь вводит число. Определите, является ли оно кратным 3.

const entrance_val = +prompt(`введите числo на проверку кратности, проверку деления на 2 и 3, и проверку на +/-/0`);

if (entrance_val % 3 === 0) console.log(`${entrance_val} - кратно 3`);
else console.log(`${entrance_val} - не кратно 3`);

// Введите число. Проверьте, делится ли оно на 2 и на 3 одновременно.

if (entrance_val % 3 === 0 && entrance_val % 2 === 0) console.log(`${entrance_val} - Делится на 2 и 3`);
else console.log(`${entrance_val} - Не делится на 2 и 3`);

// Пользователь вводит целое число. Выведите, является ли оно положительным, отрицательным или
// нулем.

if (entrance_val > 0) console.log(`${entrance_val} - > 0 (+)`);
else if (entrance_val < 0) console.log(`${entrance_val} - < 0 (-)`);
else console.log(`${entrance_val} - = 0`);

// Пользователь вводит два числа. Проверьте, являются ли они противоположными по знаку.

if ((entrance_A > 0 && entrance_B < 0) || (entrance_A < 0 && entrance_B > 0)) console.log(`Числа ${entrance_A} и ${entrance_B} - Противоположные`);
else console.log(`Числа ${entrance_A} и ${entrance_B} - Не противоположные`);

// Даны переменные a и b. Проверьте, что a делится без остатка на b. Если это так — выведите
// «Делится» и результат деления, иначе выведите «Делится с остатком» и само значение деления.

if (entrance_A % entrance_B === 0) console.log(`${entrance_A} / ${entrance_B} = ${entrance_A / entrance_B} `);
else console.log(`${entrance_A} / ${entrance_B} Делится с остатком, остаток = ${entrance_A % entrance_B}`);

// Пользователь вводит число. Определите, однозначное оно, двузначное или больше.

if (String(entrance_val).length > 2) console.log(`${entrance_val} - Многозначное`);
else if (String(entrance_val).length === 2) console.log(`${entrance_val} - Двузначное`);
else console.log(`${entrance_val} - Однозначное`);

// Пользователь вводит число. Проверьте, заканчивается ли оно на 0.

if (entrance_val % 10 === 0) console.log(`число ${entrance_val} заканчивается на 0`);
else console.log(`число ${entrance_val} не заканчивается на 0`);

// Введите два числа. Если первое больше второго — выведите разность, иначе — сумму.

if (entrance_A > entrance_B) console.log(`${entrance_A} > ${entrance_B} => ${entrance_A - entrance_B} `);
else console.log(`${entrance_A} < ${entrance_B} => ${entrance_A + entrance_B}`);

// Пользователь вводит оценку (0-100). Определите уровень:
// 0-59 — F, 60-69 — D, 70-79 — C, 80-89 — B, 90-100 — A

if (entrance_val >= 0 && entrance_val <= 59) console.log(`${entrance_val} - F (0-59)`);
else if (entrance_val >= 60 && entrance_val <= 69) console.log(`${entrance_val} - D (60-69)`);
else if (entrance_val >= 70 && entrance_val <= 79) console.log(`${entrance_val} - c (70-79)`);
else if (entrance_val >= 80 && entrance_val <= 89) console.log(`${entrance_val} - B (80-89)`);
else if (entrance_val >= 90 && entrance_val <= 100) console.log(`${entrance_val} - A (90-100)`);

// Пользователь вводит число. Определите, входит ли оно в диапазон от 10 до 50 включительно.

if (entrance_val >= 10 && entrance_val <= 50) console.log(`${entrance_val} - входит в диапазон от 10 до 50`);
else console.log(`${entrance_val} -  НЕ входит в диапазон от 10 до 50`);

// Пользователь вводит два числа. Выведите среднее арифметическое. (Вычисляется путем
// сложения группы чисел, а затем деления на количество этих чисел)

console.log(`Среднее арифметическое ${entrance_A} и ${entrance_B} = ${(entrance_A + entrance_B) / 2}`);

// Вы вводите значение с клавиатуры. Если значение четное, то вывести true, в противном случае
// false.

if (entrance_val % 2 === 0) console.log(`${entrance_val} - четное (true)`);
else console.log(`${entrance_val} - не четное (false)`);

// Вы вводите значение с клавиатуры. Если значение от 0 до 18 — «детство», от 19 до 40 — «молодость»,
// от 41 до 100 — «зрелость», в противном случае — «некорректный ввод».

if (entrance_val >= 0 && entrance_val <= 18) console.log(`${entrance_val} - детство (0-18)`);
else if (entrance_val >= 19 && entrance_val <= 40) console.log(`${entrance_val} - молодость (19-40)`);
else if (entrance_val >= 41 && entrance_val <= 100) console.log(`${entrance_val} - зрелость (41-100)`);

// Пользователь вводит с клавиатуры число. Найдите корень введенного числа (если результат —
// число с плавающей точкой, то округлить до целых).

console.log(`Корень числа ${entrance_val} = ${Math.floor(Math.sqrt(entrance_val))}`);

// Напишите программу для пересчета временного интервала, заданного в минутах, в величину,
// выраженную в часах и минутах.

console.log(`пересчет временного интервала ${entrance_val}, заданного в минутах, в величину, выраженную в часах и минутах = ${Math.floor(entrance_val / 60)} часа(ов) ${entrance_val % 60} минут`);

// На вход программе подается число n – количество собачьих лет. Напишите программу, которая
// вычисляет возраст собаки в человеческих годах. В течение первых двух лет собачий год равен 10.5
// человеческим годам. После этого каждый год собаки равен 4 человеческим годам.

if (entrance_val <= 2) console.log(`собаке с возрастом ${entrance_val} - ${entrance_val * 10.5} человеческих лет`);
else console.log(`собаке с возрастом ${entrance_val} - ${((entrance_val - 2) * 4) + 21} человеческих лет`);

// Пользователь вводит три числа a, b, c. Напишите программу, которая находит корни квадратного
// уравнения ax^2 + bx + c = 0 . Если уравнение имеет два корня, следует вывести их в
// порядке возрастания.
// Входные: a = 1, b = -3, c = 2 → Результат: Корни = 1, 2
// Входные: a = 2, b = -4, c = 2 → Результат: Корень = 1

const val_a = 1;
const val_b = -3;
const val_c = 2;
let D;

if (val_a != 0) {
    D = val_b ** 2 - 4 * val_a * val_c;
    console.log(`D = ${D}`);
} else console.log(`${val_a} = 0`);

if (D > 0) console.log(`x1 = ${(-val_b + Math.sqrt(D)) / (2 * val_a)}; x2 = ${(-val_b - Math.sqrt(D)) / (2 * val_a)}`);
else if (D == 0) console.log(`x = ${-val_b / (2 * val_a)}`);
else if (D < 0) console.log(`Уравнение не имеет действительных решений`);




