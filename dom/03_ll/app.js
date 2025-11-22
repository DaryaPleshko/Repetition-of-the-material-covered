// Создайте новый элемент <div> с текстом «Привет, DOM» и добавьте его в конец документа
// (document.body).
const body = document.body;
const newDiv = document.createElement('div');
newDiv.textContent = 'Привет, DOM';
body.appendChild(newDiv);

// Через JS создайте кнопку <button> с надписью «Нажми меня» и добавьте её внутрь элемента
// div с class="app".
const button1 = document.createElement('button');
button1.textContent = 'Нажми меня';
let appDiv = document.getElementById('app');
if (!appDiv) {
    appDiv = document.createElement('div');
    appDiv.id = 'app';
    document.body.appendChild(appDiv);
}
appDiv.appendChild(button1);

// Удалите элемент с id="old-paragraph" из DOM, предварительно найдя его родительский
// элемент.
const divOldParagraph = document.getElementById('old');
const oldParagraph = document.getElementById('old-paragraph');
oldParagraph.parentNode.removeChild(oldParagraph);

// Найдите на странице элемент <h1> и замените его на новый заголовок <h2> с текстом «Новый
// заголовок».
const oldH1 = document.querySelector('h1');
if (oldH1) {
    const newH2 = document.createElement('h2');
    newH2.textContent = 'Новый заголовок';
    oldH1.replaceWith(newH2);
}

// Через JS создайте элемент <ul> с тремя элементами списка <li> и добавьте его в документ
// HTML.
const createUl = document.createElement('ul');
for (let i = 1; i <= 3; i++) {
    const li = document.createElement('li');
    li.textContent = `Элемент ${i}`;
    createUl.appendChild(li);
}
body.appendChild(createUl);

// Создайте в HTML элемент <div class="card"> и добавьте внутрь него через JS:
// Заголовок (<h3>) с названием товара. Параграф (<p>) с описанием. Кнопку (<button>) с текстом
// «Купить»
const divCard = document.createElement('div');
divCard.className = 'card';
const h3Card = document.createElement('h3');
const pCard = document.createElement('p');
const buttonCard = document.createElement('button');
h3Card.textContent = 'notebook';
pCard.textContent = 'VERY GOOD';
buttonCard.textContent = 'КУПИТЬ';
divCard.appendChild(h3Card);
divCard.appendChild(pCard);
divCard.appendChild(buttonCard);
document.body.appendChild(divCard);

// На странице есть список <ul>, поле ввода <input> и кнопка <button>. Создайте
// функциональность, при которой по нажатию на кнопку текст из поля ввода будет добавляться
// в конец списка как новый элемент <li>.
const ulList = document.getElementById('list');
const inpList = document.getElementById('inp-list');
const btnList = document.getElementById('btn-list');
btnList.addEventListener('click', () => {
    const text = inpList.value.trim();
    const li = document.createElement('li');
    li.textContent = text;
    ulList.appendChild(li);
    inpList.value = '';
})

// На странице есть список <ul>, поле ввода и кнопка. Добавляйте в список только те значения,
// которые являются корректными email-адресами (с помощью регулярного выражения). Если
// email невалиден — бросьте исключение с соответствующим сообщением.
const ulListemail = document.getElementById('list-email');
const inpListemail = document.getElementById('inp-list-email');
const btnListemail = document.getElementById('btn-list-email');
btnListemail.addEventListener('click', () => {
    try {
        const text = inpListemail.value.trim();
        if (text === '') throw new Error('Вы ничего не ввели');
        if (!/^[a-z0-9-_.]+@[a-z]+.[a-z]{2,6}$/gm.test(text)) throw new Error('Неверный ввод почты');
        const li = document.createElement('li');
        li.textContent = text;
        ulListemail.appendChild(li);
        inpListemail.value = '';
    } catch (error) {
        alert(error.message);
    }
})

// В списке есть несколько <li>. Пройдитесь по ним и, если текст элемента короче 3 символов,
// установите ему красный цвет (style.color = 'red').
const listItems = document.querySelectorAll('li');
for (const li of listItems) {
    if (li.textContent.trim().length < 3) li.style.color = 'red';
}