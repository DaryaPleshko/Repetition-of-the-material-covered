import React from 'react';
import { Link } from 'react-router-dom';
import styles from './AboutPlatform.module.scss';

const About = () => {
    return (
        <div className={styles.aboutPage}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h1>О платформе HSchool</h1>
                    <p>История, ценности и путь основательницы</p>
                </div>

                <section className={styles.section}>
                    <div className={styles.quote}>
                        <div className={styles.quoteText}>
                            "Привет, будущий программист! Меня зовут Аня, я основатель и ментор HSchool.
                            Когда-то я сама начинала путь в IT, преодолевала трудности и искала ответы.
                            Теперь я помогаю другим освоить программирование."
                        </div>
                        <div className={styles.author}>— Анна, основатель HSchool</div>
                    </div>
                </section>

                <div className={styles.grid}>
                    <div className={styles.card}>
                        <div className={styles.cardIcon}>🎓</div>
                        <h3>Почему преподавание?</h3>
                        <p>С детства меня интересовало обучение. Я усаживала игрушки и объясняла им разные темы.
                            Сам процесс передачи знаний вызывал восторг — нравилось разбирать всё по полочкам и помогать разобраться. </p>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.cardIcon}>💻</div>
                        <h3>Как я пришла к программированию?</h3>
                        <p> После 9-го класса поняла, что хочу стать программистом.
                            С детства меня привлекали компьютеры, нравилось разбираться как всё работает "под капотом".
                            Меня вела искренняя страсть к технологиям, а не мысль о прибыльности.</p>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.cardIcon}>🚀</div>
                        <h3>Путь в IT</h3>
                        <p> Поступила в БГУИР. Чтобы найти работу, много занималась: ходила на IT-курсы, читала литературу,
                            разбирала сложные темы ночами. Понимала, что знания даются фрагментарно, без единой структуры —
                            и многим новичкам это мешает. </p>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.cardIcon}>💪</div>
                        <h3>Первый отказ</h3>
                        <p>  Я прошла долгий и трудный путь. Теорию знала отлично, но получила отказ.
                            Это замотивировало меня учиться усерднее — по 16 часов в сутки. Через неделю меня взяли сразу на две вакансии.</p>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.cardIcon}>👩‍💻</div>
                        <h3>Первая работа</h3>
                        <p>Я открыла проект, и передо мной — огромный репозиторий, десятки файлов и тысячи строк кода. В первую неделю я сломала продакшен прямо перед релизом...
                            Думала, что меня уволят, но этот опыт сделал меня сильнее.</p>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.cardIcon}>❤️</div>
                        <h3>Рождение HSchool</h3>
                        <p>На 4-м курсе начала бесплатно обучать тех, кто хотел изучать программирование с нуля.
                            С каждым занятием становилось больше желающих. Так появился HSchool — проект, в который
                            я вкладываю всю себя.
                            Теперь, когда говорят "тебе повезло", я улыбаюсь — мне повезло только в том, что я не сдалась.</p>
                    </div>
                </div>

                <section className={styles.conclusion}>
                    <h2>Кто я сегодня?</h2>
                    <div className={styles.roles}>
                        <div className={styles.role}>
                            <span className={styles.roleIcon}>🔧</span>
                            <span>Фулстек-разработчик</span>
                        </div>
                        <div className={styles.role}>
                            <span className={styles.roleIcon}>👥</span>
                            <span>Тимлид</span>
                        </div>
                        <div className={styles.role}>
                            <span className={styles.roleIcon}>🎯</span>
                            <span>Ментор HSchool</span>
                        </div>
                    </div>
                    <p className={styles.finalMessage}>Я уверена: разобраться в программировании может каждый, если получить понятное объяснение и поддержку. Давай развиваться в мире IT вместе!</p>
                </section>

                <div className={styles.cta}>
                    <Link to="/courses" className={styles.ctaButton}>Начать обучение →</Link>
                </div>
            </div>
        </div>
    );
};

export default About;