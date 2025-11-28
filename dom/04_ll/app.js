// На странице расположен маркированный список. Пользователь кликает на
// каждый item списка. Необъодимо отловить на какой из элементов нажал
// пользователь и отобразить
const targetList = document.querySelector('.target-list');
targetList.addEventListener('click', (event) => {
    console.log(event.target);
    console.log(event.target.textContent);
});

// Создайте несколько элементов (например, кнопок) на странице. При клике на
// элемент, используйте event.target для определения на какой из элементов
// производилось действие и измените цвет.
const targetBtn = document.querySelector('.target-btn');
targetBtn.addEventListener('click', (event) => {
    console.log(event.target);
    console.log(event.target.textContent);
    event.target.style = 'background-color: pink'
});

// Создайте блок текста с кнопкой "Показать/Скрыть". При клике на кнопку текст
// должен показываться или скрываться.
const btnBlock = document.querySelector('.text-block button');

let flag = true;
btnBlock.addEventListener('click', () => {
    const textBlock = document.querySelector('.text-block p');
    if (flag) {
        textBlock.style.display = 'none';
        btnBlock.textContent = 'Показать';
        flag = false;
    } else {
        textBlock.style.display = 'block';
        btnBlock.textContent = 'Скрыть';
        flag = true;
    }
});

// По наведению на кнопку вывести сообщение «Hi». Когда мышка выходит за
// границы кнопки сновка скрывать
const btnMouseOver = document.querySelector('.mouseOver');
btnMouseOver.addEventListener('mouseover', () => alert('Hi'));

// По двойному клику на кнопку изменить цвет кнопки
const dblClickBtn = document.querySelector('.dbl-click-btn');
dblClickBtn.addEventListener('dblclick', () => dblClickBtn.style = 'background-color: pink');

// Создайте форму для регистрации с полями ввода имени, email и пароля.
// Реализуйте валидацию полей и отображение сообщений об ошибках при
// некорректном вводе.
const validUser = document.querySelector('.valid');
validUser.addEventListener('click', () => {
    const email = document.querySelector('.emailUser');
    const pwd = document.querySelector('.pwdUser');
    const name = document.querySelector('.nameUser');
    try {
        if (email === '' || pwd === '' || name === '') throw new Error('Вы ничего не ввели');
        if (/^\s*(?!.*[._-]{2})[\w\.-]+@([\w-])+\.+[\w-]{2,24}\s*$/.test(email)) throw new Error('Неверный ввод почты');
        if (pwd.length < 8) throw new Error('Пароль содержит менее 8 символов');
        alert('Успешный вход!')
    } catch (error) {
        alert(error.message);
    }
});

// Создайте форму с выпадающим списком для выбора единицы измерения
// (например, дюймы, сантиметры, метры). При выборе единицы измерения
// отображайте соответствующее значение в консоли.
const unitSelector = document.querySelector('.unitSelector');
unitSelector.addEventListener('change', (event) => {
    const selectedOption = event.target.options[event.target.selectedIndex];
    console.log('Выбранный элемент:', selectedOption);
    console.log('Текст:', selectedOption.textContent);
    console.log('Значение:', selectedOption.value);
});

// Добавьте картинку на страницу. При наведении на картинку мышкой необходимо
// ее изменять на другую картинку. Но как только мышка снова отходит в сторону, то
// возвращается первая картинка
const foto = document.querySelector('.foto');
const originalSrc = foto.src;
foto.addEventListener('mouseover', () => foto.src = "./assets/tesla.svg");
foto.addEventListener('mouseout', () => foto.src = originalSrc);

// Вы вводите строку. Проверить является ли это слово палиндром. Добавить
// проверки
const btnPalindrom = document.querySelector('.btn-palindrom');
btnPalindrom.addEventListener('click', () => {
    const inp = document.querySelector('.inp-palindrom');
    const res = document.querySelector('.res-palindrom');
    try {
        if (inp.value === '') throw new Error('Вы ничего не ввели');
        if (inp.value !== inp.value.split('').reverse().join('')) throw new Error('Строка не палиндром');
        res.textContent = 'Строка палиндром';
    } catch (error) {
        res.textContent = error.message;
    }
});
