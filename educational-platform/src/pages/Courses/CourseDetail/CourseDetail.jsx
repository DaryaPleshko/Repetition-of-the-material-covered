import React from 'react';
import { useParams, Link } from 'react-router-dom';
import styles from './CourseDetail.module.css';
import { coursesData } from './data/coursesData';

const CourseDetail = () => {
    const { courseId } = useParams();
    const course = coursesData[courseId];

    if (!course) {
        return (
            <div className={styles.courseDetailPage}>
                <div className={styles.container}>
                    <h2>Курс не найден</h2>
                    <Link to="/courses">← Вернуться к курсам</Link>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.courseDetailPage}>
            <div className={styles.container}>
                <div className={styles.breadcrumbs}>
                    <Link to="/">Главная</Link> /
                    <Link to="/courses">Курсы</Link> /
                    <span>{course.title}</span>
                </div>

                <div className={styles.courseHeader}>
                    <div className={styles.headerLeft}>
                        <img src={course.icon} alt={course.title} className={styles.courseIcon} />
                        <div>
                            <h1>{course.title}</h1>
                            <p>{course.shortDescription}</p>
                        </div>
                    </div>
                    <div className={styles.headerRight}>
                        <div className={styles.badges}>
                            <span className={styles.badgeLevel}>{course.level}</span>
                            <span className={styles.badgeDuration}>{course.duration}</span>
                            <span className={styles.badgePrice}>{course.price}</span>
                        </div>
                        <div className={styles.stats}>
                            <span>👥 {course.students} студентов</span>
                            <span>⭐ {course.rating}</span>
                        </div>
                    </div>
                </div>

                <div className={styles.contentGrid}>
                    <div className={styles.leftColumn}>
                        <div className={styles.programSection}>
                            <h2>📚 Программа курса</h2>

                            {course.modules ? (
                                <div className={styles.modules}>
                                    {course.modules.map((module, index) => (
                                        <div key={index} className={styles.module}>
                                            <div className={styles.moduleHeader}>
                                                <h3>{module.title}</h3>
                                                <span>{module.duration}</span>
                                            </div>
                                            <div className={styles.moduleContent}>
                                                <ul>{module.topics.map((topic, i) => (<li key={i}>{topic}</li>))}</ul>
                                                {module.tests?.length > 0 && (
                                                    <div className={styles.moduleTests}>
                                                        <span>📝</span>
                                                        <strong>Тесты:</strong> {module.tests.join(' • ')}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className={styles.topicsList}>
                                    {course.topics.map((topic, index) => (
                                        <div key={index} className={styles.topicItem}>
                                            <span>{index + 1}</span>
                                            <span>{topic}</span>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    <div className={styles.rightColumn}>
                        <div className={styles.infoCard}>
                            <h3>📊 Структура курса</h3>
                            <div className={styles.statsGrid}>
                                <div className={styles.statItem}>
                                    <span>{course.structure.lectures}</span>
                                    <span>лекций</span>
                                </div>
                                <div className={styles.statItem}>
                                    <span>{course.structure.homeworks}</span>
                                    <span>д/з</span>
                                </div>
                                <div className={styles.statItem}>
                                    <span>{course.structure.tests}</span>
                                    <span>тестов</span>
                                </div>
                                <div className={styles.statItem}>
                                    <span>{course.structure.dictations}</span>
                                    <span>диктантов</span>
                                </div>
                                <div className={styles.statItem}>
                                    <span>{course.structure.interviews}</span>
                                    <span>интервью</span>
                                </div>
                                <div className={styles.statItem}>
                                    <span>{course.structure.controlPoints}</span>
                                    <span>контр. точек</span>
                                </div>
                            </div>
                        </div>

                        <div className={styles.infoCard}>
                            <h3>🚀 Проекты в портфолио</h3>
                            <ul>{course.projects.map((project, index) => (<li key={index}><span>⚡</span>{project}</li>))}</ul>
                        </div>

                        <div className={styles.infoCard}>
                            <h3>📅 Формат обучения</h3>
                            <div className={styles.formatInfo}>
                                <div className={styles.formatRow}>
                                    <span>Формат:</span>
                                    <span>{course.format}</span>
                                </div>
                                <div className={styles.formatRow}>
                                    <span>Длительность:</span>
                                    <span>{course.duration}</span>
                                </div>
                                <div className={styles.formatRow}>
                                    <span>Занятий в неделю:</span>
                                    <span>3</span>
                                </div>
                            </div>
                        </div>

                        <div className={styles.ctaSection}>
                            <Link to={`/signup`} className={styles.primaryButton}>
                                Записаться на курс →
                            </Link>
                        </div>
                    </div>
                </div>

                <div className={styles.fullDescription}>
                    <h2>📖 О курсе</h2>
                    <p>{course.fullDescription || course.shortDescription}</p>
                </div>

                <div className={styles.checkpointsSection}>
                    <h2>📌 Система контроля знаний</h2>
                    <div className={styles.checkpointsGrid}>
                        <div className={styles.checkpointCard}>
                            <div>📝</div>
                            <h4>Диктанты</h4>
                            <p>Проверка теории и синтаксиса. Пишем код на время.</p>
                        </div>
                        <div className={styles.checkpointCard}>
                            <div>✅</div>
                            <h4>Тесты</h4>
                            <p>Закрепление пройденного материала. Автоматическая проверка.</p>
                        </div>
                        <div className={styles.checkpointCard}>
                            <div>🏆</div>
                            <h4>Контрольные работы</h4>
                            <p>Каждые 2 недели — срез знаний. Разбор с ментором.</p>
                        </div>
                        <div className={styles.checkpointCard}>
                            <div>🎤</div>
                            <h4>Тренировочные интервью</h4>
                            <p>Симуляция реального собеседования с фидбеком.</p>
                        </div>
                        <div className={styles.checkpointCard}>
                            <div>🏁</div>
                            <h4>Финальный проект</h4>
                            <p>Защита проекта перед ментором и группой.</p>
                        </div>
                        <div className={styles.checkpointCard}>
                            <div>🎓</div>
                            <h4>Сертификат</h4>
                            <p>Подтверждение квалификации для работодателей.</p>
                        </div>
                    </div>
                </div>

                <div className={styles.forWhom}>
                    <h2>👥 Для кого этот курс</h2>
                    <div className={styles.whomGrid}>
                        <div className={styles.whomItem}>
                            <h4>Полным новичкам</h4>
                            <p>Никогда не писали код? Начнём с самых основ.</p>
                        </div>
                        <div className={styles.whomItem}>
                            <h4>Самоучкам</h4>
                            <p>Систематизируем знания и закроем пробелы.</p>
                        </div>
                        <div className={styles.whomItem}>
                            <h4>Тем, кто хочет сменить профессию</h4>
                            <p>Поможем сделать первый шаг в IT.</p>
                        </div>
                        <div className={styles.whomItem}>
                            <h4>Студентам</h4>
                            <p>Дополним университетскую программу практикой.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetail;