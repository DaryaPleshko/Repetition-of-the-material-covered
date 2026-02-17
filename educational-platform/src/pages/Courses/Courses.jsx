import React from 'react';
import styles from './Courses.module.css';
import { Link } from 'react-router-dom';

import jsIcon from '../../assets/js-icon.png';
import tsIcon from '../../assets/ts-icon.svg';
import pythonIcon from '../../assets/python-icon.png';
import csharpIcon from '../../assets/csharp-icon.png';
import javaIcon from '../../assets/java-icon.jpg';

const Courses = () => {
    return (
        <section className={styles.coursesSection}>
            <div className={styles.container}>
                <h1>Наши курсы</h1>

                <div className={styles.coursesGrid}>
                    <Link to="/courses/javascript" className={styles.courseCard}>
                        <div className={styles.cardHeader}>
                            <img src={jsIcon} alt="JavaScript" />
                            <h2 className={styles.courseTitle}>JavaScript</h2>
                        </div>
                        <p>
                            Полный курс по современному JavaScript. От основ: переменные, типы данных, циклы и функции — до продвинутых тем: замыкания, прототипы, асинхронность, промисы, async/await, работа с API. Научитесь создавать интерактивные веб-приложения, обрабатывать события и управлять DOM. В программе — реальные проекты: TODO-приложение, калькулятор, игра «Крестики-нолики» и мини-интернет-магазин.
                        </p>
                        <span className={styles.courseLink}>Подробнее →</span> {/* Теперь это span, не Link */}
                    </Link>

                    <Link to="/courses/typescript" className={styles.courseCard}>
                        <div className={styles.cardHeader}>
                            <img src={tsIcon} alt="TypeScript" />
                            <h2 className={styles.courseTitle}>TypeScript</h2>
                        </div>
                        <p>
                            Научитесь писать надёжный и масштабируемый код с TypeScript. Курс начинается с настройки окружения и знакомства с типами, интерфейсами и дженериками. Дальше — больше: работа с классами, декораторами, модулями, продвинутая типизация. Интеграция с React и Node.js. В финальном проекте разработаете полноценное приложение с нуля на TypeScript и защитите его от типичных ошибок ещё до запуска.
                        </p>
                        <span className={styles.courseLink}>Подробнее →</span>
                    </Link>

                    <Link to="/courses/python" className={styles.courseCard}>
                        <div className={styles.cardHeader}>
                            <img src={pythonIcon} alt="Python" />
                            <h2 className={styles.courseTitle}>Python</h2>
                        </div>
                        <p>
                            Погружение в Python — от самых основ до написания бэкенда. Изучите синтаксис, структуры данных, функции, ООП, работу с файлами и исключениями. Освоите парсинг веб-страниц, работу с API и базами данных. Напишете Telegram-бота, парсер вакансий с hh.ru и свой первый веб-сервер на FastAPI. Курс построен на реальных задачах из мира разработки и анализа данных.
                        </p>
                        <span className={styles.courseLink}>Подробнее →</span>
                    </Link>

                    <Link to="/courses/csharp" className={styles.courseCard}>
                        <div className={styles.cardHeader}>
                            <img src={csharpIcon} alt="C#" />
                            <h2 className={styles.courseTitle}>C#</h2>
                        </div>
                        <p>
                            Станьте .NET-разработчиком с нуля. Курс охватывает синтаксис C#, ООП, коллекции, LINQ, асинхронное программирование. Вы научитесь работать с базами данных через Entity Framework Core и создавать веб-приложения на ASP.NET Core. В программе — разработка REST API, внедрение зависимостей, middleware, аутентификация и авторизация. Итоговый проект: полноценный блог с системой пользователей и публикаций.
                        </p>
                        <span className={styles.courseLink}>Подробнее →</span>
                    </Link>

                    <Link to="/courses/java" className={styles.courseCard}>
                        <div className={styles.cardHeader}>
                            <img src={javaIcon} alt="Java" />
                            <h2 className={styles.courseTitle}>Java</h2>
                        </div>
                        <p>
                            Путь от новичка до Junior Java-разработчика. Изучите синтаксис, принципы ООП, коллекции, исключения, многопоточность и работу с файлами. Погрузитесь в экосистему Spring: Spring Core, Spring MVC, Spring Boot, Spring Data JPA, Spring Security. Научитесь создавать REST-сервисы, подключать базы данных, обрабатывать ошибки и тестировать код. Финальный проект — интернет-магазин с корзиной, заказами и авторизацией.
                        </p>
                        <span className={styles.courseLink}>Подробнее →</span>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Courses;