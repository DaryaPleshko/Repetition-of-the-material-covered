import jsIcon from '../../../../assets/js-icon.png';
import tsIcon from '../../../../assets/ts-icon.svg';
import pythonIcon from '../../../../assets/python-icon.png';
import csharpIcon from '../../../../assets/csharp-icon.png';
import javaIcon from '../../../../assets/java-icon.jpg';

export const coursesData = {
    javascript: {
        id: 'javascript',
        title: 'JavaScript',
        icon: jsIcon,
        shortDescription: 'Полный курс по современному JavaScript',
        fullDescription: 'JavaScript — это язык, на котором работает весь веб. Мы научим тебя не просто писать код, а мыслить как разработчик. От основ до продвинутых паттернов, от переменных до асинхронности — ты пройдешь путь, который приведет тебя к первому офферу.',
        level: 'С нуля',
        duration: '6 месяцев',
        price: '250$ /мес.',
        format: 'Онлайн с ментором',
        students: 285,
        rating: 4.9,

        modules: [
            {
                title: 'JavaScript. Основы',
                topics: [
                    'Урок 1. Основы программирования',
                    'Урок 2. Числа',
                    'Урок 3. Области видимости. let, var, const',
                    'Урок 4. Boolean, преобразование типов, операторы, if',
                    'Урок 5. Тернарный оператор, switch',
                    'Урок 6. String',
                    'Урок 7. Методы и свойства String',
                    'Урок 8. Symbol. Debug',
                    'Урок 9. Цикл for',
                    'Урок 10. Массивы',
                    'Урок 11. Виды циклов: for, for of, while, do while, for in',
                    'Урок 12. Методы перебора массивов'
                ],
                tests: [
                    'Итоговый контроль JS: основы',
                    'Итоговый контроль JS: циклы',
                    'Итоговый контроль JS: методы перебора массива'
                ],
                duration: '5 недель'
            },
            {
                title: 'Объекты и функции',
                topics: [
                    'Урок 13. Objects',
                    'Урок 14. Методы объекта',
                    'Урок 15. Functions',
                    'Урок 16. IIFE',
                    'Урок 17. Контекст',
                    'Урок 18. Замыкание. Каррирование',
                    'Урок 19. Recursion',
                    'Урок 20. RegEx',
                    'Урок 21. Ошибки и исключения'
                ],
                tests: [
                    'Итоговый контроль: Практика'
                ],
                duration: '3.5 недели'
            },
            {
                title: 'JavaScript DOM',
                topics: [
                    'Урок 22. DOM',
                    'Урок 23. События',
                    'Урок 24. Методы добавления, изменения и удаления',
                    'Урок 25. Практические задачи DOM',
                    'Урок 26. Параметр Event у addEventListener',
                    'Урок 27. Coffee-House (проект)',
                    'Урок 28. Дополнительные свойства навигации. Контекст. Метод toggle'
                ],
                tests: [
                    'Итоговый контроль: DOM'
                ],
                duration: '2 недели'
            },
            {
                title: 'ООП в JavaScript',
                topics: [
                    'Урок 29. Введение в ООП',
                    'Урок 30. Конструктор',
                    'Урок 31. Наследование',
                    'Урок 32. Полиморфизм'
                ],
                duration: '2.5 недели'
            },
            {
                title: 'Асинхронность и сети',
                topics: [
                    'Урок 33. Networks',
                    'Урок 34. Запросы к серверу',
                    'Урок 35. JSON',
                    'Урок 36. HTTP',
                    'Урок 37. Асинхронность',
                    'Урок 38. Event Loop'
                ],
                tests: [
                    'Итоговый контроль: Асинхронность'
                ],
                duration: '3 недели'
            },
            {
                title: 'React & Redux',
                topics: [
                    'Урок 39. React основы',
                    'Урок 40. React Router',
                    'Урок 41. JSX',
                    'Урок 42. Module Style',
                    'Урок 43. События. useState. Material UI',
                    'Урок 44. useEffect',
                    'Урок 45. axios',
                    'Урок 46. props',
                    'Урок 47. SCSS в React',
                    'Урок 48. Динамический роутинг',
                    'Урок 49. React Hooks',
                    'Урок 50. localStorage',
                    'Урок 51. React + TypeScript',
                    'Урок 52. Redux RTK'
                ],
                duration: '4.5 недели'
            },
            {
                title: 'Подготовка к собеседованию',
                topics: [
                    'Связь клиента и сервера',
                    'Пробное интервью',
                    'Разбор реальных вопросов',
                    'Алгоритмические задачи',
                    'Составление резюме'
                ],
                duration: '1 неделя'
            }
        ],

        projects: [
            'Coffee-House (работа с DOM)',
            'Интернет-магазин',
            'TODO-приложение',
            'Собственный блог',
            'REST API на Express'
        ],

        structure: {
            lectures: 52,
            homeworks: 50,
            tests: 7,
            dictations: 12,
            interviews: 3,
            controlPoints: 5
        },

        fullDescription: 'JavaScript — это язык, на котором работает весь веб. Мы научим тебя не просто писать код, а мыслить как разработчик. От основ до продвинутых паттернов, от переменных до асинхронности, от верстки до фулстек-приложений. Ты пройдешь путь от полного новичка до разработчика, готового к реальным проектам.',

        interviewQuestions: [
            'Какие типы данных есть в JavaScript?',
            'В чем разница между == и ===?',
            'Как работает Event Loop?',
            'Что такое промисы?',
            'В чем разница между var, let и const?',
            'Что такое всплытие (hoisting)?',
            'Как работает this?',
            'Что такое прототипное наследование?',
            'Какие методы массивов вы знаете?',
            'Что такое IIFE?',
            'В чем разница между синхронным и асинхронным кодом?',
            'Что такое REST API?',
        ]
    },

    typescript: {
        id: 'typescript',
        title: 'TypeScript',
        icon: tsIcon,
        shortDescription: 'Научитесь писать надёжный и масштабируемый код',
        level: 'Начальный',
        duration: '2 месяца',
        price: '250$ /мес.',
        format: 'Онлайн с ментором',
        students: 178,
        rating: 4.8,

        topics: [
            'Настройка окружения и компилятор',
            'Базовые типы',
            'Интерфейсы и типы',
            'Функции в TypeScript',
            'Классы и модификаторы доступа',
            'Дженерики (обобщения)',
            'Enum и литеральные типы',
            'Type Guards',
            'Декораторы',
            'Модули и пространства имен',
            'Работа с DOM в TypeScript',
            'TypeScript с React',
            'TypeScript с Node.js',
            'Продвинутая типизация'
        ],

        projects: [
            'Приложение для заметок с типами',
            'Todo-list на React + TypeScript',
            'REST API на Node.js + TypeScript',
            'Корпоративный сайт-портфолио',
            'Чат-приложение с типизацией'
        ],

        structure: {
            lectures: 24,
            homeworks: 12,
            tests: 8,
            dictations: 4,
            interviews: 2,
            controlPoints: 3
        },

        interviewQuestions: [
            'Чем interface отличается от type?',
            'Что такое дженерики и зачем они нужны?',
            'Какие модификаторы доступа есть в TypeScript?',
            'Что такое Union и Intersection типы?',
            'Как работает ? и ! в TypeScript?',
            'Что такое декораторы?',
            'Чем any отличается от unknown?'
        ]
    },

    python: {
        id: 'python',
        title: 'Python',
        icon: pythonIcon,
        shortDescription: 'От основ до бэкенда и анализа данных',
        level: 'С нуля',
        duration: '4 месяца',
        price: '250$ /мес.',
        format: 'Онлайн с ментором',
        students: 312,
        rating: 4.9,

        topics: [
            'Установка и настройка Python',
            'Переменные и типы данных',
            'Условные операторы',
            'Циклы for и while',
            'Списки, кортежи, словари',
            'Функции и lambda-выражения',
            'Работа с файлами',
            'Обработка исключений',
            'Модули и пакеты',
            'ООП в Python',
            'Работа с API',
            'Парсинг веб-страниц (BeautifulSoup, Selenium)',
            'Базы данных и SQLite',
            'FastAPI и создание веб-серверов',
            'Telegram-боты',
            'Основы анализа данных (Pandas)'
        ],

        projects: [
            'Telegram-бот для погоды',
            'Парсер вакансий с hh.ru',
            'Веб-сервер на FastAPI',
            'Генератор паролей',
            'Игра «Виселица»',
            'Анализатор текста'
        ],

        structure: {
            lectures: 40,
            homeworks: 20,
            tests: 12,
            dictations: 8,
            interviews: 3,
            controlPoints: 5
        }
    },

    csharp: {
        id: 'csharp',
        title: 'C#',
        icon: csharpIcon,
        shortDescription: 'Стань .NET-разработчиком с нуля',
        level: 'С нуля',
        duration: '4 месяца',
        price: '250$ /мес.',
        format: 'Онлайн с ментором',
        students: 156,
        rating: 4.7,

        topics: [
            'Введение в C# и .NET',
            'Переменные и типы данных',
            'Условные конструкции',
            'Циклы и итерации',
            'Массивы и коллекции',
            'Методы и параметры',
            'ООП: классы, объекты',
            'Наследование и полиморфизм',
            'Интерфейсы',
            'Делегаты и события',
            'LINQ',
            'Работа с файлами',
            'Асинхронное программирование',
            'Entity Framework Core',
            'ASP.NET Core: контроллеры',
            'REST API',
            'Middleware',
            'Аутентификация и авторизация'
        ],

        projects: [
            'Консольный калькулятор',
            'Менеджер задач',
            'REST API для заметок',
            'Интернет-магазин на ASP.NET Core',
            'Блог с системой пользователей'
        ],

        structure: {
            lectures: 36,
            homeworks: 18,
            tests: 10,
            dictations: 6,
            interviews: 2,
            controlPoints: 4
        }
    },

    java: {
        id: 'java',
        title: 'Java',
        icon: javaIcon,
        shortDescription: 'Путь от новичка до Junior Java-разработчика',
        level: 'С нуля',
        duration: '5 месяцев',
        price: '250$ /мес.',
        format: 'Онлайн с ментором',
        students: 203,
        rating: 4.8,

        topics: [
            'JDK, JRE, JVM',
            'Переменные и примитивные типы',
            'Условные операторы',
            'Циклы',
            'Массивы',
            'ООП: классы и объекты',
            'Инкапсуляция, наследование, полиморфизм',
            'Абстрактные классы и интерфейсы',
            'Исключения',
            'Коллекции: List, Set, Map',
            'Generics',
            'Stream API',
            'Многопоточность',
            'Работа с файлами',
            'JDBC и базы данных',
            'Spring Core и DI',
            'Spring MVC',
            'Spring Boot',
            'Spring Data JPA',
            'Spring Security',
            'REST API'
        ],

        projects: [
            'Консольное приложение "Библиотека"',
            'Веб-приложение для заметок',
            'Интернет-магазин на Spring Boot',
            'REST API с авторизацией',
            'Система управления задачами'
        ],

        structure: {
            lectures: 48,
            homeworks: 24,
            tests: 14,
            dictations: 8,
            interviews: 4,
            controlPoints: 6
        }
    }
};