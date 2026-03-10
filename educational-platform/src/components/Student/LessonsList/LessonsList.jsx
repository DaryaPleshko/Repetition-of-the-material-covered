import React from 'react';
import styles from './LessonsList.module.scss';

const LessonsList = ({ course, progress, onLessonComplete }) => {
    const isLessonCompleted = (lessonId) => progress.completedLessons.includes(lessonId);

    const topics = course.topics || [];

    const toggleLesson = (lessonId) =>  onLessonComplete(lessonId); 

    return (
        <div className={styles.lessonsList}>
            <h2>Программа обучения</h2>
            <div className={styles.topicsList}>
                {topics.map((topic, index) => {
                    const lessonId = `topic-${index}`;
                    const completed = isLessonCompleted(lessonId);

                    return (
                        <div key={index} className={styles.topicCard}>
                            <div className={styles.topicContent}>
                                <div className={styles.topicHeader}>
                                    <label className={styles.checkbox}>
                                        <input type="checkbox"
                                            checked={completed}
                                            onChange={() => toggleLesson(lessonId)}/>
                                        <span className={styles.checkmark}></span>
                                    </label>
                                    
                                    <span className={styles.topicNumber}>{String(index + 1).padStart(2, '0')}</span>

                                    <span className={`${styles.topicTitle} ${completed ? styles.completed : ''}`}>{topic}</span>
                                </div>

                                <button className={styles.watchBtn}>Смотреть урок</button>
                            </div>
                        </div>
                    );
                })}
            </div>

            {course.tests && course.tests.length > 0 && (
                <div className={styles.testsSection}>
                    <h3>📝 Контрольные работы</h3>
                    <div className={styles.testsList}>
                        {course.tests.map((test, index) => (
                            <div key={index} className={styles.testCard}>
                                <span className={styles.testName}>{test}</span>
                                <button className={styles.testBtn}>Пройти тест</button>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default LessonsList;