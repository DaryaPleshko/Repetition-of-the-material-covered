// Реализовать получение всех задач fetch('https://dummyjson.com/todos')
const getTasks = async () => {
    const response = await fetch('https://dummyjson.com/todos', { method: 'GET' });
    console.log(await response.json());
}
getTasks();

// Реализовать получение всех задач fetch('https://dummyjson.com/todos'). Все элементы
// отобразить в html
const btn = document.getElementById('btn');
btn.addEventListener('click', async () => {
    const paragraf = document.getElementById('tasks');
    const response = await fetch('https://dummyjson.com/todos', { method: 'GET' });
    const result = await response.json();

    const tasks = result.todos;
    let allTasksHTML = '';
    for (let task of tasks) {
        const taskHTML = `<p>${task.todo}</p>`;
        allTasksHTML += taskHTML;
    }
    paragraf.innerHTML = allTasksHTML;
});

// Реализовать получение фактов про котов fetch('https://catfact.ninja/fact) и результат отобразить
// в <p>
const btn2 = document.getElementById('btn2');
btn2.addEventListener('click', async () => {
    const paragraf = document.getElementById('infoCats');
    const response = await fetch('https://catfact.ninja/fact', { method: 'GET' });
    const result = await response.json();

    paragraf.innerHTML = `<p>${result.fact}</p>`;
});

// Нужно создать поле для ввода и кнопку, чтобы при нажатии на неё программа брала
// введённое пользователем имя, выводила его в консоль, а затем подставляла это имя в ссылку
// https://api.genderize.io/?name=... чтобы отправить GET запрос и получить от сервера
// информацию о вероятном поле (male/female) для этого имени.
const btn3 = document.getElementById('btn3');
btn3.addEventListener('click', async () => {
    const nameInput = document.getElementById('nameInput').value;
    console.log(nameInput);

    const response = await fetch(`https://api.genderize.io/?name=${nameInput}`);
    console.log(await response.json());
});

// Нужно создать поле для ввода и кнопку, чтобы при нажатии на неё программа брала
// введённое пользователем имя, выводила его в консоль, а затем подставляла это имя в ссылку
// https://api.nationalize.io/?name=... чтобы отправить GET-запрос и получить от сервера
// информацию о странах, с которыми это имя ассоциируется чаще всего, включая вероятность
// для каждой страны.
const btn4 = document.getElementById('btn4');
btn4.addEventListener('click', async () => {
    const nameInput = document.getElementById('nameInput').value;
    console.log(nameInput);

    const response = await fetch(`https://api.nationalize.io/?name=${nameInput}`);
    console.log(await response.json());
});

// Нужно создать кнопку, чтобы при нажатии на неё программа отправляла GET-запрос по
// ссылке https://dog.ceo/api/breeds/image/random, получала от сервера ответ со случайной
// фотографией собаки и отображала это изображение на странице.
const btn5 = document.getElementById('btn5');
btn5.addEventListener('click', async () => {
    const div = document.getElementById('dogs');
    const response = await fetch(`https://dog.ceo/api/breeds/image/random`);
    const pack = await response.json();
    div.innerHTML = `<img src="${pack.message}">`;
});

// Нужно создать кнопку, чтобы при нажатии на неё программа отправляла GET-запрос по
// ссылке https://api.ipify.org?format=json, получала от сервера ответ с вашим текущим IP-адресом
// и отображала его на странице
const btn6 = document.getElementById('btn6');
btn6.addEventListener('click', async () => {
    const adress = document.getElementById('ip-address');
    const response = await fetch('https://api.ipify.org?format=json');
    const pack = await response.json();
    adress.innerHTML = `<p>${pack.ip}</p>`;
});

// Нужно создать кнопку, чтобы при нажатии на неё программа отправляла GET-запрос по
// ссылке https://official-joke-api.appspot.com/random_joke, получала от сервера случайную шутку в
// формате JSON и отображала её на странице в удобочитаемом виде.
const btn7 = document.getElementById('btn7');
btn7.addEventListener('click', async () => {
    const punchlines = document.getElementById('punchlines');
    const response = await fetch('https://official-joke-api.appspot.com/random_joke');
    const pack = await response.json();
    punchlines.innerHTML = `<p>${pack.punchline}</p>`;
});

// Нужно создать кнопку, чтобы при нажатии на неё программа отправляла GET-запрос по
// ссылке https://randomuser.me/api/, получала от сервера данные случайного пользователя и
// отображала основную информацию на странице (например: полное имя, email, телефон).
const btn8 = document.getElementById('btn8');
btn8.addEventListener('click', async () => {
    const userInfo = document.getElementById('userInfo');
    const response = await fetch('https://randomuser.me/api/');
    const pack = await response.json();
    const user = pack.results[0];

    userInfo.innerHTML = `<p>Имя: ${user.name.title} ${user.name.first} ${user.name.last}</p>
        <p>Email: ${user.email}</p>
        <p>Телефон: ${user.phone}</p>`;
});

// Нужно создать поле для ввода и кнопку, чтобы при нажатии на неё программа брала
// введённое пользователем название страны, отправляла GET-запрос по ссылке
// http://universities.hipolabs.com/search?country=... и отображала на странице список
// университетов с их названиями и веб-сайтами.
const btn9 = document.getElementById('btn9');
btn9.addEventListener('click', async () => {
    const country = document.getElementById('countryInput').value;
    const resultsDiv = document.getElementById('results');

    const response = await fetch(`http://universities.hipolabs.com/search?country=${country}`);
    const universities = await response.json();

    let html = '';
    for (let i = 0; i < universities.length; i++) {
        const uni = universities[i];
        html += `
            <div>
                <p><strong>${uni.name}</strong></p>
                <p>Страна: ${uni.country}</p>
                <p>Сайт: ${uni.web_pages[0] ? uni.web_pages[0] : 'нет'}</p>
            </div>
            <hr>
        `;
    }

    resultsDiv.innerHTML = html;
});