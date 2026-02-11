import React from 'react';
import styles from './Statistics.module.css';
import { Link } from 'react-router-dom';

const Statistics = () => {
    return (
        <section className={styles.statisticsSection}>
            <div className={styles.container}>
                <h1>Наша статистика</h1>

                <div className={styles.statsGrid}>
                    <div className={styles.statsCard}>
                        <h2>Общая статистика</h2>
                        <div className={styles.statsList}>
                            <div>
                                <p>Всего студентов</p>
                                <span>600+</span>
                            </div>
                            <div>
                                <p>Активных курсов</p>
                                <span>5</span>
                            </div>
                            <div>
                                <p>Трудоустроено</p>
                                <span>347</span>
                            </div>
                            <div>
                                <p>В сопровождении</p>
                                <span>120</span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.statsCard}>
                        <h2>Популярность курсов</h2>
                        <div className={styles.courseStats}>
                            <div className={styles.courseState}>
                                <p>JavaScript</p>
                                <div className={styles.progressBar}>
                                    <div style={{ width: '85%' }}></div>
                                </div>
                                <span className={styles.coursePercent}>85%</span>
                            </div>
                            <div className={styles.courseState}>
                                <p>Python</p>
                                <div className={styles.progressBar}>
                                    <div style={{ width: '70%' }}></div>
                                </div>
                                <span className={styles.coursePercent}>70%</span>
                            </div>
                            <div className={styles.courseState}>
                                <p>Java</p>
                                <div className={styles.progressBar}>
                                    <div style={{ width: '60%' }}></div>
                                </div>
                                <span className={styles.coursePercent}>60%</span>
                            </div>
                            <div className={styles.courseState}>
                                <p>C#</p>
                                <div className={styles.progressBar}>
                                    <div style={{ width: '55%' }}></div>
                                </div>
                                <span className={styles.coursePercent}>55%</span>
                            </div>
                            <div className={styles.courseState}>
                                <p>TypeScript</p>
                                <div className={styles.progressBar}>
                                    <div style={{ width: '50%' }}></div>
                                </div>
                                <span className={styles.coursePercent}>50%</span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.statsCard}>
                        <h2>Достижения студентов</h2>
                        <div className={styles.achievements}>
                            <div className={styles.achievement}>
                                <div className={styles.achievementIcon}>🏆</div>
                                <Link to="/bestProject" className={styles.achievementInfo}>
                                    <p>Лучший проект студента</p>
                                    <span>Интернет-магазин на React</span>
                                </Link>
                            </div>
                            <div className={styles.achievement}>
                                <div className={styles.achievementIcon}>🎓</div>
                                <Link to="/bestStudents" className={styles.achievementInfo}>
                                    <p>Топ-выпускник</p>
                                    <span>10+ студентов с red-дипломами</span>
                                </Link>
                            </div>
                            <div className={styles.achievement}>
                                <div className={styles.achievementIcon}>⚡</div>
                                <div className={styles.achievementInfo}>
                                    <p>Качественное прохождение</p>
                                    <span>От полу года до первого коммерческого проекта</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.statsCard}>
                        <h2>Прогресс обучения</h2>
                        <div className={styles.progressStats}>
                            <div>
                                <p>Начали обучение</p>
                                <span>600+</span>
                            </div>
                            <div>
                                <p>Завершили курс</p>
                                <span>562</span>
                            </div>
                            <div>
                                <p>Проходят сейчас</p>
                                <span>120</span>
                            </div>
                            <div>
                                <p>Трудоустроены</p>
                                <span>347</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Statistics;