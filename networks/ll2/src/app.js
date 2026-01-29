// Создай кнопку "Загрузить посты". При клике на кнопку сформируй GET-запрос на
// https://jsonplaceholder.typicode.com/posts и выведи список заголовков постов.
const btn1 = document.getElementById('btn1');
btn1.addEventListener('click', async () => {
    const div = document.getElementById('div1');
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const json = await response.json();

    let html = '';
    for (let i = 0; i < json.length; i++) {
        html += `<p>${json[i].title}</p>`;
    }
    div.innerHTML = html;
});

// Создай поле для для ввода текста и кнопку "Создать". При клике на кнопку отправь POST-запрос
// на https://jsonplaceholder.typicode.com/posts со следующей структурой данных в body: { "title":
// "Введенный заголовок", "body": ..., "userId": 1 }
const btn2 = document.getElementById('btn2');
btn2.addEventListener('click', async () => {
    const inpVal = document.getElementById('inp2').value;
    const div = document.getElementById('div2');

    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "title": 'Введенный заголовок',
            "body": inpVal,
            "userId": 1
        })
    });
    const json = await response.json();
    div.innerHTML = `<p>${JSON.stringify(json)}</p>`;
});

// Создай 2 поля для ввода текста, 1 для ввода числа и кнопку "Создать". При клике на кнопку
// отправь POST-запрос на https://jsonplaceholder.typicode.com/posts со следующей структурой
// данных: { "title": ... "body": ..., "userId": ... }. Результат создания отобразить в html
const btn3 = document.getElementById('btn3');
btn3.addEventListener('click', async () => {
    const titleVal = document.getElementById('inp3_str1').value;
    const bodyVal = document.getElementById('inp3_str2').value;
    const idVal = document.getElementById('inp3_num').value;
    const div = document.getElementById('div3');

    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "title": titleVal,
            "body": bodyVal,
            "userId": idVal
        })
    });
    const json = await response.json();
    div.innerHTML = `<p>${JSON.stringify(json)}</p>`;
});

// Создай поле для названия задачи, поле для числа, чекбокс - поле complited (создается как input type
// checkbox) и кнопку "Добавить задачу". По клику на кнопку отправь POST-запрос на
// https://jsonplaceholder.typicode.com/todos со структурой: { "title": ..., "completed": ... (true/ false, значение
// из чекбокса), "userId": ... } Результат создания отобразить в html
const btn4 = document.getElementById('btn4');
btn4.addEventListener('click', async () => {
    const titleTask = document.getElementById('inp4_str1').value;
    const completedBox = document.getElementById('inp4_str2').checked;
    const idVal = document.getElementById('inp4_num').value;
    const div = document.getElementById('div4');

    const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "title": titleTask,
            "completed": completedBox,
            "userId": idVal
        })
    });
    const json = await response.json();
    div.innerHTML = `<p>${JSON.stringify(json)}</p>`;
});

// Создай поле для ID пользователя, поле для email и кнопку "Обновить". При клике на кнопку отправь
// PUT-запрос на https://jsonplaceholder.typicode.com/users/{id} с новым email и выведи результат.
const btn5 = document.getElementById('btn5');
btn5.addEventListener('click', async () => {
    const userIdInput = document.getElementById('inp5_str1').value;
    const emailInput = document.getElementById('inp5_str2').value;
    const resultDiv = document.getElementById('div5');

    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userIdInput}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: emailInput
        })
    });
    const updatedUser = await response.json();
    resultDiv.innerHTML = `<p>Пользователь обновлен!</p>
            <p>ID: ${updatedUser.id}</p>
            <p>Новый email: ${updatedUser.email}</p>`;
});

// Создай поле для ID поста и кнопку "Удалить". При клике на кнопку отправь DELETE-запрос на
// https://jsonplaceholder.typicode.com/posts/{id} и выведи сообщение об успехе.
const btn6 = document.getElementById('btn6');
btn6.addEventListener('click', async () => {
    const postId = document.getElementById('inp6_str').value;
    const resultDiv = document.getElementById('div6');

    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
        method: 'DELETE'
    });

    (response.ok) ? resultDiv.innerHTML = `<p>Пост ${postId} удален!</p>` : resultDiv.innerHTML = `<p>Ошибка при удалении</p>`;
});

// Создай поле для ID пользователя и кнопку "Найти посты". При клике на кнопку отправь GET-запрос
// на https://jsonplaceholder.typicode.com/posts?userId={id} и выведи заголовки постов этого
// пользователя.
const btn7 = document.getElementById('btn7');
btn7.addEventListener('click', async () => {
    const postId = document.getElementById('inp7_str').value;
    const resultDiv = document.getElementById('div7');

    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${postId}`);
    const json = await response.json();

    let html = '';
    for (let i = 0; i < json.length; i++) {
        html += `<p>${json[i].title}</p>`;
    }
    resultDiv.innerHTML = html;
});

// Создай поля для name и email, и кнопку "Создать пользователя". При клике на кнопку отправь POSTзапрос
// на https://reqres.in/api/users и выведи ID и дату создания. Добавить валидацию на ввод
const btn8 = document.getElementById('btn8');
btn8.addEventListener('click', async () => {
    const nameInp = document.getElementById('inp8_str1').value;
    const emailInp = document.getElementById('inp8_str2').value;
    const resultDiv = document.getElementById('div8');

    if (!nameInp.trim()) {
        resultDiv.innerHTML = '<p>Введите имя</p>';
        return;
    }
    if (!emailInp.trim() || !emailInp.includes('@')) {
        resultDiv.innerHTML = '<p>Введите корректный email</p>';
        return;
    }
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "name": nameInp,
                "email": emailInp
            })
        });
        if (!response.ok) throw new Error(`Ошибка сервера: ${response.status}`);
        const json = await response.json();

        resultDiv.innerHTML = ` <p>ID: ${json.id || 'не указан'}</p> `;
    } catch (error) {
        console.error('Ошибка:', error);
        resultDiv.innerHTML = '<p>Ошибка при создании пользователя</p>';
    }
});

// Создай поля для ID, name, email и кнопку "Обновить". При клике на кнопку отправь PUT-запрос на
// https://reqres.in/api/users/{id}, в тело передай name, email и выведи в html результат - полные данные
// пользователя
const btn9 = document.getElementById('btn9');
btn9.addEventListener('click', async () => {
    const userIdInput = document.getElementById('inp9_str1').value;
    const userNameInput = document.getElementById('inp9_str2').value;
    const emailInput = document.getElementById('inp9_str3').value;
    const resultDiv = document.getElementById('div9');

    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userIdInput}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "name":userNameInput,
            "email": emailInput
        })
    });
    const updatedUser = await response.json();
    resultDiv.innerHTML = `<p>Пользователь обновлен!</p>
            <p>ID: ${updatedUser.id}</p>
            <p>Новое имя: ${updatedUser.name}</p>
            <p>Новый email: ${updatedUser.email}</p>`;
});