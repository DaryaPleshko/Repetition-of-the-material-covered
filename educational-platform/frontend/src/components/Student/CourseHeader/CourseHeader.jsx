import React from 'react';
import styles from './CourseHeader.module.scss';

const CourseHeader = ({ course, student, progress }) => {
    return (
        <div className={styles.header}>
            <div className={styles.welcomeSection}>
                <h1>Здравствуйте, {student.name}!</h1>
                <p className={styles.courseName}>Ваш курс: <strong>{course.title}</strong></p>
            </div>

            <div className={styles.courseStats}>
                <div className={styles.stat}>
                    <span className={styles.statIcon}>📊</span>
                    <div>
                        <span className={styles.statValue}>{course.level}</span>
                        <span className={styles.statLabel}>Уровень</span>
                    </div>
                </div>
                <div className={styles.stat}>
                    <span className={styles.statIcon}>⏱️</span>
                    <div>
                        <span className={styles.statValue}>{course.duration}</span>
                        <span className={styles.statLabel}>Длительность</span>
                    </div>
                </div>
            </div>

            <div className={styles.lastActivity}>
                Последняя активность: {
                    new Date(progress.lastActivity).toLocaleDateString('ru-RU', {
                        day: 'numeric',
                        month: 'long',
                        hour: '2-digit',
                        minute: '2-digit'
                    })
                }
            </div>
        </div>
    );
};

export default CourseHeader;