// Необходимо отобразить кнопку с надписью «Нажми на меня». По клику на нее
// вывести alert с сообщением
const l1 = document.querySelector('.l1');
l1.addEventListener('click', () => alert('Ты нажал на кнопку'));

// Необходимо отобразить кнопку с надписью «Нажми на меня» и инпут со
// значением по-умолчанию «+375(хх)ххх-хх-хх». По клику на кнопку заменить
// значение инпута на «+375(29)111-11-11»
const button_l2 = document.querySelector('.button_l2');
button_l2.addEventListener('click', () => {
    const input_l2 = document.querySelector('.input_l2');
    input_l2.value = '+375(29)111-11-11';
});

// Необходимо отобразить кнопку с надписью «Нажми на меня» и пустой инпут. По
// клику на кнопку вызвать alert и отобразить сообщение из значения инпута
const button_l3 = document.querySelector('.button_l3');
button_l3.addEventListener('click', () => {
    const input_l3 = document.querySelector('.input_l3');
    alert(input_l3.value);
});

// Необходимо отобразить кнопку с надписью «Нажми на меня» и пустой инпут. По
// клику на кнопку вызвать alert и отобразить сообщение из значения инпута.
// Проверки на ввод. Обработать ошибки
const button_l4 = document.querySelector('.button_l4');
button_l4.addEventListener('click', () => {
    try {
        const input_l4 = document.querySelector('.input_l4');
        if (input_l4.value.trim() === '') throw new Error('Вы ничего не ввели');

        alert(input_l4.value);
    } catch (error) {
        alert(error.message);
    }
});

// Необходимо отобразить числовой инпут и кнопку. После нажатия на кнопку
// необходимо получить значение из инпута. Проверить, что это число > 0. Если
// проверка true, то вывести в Результат ряд Фибоначчи.
const button_l5 = document.querySelector('.button_l5');
button_l5.addEventListener('click', () => {
    try {
        const input_l5 = document.querySelector('.input_l5');
        if (input_l5.value.trim() === '') throw new Error('Вы ничего не ввели');
        if (isNaN(input_l5.value)) throw new Error('Вы ввели строку');
        const number = Number(input_l5.value);
        if (number < 0) throw new Error('Вы ввели число меньше нуля');
        const fibSeries = [0];
        if (number > 1) {
            fibSeries.push(1);
        }
        for (let i = 2; i < number; i++) {
            const nextFib = fibSeries[i - 1] + fibSeries[i - 2];
            fibSeries.push(nextFib);
        }
        alert(`Ряд Фибоначчи: ${fibSeries.join(', ')}`);
    } catch (error) {
        alert(error.message);
    }
});

// Необходимо отобразить кнопку и инпут со значением по умолчанию. По клику на
// кнопку заменить значение инпута
const button_l6 = document.querySelector('.button_l6');
button_l6.addEventListener('click', () => {
    const input_l6 = document.querySelector('.input_l6');
    input_l6.value === 'hello' ? input_l6.value = 'bye' : input_l6.value = 'hello';
});

// Записать в результат удвоенное значение инпута. Добавить проверки
const button_l7 = document.querySelector('.button_l7');
button_l7.addEventListener('click', () => {
    try {
        const input_l7 = document.querySelector('.input_l7');
        if (input_l7.value.trim() === '') throw new Error('Вы ничего не ввели');
        input_l7.value = input_l7.value * 2;
    } catch (error) {
        alert(error.message);
    }
});

// У вас есть кнопка. После каждого нажатия менять background
const button_l8 = document.querySelector('.button_l8');
arrayColor = ['#e21115ff', '#d06b12ff', '#4a30cbff', '#e80f9cff', '#0ad407ff']
button_l8.addEventListener('click', () => {
    button_l8.style = `background-color: ${arrayColor[Math.floor(Math.random() * arrayColor.length)]}`
});

// После нажатия на кнопку «Разблокировать» мы можем вносить изменения в
// инпут. После нажатия на заблокировать данное действие запрещается, тем самым
// выключая возможность редактирования значения инпута
const button_l9 = document.querySelector('.button_l9');
const button_l10 = document.querySelector('.button_l10');
const input_l10 = document.querySelector('.input_l10');

input_l10.disabled = true;
button_l9.addEventListener('click', () => {
    input_l10.disabled = false;
    input_l10.focus();
});
button_l10.addEventListener('click', () => {
    input_l10.disabled = true;
});

// По нажатию на кнопку поменять местами значения 2 инпутов.
const button_l11 = document.querySelector('.button_l11');
button_l11.addEventListener('click', () => {
    const input_l11 = document.querySelector('.input_l11');
    const input_l12 = document.querySelector('.input_l12');
    const temp = input_l11.value;
    input_l11.value = input_l12.value;
    input_l12.value = temp;
});

// Вывести в строчку все вводимые значения через инпут в виде массива. Добавить
// проверку, что поле не пустое
const button_l13 = document.querySelector('.button_l13');
const input_l13 = document.querySelector('.input_l13'); 
const p = document.querySelector('.paragraf');
let arrayInput = [];
button_l13.addEventListener('click', () => {
    const value = input_l13.value.trim(); 
    if (value) {
        arrayInput.push(value);
        p.innerHTML = `Массив: [${arrayInput.join(', ')}]`; 
        input_l13.value = '';
    } else {
        alert('Поле не должно быть пустым!');
    }
    
});
p.innerHTML = arrayInput;