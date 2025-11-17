// На вход подается строка в виде числа. Необходимо написать регулярное
// выражение. Если строка состоит только из чисел, то вывести булевое true, в
// противном случае бросить исключение и обработать
const isNum = (str) => {
    try {
        if (/^[0-9]+$/.test(str)) return true;
        else throw new Error("Строка содержит не только числа");
    } catch (error) {
        console.log(error.message);
        return false;
    }
}
console.log(isNum('23'));

// На вход подается строка вида “имя фамилия возраст”. Необходимо написать
// регулярное выражение для данной строки. Если же строка подходит под
// регулярное выражение, то вывести булевое true, в противном случае бросить
// исключение и обработать
const isPeople = (info) => {
    try {
        if (/^[A-Z][a-z]+ [A-Z][a-z]+ [0-9]{1,2}$/.test(info)) return true;
        else throw new Error('Строка не подходит');
    } catch (error) {
        console.log(error.message);
        return false;
    }
}
console.log(isPeople('Katya Petrik 22'));

// На вход подается строка из 2 и более слов. Необходимо все символы запятой
// заменить на пустую строку.
const isSpace = (str) => {
    const strSpace = str.replace(/,/, ' ');
    return strSpace;
}
console.log(isSpace('Hi,hI,Hi,HI,hi'));

// На вход подается строка в виде электронной почты пользователя. Необходимо
// написать регулярное выражение для данной строки. Если же строка подходит под
// регулярное выражение, то вывести булевое true, в противном случае бросить
// исключение и обработать
const isEmail = (email) => {
    try {
        if (/^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,6}$/i.test(email)) return true;
        else throw new Error('Строка не подходит');
    } catch (error) {
        console.log(error.message);
        return false;
    }
}
console.log(isEmail('katya.petrik2000@mail.ru'));

//На вход подается строка в виде url. Необходимо написать регулярное выражение
// для данной строки. Если же строка подходит под регулярное выражение, то
// вывести булевое true, в противном случае бросить исключение и обработать
const isURL = (url) => {
    try {
        if (/^(https?:\/\/)?([a-z0-9.-]+)\.[a-z]{2,6}(\/[\w.-]*)*(\?[^\s#]+)?$/i.test(url)) return true;
        else throw new Error('Строка не подходит');
    } catch (error) {
        console.log(error.message);
        return false;
    }
}
console.log(isURL('https://google.com/search?q=test'));

// На вход подается строка в виде пароля. Необходимо написать регулярное
// выражение для данной строки. Если же строка подходит под регулярное
// выражение, то вывести булевое true, в противном случае бросить исключение и
// обработать.
// Пароль должен содержать:
// • Буквы в UPPER регистре
// • Буквы в LOWER регистре
// • Числа
// • Специальные символы
// • Длина не менее 8 символов
const isPassword = (pwd) => {
    try {
        if (/^[a-zA-Z0-9-_]{8,}$/.test(pwd)) return true;
        else throw new Error('Строка не подходит');
    } catch (error) {
        console.log(error.message);
        return false;
    }
}
console.log(isPassword('GDJhh98Hnh'));

// Дана строка состоящая из чисел, букв, специальных символов. Необходимо
// оставить в строке только буквенные символы используя регулярные выражения.
// Если же длина исходной строки изменилась, вывести true, в противном случае
// бросить исключение и обработать
const onlyLetters = (str) => {
    try {
        const lettersOnly = str.replace(/[^a-zA-Zа-яА-Я]/, '');
        if (lettersOnly.length !== str.length) return true;
        else throw new Error('Строка состоит только из букв');
    } catch (error) {
        console.log(error.message);
        return false;
    }
}
console.log(onlyLetters('abc123!'));

// Банкоматы позволяют использовать 4 или 6 значные PIN-коды, а PIN-коды не
// могут содержать ничего, кроме ровно 4 или ровно 6 цифр. Необходимо написать
// регулярное выражение для данной строки. Если же строка подходит под
// регулярное выражение, то вывести булевое true, в противном случае бросить
// исключение и обработать
const isPin = (pin) => {
    try {
        if (/^\d{4}$|^\d{6}$/.test(pin)) return true;
        else throw new Error('Строка не подходит');
    } catch (error) {
        console.log(error.message);
        return false;
    }
}
console.log(isPin('55566'));

// Неопытный Junior запушил в GitHub html файл с комментариями. Team Lead не
// оценил использование комментариев в ветке development и попросил их убрать.
// Вырезая куски кода вы поняли, что их чересчур много. Необходимо написать
// регулярное выражение, которое вырежет все комментарии из html разметки
// <!-- -->
const replaceComment = (html) => {
    return html.replace(/<!--[\s\S]*?-->/g, '');
}
console.log(replaceComment(`
    <div>
    <!-- Этот комментарий надо удалить -->
    <p>Текст</p>
    <!-- Еще один комментарий -->
    </div>`));