import React from 'react';
import styles from './CourseProgress.module.scss';

const CourseProgress = ({ course, progress }) => {
    const calculateTotalLessons = () => {
        if (course.modules && Array.isArray(course.modules)) {
            return course.modules.reduce((acc, module) => {
                return acc + (module.topics?.length || 0);
            }, 0);
        }
        return course.topics?.length || 0;
    };

    const totalLessons = calculateTotalLessons();
    const completedCount = progress.completedLessons?.length || 0;
    const progressPercentage = totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0;

    const startDate = new Date(progress.startDate);
    const currentDate = new Date();

    const daysPassed = Math.floor((currentDate - startDate) / (1000 * 60 * 60 * 24));
    const daysLeft = Math.max(0, course.durationDays - daysPassed);

    return (
        <div className={styles.progressSection}>
            <div className={styles.progressHeader}>
                <h3>Ваш прогресс</h3>
                <div className={styles.stats}>
                    <div className={styles.stat}>
                        <span className={styles.statNumber}>{completedCount}</span>
                        <span className={styles.statLabel}>из {totalLessons} уроков</span>
                    </div>
                    <div className={styles.stat}>
                        <span className={styles.statNumber}>{progressPercentage}%</span>
                        <span className={styles.statLabel}>выполнено</span>
                    </div>
                </div>
            </div>

            <div className={styles.progressBarContainer}>
                <div className={styles.progressBar} style={{ width: `${progressPercentage}%` }}></div>
            </div>

            <div className={styles.courseInfo}>
                <div className={styles.infoItem}>
                    <span className={styles.infoLabel}>Начало обучения:</span>
                    <span className={styles.infoValue}>
                        {startDate.toLocaleDateString('ru-RU')}
                    </span>
                </div>

                <div className={styles.infoItem}>
                    <span className={styles.infoLabel}>Осталось дней:</span>
                    <span className={`${styles.infoValue} ${daysLeft > 0 ? styles.positive : styles.negative}`}>{daysLeft > 0 ? daysLeft : 'Курс завершен'}</span>
                </div>
            </div>

            {progressPercentage === 100 && (
                <div className={styles.congratulations}>🎉 Поздравляем! Вы завершили курс!</div>
            )}
        </div>
    );
};

export default CourseProgress;